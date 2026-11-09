# 文档索引

> 项目：[eNSP Web Lab](../README.md) ｜ 当前版本：**v1.1.0**（2026-11-09）

`docs/` 按「**主线 / 增强包 / 归档**」三层组织：主线文档持续维护，增强包文档对应 v1.0.0 引入的功能模块，归档目录只保存过程性报告、不再更新。

---

## 一、主线文档（持续维护）

| 文档 | 内容 | 何时看 |
|---|---|---|
| [DEPLOY.md](./DEPLOY.md) | 部署指南：纯静态托管、Cloudflare Worker、KV 与令牌、验证与回滚 | 要上线 / 部署时 |
| [USAGE.md](./USAGE.md) | 使用手册：拓扑编辑、导入导出、终端命令、ACL、快捷键、仿真逻辑 | 想知道怎么用 |
| [CHANGELOG.md](./CHANGELOG.md) | 全部版本变更记录、修复清单、未来计划 | 想了解某个版本改了什么 |
| [RELEASE-v1.1.0.md](./RELEASE-v1.1.0.md) | 当前版本发行说明、文件清单、发布与回滚步骤 | 发布 / 归档时 |
| [BUG.md](./BUG.md) | 逻辑审查报告（含修复状态表） | 想追溯历史缺陷与其修复情况 |

---

## 二、增强包文档（`enhancements/`）

对应 v1.0.0 引入的 6 个功能模块（Toast、确认对话框、加载状态、快捷键面板、命令自动补全、统一错误处理）。
这些功能**已经并入主程序并默认启用**，以下文档作为实现说明与 API 参考保留。

| 文档 | 内容 |
|---|---|
| [README-ENHANCEMENTS.md](./enhancements/README-ENHANCEMENTS.md) | 增强包总览与快速上手 |
| [INTEGRATION-GUIDE.md](./enhancements/INTEGRATION-GUIDE.md) | 详细集成步骤与测试清单 |
| [ENHANCEMENT-DOCS.md](./enhancements/ENHANCEMENT-DOCS.md) | 完整 API 参考（最详细） |
| [QUICK-REFERENCE.md](./enhancements/QUICK-REFERENCE.md) | API 速查卡片、快捷键、命令补全演示 |
| [IMPROVEMENTS.md](./enhancements/IMPROVEMENTS.md) | 当时的改进计划与优先级 |
| [ENHANCEMENTS.md](./enhancements/ENHANCEMENTS.md) | 旧导航页（已由本索引取代，保留备查） |

> 对应的实际代码：`app-improvements.js`、`command-autocomplete.js`、`styles-improvements.css`。

---

## 三、归档（`archive/`）

v1.0.0 时期的过程性交付报告，内容相互重叠且部分数据已过时，**仅作历史留存，不再更新**。

| 文档 | 说明 |
|---|---|
| [COMPLETION-REPORT.md](./archive/COMPLETION-REPORT.md) | 完善工作最终报告 |
| [FINAL-SUMMARY.md](./archive/FINAL-SUMMARY.md) | 项目完善总结 |
| [PROJECT-SUMMARY.md](./archive/PROJECT-SUMMARY.md) | 改进总结与效果对比 |
| [README-COMPLETION.md](./archive/README-COMPLETION.md) | 完成报告索引 |

---

## 维护约定

1. **发版**：在 `CHANGELOG.md` 顶部追加版本条目，并新建 `RELEASE-vX.Y.Z.md`。
2. **归档**：版本稳定后，把上一版发行说明移入 `archive/`，并把新文档登记到本索引。
3. **时效性**：过程报告、一次性总结一律放 `archive/`，不要放在根目录。
4. **链接**：文档间相互引用请用相对路径（`./` 或 `../`），提交前确认可点击。
5. **敏感信息**：任何文档都不得写入令牌、KV ID、真实域名等部署配置，模板请用占位符。

---

*最后更新：2026-11-09*
