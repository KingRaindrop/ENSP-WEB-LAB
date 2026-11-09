/* cf-sync.js - eNSP Web Lab 云端项目同步（可选增强）
 * 依赖 app.js 暴露的全局函数：serialize()、hydrate()、state、toast()
 * 不改动现有 localStorage 持久化逻辑，云端为额外增补。
 */
(function () {
  "use strict";
  const TOKEN_KEY = "cf_admin_token";
  const API = "/api/projects";

  const $ = (sel) => document.querySelector(sel);
  const getToken = () => sessionStorage.getItem(TOKEN_KEY) || "";
  const setToken = (v) => (v ? sessionStorage.setItem(TOKEN_KEY, v) : sessionStorage.removeItem(TOKEN_KEY));
  const escapeHtml = (s) => String(s || "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  async function apiCall(method, path, body, retried = false) {
    const opt = { method, headers: {} };
    const token = getToken();
    if (token) opt.headers["Authorization"] = "Bearer " + token;
    if (body !== undefined) { opt.headers["Content-Type"] = "application/json"; opt.body = JSON.stringify(body); }
    let res;
    try { res = await fetch(path, opt); }
    catch (e) { throw new Error("无法连接云端 API：" + e.message); }
    if (res.status === 401) {
      setToken("");
      if (retried) throw new Error("令牌无效");
      const t = prompt("此部署启用了管理员令牌 (ADMIN_TOKEN)，请输入：");
      if (!t) throw new Error("未授权");
      setToken(t.trim());
      return apiCall(method, path, body, true);
    }
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || ("HTTP " + res.status));
    return data;
  }

  // 读取当前快照（深拷贝），采用 app.js 的 serialize
  function snapshotData() {
    if (typeof serialize === "function") return serialize();
    if (typeof window.serialize === "function") return window.serialize();
    throw new Error("serialize 不可用，请确保 app.js 已加载");
  }

  function projectId() {
    const st = (typeof state !== "undefined") ? state : window.state;
    const p = st && st.project ? st.project : { name: "Untitled" };
    const name = p.name || "Untitled";
    // 与 worker 的 ID_PATTERN 保持一致：/^[A-Za-z0-9][A-Za-z0-9._-]{0,127}$/
    let id = String(p.id || ("ensp-" + name.toLowerCase())).replace(/[^A-Za-z0-9._-]+/g, "-").replace(/^[^A-Za-z0-9]+/, "").slice(0, 128);
    if (!id) id = "ensp-project";
    return { id, name };
  }

  async function saveToCloud() {
    setBusy(true);
    try {
      const { id, name } = projectId();
      const data = snapshotData();
      const r = await apiCall("POST", API, { id, name, data });
      if (typeof toast === "function") toast(`已保存到云端：${name}`);
      refreshList();
      return r;
    } catch (e) { toast("云端保存失败：" + e.message); }
    finally { setBusy(false); }
  }

  async function listCloud() {
    return (await apiCall("GET", API)).projects || [];
  }

  async function loadFromCloud(id) {
    setBusy(true);
    try {
      const r = await apiCall("GET", API + "/" + encodeURIComponent(id));
      if (!r || !r.data) throw new Error("云端项目为空");
      if (typeof hydrate === "function") hydrate(r.data);
      else if (typeof window.hydrate === "function") window.hydrate(r.data);
      else throw new Error("hydrate 不可用");
      closePanel();
      if (typeof toast === "function") toast(`已从云端加载：${r.name || id}`);
    } catch (e) { toast("云端加载失败：" + e.message); }
    finally { setBusy(false); }
  }

  async function deleteCloud(id) {
    if (!confirm("确定删除这个云端项目？")) return;
    setBusy(true);
    try {
      await apiCall("DELETE", API + "/" + encodeURIComponent(id));
      if (typeof toast === "function") toast("已删除云端项目");
      refreshList();
    } catch (e) { toast("删除失败：" + e.message); }
    finally { setBusy(false); }
  }

  // ---------- UI ----------
  function ensureUI() {
    if (document.getElementById("cfFab")) return;
    const style = document.createElement("style");
    style.textContent = `
#cfPanel{position:fixed;right:18px;bottom:64px;width:320px;max-height:62vh;display:none;flex-direction:column;background:#1f2530;color:#e6e8eb;border:1px solid #36404f;border-radius:10px;box-shadow:0 8px 28px rgba(0,0,0,.4);z-index:100000;font:13px/1.5 system-ui,-apple-system,"Segoe UI",sans-serif}
#cfPanel.open{display:flex}
#cfPanel .cf-head{display:flex;align-items:center;justify-content:space-between;padding:10px 14px;border-bottom:1px solid #2c3441;font-weight:600}
#cfPanel .cf-body{padding:10px 14px;overflow:auto}
#cfPanel .cf-actions{display:flex;gap:8px;padding:10px 14px;border-top:1px solid #2c3441}
#cfPanel .cf-actions button{flex:1;padding:7px 10px;border-radius:6px;border:1px solid #3a4556;background:#2b3442;color:#e6e8eb;cursor:pointer}
#cfPanel .cf-actions button:hover{background:#3a4556}
#cfPanel .cf-actions .cf-primary{background:#2f7d6b;border-color:#2f7d6b;color:#fff}
#cfList{list-style:none;margin:0;padding:0}
#cfList li{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:8px 0;border-bottom:1px solid #262d39}
#cfList .cf-meta{display:flex;flex-direction:column;min-width:0}
#cfList .cf-name{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:600}
#cfList .cf-date{font-size:11px;color:#9aa3ad}
#cfList .cf-ops button{border:0;background:transparent;color:#9aa3ad;cursor:pointer;padding:2px 6px;border-radius:4px}
#cfList .cf-ops button:hover{background:#2c3441;color:#fff}
#cfFab{position:fixed;right:18px;bottom:18px;width:48px;height:48px;border-radius:50%;background:#2f7d6b;color:#fff;border:0;font-size:20px;cursor:pointer;box-shadow:0 4px 14px rgba(0,0,0,.35);z-index:100000}
#cfFab:hover{background:#34917c}
#cfFab.cf-busy{opacity:.6;pointer-events:none}
.cf-empty{color:#9aa3ad;text-align:center;padding:14px 0}
`;
    document.head.appendChild(style);

    const fab = document.createElement("button");
    fab.id = "cfFab";
    fab.title = "云端项目";
    fab.textContent = "☁";
    fab.addEventListener("click", togglePanel);
    document.body.appendChild(fab);

    const panel = document.createElement("div");
    panel.id = "cfPanel";
    panel.innerHTML = `
      <div class="cf-head"><span>云端项目</span><button id="cfClose" style="border:0;background:transparent;color:#9aa3ad;font-size:16px;cursor:pointer">×</button></div>
      <div class="cf-body"><ul id="cfList"></ul></div>
      <div class="cf-actions">
        <button id="cfSaveBtn" class="cf-primary">保存到云端</button>
        <button id="cfRefreshBtn">刷新</button>
      </div>`;
    document.body.appendChild(panel);

    document.getElementById("cfClose").addEventListener("click", closePanel);
    document.getElementById("cfSaveBtn").addEventListener("click", saveToCloud);
    document.getElementById("cfRefreshBtn").addEventListener("click", refreshList);
  }

  function openPanel() { ensureUI(); document.getElementById("cfPanel").classList.add("open"); refreshList(); }
  function closePanel() { const p = document.getElementById("cfPanel"); if (p) p.classList.remove("open"); }
  function togglePanel() { const p = document.getElementById("cfPanel"); if (p && p.classList.contains("open")) closePanel(); else openPanel(); }

  function setBusy(b) {
    // 只切换 class/disabled，不改 id，否则下次就再也找不到按钮
    const fab = document.getElementById("cfFab");
    if (!fab) return;
    fab.classList.toggle("cf-busy", b);
    fab.disabled = b;
  }

  async function refreshList() {
    const ul = document.getElementById("cfList");
    if (!ul) return;
    ul.innerHTML = `<li class="cf-empty">加载中…</li>`;
    try {
      const items = await listCloud();
      if (!items.length) { ul.innerHTML = `<li class="cf-empty">云端暂无项目</li>`; return; }
      ul.innerHTML = items.map((it) => `
        <li>
          <div class="cf-meta">
            <span class="cf-name" title="${escapeHtml(it.name)}">${escapeHtml(it.name)}</span>
            <span class="cf-date">${escapeHtml(it.updatedAt ? new Date(it.updatedAt).toLocaleString() : "")}</span>
          </div>
          <div class="cf-ops">
            <button data-act="load" data-id="${escapeHtml(it.id)}" title="加载">↧</button>
            <button data-act="del" data-id="${escapeHtml(it.id)}" title="删除">×</button>
          </div>
        </li>`).join("");
      ul.querySelectorAll("button[data-act]").forEach((btn) => {
        const act = btn.getAttribute("data-act");
        const id = btn.getAttribute("data-id");
        btn.addEventListener("click", () => (act === "load" ? loadFromCloud(id) : deleteCloud(id)));
      });
    } catch (e) { ul.innerHTML = `<li class="cf-empty">${escapeHtml(e.message)}</li>`; }
  }

  function init() { ensureUI(); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();