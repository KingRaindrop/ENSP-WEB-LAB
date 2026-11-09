# eNSP Web Lab 逻辑审查报告

审查范围：app.js（约 6400 行）核心逻辑。按严重程度分组，每条含位置、问题与修复建议。

> **修复状态（v1.1.0，2026-11-09）**
>
> 本报告为历史审查记录，保留原始描述以便追溯。当前状态：
>
> | 编号 | 状态 | 说明 |
> |---|---|---|
> | H1 / H2 / H3 | ✅ 已修复 | trunk 默认 VLAN 1；OSPF / DHCP 池解析；配置全量重置 |
> | M1 – M6 | ✅ 已修复 | ACL range/gt/lt、`undo rule`、`icmp-type` 数字、存档迁移、计数器、接口名映射 |
> | L1 / L2 / L4 / L9 | ✅ 已修复 | ACL 还原 range、端口别名、`undo vlan batch`、保存配额 |
> | L3 / L5 / L6 / L7 / L8 / L10 | ⏳ 未处理 | 见下方各条目，属仿真简化或边界场景，记录于 CHANGELOG「已知遗留」 |
>
> 本次同时修复了审查后引入的 2 个回归缺陷（接口下 `ospf enable` 打断解析、云端按钮永久禁用），
> 以及多处 HTML 注入点，详见 [CHANGELOG.md](./CHANGELOG.md)。

## 高危

### H1 · 未配置的 trunk 被当作放行所有 VLAN（跨 VLAN 串通）
- 位置：app.js:4124、app.js:987、app.js:1512-1513、app.js:3801-3802
- 问题：interfaceAllowedVlans 对 trunkAllow 为空数组时兜底返回 new Set(["*"])，即放行所有 VLAN。而接口初始化时 trunkAllow:[]，port link-type trunk 命令也不写入默认 VLAN 1。于是仅执行了 port link-type trunk 而未配 port trunk allow-pass vlan 的 trunk 口被判定为放行所有 VLAN，linkVlanCompatible 直接返回 true，导致接入侧 access VLAN10/20 经两个空 trunk 互联时 VLAN 间互通，违反 VLAN 隔离。华为默认：trunk 口默认只放行 VLAN 1。
- 建议：port link-type trunk 时把 trunkAllow 初始化为 ["1"]；interfaceAllowedVlans 空值兜底由 ["*"] 改为 ["1"]，仅在显式 allow-pass vlan all 时才放行所有。

### H2 · parseConfig 缺失全局 OSPF / DHCP 地址池解析
- 位置：app.js:3493、app.js:3436-3522
- 问题：parseConfig 对全局 ospf <进程> router-id、area <区>、network <网段> <反掩码>，以及 ip pool <名>/network/gateway-list/dns-list 全部没有解析逻辑。3493 行 if (line.startsWith("ospf")) node.protocols.OSPF = true; 只置协议标志，进程号、router-id、area、networks、DHCP pool 全部丢失。而 buildConfig（3353、3362 行）正是按这些字段序列化的，导致导出后再导入丢失 OSPF 网段与 DHCP 地址池。
- 建议：参照 runVrpWindowCommand（1528-1559）的会话式解析，在 parseConfig 内增加对 ospf/area/network/ip pool/gateway-list/dns-list 的状态机解析。

### H3 · parseConfig 只增不删，应用配置无法反映删除
- 位置：app.js:3434-3435、app.js:3455-3492
- 问题：函数开头仅重置 node.routes = [] 与 node.acls = {}，接口属性（ip/mask/vlan/linkType/trunkAllow/dot1q/ospf/dhcpSelect/desc/status/trafficFilters 等）、node.vlans、node.ospf.networks、node.dhcpPools、node.stp、services、node.protocols 等一律不清零。逐行出现则覆盖、不出现则保留旧值。例如用户在配置编辑器删除某接口的 ip address 行后 applyConfig，旧 IP 不会被清空；删除 port default vlan 行旧 vlan 也保留。VRP 语义应为配置即全量。
- 建议：parseConfig 入口对接口属性、ospf、dhcp pools、vlans、protocols、services 做一次干净重置（保留接口名定义），再逐行回填。

## 中危

### M1 · ACL 端口 range/gt/lt 不支持，规则静默失效
- 位置：app.js:1775-1780、app.js:1791-1793、app.js:2659-2661
- 问题：parseAclRule 处理 source-port/destination-port 时仅判断 eq：index += parts[index+1]?.toLowerCase()==="eq" ? 3 : 2。对 range A B 会把 range 当端口号返回 "range"，且只前进 2 个 token，A/B 成游离 token 被逐步跳过。最终该规则 aclPortMatches 用 normalizeAclPort("range") 与流端口比较永不相等，形成死规则。gt/lt 同理。
- 建议：parseAclPort/索引推进显式支持 range（取两个端口）与 gt/lt，并在 aclPortMatches 实现区间/比较语义；解析失败时应丢弃规则并提示而非静默写坏数据。

### M2 · undo rule 无序号会清空整个 ACL
- 位置：app.js:1870-1876
- 问题：const seq = Number(lower.split(/\s+/)[2])，输入 undo rule（无序号）时 seq 为 NaN，Number.isFinite(seq) 为 false，于是执行 acl.rules = []，整条 ACL 全部规则被清空。华为设备上 undo rule 不带序号应报错而非清空全部。
- 建议：无序号时返回 { handled: true, error: "Error: ACL rule number is required." }，不执行清空。

### M3 · icmp-type 数字编码不被识别
- 位置：app.js:1781-1783、app.js:2664-2667
- 问题：解析时 rule.icmpType = parts[index+1]?.toLowerCase() 保留字面值，而流对象里 icmpType 用名称 "echo"/"echo-reply"。用户按华为数字写法 icmp-type 8/icmp-type 0 时，aclIcmpTypeMatches 比较 "8"==="echo" 永不相等，该 icmp-type 规则对 ping 永不命中，与命名写法行为不一致。
- 建议：在 parseAclRule 或 aclIcmpTypeMatches 建立 8↔echo、0↔echo-reply 数字↔名称映射统一比较。

### M4 · migrateSavedNode 迁移不完整，加载旧版存档会崩
- 位置：app.js:6053-6062
- 问题：仅处理 pc+model=client 特殊情况并补 ensureAclStore/ensureServerServices。旧版（LEGACY_STORAGE_KEY）节点很可能缺少 ospf/stp/dhcpPools/securityZones/trunkPorts/modeCommand/users/userInterfaces 等字段，随后 buildConfig（3353 node.ospf.areas）会因 node.ospf 为 undefined 抛错。
- 建议：在 migrateSavedNode 中补默认结构（node.ospf ??= {process:"",routerId:"",areas:[],networks:[]} 等），等价于对每个节点跑一次 addDevice 默认形状的兜底合并。

### M5 · hydrate 计数器被旧值覆盖，新建设备 ID 与现有节点冲突
- 位置：app.js:6041
- 问题：state.counters = { node: state.nodes.length+1, …, ...(data.counters||{}) } 展开顺序使保存的 data.counters 覆盖由实际节点数推算出的默认值。若存档 counters.node 小于实际节点数（手工编辑或多次导入累积），下次 addDevice 拿到的 ID 可能与已存在节点撞号。
- 建议：取较大值而非直接覆盖，{ node: Math.max(state.nodes.length+1, data.counters?.node||0), … }。

### M6 · ensPInterfaceDisplayName 正则优先级错误 + 兜底写出非法接口名
- 位置：app.js:5339、app.js:5343
- 问题：if (/^GE|GigabitEthernet/i.test(text)) return "GE"; 因 | 优先级低于锚点，实际等价于 (?:^GE)|(?:GigabitEthernet)，命名变体下逻辑脆弱；兜底 text.replace(/[0-9/.-]+$/g,"") 对 GigabitEthernet0/0/1 会返回 GigabitEthernet0/0/（含分隔符），写入 <interface interfacename="GigabitEthernet0/0/"> 会被 eNSP 识别失败。
- 建议：改为 if (/^(GE|GigabitEthernet)/i.test(text)) return "GE"; 并确保兜底分支返回 eNSP 合法枚举（GE/10GE/Serial/Ethernet/WLAN）。

## 低危

### L1 · formatAclRule 仅还原 eq 形式
- 位置：app.js:1801-1808
- 问题：固定输出 source-port eq …/destination-port eq …，无法还原 range，掩盖 M1 的 range 问题。建议与 M1 一并修复格式化分支。

### L2 · normalizeAclPort 端口别名不全
- 位置：app.js:1796-1798
- 问题：仅映射 www/http/https/ftp/ftp-data/dns，缺 telnet(23)/tftp(69) 等；流侧为数字、规则侧为别名时可能因映射缺失导致本应命中规则不命中。建议补全常用别名表。

### L3 · 出口 TCP 流量未建模源端口
- 位置：app.js:2559-2601
- 问题：endpointReachabilityStatus 对 HTTP/FTP/DNS 等只设 destinationPort，未给出口流量赋 sourcePort（临时端口），returnFlow 才用 destinationPort 填 sourcePort。因此 rule permit tcp source-port eq <ephemeral> 在正向流量上永不命中。属仿真简化限制。建议在文档/提示说明，或为 TCP 流补固定/随机源端口。

### L4 · undo vlan batch 处理错误
- 位置：app.js:1987-1990
- 问题：/^undo\s+vlan\s+\d+/.test(lower) 只匹配单 vlan，命中时 cmd.split(/\s+/).pop() 取末尾 token。对 undo vlan batch 10 to 20 取到 20，只删 20，与 VRP 语义不符。建议复用 parseVlanList 解析剩余部分逐一从 node.vlans 移除。

### L5 · getAdjacency 仅按引用+长度缓存，原地改端点会返回脏索引
- 位置：app.js:130-142
- 问题：缓存新鲜度只看 state.links 引用与长度。若将来原地改写某链路 a/b 而引用与长度不变，getAdjacency 返回旧邻接表。当前由 addLink/splice 保证长度变化，风险有限但存在隐患。建议凡修改链路 a/b 处调用 rebuildLinkIndex()，或给缓存加端点轻量 hash 签名。

### L6 · parseVrpTranscriptBundle 检测过严
- 位置：app.js:5705
- 问题：检测式要求行首有 <…>/[…] 提示符紧接 VRP 命令。只有 sysname/interface 等命令、无提示符的纯配置文本不会被识别为 bundle，会被抛给 parseTextTopology 误造节点或抛错。建议放宽检测，允许任意命令行以 sysname|interface|ip route-static|acl|rule|traffic-filter|ospf|network 开头即判定为 bundle。

### L7 · parentFolderNameFromPath 对扁平 ZIP 取不到设备 GUID
- 位置：app.js:5618-5620、app.js:5508-5533
- 问题：ZIP 把 PC.xml/vrpcfg.zip 直接放根目录、未按 工程名/GUID/ 子目录组织时，parentFolderNameFromPath 返回空串，配置被静默跳过，导入结果有拓扑无配置。建议对无父目录的配置文件回退到文件名或单设备匹配，或给出明确提示。

### L8 · serialize 返回实时 state 引用
- 位置：app.js:6012-6026
- 问题：直接返回 state.nodes/state.project/state.stage/state.annotations 原引用，未深拷贝。当前所有调用方立刻 JSON.stringify 暂无污染，但一旦后续逻辑持有返回值并异步修改 state 会出现保存内容随 state 变化的隐式 bug。建议文档化须即时 stringify 或深拷贝。

### L9 · saveProject 未捕获 localStorage 配额异常
- 位置：app.js:5045-5055
- 问题：localStorage.setItem 超配额时抛 QuotaExceededError，scheduleAutosave 有 try/catch 但 saveProject 没有，会冒泡到 UI 按钮。建议给两条 setItem 包 try/catch，失败时 toast 提示并清理最旧历史项目。

### L10 · vrpcfg.cfg 以 UTF-8 存入，eNSP 期望 GBK
- 位置：app.js:5381、app.js:5671-5677
- 问题：导出用 TextEncoder（UTF-8）写 cfg，但导入侧 decodeConfigText 用 gb18030 解码，说明平台约定 cfg 为 GBK。导入回本平台正常，但真实 eNSP 解析中文会乱码。建议导出 cfg 时优先 GB18030 编码，或对纯 ASCII 配置忽略此问题。

## 已确认正确的部分（无需修改）

- 路由 BFS findPath/findPathByLinkPredicate：path.length <= nodes*2 与 pathCanVisit（switch/hub 可访问 2 次）配合，环形拓扑路径查找正确；physicalFallback 仅在同网段（无 IP 路由上下文）时返回，跨网段路由失败时正确返回空。
- routeAllowsPath/endpointHasExit：源与目的端点对称检查默认网关，同网段直接放行，跨网段需网关出现在路径上，语义正确。
- routeNextHopReachable：静态路由下一跳必须位于本设备直连接口网段，再在下游路径节点中验证下一跳 IP 可达，符合华为直连下一跳约束。
- dynamicRouteAlongPath：要求从当前节点到目的的所有路由节点都启用同一协议（同域全链路），合理。
- aclBlocksPath/interfaceToward：中间节点同时检查 inbound（入接口朝 prev）与 outbound（出接口朝 next），源端只查出站、宿端只查入站，方向语义正确。
- findAclMatch：按 seq 升序命中即停，无规则默认 permit，与华为一致。
- aclProtocolMatches：ip 通配协议匹配一切，tcp/udp/icmp 精确匹配。
- ipMatchesWildcard：精确匹配走字符串相等，通配走 (ip&~wildcard)===(rule&~wildcard)，符合华为通配符语义。
- Ping 双向 ACL 检查：endpointReachabilityStatus 正向 icmpType:echo、返回流 icmpType:echo-reply 分别调用 aclBlocksPath，覆盖往返两段。
- HTTP/FTP/DNS：按 TCP 目的端口匹配 ACL，FTP 分 21 控制连接与 20 数据连接分别检查；resolveDnsName 先检查 Client 到 DNS Server 的可达性，路由或 ACL 阻断时不返回记录。
- sameSubnet/ipInNetwork/networkOf/maskToPrefix：子网计算正确（含 32 位掩码与前缀/点分互转）。
- CRC32/Stored ZIP/eNSP topo 生成：结构合法，本机可解压。

## 总体评价

代码整体质量较高，路由/ACL/Ping 仿真框架设计正确；核心缺陷集中在三处：① trunk 默认放行所有 VLAN 造成跨 VLAN 串通（H1），② parseConfig 缺失全局 OSPF/DHCP 解析且只增不删（H2/H3）；其余多为 ACL 解析分支静默失效（M1-M3）与导入导出/持久化的边界健壮性问题。