# eNSP Web Lab v1.1.0 发行说明

| 项目 | 内容 |
|---|---|
| 版本 | v1.1.0 |
| 发布日期 | 2026-11-09 |
| 类型 | 安全加固 + 缺陷修复 + 新增云端部署形态 |
| 线上入口 | https://ensp.closeai.wtf/ （Cloudflare Worker 版） |
| 部署版本 ID | `5a509483-925d-4fac-ad9f-5e581e77547e` |
| 完整变更 | [CHANGELOG.md](./CHANGELOG.md) |

---

## 一、GitHub Release 正文（可直接粘贴）

> 标题：**v1.1.0 — 安全加固与云端版上线**

### 🔒 安全加固

- 修复 `app.js` / `app-improvements.js` 中多处 **HTML 注入（XSS）** 风险：链路属性面板、右键菜单、端口行、
  Toast、确认对话框、Loading 文案等全部改为转义输出。
- 导入的工程 / 存档 / 云端项目统一做 **数据净化**：ID 白名单化、数值字段强制转换、结构非法直接拒绝。
- 本地版补齐 **CSP**；Worker 版统一下发 CSP（含 `frame-ancestors 'none'`）、`nosniff`、`Referrer-Policy`、
  `X-Frame-Options`、`Permissions-Policy`。
- 云端令牌错误不再无限弹窗；前端项目 ID 与 Worker 校验规则对齐。

### 🐛 关键缺陷修复

- **trunk 口未配置 `allow-pass` 时被当作放行所有 VLAN**（跨 VLAN 串通）→ 按华为默认只放行 VLAN 1。
- **配置导入丢失 OSPF / DHCP 地址池**，且删除配置行后旧值残留 → 补全解析并做全量重置。
- ACL 的 `range` / `gt` / `lt` 端口、`icmp-type 8` 数字写法、`undo rule` 误清空、`undo vlan batch` 只删末尾等问题全部修复。
- 旧版存档加载崩溃、计数器撞号、接口名生成非法等问题修复。
- localStorage 配额溢出不再直接报错，会淘汰最旧历史项目并提示。

### ✨ 新增

- **Cloudflare Worker 云端版 `cf_ver/`**：KV 云端项目存取（`/api/projects`）、右下角 `☁` 同步面板，
  静态资源与前端逻辑不变；Bearer 令牌鉴权，未配置令牌时 fail-closed 返回 503。
- **文件同步脚本** `cf_ver/scripts/sync-public.mjs`，接入 `predev` / `predeploy`，避免根目录与 `public/` 两份代码漂移。
- 增强包正式接入主界面：Toast / 确认对话框 / Loading / `?` 快捷键面板 / 命令自动补全。

### ⚡ 优化

- 自动保存内容无变化时跳过写入，减少 localStorage 重写。
- 公网 IP 检测改为**点击触发**，默认不向第三方发送任何请求。
- Worker 项目列表支持翻页（>1000 不截断）、请求体按真实字节校验。

**完整对比：** [CHANGELOG.md](./CHANGELOG.md) ｜ **遗留问题：** 「已知遗留」小节

---

## 二、发行文件清单

### 1. 新增文件（11）

| 文件 | 大小 | 说明 |
|---|---:|---|
| `.gitignore` | 334 B | 忽略 `node_modules/`、`.wrangler/`、`.dev.vars`、密钥与构建产物 |
| `cf_ver/wrangler.toml` | 926 B | Worker 配置：KV 绑定、assets、自定义域名、可观测性 |
| `cf_ver/package.json` | 469 B | 脚本入口（`sync` / `predev` / `dev` / `predeploy` / `deploy` / `tail`） |
| `cf_ver/package-lock.json` | 52 KB | wrangler 依赖锁定 |
| `cf_ver/src/worker.js` | 7.0 KB | Worker 入口：`/api/projects*` 走 KV，其余走静态资源 + 安全响应头 |
| `cf_ver/scripts/sync-public.mjs` | 711 B | 根目录 → `public/` 前端文件同步脚本 |
| `cf_ver/public/cf-sync.js` | 8.7 KB | 云端项目同步面板（保存 / 列表 / 加载 / 删除） |
| `cf_ver/public/index.html` | 8.1 KB | 云端版页面（额外引入 `cf-sync.js`） |
| `cf_ver/README.md` | 4.8 KB | 云端版部署与 API 说明 |
| `docs/BUG.md` | 12.7 KB | 逻辑审查报告（已标注修复状态，由根目录移入） |
| `docs/RELEASE-v1.1.0.md` | 7.9 KB | 本发行说明 |

> `cf_ver/public/` 下的 `app.js`、`app-improvements.js`、`command-autocomplete.js`、`styles*.css`、
> `sample-topology.txt` 是根目录文件的同步副本，随 `npm run deploy` 自动生成，**请勿单独修改**。

### 2. 修改文件（5）

| 文件 | 变更 | 要点 |
|---|---|---|
| `app.js` | +369 / -71 | XSS 修复、导入数据净化、OSPF/DHCP 解析、ACL 修复、配额处理、自动保存优化 |
| `app-improvements.js` | ±20 | 本地 `escHtml` + 输出转义；键盘事件 `stopImmediatePropagation` |
| `command-autocomplete.js` | ±20 | Tab / 方向键事件不再与全局快捷键冲突 |
| `index.html` | ±6 | 补充 CSP、`styles-improvements.css`、两个增强脚本；IP 徽章文案 |
| `styles.css` | +1 | 新增 `position: relative`（增强样式定位） |

### 3. 文档更新（4）

| 文件 | 说明 |
|---|---|
| `docs/CHANGELOG.md` | 新增 v1.1.0 条目；更新未来计划与日期 |
| `docs/ENHANCEMENTS.md` | 修复 13 处失效相对链接，补充发行说明 / 更新日志 / 审查报告入口 |
| `README.md` | 补充云端版入口、文件结构、安全说明、快捷键与限制 |
| `cf_ver/README.md` | 补充同步脚本、安全响应头、KV 翻页说明 |

### 4. 未改动的文件

`styles-improvements.css`、`sample-topology.txt`、`docs/` 下其余增强包文档保持不变。

---

## 三、发布步骤

```bash
# 1. 确认改动（应只包含上述文件，且不含 .wrangler / node_modules / .dev.vars）
git status --short

# 2. 暂存
git add -A

# 3. 提交
git commit -m "release: v1.1.0 安全加固与云端版上线

- 修复 HTML 注入（XSS）与导入数据净化
- 修复 trunk VLAN、OSPF/DHCP 解析、ACL range/gt/lt 等缺陷
- 新增 Cloudflare Worker 云端版 cf_ver/ 与文件同步脚本
- 自动保存与公网 IP 检测优化"

# 4. 打标签并推送
git tag -a v1.1.0 -m "v1.1.0 安全加固与云端版上线"
git push origin main --follow-tags

# 5. 在 GitHub 创建 Release
#    Tag: v1.1.0 ｜ Title: v1.1.0 — 安全加固与云端版上线
#    Description: 粘贴本文档「一、GitHub Release 正文」
#    Assets: GitHub 自动生成的源码包即可（无需额外上传构建产物）
```

> 推送前务必确认 `git status` 中没有 `cf_ver/.wrangler/`（含账号缓存）与任何 `.dev.vars`。
> 当前 `.gitignore` 已覆盖，验证过 `git check-ignore` 生效。

---

## 四、线上部署（可选，本次已执行）

```bash
cd cf_ver
npm install          # 首次
npm run sync         # 同步根目录前端文件到 public/
npm run deploy       # predeploy 会自动再同步一次
```

**注意：** `ADMIN_TOKEN` 需通过 `npx wrangler secret put ADMIN_TOKEN` 设置一次即可（不随代码提交）。
未设置时 `/api/*` 返回 503（fail-closed），不会开放 KV。

---

## 五、部署后验证记录（2026-11-09 已实测）

| 检查项 | 结果 |
|---|---|
| `https://ensp.closeai.wtf/` | 200，页面已含 `cf-sync.js` 与 CSP meta |
| `/app.js` | 200，约 283 KB，含 `sanitizeLink` / `SAFE_ID_PATTERN` / `writeSavedProjects`（修复已上线） |
| 安全响应头 | `content-security-policy`（含 `frame-ancestors 'none'`）、`x-content-type-options: nosniff`、`x-frame-options: DENY`、`referrer-policy: no-referrer`、`permissions-policy` |
| `/api/projects`（无令牌） | 401 + `www-authenticate: Bearer`（说明 `ADMIN_TOKEN` 已配置） |
| 资源上传 | 4 个变更资源（`index.html`/`app.js`/`app-improvements.js`/`cf-sync.js`） |

---

## 六、发布前检查表

- [x] `node --check` 通过：`app.js`、`cf_ver/public/cf-sync.js`、`cf_ver/src/worker.js`、`cf_ver/scripts/sync-public.mjs`
- [x] 根目录与 `cf_ver/public/` 前端文件一致（`sync-public.mjs` 校验通过）
- [x] `git check-ignore` 确认 `cf_ver/.wrangler`、`cf_ver/node_modules` 不会被提交
- [x] 仓库内无令牌 / 密钥 / `.dev.vars`
- [x] 线上域名可访问，API 鉴权正常
- [ ] 浏览器手工回归：导入 eNSP 工程 → 应用配置 → 保存 → 云端保存/加载（建议发布前补做）

---

## 七、回滚方式

```bash
# 回到上一个版本
git revert --no-commit <commit>
git commit -m "revert: v1.1.0"
git push origin main

# Worker 回滚：在 Cloudflare 控制台选择上一个 Version 重新部署，
# 或检出旧 tag 后 `cd cf_ver && npm run deploy`
```

---

*本文件随版本发布归档，下个版本请新建 `RELEASE-v<version>.md`。*
