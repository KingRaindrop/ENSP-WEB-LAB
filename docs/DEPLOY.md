# 部署指南

> 返回 [项目主页](../README.md) ｜ 文档索引 [docs/README.md](./README.md) ｜ 使用说明请见 [USAGE.md](./USAGE.md)

本项目是**纯前端**应用，默认不需要任何后端。只有在需要「多端共享项目」时才可选启用 Cloudflare Worker 云端版。

| 方式 | 需要后端 | 数据存放 | 适用场景 |
|---|---|---|---|
| [一、纯静态托管](#一纯静态托管默认) | 否 | 浏览器 localStorage | 教学演示、内网、Pages / CDN |
| [二、Cloudflare Worker](#二cloudflare-worker-云端版可选) | 是（KV） | localStorage + 云端 KV | 需要跨设备保存 / 加载项目 |

---

## 一、纯静态托管（默认）

### 1.1 本地运行

直接双击 `index.html` 即可。若浏览器限制本地文件访问，用任意静态服务器：

```bash
# 在项目根目录执行（任选其一）
python -m http.server 8000
npx serve .
```

访问 `http://localhost:8000`。

> 建议用 `localhost` 而不是 `file://`：导出到本地文件夹（File System Access API）在 `localhost` 下通常可用。

### 1.2 静态托管平台

把仓库**根目录**这几个文件上传即可，无需构建：

```text
index.html
styles.css
styles-improvements.css
app.js
app-improvements.js
command-autocomplete.js
sample-topology.txt
```

- **GitHub Pages**：仓库 Settings → Pages → Source 选分支根目录。
- **Nginx / Apache**：把上述文件放到站点目录即可；`sample-topology.txt` 等静态资源无需额外配置。

### 1.3 注意事项

- 页面自带 `Content-Security-Policy`（`script-src 'self'`），**不要**把脚本拆到别的域名，否则会被拦截。
- 如需接入新的第三方 API（例如换用别的 IP 检测服务），必须同时修改 `index.html` 的 meta CSP 与 Worker 的响应头 CSP。
- 纯静态部署**不需要** `cf_ver/` 目录，删除即可，功能不受影响（只是没有云端同步）。

---

## 二、Cloudflare Worker 云端版（可选）

`cf_ver/` 把同一套前端包装成 Worker：静态资源由 `[assets]` 绑定提供，云端项目通过 KV + `/api/projects` 存取，前端右下角出现 `☁` 面板。

### 2.1 前置条件

- Node.js 18+
- Cloudflare 账号
- 本目录已含 `wrangler` devDependency

### 2.2 步骤

```bash
cd cf_ver

# 1) 安装依赖
npm install

# 2) 生成本地配置文件（wrangler.toml 不入库，从模板复制）
cp wrangler.toml.example wrangler.toml

# 3) 登录 Cloudflare
npx wrangler login

# 4) 创建 KV 命名空间（线上 + 本地预览各一个）
npx wrangler kv namespace create PROJECTS
npx wrangler kv namespace create PROJECTS --preview
```

把上一步返回的两个 id 填进 `wrangler.toml`：

```toml
[[kv_namespaces]]
binding = "PROJECTS"
id = "<线上 id>"
preview_id = "<预览 id>"
```

```bash
# 5) 配置鉴权令牌（必须，否则 /api/* 一律返回 503）
npx wrangler secret put ADMIN_TOKEN

# 6) 本地预览
npm run dev          # 访问 http://localhost:8787

# 7) 部署
npm run deploy
```

`predev` / `predeploy` 会先执行 `scripts/sync-public.mjs`，把根目录的前端文件同步到 `cf_ver/public/`，无需手动复制。

### 2.3 自定义域名

在 `wrangler.toml` 中配置（`workers_dev = false` 时仅走自定义域名）：

```toml
workers_dev = false

routes = [
  { pattern = "lab.example.com", custom_domain = true }
]
```

该域名所在的 zone 必须在你自己的 Cloudflare 账号下。

### 2.4 云端同步怎么用

部署后页面右下角出现 `☁` 按钮：

- **保存到云端**：上传当前拓扑快照（key 为项目 ID）
- **↧ 加载**：从云端拉取项目并替换当前画布
- **× 删除**：删除云端项目
- **刷新**：重新获取列表

首次访问会弹出令牌输入框，令牌保存在 `sessionStorage`（关闭标签页即失效）。本地 localStorage 逻辑完全不受影响。

### 2.5 API

所有路径前缀 `/api/projects`，均需 `Authorization: Bearer <ADMIN_TOKEN>`：

| 方法 | 路径 | 说明 |
|---|---|---|
| GET | `/api/projects` | 列出云端项目（自动翻页，不受 KV 单页 1000 条限制） |
| GET | `/api/projects/:id` | 取单个项目（含完整快照） |
| POST | `/api/projects` | 保存项目，body `{ id, name, data }`（上限 10MB） |
| DELETE | `/api/projects/:id` | 删除项目 |

---

## 三、部署后验证

| 检查项 | 期望结果 |
|---|---|
| 首页 | HTTP 200，能看到设备面板与画布 |
| 安全响应头（Worker 版） | `content-security-policy`、`x-content-type-options: nosniff`、`x-frame-options: DENY`、`referrer-policy: no-referrer` |
| `/api/projects`（不带令牌） | 401 + `www-authenticate: Bearer` |
| `/api/projects`（未配置令牌） | 503，说明 fail-closed 生效 |
| 浏览器控制台 | 无 CSP 报错、无 JS 异常 |

---

## 四、更新与回滚

### 更新静态资源

```bash
git pull
# 纯静态：重新上传根目录文件
# Worker 版：
cd cf_ver && npm run deploy
```

### 回滚

- **Worker**：Cloudflare 控制台 → Workers → 选择上一个 Version 重新部署；或检出旧 tag 后 `npm run deploy`。
- **纯静态**：重新上传上一版本文件即可（数据在用户浏览器里，不受影响）。

---

## 五、安全须知

1. **`cf_ver/wrangler.toml` 不要提交**：含自定义域名与 KV 命名空间 ID，已在 `.gitignore` 中忽略。仓库只提供 `wrangler.toml.example` 模板。
2. **`ADMIN_TOKEN` 只存 Cloudflare secret**：用 `npx wrangler secret put ADMIN_TOKEN` 设置，任何情况下都不要写进代码或文档。
3. **不要提交** `.dev.vars`、`.wrangler/`（含账号缓存）、任何 `*.pem` / `*.key`。
4. 提交前建议自查：

```bash
git status --short
git grep -nEI 'ADMIN_TOKEN\s*=\s*\S{8,}|AKIA[0-9A-Z]{16}|BEGIN [A-Z ]*PRIVATE KEY' || echo "无密钥特征"
```

5. KV 命名空间 ID 本身不是凭据（拿到也无法读写），但属于基础设施信息，建议同样不要公开。
