/* eNSP Web Lab - Cloudflare Worker 入口
 * 职责：
 *   1) /api/projects* 提供 KV 云端项目存取（GET 列表 / GET :id / POST 保存 / DELETE 删除）
 *   2) 其余路径交给 [assets] 绑定(ASSETS)返回静态资源
 * 鉴权（fail-closed）：
 *   必须设置 env.ADMIN_TOKEN（`npx wrangler secret put ADMIN_TOKEN`）。
 *   所有 /api/* 请求需携带 `Authorization: Bearer <ADMIN_TOKEN>`。
 *   未配置 ADMIN_TOKEN 时 /api/* 一律返回 503，拒绝服务而不是开放访问。
 *   不支持 URL query 传 token（避免 token 进入访问日志与浏览器历史）。
 */

const JSON_HEADERS = { "Content-Type": "application/json; charset=utf-8" };
const MAX_BODY_BYTES = 10 * 1024 * 1024; // 10MB，远小于 KV 单值上限 25MB
const ID_PATTERN = /^[A-Za-z0-9][A-Za-z0-9._-]{0,127}$/;
const MAX_NAME_LENGTH = 200;

function json(data, status = 200, extra = {}) {
  return new Response(JSON.stringify(data), { status, headers: { ...JSON_HEADERS, ...extra } });
}

function timingSafeEqualStr(a, b) {
  const enc = new TextEncoder();
  const bufA = enc.encode(a);
  const bufB = enc.encode(b);
  if (bufA.byteLength !== bufB.byteLength) return false;
  // Cloudflare Workers 提供 crypto.subtle.timingSafeEqual（非标准扩展）；
  // 不可用时退化为逐字节恒时 XOR 比较。
  if (typeof crypto !== "undefined" && crypto.subtle && typeof crypto.subtle.timingSafeEqual === "function") {
    return crypto.subtle.timingSafeEqual(bufA, bufB);
  }
  let diff = 0;
  for (let i = 0; i < bufA.byteLength; i++) diff |= bufA[i] ^ bufB[i];
  return diff === 0;
}

async function authorized(request, env) {
  if (!env.ADMIN_TOKEN) return { ok: false, reason: "unconfigured" };
  const header = request.headers.get("Authorization") || "";
  const match = header.match(/^Bearer\s+(\S+)$/i);
  if (!match) return { ok: false, reason: "unauthorized" };
  if (!timingSafeEqualStr(match[1], env.ADMIN_TOKEN)) return { ok: false, reason: "unauthorized" };
  return { ok: true };
}

function projectIdFromPath(pathname) {
  const id = pathname.replace(/^\/api\/projects\/?/, "");
  return id ? decodeURIComponent(id) : null;
}

function validProjectId(id) {
  return typeof id === "string" && ID_PATTERN.test(id);
}

function corsHeaders(request) {
  // 仅同源放行：Origin 与请求自身 origin 一致时才回显，跨站一律不给 ACAO。
  const origin = request.headers.get("Origin");
  const selfOrigin = new URL(request.url).origin;
  if (!origin || origin !== selfOrigin) return {};
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "GET,POST,DELETE,OPTIONS",
    "Access-Control-Allow-Headers": "Authorization,Content-Type",
    "Vary": "Origin"
  };
}

async function handleProjects(request, env, id) {
  if (request.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders(request) });
  }

  if (request.method === "GET") {
    if (!id) {
      // KV list 每页最多 1000 条，需按 cursor 翻页
      const keys = [];
      let cursor;
      do {
        const page = await env.PROJECTS.list(cursor ? { cursor } : {});
        keys.push(...page.keys);
        cursor = page.list_complete ? undefined : page.cursor;
      } while (cursor);
      const summaries = keys.map((k) => ({
        id: k.name,
        name: (k.metadata && k.metadata.name) || k.name,
        updatedAt: (k.metadata && k.metadata.updatedAt) || ""
      }));
      summaries.sort((a, b) => (b.updatedAt || "").localeCompare(a.updatedAt || ""));
      return json({ projects: summaries });
    }
    if (!validProjectId(id)) return json({ error: "invalid project id" }, 400);
    const raw = await env.PROJECTS.get(id, "json");
    if (!raw) return json({ error: "not found" }, 404);
    return json(raw);
  }

  if (request.method === "POST") {
    const contentLength = Number(request.headers.get("Content-Length") || "0");
    if (contentLength > MAX_BODY_BYTES) return json({ error: "payload too large" }, 413);
    const buffer = await request.arrayBuffer();
    if (buffer.byteLength > MAX_BODY_BYTES) return json({ error: "payload too large" }, 413);
    const text = new TextDecoder().decode(buffer);
    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch {
      return json({ error: "invalid json" }, 400);
    }
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return json({ error: "invalid body" }, 400);
    if (!validProjectId(parsed.id)) return json({ error: "invalid project id" }, 400);
    const name = typeof parsed.name === "string" && parsed.name.trim()
      ? parsed.name.trim().slice(0, MAX_NAME_LENGTH)
      : parsed.id;
    if (parsed.data !== null && typeof parsed.data !== "object") return json({ error: "invalid data" }, 400);
    const payload = {
      id: parsed.id,
      name,
      updatedAt: new Date().toISOString(),
      data: parsed.data || null
    };
    await env.PROJECTS.put(parsed.id, JSON.stringify(payload), {
      metadata: { updatedAt: payload.updatedAt, name }
    });
    return json({ ok: true, id: parsed.id, updatedAt: payload.updatedAt });
  }

  if (request.method === "DELETE") {
    if (!id) return json({ error: "missing id" }, 400);
    if (!validProjectId(id)) return json({ error: "invalid project id" }, 400);
    await env.PROJECTS.delete(id);
    return json({ ok: true, id });
  }

  return json({ error: "method not allowed" }, 405);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname.startsWith("/api/projects")) {
      const auth = await authorized(request, env);
      if (!auth.ok) {
        if (auth.reason === "unconfigured") {
          // fail-closed：未配置 ADMIN_TOKEN 时明确拒绝，绝不开放 KV
          return json({ error: "API disabled: ADMIN_TOKEN secret is not configured. Run `npx wrangler secret put ADMIN_TOKEN` and redeploy." }, 503, corsHeaders(request));
        }
        return new Response(null, { status: 401, headers: { "WWW-Authenticate": "Bearer" } });
      }
      try {
        return await handleProjects(request, env, projectIdFromPath(url.pathname));
      } catch (err) {
        console.error("projects api error:", err && err.message);
        return json({ error: "internal error" }, 500);
      }
    }

    // 其余路径：静态资源（index.html / app.js / styles / 等）
    return withSecurityHeaders(await env.ASSETS.fetch(request));
  }
};

const SECURITY_HEADERS = {
  "Content-Security-Policy": "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self' https://api.ipify.org https://api64.ipify.org https://ipapi.co https://api.ip.sb; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "no-referrer",
  "X-Frame-Options": "DENY",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()"
};

function withSecurityHeaders(response) {
  const res = new Response(response.body, response);
  for (const [key, value] of Object.entries(SECURITY_HEADERS)) res.headers.set(key, value);
  return res;
}
