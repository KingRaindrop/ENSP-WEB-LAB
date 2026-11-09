# eNSP Web Lab - Cloudflare Worker 版本

把纯前端 eNSP Web Lab 包装为 Cloudflare Worker：静态资源由 `[assets]` 绑定提供，云端项目持久化通过 KV + `/api/projects` 实现。前端保留现有 localStorage，额外提供 `cf-sync.js` 浮动面板做云端同步。

## 目录结构

```text
cf_ver/
  wrangler.toml.example # 配置模板（复制为 wrangler.toml 后填入自己的值）
  wrangler.toml        # 本地实际配置（含域名与 KV ID，已被 .gitignore 忽略，不入库）
  package.json         # 脚本入口（sync / predev / dev / predeploy / deploy）
  scripts/
    sync-public.mjs    # 把根目录前端文件同步到 public/（发布前自动执行）
  src/
    worker.js          # Worker 入口：/api/projects* 走 KV，其余走静态资源 + 安全响应头
  public/              # 静态资源（由 scripts/sync-public.mjs 生成，勿直接修改）
    index.html         # 已引入 cf-sync.js
    app.js             # 现有核心逻辑（与根目录一致）
    app-improvements.js
    command-autocomplete.js
    styles.css
    styles-improvements.css
    sample-topology.txt
    cf-sync.js         # 云端项目同步面板（保存/加载/列表/删除）
```

> `wrangler.toml` **不纳入版本库**（含自定义域名与 KV 命名空间 ID）。
> 首次部署请执行 `cp wrangler.toml.example wrangler.toml` 再按下方步骤填写。

> `public/` 下的 `app.js`、`app-improvements.js`、`command-autocomplete.js`、`styles*.css`、`sample-topology.txt`
> 都是根目录文件的副本，每次 `npm run dev` / `npm run deploy` 会先自动同步（`predev` / `predeploy`），
> 手动同步可执行 `npm run sync`。只有 `index.html` 与 `cf-sync.js` 是本目录独有的。

## 前置条件

- 安装 Node.js 18+ 和 npm
- 全局或本地安装 `wrangler`：`npm install`（本目录已含 devDependency）
- 登录 Cloudflare：`npx wrangler login`

## 部署步骤

1. 安装依赖
   ```bash
   npm install
   ```
2. 生成配置文件（`wrangler.toml` 不入库，需从模板复制）
   ```bash
   cp wrangler.toml.example wrangler.toml
   ```
3. 创建 KV 命名空间（线上 + 本地预览）
   ```bash
   npx wrangler kv namespace create PROJECTS
   npx wrangler kv namespace create PROJECTS --preview
   ```
4. 把上一步返回的 `id` 填入 `wrangler.toml`：
   ```toml
   [[kv_namespaces]]
   binding = "PROJECTS"
   id = "<线上 id>"
   preview_id = "<预览 id>"
   ```
   如需自定义域名，取消 `routes` 注释并改成自己的域名。
5. **配置鉴权（必须）**：设置 `ADMIN_TOKEN` 后，所有 `/api/*` 调用需带 `Authorization: Bearer <token>`
   ```bash
   npx wrangler secret put ADMIN_TOKEN
   ```
   前端首次保存/列出时会弹出输入框，输入后保存在 sessionStorage。
   **安全说明**：未配置 `ADMIN_TOKEN` 时 `/api/*` 一律返回 503（fail-closed），
   拒绝服务而不是开放访问；token 仅接受请求头方式传递，不支持 URL query。
6. 本地开发
   ```bash
   npm run dev
   ```
   访问 `http://localhost:8787`。
7. 部署到 Cloudflare
   ```bash
   npm run deploy
   ```
   部署后会输出 Worker URL。

## 安全响应头

Worker 对所有静态资源统一下发：

| 响应头 | 值 |
|---|---|
| `Content-Security-Policy` | `default-src 'self'; script-src 'self'; … ; frame-ancestors 'none'` |
| `X-Content-Type-Options` | `nosniff` |
| `X-Frame-Options` | `DENY` |
| `Referrer-Policy` | `no-referrer` |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` |

如需新增外部 API（例如换用其他 IP 检测服务），需同步修改 `worker.js` 的 CSP 与 `index.html` 的 meta CSP。

## API

所有路径前缀 `/api/projects`：

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/api/projects` | 列出云端项目（`{ projects: [{id,name,updatedAt}] }`，自动翻页，不受 KV 单页 1000 条限制） |
| GET | `/api/projects/:id` | 取单个项目（含 `data` 完整快照） |
| POST | `/api/projects` | 保存项目，body：`{ id, name, data }`（上限 10MB，按真实字节校验） |
| DELETE | `/api/projects/:id` | 删除项目 |

项目 `data` 字段直接是 `app.js` 的 `serialize()` 输出（含 nodes/links/annotations/stage/packets/events/counters），加载时调 `hydrate(data)` 还原。

## 前端使用

页面右下角出现 `☁` 按钮，点开面板：
- **保存到云端**：把当前拓扑快照上传到 KV（key 用 project.id）
- **↧ 加载**：从云端加载某个项目并替换当前画布
- **× 删除**：删除云端项目
- **刷新**：重新获取列表

未登录云端时，现有 localStorage 自动保存/历史项目逻辑完全不受影响。

## 注意事项

- 静态资源由 `[assets]` 提供服务，`app.js`(约 277KB) 不会被内联进 Worker，构建快、保持原结构。
- KV 单值上限 25MB，一般拓扑远小于此；超大项目建议仍用导出 JSON 备份。
- `wrangler.toml` 未启用鉴权时 `/api/*` 返回 503（fail-closed），公开部署前必须设置 `ADMIN_TOKEN`。
- 公网 IP 检测默认不发送任何请求，点击顶栏 IP 徽章后才会访问第三方检测 API（受页面 CSP 限制，仅允许 ipify/ipapi/ip.sb 四个域名）。
- `cf-sync.js` 仅做加法增强；如需纯静态托管、不要云端，可直接删 `public/cf-sync.js` 并从 `index.html` 移除其 `<script>`。
