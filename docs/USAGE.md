# 使用手册

> 返回 [项目主页](../README.md) ｜ 文档索引 [docs/README.md](./README.md) ｜ 部署请见 [DEPLOY.md](./DEPLOY.md)

本文档覆盖拓扑编辑、导入导出、终端命令、Server 服务、ACL、快捷键与仿真逻辑。

---

## 目录

- [拓扑编辑](#拓扑编辑)
- [项目与导入](#项目与导入)
- [设备窗口与终端](#设备窗口与终端)
- [Server 服务](#server-服务)
- [ACL 命令集](#acl-命令集)
- [常用 CLI 示例](#常用-cli-示例)
- [鼠标和快捷键](#鼠标和快捷键)
- [实验模板](#实验模板)
- [仿真逻辑](#仿真逻辑)
- [数据持久化](#数据持久化)
- [当前限制与后续方向](#当前限制与后续方向)

---

## 拓扑编辑

- 支持路由器、交换机、三层交换机、防火墙、AC/AP、PC、Client、Server、Cloud、Hub 等设备。
- 左侧设备库按类别筛选，路由器菜单只显示路由器，交换机菜单只显示交换机等。
- 支持拖拽添加设备、双击打开设备窗口、单选、多选、Ctrl+左键多选、框选多设备。
- 框选后可批量启动、暂停、删除、移动；设备移动时链路线缆保持连接。
- 支持文本标注，标注可拖动、框选、持久化。
- 链路可单独选中和删除。
- 创建链路时可指定起始网口、目的网口、线缆类型、带宽和时延。
- 支持 `Copper`、`Ethernet`、`Fiber`、`Serial`、`Console` 等线缆类型。
- 鼠标中键拖动画布，滚轮按鼠标所在位置缩放。
- 左右侧栏可收起，底部面板高度可用鼠标左键拖动调整，并会持久化。

---

## 项目与导入

- 自动保存当前拓扑、设备、链路、文本、窗口、面板状态和画布状态。
- 支持保存项目、另存副本、加载历史项目、删除项目。
- 支持导出 / 导入 JSON 项目文件。
- 支持导出 eNSP 风格工程文件夹：`项目名.topo`、GUID 设备目录、每台终端的 `PC.xml`、每台网络设备的 `vrpcfg.zip/vrpcfg.cfg`；`.topo` 按 eNSP 常见的 `<devices>/<lines>/<txttips>` 结构生成。
- 支持通用 JSON、CSV、文本边列表、简化 Mermaid / Graphviz 风格拓扑。
- 支持导入教程 / 操作记录式 VRP 文本，例如包含 `<Huawei>`、`[AR4] interface ...`、`[AR4-acl-adv-3000] rule ...` 的 TXT，会按设备提示符分组并应用配置，也会尽量提取 Client/Server 的 IP、掩码、网关、DNS 和域名映射。
- 支持 eNSP 工程文件夹导入，读取 `.topo`、`PC.xml`、`vrpcfg.zip/vrpcfg.cfg`。
- 支持 eNSP ZIP 工程包导入，结构可类似：

```text
123456.zip
  123456/123456.topo
  123456/<设备GUID>/PC.xml
  123456/<设备GUID>/vrpcfg.zip
```

导入后会尽量恢复设备、链路、坐标、文本标注、PC/Server 地址和 VRP 原始配置。

> 导出到本地文件夹需要浏览器支持 File System Access API。Chrome/Edge 通过 `localhost` 打开时通常可用；浏览器不能静默写入固定绝对路径，需要在弹出的目录选择器中选择目标目录，例如桌面，然后系统会在其中创建项目文件夹。

---

## 设备窗口与终端

### PC / Client / Server

双击后打开可拖动窗口：

- **配置页**：IPv4、子网掩码、网关、DNS、MAC。
- **Console 页**：类似终端的输入区，支持历史命令上 / 下键切换。
- **Client** 额外包含 `HttpClient` 页。
- **Server** 额外包含 HTTP、FTP、DNS 服务配置。

### 网络设备（VRP Console）

- 设备必须开机后才能进入 Console。
- 支持用户视图、系统视图、接口视图、VLAN、OSPF、ACL、DHCP、AAA、用户接口等常见配置流程。
- 支持 `int g0/0/0`、`int e0/0/1`、`ip add`、`un sh`、`dis`、`q` 等常用缩写。
- 输入框支持 VRP 命令自动补全：`Tab` 补全、方向键选择、缩写自动展开。

---

## Server 服务

Server 支持：

| 服务 | 可配置项 |
|---|---|
| HTTP | 端口、根目录、默认页面、本地文件夹选择 |
| FTP | 端口、根目录、用户名、密码、本地文件夹选择 |
| DNS | 静态域名记录，每行格式为 `域名 IP` |

HTTP/FTP 可以选择本地文件夹作为服务目录。浏览器不会永久授权真实磁盘路径，系统会保存文件夹名、文件列表和可预览文本内容。为避免浏览器存储超限，当前限制为：

- 最多读取 180 个文件。
- 单个文本文件最多保存 64KB。
- 单次目录文本内容总预算约 768KB。

Client 可通过以下命令访问：

```text
http Web_Server/index.html
http 192.168.1.10:8080/a.txt
curl http://www.lab.local/index.html
ftp ftp.lab.local
```

---

## ACL 命令集

当前已支持基础 ACL 配置，并且会结合协议、目的端口、ICMP 类型影响 Ping、HTTP、FTP 等可达性检测。

示例：

```text
system-view
acl 3000
rule 5 permit ip source 192.168.10.10 0 destination 10.10.10.10 0
rule 10 deny ip source 192.168.10.20 0 destination 10.10.10.10 0
quit
interface g0/0/1
traffic-filter outbound acl 3000
quit
display acl
display current-configuration
```

支持命令：

- `acl 3000` / `acl number 3000`
- `rule permit ip source <ip> <wildcard> destination <ip> <wildcard>`
- `rule 5 deny ip source <ip> <wildcard> destination <ip> <wildcard>`
- `rule deny tcp source <ip> <wildcard> destination <ip> <wildcard> destination-port eq 80`
- `rule deny tcp ... destination-port range 1000 2000`（同样支持 `gt` / `lt`）
- `rule deny icmp source <ip> <wildcard> destination <ip> <wildcard> icmp-type echo`
  （也接受数字写法，如 `icmp-type 8`）
- `undo rule 5`
- `undo acl 3000`
- `traffic-filter inbound|outbound acl 3000`
- `undo traffic-filter inbound`
- `display acl` / `display acl 3000`
- `display traffic-filter applied-record`
- `reset acl counter`

说明：目前 ACL 模拟已覆盖 IP 源 / 目的、TCP 常见端口（支持别名如 `www`、`ftp`、`telnet`、`dns`）和 ICMP 类型；时间段、复杂对象组等高级行为仍属于简化模拟。

---

## 常用 CLI 示例

### VRP Console

```text
display this
display current-configuration
display ip interface brief
display routing-table
display acl
display traffic-filter applied-record
reset acl counter
system-view
sysname AR-Core
interface g0/0/0
ip address 192.168.1.1 24
undo shutdown
quit
ospf 1
area 0
network 192.168.1.0 0.0.0.255
ip route-static 0.0.0.0 0.0.0.0 192.168.1.254
undo ip route-static 0.0.0.0 0.0.0.0 192.168.1.254
undo ip address
ping PC1
```

缩写示例：

```text
sys
int g0/0/0
ip add 192.168.1.1 24
un sh
dis ip int br
q
```

### PC / Client / Server Console

```text
ipconfig /all
ping Web_Server
nslookup www.lab.local
http www.lab.local/index.html
ftp ftp.lab.local
services
arp -a
route print
clear
```

---

## 鼠标和快捷键

| 操作 | 说明 |
|---|---|
| 鼠标中键拖动 | 平移拓扑画布 |
| 鼠标滚轮 | 以鼠标所在位置缩放画布 |
| Ctrl + 左键 | 多选或取消选择设备 / 文本 |
| 拖动画布空白处 | 框选设备和文本 |
| Delete | 删除选中的设备、链路或文本 |
| Ctrl + C / V | 复制选中设备和内部链路 / 粘贴 |
| Ctrl + Z / Y | 撤销 / 重做（也可用 Ctrl+Shift+Z） |
| Ctrl + A | 选择全部设备 |
| Ctrl + S | 保存项目 |
| Ctrl + 0 | 适配画布 |
| Ctrl + = / - | 放大 / 缩小 |
| `?` | 打开快捷键帮助面板 |
| Esc | 取消当前连线、Ping、弹窗选择或选区 |

---

## 实验模板

左侧「实验模板」包含：

- OSPF 实验
- ACL 实验
- Trunk 口和单臂路由实验
- 静态路由实验

模板会尽量预置 IP、链路、接口和关键配置，方便直接进入验证阶段。

---

## 仿真逻辑

- 跨网段 Ping、HTTP、FTP 会参考终端网关、路由器直连网段和 `ip route-static`。
- OSPF/RIP/ISIS/BGP 等已启用的同协议路由域会做基础动态可达性判断。
- 静态路由的下一跳需要位于本设备某个直连接口网段，否则不会被认为有效。
- Console 线只表示管理连接，不参与 Ping、HTTP、FTP 转发路径。
- Access/Trunk 端口会做基础 VLAN 兼容判断，支持 `allow-pass vlan all`、`10 to 20` 范围和单臂路由子接口 `dot1q termination vid`；未配置 `allow-pass` 的 trunk 口默认只放行 VLAN 1。
- DNS 解析会先检查 Client 到 DNS Server 的可达性，路由或 ACL 阻断时不会返回记录。
- Ping 会同时检查正向 `icmp echo` 和返回方向 `icmp echo-reply` 的 ACL。
- HTTP/FTP 会按 TCP 目的端口匹配 ACL；FTP 会分别检查 21 控制连接和 20 数据连接。

---

## 数据持久化

应用使用浏览器 `localStorage` 保存：

- 当前拓扑和自动保存状态。
- 命名项目和历史项目。
- 设备、链路、文本标注、报文、事件。
- 面板收起状态、底部面板高度、画布缩放和滚动位置。
- 已打开设备窗口的位置。

注意：

- 浏览器站点数据被清理后，本地项目会丢失。重要实验建议使用顶部「下载 / 导出」保存 JSON 备份。
- 保存时若遇到存储配额不足，会自动淘汰最旧的历史项目并提示；仍失败时可减少 Server 目录文件数量或改用「下载」导出 JSON。

---

## 当前限制与后续方向

### 当前限制

- 本项目是教学和原型用途的 Web 模拟器，不包含真实 Huawei VRP 镜像。
- 不启动 VirtualBox、QEMU 或真实虚拟网络设备。
- 路由、ACL、DNS、HTTP、FTP、Ping 等均为前端逻辑模拟，不等同真实数据平面。
- eNSP 工程解析以常见 `.topo`、`PC.xml`、`vrpcfg.cfg` 信息为主，特殊字段可能需要继续适配。
- 本地文件夹选择受浏览器安全限制，不能长期持有真实绝对路径授权。

### 后续方向

见 [CHANGELOG.md 的未来计划](./CHANGELOG.md#-未来计划)，主要包括：暗色主题、对齐辅助线、批量配置、IndexedDB 存储、导出图片、实验引导系统、命令历史搜索等。
