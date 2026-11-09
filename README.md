# eNSP Web Lab

**纯前端的 eNSP 风格网络实验平台**。不装 VirtualBox、不跑 QEMU，打开浏览器就能拖设备搭拓扑、敲 VRP 命令、跑 Ping / HTTP / FTP / DNS 实验，还能直接导入导出 eNSP 工程。

本项目旨在提供线上模拟方案尽可能解决eNSP无法在最新系统上运行的问题(指的是无法安装，各种报错等等痛点)
本方案导出的文件支持直接导入到eNSP

当前版本 **v1.1.0**（2026-11-09）

---

## 🌐 演示地址

| 入口 | 地址 | 说明 |
|---|---|---|
| 在线体验 | https://ensp.closeai.wtf/ | 已部署，含云端项目同步 |
| 本地打开 | `index.html` | 下载仓库后双击即可，无需任何依赖 |

---

## 🚀 部署

| 方式 | 适用场景 | 文档 |
|---|---|---|
| **纯静态托管** | 教学演示、内网部署、GitHub Pages / 任意 CDN | 直接部署仓库根目录（`index.html` + `app.js` + 样式），无后端 |
| **Cloudflare Worker** | 需要多端共享项目（云端保存 / 加载 / 删除） | `cf_ver/`，静态资源 + KV 存储 + 令牌鉴权 |

**先跑起来（30 秒）：**

```bash
git clone https://github.com/KingRaindrop/ENSP-WEB-LAB.git
cd ENSP-WEB-LAB
python -m http.server 8000     # 或直接双击 index.html
```

打开 `http://localhost:8000` 即可。

👉 **完整部署文档（含 KV 创建、令牌配置、域名、验证与回滚）：[docs/DEPLOY.md](docs/DEPLOY.md)**

---

## 🆕 本次更新 · v1.1.0

> 主题：**安全加固 + 云端版落地**。44 项修复与增强，其中 3 个高危逻辑缺陷。

### 🔒 安全

- 修复多处 HTML 注入（XSS）：链路属性面板、右键菜单、端口行、Toast、对话框等统一转义输出
- 导入的工程 / 存档 / 云端项目统一净化：ID 白名单、数值强转、结构校验
- 页面补齐 CSP；Worker 统一下发 `nosniff`、`X-Frame-Options`、`Referrer-Policy` 等安全响应头
- 云端令牌错误不再无限弹窗，前端项目 ID 与后端校验规则对齐

### 🐛 关键修复

- **trunk 口未配置 `allow-pass` 时被当作放行所有 VLAN**（跨 VLAN 串通）→ 按华为默认只放行 VLAN 1
- **配置导入丢失 OSPF 进程与 DHCP 地址池**，且删除配置行后旧值残留 → 补全解析 + 全量重置
- ACL `range` / `gt` / `lt` 端口、`icmp-type 8` 数字写法、`undo rule` 误清空、`undo vlan batch` 只删末尾
- 旧存档加载崩溃、设备编号撞号、接口名生成非法、localStorage 配额溢出

### ✨ 新增与优化

- **Cloudflare Worker 云端版**：KV 云端项目存取 + 右下角 `☁` 同步面板（纯增量，不影响本地存档）
- 增强包正式接入：Toast / 确认对话框 / Loading / `?` 快捷键面板 / VRP 命令自动补全
- 自动保存内容无变化时跳过写入；公网 IP 检测改为点击触发，默认不联网

👉 **[完整更新日志](docs/CHANGELOG.md)** ｜ **[v1.1.0 发行说明](docs/RELEASE-v1.1.0.md)**

---

## ✨ 功能概览

| 模块 | 能力 |
|---|---|
| **拓扑编辑** | 路由器 / 交换机 / 三层交换机 / 防火墙 / AC / AP / PC / Client / Server / Cloud / Hub；拖拽、框选、多选、批量启动暂停、文本标注、画布缩放平移 |
| **终端模拟** | PC / Client / Server 配置窗口与命令行；网络设备 VRP Console（用户 / 系统 / 接口 / VLAN / OSPF / ACL / DHCP / AAA 等视图） |
| **协议仿真** | 静态路由、OSPF / RIP / ISIS / BGP 基础可达性、VLAN / Trunk / 单臂路由、ACL、NAT、DHCP、STP、WLAN |
| **业务验证** | Ping（含往返 ACL 检查）、HTTP、FTP（控制 + 数据连接）、DNS 解析，报文面板可回放路径 |
| **导入导出** | JSON 项目、eNSP 工程文件夹 / ZIP（`.topo` + `PC.xml` + `vrpcfg`）、CSV、文本边列表、Mermaid / Graphviz 风格拓扑、VRP 操作记录文本 |
| **持久化** | 自动保存、命名项目、历史项目、窗口与面板状态；可选云端同步 |
| **命令辅助** | VRP 命令自动补全（Tab / 方向键 / 缩写展开）、`?` 快捷键帮助面板 |

👉 **详细用法（CLI 命令集、ACL、Server 服务、快捷键、仿真逻辑）：[docs/USAGE.md](docs/USAGE.md)**

---

## 📚 文档导航

| 文档 | 内容 |
|---|---|
| [docs/DEPLOY.md](docs/DEPLOY.md) | 部署指南：静态托管、Cloudflare Worker、KV、令牌、验证与回滚 |
| [docs/USAGE.md](docs/USAGE.md) | 使用手册：拓扑、导入导出、终端命令、ACL、快捷键、仿真逻辑 |
| [docs/CHANGELOG.md](docs/CHANGELOG.md) | 更新日志（含已知遗留） |
| [docs/RELEASE-v1.1.0.md](docs/RELEASE-v1.1.0.md) | 当前版本发行说明与文件清单 |
| [docs/BUG.md](docs/BUG.md) | 逻辑审查报告（含修复状态表） |
| [docs/README.md](docs/README.md) | 文档索引与维护约定 |
| [cf_ver/README.md](cf_ver/README.md) | 云端版 API 与部署细节 |

---

## 🔒 安全

- 页面启用 `Content-Security-Policy`，脚本仅同源加载；Worker 版额外下发 `nosniff`、`Referrer-Policy`、`X-Frame-Options`、`Permissions-Policy`
- 导入数据全部校验并转义，非法 ID / 结构直接拒绝
- 公网 IP 检测默认关闭，只有点击顶栏 IP 徽章才会请求第三方 API
- 云端 `/api/*` 需要 `ADMIN_TOKEN`，未配置时返回 503（fail-closed）；令牌仅通过请求头传递
- **仓库不包含任何令牌或部署配置**：`cf_ver/wrangler.toml`、`.dev.vars`、`.wrangler/` 均已加入 `.gitignore`

---

## ⚠️ 已知限制

- 教学 / 原型用途的**前端模拟器**，不含真实 Huawei VRP 镜像，不启动虚拟网络设备
- 路由、ACL、DNS、HTTP、FTP、Ping 均为前端逻辑模拟，不等同真实数据平面
- eNSP 工程解析以常见 `.topo`、`PC.xml`、`vrpcfg.cfg` 为主，特殊字段可能需继续适配
- 本地文件夹选择受浏览器安全限制，无法长期持有真实绝对路径授权
- 数据存于浏览器 `localStorage`，清理站点数据会丢失；重要实验请用「下载」导出 JSON

---

## 📁 文件结构

```text
.
├── index.html                    页面结构（含 CSP）
├── styles.css / styles-improvements.css
├── app.js                        核心逻辑：拓扑、CLI、导入导出、持久化、协议仿真
├── app-improvements.js           增强包：Toast / 对话框 / Loading / 快捷键面板
├── command-autocomplete.js       VRP 命令自动补全
├── sample-topology.txt           文本拓扑导入示例
├── docs/                         文档（索引：docs/README.md）
│   ├── DEPLOY.md · USAGE.md      部署指南 · 使用手册
│   ├── CHANGELOG.md · RELEASE-v1.1.0.md · BUG.md
│   ├── enhancements/             增强包实现与集成文档
│   └── archive/                  v1.0.0 过程性报告归档
└── cf_ver/                       Cloudflare Worker 云端版（可选）
    ├── src/worker.js             /api/projects 走 KV，其余走静态资源
    ├── public/                   前端资源（由 sync-public.mjs 同步生成）
    ├── scripts/sync-public.mjs   根目录 → public 的同步脚本
    └── wrangler.toml.example     配置模板（真实 wrangler.toml 不入库）
```

---

## 🤝 反馈

发现 bug 或有功能建议，欢迎提 [Issue](https://github.com/KingRaindrop/ENSP-WEB-LAB/issues)。

本项目仅供学习与教学演示使用。
