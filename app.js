const catalog = [
  { type: "router", model: "AR2220", title: "路由器", glyph: "AR", color: "#2463ad", cpu: 12, mem: 18, ports: ["GE0/0/0", "GE0/0/1", "GE0/0/2", "Serial0/0/0"], protocols: ["OSPF", "RIP", "Static", "NAT", "VRRP"] },
  { type: "switch", model: "S5700", title: "二层交换机", glyph: "SW", color: "#167c51", cpu: 8, mem: 12, ports: ["GE0/0/1", "GE0/0/2", "GE0/0/3", "GE0/0/4", "GE0/0/5", "GE0/0/6"], protocols: ["VLAN", "STP", "MSTP", "LACP"] },
  { type: "l3switch", model: "S7700", title: "三层交换机", glyph: "L3", color: "#158f80", cpu: 14, mem: 20, ports: ["GE1/0/1", "GE1/0/2", "GE1/0/3", "GE1/0/4", "Vlanif10", "Vlanif20"], protocols: ["VLAN", "STP", "OSPF", "VRRP", "ACL"] },
  { type: "firewall", model: "USG6000V", title: "防火墙", glyph: "FW", color: "#b91c1c", cpu: 18, mem: 26, ports: ["GE0/0/0", "GE1/0/0", "GE1/0/1", "GE1/0/2"], protocols: ["Security-Zone", "ACL", "NAT", "IPSec", "Policy"] },
  { type: "ac", model: "AC6605", title: "无线控制器", glyph: "AC", color: "#6b4fb3", cpu: 11, mem: 17, ports: ["GE0/0/1", "GE0/0/2", "Wlan-Bss1", "Wlan-Bss2"], protocols: ["CAPWAP", "WLAN", "VLAN", "AAA"] },
  { type: "ap", model: "AP6050DN", title: "无线 AP", glyph: "AP", color: "#7c3aed", cpu: 6, mem: 9, ports: ["GE0/0/0", "WLAN-Radio0", "WLAN-Radio1"], protocols: ["CAPWAP", "SSID", "WPA2"] },
  { type: "pc", model: "PC", title: "终端 PC", glyph: "PC", color: "#475569", cpu: 3, mem: 5, ports: ["Ethernet0/0/1"], protocols: ["ICMP", "DHCP", "DNS"] },
  { type: "client", model: "Client", title: "客户端", glyph: "CT", color: "#334155", cpu: 3, mem: 5, ports: ["Ethernet0/0/1"], protocols: ["ICMP", "DHCP", "DNS", "HTTP Client"] },
  { type: "server", model: "Server", title: "服务器", glyph: "SV", color: "#a16207", cpu: 9, mem: 16, ports: ["Ethernet0/0/1", "Ethernet0/0/2"], protocols: ["HTTP", "DNS", "DHCP", "FTP"] },
  { type: "cloud", model: "Cloud", title: "云/公网", glyph: "CL", color: "#0f766e", cpu: 5, mem: 8, ports: ["GE0/0/0", "GE0/0/1", "WAN0"], protocols: ["WAN", "NAT", "GRE"] },
  { type: "hub", model: "Hub", title: "集线器", glyph: "HB", color: "#64748b", cpu: 2, mem: 4, ports: ["E0/1", "E0/2", "E0/3", "E0/4"], protocols: ["Ethernet"] },
  { type: "router", model: "AR1220", title: "接入路由器", glyph: "AR", color: "#2463ad", cpu: 10, mem: 15, ports: ["GE0/0/0", "GE0/0/1", "GE0/0/2"], protocols: ["OSPF", "RIP", "Static", "NAT"] },
  { type: "router", model: "AR2240", title: "企业路由器", glyph: "AR", color: "#1d4ed8", cpu: 15, mem: 22, ports: ["GE0/0/0", "GE0/0/1", "GE0/0/2", "GE0/0/3", "Serial0/0/0"], protocols: ["OSPF", "BGP", "Static", "NAT", "VRRP"] },
  { type: "router", model: "AR3260", title: "高性能路由器", glyph: "AR", color: "#1e40af", cpu: 18, mem: 28, ports: ["GE0/0/0", "GE0/0/1", "GE0/0/2", "GE0/0/3", "GE0/0/4", "Serial0/0/0"], protocols: ["OSPF", "ISIS", "BGP", "MPLS", "VRRP"] },
  { type: "router", model: "NE40E", title: "运营商路由器", glyph: "NE", color: "#1f4f99", cpu: 20, mem: 30, ports: ["GE0/0/0", "GE0/0/1", "10GE0/0/0", "10GE0/0/1"], protocols: ["OSPF", "ISIS", "BGP", "MPLS", "LDP"] },
  { type: "switch", model: "S3700", title: "接入交换机", glyph: "SW", color: "#167c51", cpu: 6, mem: 10, ports: ["GE0/0/1", "GE0/0/2", "GE0/0/3", "GE0/0/4"], protocols: ["VLAN", "STP", "MSTP"] },
  { type: "switch", model: "S5720", title: "千兆交换机", glyph: "SW", color: "#15803d", cpu: 9, mem: 13, ports: ["GE0/0/1", "GE0/0/2", "GE0/0/3", "GE0/0/4", "GE0/0/5", "GE0/0/6", "10GE0/0/1"], protocols: ["VLAN", "STP", "MSTP", "LACP"] },
  { type: "switch", model: "S6720", title: "万兆交换机", glyph: "10G", color: "#047857", cpu: 12, mem: 18, ports: ["10GE0/0/1", "10GE0/0/2", "10GE0/0/3", "10GE0/0/4", "GE0/0/1"], protocols: ["VLAN", "STP", "MSTP", "LACP", "Stack"] },
  { type: "l3switch", model: "CE6800", title: "数据中心交换机", glyph: "CE", color: "#0f766e", cpu: 18, mem: 26, ports: ["10GE1/0/1", "10GE1/0/2", "10GE1/0/3", "40GE1/0/1", "Vlanif10"], protocols: ["VLAN", "STP", "OSPF", "BGP", "EVPN"] },
  { type: "firewall", model: "USG5500", title: "企业防火墙", glyph: "FW", color: "#991b1b", cpu: 14, mem: 22, ports: ["GE0/0/0", "GE0/0/1", "GE0/0/2"], protocols: ["Security-Zone", "ACL", "NAT", "IPSec", "Policy"] },
  { type: "firewall", model: "USG6600", title: "下一代防火墙", glyph: "FW", color: "#7f1d1d", cpu: 20, mem: 32, ports: ["GE0/0/0", "GE1/0/0", "GE1/0/1", "GE1/0/2", "10GE1/0/0"], protocols: ["Security-Zone", "ACL", "NAT", "IPSec", "Policy", "UTM"] },
  { type: "ac", model: "AC6005", title: "小型无线控制器", glyph: "AC", color: "#6d28d9", cpu: 9, mem: 14, ports: ["GE0/0/1", "GE0/0/2", "Wlan-Bss1"], protocols: ["CAPWAP", "WLAN", "VLAN", "AAA"] },
  { type: "ap", model: "AP4050DN", title: "室内 AP", glyph: "AP", color: "#7c3aed", cpu: 5, mem: 8, ports: ["GE0/0/0", "WLAN-Radio0", "WLAN-Radio1"], protocols: ["CAPWAP", "SSID", "WPA2"] },
  { type: "ap", model: "AP5030DN", title: "双频 AP", glyph: "AP", color: "#8b5cf6", cpu: 6, mem: 9, ports: ["GE0/0/0", "WLAN-Radio0", "WLAN-Radio1"], protocols: ["CAPWAP", "SSID", "WPA2", "Roaming"] },
  { type: "cloud", model: "FrameRelay", title: "帧中继云", glyph: "FR", color: "#0f766e", cpu: 4, mem: 6, ports: ["Serial0", "Serial1", "Serial2"], protocols: ["WAN", "Frame-Relay"] },
  { type: "cloud", model: "ATM", title: "ATM 云", glyph: "ATM", color: "#115e59", cpu: 4, mem: 6, ports: ["ATM0", "ATM1", "ATM2"], protocols: ["WAN", "ATM"] },
  { type: "cloud", model: "Internet", title: "Internet 云", glyph: "NET", color: "#0e7490", cpu: 4, mem: 6, ports: ["GE0/0/0", "GE0/0/1", "WAN0"], protocols: ["WAN", "NAT", "DNS"] },
  { type: "pc", model: "Laptop", title: "无线/有线终端", glyph: "NB", color: "#475569", cpu: 3, mem: 5, ports: ["Ethernet0/0/1", "WLAN0"], protocols: ["ICMP", "DHCP", "DNS", "WLAN"] },
  { type: "pc", model: "STA", title: "无线 STA", glyph: "STA", color: "#52525b", cpu: 3, mem: 5, ports: ["WLAN0"], protocols: ["ICMP", "DHCP", "WLAN"] },
  { type: "server", model: "DHCP Server", title: "DHCP 服务器", glyph: "DH", color: "#a16207", cpu: 8, mem: 15, ports: ["Ethernet0/0/1"], protocols: ["DHCP", "DNS"] },
  { type: "server", model: "HTTP Server", title: "Web 服务器", glyph: "WEB", color: "#92400e", cpu: 9, mem: 16, ports: ["Ethernet0/0/1"], protocols: ["HTTP", "DNS", "FTP"] }
];

const labs = [
  { id: "devices", title: "搭建基础拓扑", desc: "放置不少于 4 台设备。", done: () => state.nodes.length >= 4 },
  { id: "links", title: "完成物理连接", desc: "建立不少于 3 条可用链路。", done: () => state.links.filter((l) => linkEffectiveStatus(l) === "up").length >= 3 },
  { id: "ip", title: "配置接口地址", desc: "至少 2 个接口拥有 IPv4 地址。", done: () => state.nodes.flatMap((n) => n.interfaces).filter((i) => i.ip).length >= 2 },
  { id: "run", title: "启动设备", desc: "全部设备处于运行状态。", done: () => state.nodes.length > 0 && state.nodes.every((n) => n.running) },
  { id: "protocol", title: "启用协议", desc: "启用 VLAN、OSPF、NAT、WLAN 等任意 2 类功能。", done: () => enabledProtocols().length >= 2 },
  { id: "ping", title: "业务验证", desc: "完成一次成功的 Ping 探测。", done: () => state.packets.some((p) => p.result === "Success") }
];

const labTemplates = [
  { id: "lab-ospf", title: "OSPF 实验", desc: "三路由 OSPF 区域 0，双终端互通验证。" },
  { id: "lab-acl", title: "ACL 实验", desc: "内网访问服务器，预置 ACL 规则与验证目标。" },
  { id: "lab-trunk-stick", title: "Trunk 口和单臂路由", desc: "VLAN10/20、交换机 Trunk、路由器子接口。" },
  { id: "lab-static", title: "静态路由实验", desc: "两端 LAN 通过双路由静态路由互通。" }
];

const $ = (id) => document.getElementById(id);
const deviceCategories = [
  { id: "router", label: "路由器", types: ["router"] },
  { id: "switch", label: "交换机", types: ["switch", "l3switch"] },
  { id: "security", label: "安全", types: ["firewall"] },
  { id: "wlan", label: "WLAN", types: ["ac", "ap"] },
  { id: "endpoint", label: "终端", types: ["pc", "client", "server"] },
  { id: "other", label: "云与其他", types: ["cloud", "hub"] }
];
const STORAGE_KEY = "ensp-web-lab-autosave-v2";
const LEGACY_STORAGE_KEY = "ensp-web-lab";
const PROJECTS_KEY = "ensp-web-lab-projects-v2";
const UI_STATE_KEY = "ensp-web-lab-ui-v1";
const SERVER_FOLDER_MAX_FILES = 180;
const SERVER_FILE_PREVIEW_LIMIT = 64 * 1024;
const SERVER_FOLDER_CONTENT_BUDGET = 768 * 1024;
const state = {
  project: {
    id: "enterprise-campus",
    name: "EnterpriseCampus.lab",
    createdAt: new Date().toISOString(),
    updatedAt: ""
  },
  nodes: [],
  deviceCategory: "router",
  links: [],
  annotations: [],
  packets: [],
  events: [],
  stage: { width: 1800, height: 1100 },
  selected: null,
  multiSelected: [],
  multiAnnotations: [],
  clipboard: null,
  history: [],
  redoHistory: [],
  historyRestoring: false,
  lastHistoryJson: "",
  pendingOpenWindows: [],
  tool: "select",
  pendingLink: null,
  pendingPing: null,
  zoom: 1,
  running: false,
  seconds: 0,
  counters: { node: 1, link: 1, packet: 1, text: 1 },
  cliMode: "user",
  cliInterface: null,
  cliVlan: null,
  cliOspf: null,
  cliArea: null,
  cliAcl: null,
  cliPool: null,
  cliUserInterface: null,
  cliHistory: [],
  cliIndex: 0,
  contextPingSource: null
};

let drag = null;
let lasso = null;
let windowDrag = null;
let stagePan = null;
let annotationDrag = null;
let consoleResize = null;
let ticker = null;
let persistTimer = null;
let uiStateTimer = null;
let suppressStageClick = false;
let suppressNodeClick = false;
let suppressAnnotationClick = false;
let flashingLinks = new Set();

// 链路邻接索引：链路的端点(a/b)成员关系只在 push / 数组重建时变化，
// 因此用 (数组引用 + 长度) 作为新鲜度签名即可自动失效，无需在每个变更点手动维护。
let _adjacency = null;
let _adjRef = null;
let _adjLen = -1;

function getAdjacency() {
  if (_adjacency && _adjRef === state.links && _adjLen === state.links.length) return _adjacency;
  const map = new Map();
  state.links.forEach((link) => {
    if (!map.has(link.a)) map.set(link.a, []);
    if (!map.has(link.b)) map.set(link.b, []);
    map.get(link.a).push(link);
    map.get(link.b).push(link);
  });
  _adjacency = map;
  _adjRef = state.links;
  _adjLen = state.links.length;
  return map;
}

function linksAt(nodeId) {
  return getAdjacency().get(nodeId) || [];
}

function linksOf(nodeId, predicate = null) {
  const links = linksAt(nodeId);
  return predicate ? links.filter(predicate) : links;
}

function linkBetween(aId, bId, predicate = null) {
  return linksAt(aId).find((link) => {
    if (!((link.a === aId && link.b === bId) || (link.a === bId && link.b === aId))) return false;
    return predicate ? predicate(link) : true;
  }) || null;
}

function rebuildLinkIndex() {
  _adjacency = null;
  _adjRef = null;
  _adjLen = -1;
}

function init() {
  bindToolbar();
  loadUiState();
  renderDeviceCategories();
  renderPalette();
  renderLabs();
  loadClientIp();
  loadSaved() || loadTemplate("campus");
  updateProjectTitle();
  restoreOpenWindows();
  addTerminal("eNSP Web Lab ready. 输入 help 查看可用 VRP 风格命令。", "ok");
  setInterval(updateMeters, 1600);
}

function bindToolbar() {
  ["select", "link", "text", "delete"].forEach((tool) => {
    $(`${tool}Tool`).addEventListener("click", () => setTool(tool));
  });
  $("startBtn").addEventListener("click", startSimulation);
  $("pauseBtn").addEventListener("click", pauseSimulation);
  $("resetBtn").addEventListener("click", () => loadTemplate("campus"));
  $("saveBtn").addEventListener("click", saveProject);
  $("exportBtn").addEventListener("click", exportProject);
  $("exportEnsPBtn")?.addEventListener("click", exportEnsPFolder);
  $("importBtn")?.addEventListener("click", () => $("importFile").click());
  $("importFile")?.addEventListener("change", importProject);
  $("importFolderBtn").addEventListener("click", showImportMenu);
  $("importFolder").addEventListener("change", importEnsPFolder);
  $("toggleLeftPanel").addEventListener("click", () => togglePanel("left"));
  $("toggleRightPanel").addEventListener("click", () => togglePanel("right"));
  $("deviceSearch").addEventListener("input", renderPalette);
  $("zoomIn").addEventListener("click", () => zoomAtViewportCenter(state.zoom + 0.1));
  $("zoomOut").addEventListener("click", () => zoomAtViewportCenter(state.zoom - 0.1));
  $("fitBtn").addEventListener("click", fitStage);
  $("cliForm").addEventListener("submit", submitCli);
  $("applyConfig").addEventListener("click", applyConfig);
  $("copyConfig").addEventListener("click", copyConfig);
  $("downloadConfig").addEventListener("click", downloadConfig);
  $("stage").addEventListener("click", clearSelection);
  $("stage").addEventListener("mousedown", startLasso);
  $("stageViewport").addEventListener("mousedown", startStagePan);
  $("stageViewport").addEventListener("wheel", zoomWithWheel, { passive: false });
  $("stageViewport").addEventListener("scroll", scheduleUiStateSave, { passive: true });
  document.querySelector(".bottom-console").addEventListener("mousedown", startBottomPanelResize);
  $("toggleBottomPanel").addEventListener("click", toggleBottomPanel);
  $("stageViewport").addEventListener("dragover", (event) => event.preventDefault());
  $("stageViewport").addEventListener("drop", dropDevice);
  $("cliInput").addEventListener("keydown", cliKeydown);
  document.addEventListener("click", hideContextMenu);
  document.querySelectorAll(".tab").forEach((tab) => tab.addEventListener("click", () => setTab(tab.dataset.tab)));
  document.querySelectorAll("[data-template]").forEach((btn) => btn.addEventListener("click", () => loadTemplate(btn.dataset.template)));
  document.addEventListener("mousemove", onDragMove);
  document.addEventListener("mousemove", onLassoMove);
  document.addEventListener("mousemove", onWindowDrag);
  document.addEventListener("mousemove", onStagePan);
  document.addEventListener("mousemove", onAnnotationDrag);
  document.addEventListener("mousemove", onBottomPanelResize);
  document.addEventListener("mouseup", stopDrag);
  document.addEventListener("mouseup", stopLasso);
  document.addEventListener("mouseup", stopWindowDrag);
  document.addEventListener("mouseup", stopStagePan);
  document.addEventListener("mouseup", stopAnnotationDrag);
  document.addEventListener("mouseup", stopBottomPanelResize);
  document.addEventListener("keydown", handleGlobalHotkeys);
  window.addEventListener("resize", renderAll);
}

function renderPalette() {
  const q = $("deviceSearch").value.trim().toLowerCase();
  const category = deviceCategories.find((item) => item.id === state.deviceCategory) || deviceCategories[0];
  $("devicePalette").innerHTML = "";
  catalog
    .filter((d) => category.types.includes(d.type))
    .filter((d) => [d.model, d.title, d.type, d.protocols.join(" ")].join(" ").toLowerCase().includes(q))
    .forEach((d) => {
      const btn = document.createElement("button");
      btn.className = "palette-item";
      btn.draggable = true;
      btn.innerHTML = `<span class="icon" style="background:${d.color}">${d.glyph}</span><span><strong>${d.model}</strong><span>${d.title} · ${d.protocols.slice(0, 3).join("/")}</span></span><small>${d.ports.length}口</small>`;
      btn.addEventListener("click", () => addDevice(d.type, null, { model: d.model }));
      btn.addEventListener("dragstart", (event) => event.dataTransfer.setData("text/ensp-device", d.type));
      btn.addEventListener("dragstart", (event) => event.dataTransfer.setData("text/ensp-model", d.model));
      $("devicePalette").appendChild(btn);
    });
}

function renderDeviceCategories() {
  $("deviceCategories").innerHTML = deviceCategories.map((category) => `<button data-category="${category.id}" class="${category.id === state.deviceCategory ? "active" : ""}">${category.label}</button>`).join("");
  document.querySelectorAll("[data-category]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.deviceCategory = btn.dataset.category;
      renderDeviceCategories();
      renderPalette();
    });
  });
}

function dropDevice(event) {
  event.preventDefault();
  const type = event.dataTransfer.getData("text/ensp-device");
  const model = event.dataTransfer.getData("text/ensp-model");
  if (!type) return;
  const point = stagePoint(event);
  addDevice(type, { x: point.x - 48, y: point.y - 37 }, { model });
}

function renderAll() {
  renderLinks();
  renderDevices();
  renderAnnotations();
  renderInspector();
  renderConfig();
  renderPackets();
  renderEvents();
  renderLabs();
  renderProtocols();
  renderIpAddressList();
  syncOpenWindows();
  updateMeters();
  recordHistory();
  scheduleAutosave();
}

function renderDevices() {
  const layer = $("deviceLayer");
  layer.innerHTML = "";
  state.nodes.forEach((node) => {
    const info = deviceInfo(node.type);
    const el = document.createElement("div");
    el.className = `device ${isSelected("node", node.id) || state.multiSelected.includes(node.id) ? "selected" : ""}`;
    el.style.left = `${node.x}px`;
    el.style.top = `${node.y}px`;
    el.dataset.id = node.id;
    el.innerHTML = `
      <div class="device-body" style="background:${info.color}">
        <span class="status-dot ${node.running ? "running" : ""}"></span>
        <span class="port-dot top"></span><span class="port-dot right"></span><span class="port-dot bottom"></span><span class="port-dot left"></span>
        <span class="glyph">${info.glyph}</span>
        <strong title="${node.name}">${node.name}</strong>
      </div>`;
    el.addEventListener("mousedown", (event) => startDrag(event, node.id));
    el.addEventListener("click", (event) => {
      event.stopPropagation();
      handleNodeClick(node.id, event);
    });
    el.addEventListener("dblclick", (event) => {
      event.stopPropagation();
      if (["pc", "client", "server"].includes(node.type)) openEndpointWindow(node.id);
      else openNetworkDeviceWindow(node.id);
    });
    el.addEventListener("contextmenu", (event) => showContextMenu(event, "node", node.id));
    layer.appendChild(el);
  });
}

function renderAnnotations() {
  const layer = $("annotationLayer");
  if (!layer) return;
  layer.innerHTML = "";
  state.annotations.forEach((note) => {
    const el = document.createElement("div");
    el.className = `annotation ${isSelected("annotation", note.id) || state.multiAnnotations.includes(note.id) ? "selected" : ""}`;
    el.style.left = `${note.x}px`;
    el.style.top = `${note.y}px`;
    el.dataset.id = note.id;
    el.textContent = note.text;
    el.title = "双击修改文本";
    el.addEventListener("mousedown", (event) => startAnnotationDrag(event, note.id));
    el.addEventListener("click", (event) => {
      event.stopPropagation();
      handleAnnotationClick(note.id, event);
    });
    el.addEventListener("dblclick", (event) => {
      event.stopPropagation();
      editAnnotation(note.id);
    });
    layer.appendChild(el);
  });
}

function clearSelection(event = null) {
  if (suppressStageClick) {
    suppressStageClick = false;
    return;
  }
  if (state.tool === "text" && event) {
    addAnnotationAt(stagePoint(event));
    return;
  }
  state.selected = null;
  state.multiSelected = [];
  state.multiAnnotations = [];
  state.pendingLink = null;
  state.pendingPing = null;
  renderAll();
}

function createSvgTitle(text) {
  const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
  title.textContent = text;
  return title;
}

function syncStageSize() {
  state.stage = normalizeStageSize(state.stage);
  const stage = $("stage");
  stage.style.width = `${state.stage.width}px`;
  stage.style.height = `${state.stage.height}px`;
}

function normalizeStageSize(size = {}) {
  return {
    width: clamp(Number(size.width) || 1800, 900, 5000),
    height: clamp(Number(size.height) || 1100, 600, 3200)
  };
}

function maxNodeX() {
  return Math.max(16, state.stage.width - 110);
}

function maxNodeY() {
  return Math.max(16, state.stage.height - 90);
}

function renderLinks() {
  syncStageSize();
  const svg = $("linkLayer");
  svg.setAttribute("width", String(state.stage.width));
  svg.setAttribute("height", String(state.stage.height));
  svg.innerHTML = "";
  state.links.forEach((link) => {
    const a = getNode(link.a);
    const b = getNode(link.b);
    if (!a || !b) return;
    const x1 = a.x + 48;
    const y1 = a.y + 37;
    const x2 = b.x + 48;
    const y2 = b.y + 37;
    const diagnostic = linkDiagnostic(link);
    const effectiveStatus = diagnostic.physical;
    const tooltip = `${a.name} ${link.aPort || "Auto"} <-> ${b.name} ${link.bPort || "Auto"}
Cable: ${link.cable || "Auto"}, ${link.bandwidth}M, ${link.latency}ms, loss ${link.loss || 0}%
Physical: ${diagnostic.physical}
Traffic: ${diagnostic.traffic}${diagnostic.reason ? ` - ${diagnostic.reason}` : ""}`;
    const hit = document.createElementNS("http://www.w3.org/2000/svg", "line");
    hit.setAttribute("x1", x1);
    hit.setAttribute("y1", y1);
    hit.setAttribute("x2", x2);
    hit.setAttribute("y2", y2);
    hit.setAttribute("class", "link-hit");
    hit.addEventListener("click", (event) => {
      event.stopPropagation();
      handleLinkClick(link.id);
    });
    hit.addEventListener("contextmenu", (event) => showContextMenu(event, "link", link.id));
    hit.appendChild(createSvgTitle(tooltip));
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    const selected = isSelected("link", link.id);
    const trafficBlocked = diagnostic.physical === "up" && diagnostic.traffic === "blocked";
    line.setAttribute("class", `link ${effectiveStatus} ${trafficBlocked ? "blocked" : ""} ${flashingLinks.has(link.id) ? "flash" : ""} ${selected ? "selected" : ""}`);
    line.addEventListener("click", (event) => {
      event.stopPropagation();
      handleLinkClick(link.id);
    });
    line.addEventListener("contextmenu", (event) => showContextMenu(event, "link", link.id));
    line.appendChild(createSvgTitle(tooltip));
    const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
    label.setAttribute("x", (x1 + x2) / 2 + 8);
    label.setAttribute("y", (y1 + y2) / 2 - 8);
    label.setAttribute("class", "link-label");
    label.textContent = `${link.cable || "Auto"} ${link.bandwidth}M ${link.latency}ms${trafficBlocked ? " blocked" : ""}`;
    label.addEventListener("click", (event) => {
      event.stopPropagation();
      handleLinkClick(link.id);
    });
    label.addEventListener("contextmenu", (event) => showContextMenu(event, "link", link.id));
    label.appendChild(createSvgTitle(tooltip));
    svg.append(hit, line, label);
    if (selected) {
      const start = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      const end = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      start.setAttribute("cx", x1);
      start.setAttribute("cy", y1);
      start.setAttribute("r", "6");
      start.setAttribute("class", "link-endpoint");
      end.setAttribute("cx", x2);
      end.setAttribute("cy", y2);
      end.setAttribute("r", "6");
      end.setAttribute("class", "link-endpoint");
      [start, end].forEach((endpoint) => {
        endpoint.addEventListener("click", (event) => {
          event.stopPropagation();
          handleLinkClick(link.id);
        });
        endpoint.addEventListener("contextmenu", (event) => showContextMenu(event, "link", link.id));
        endpoint.appendChild(createSvgTitle(tooltip));
      });
      svg.append(start, end);
    }
  });
}

function handleNodeClick(id, event = null) {
  if (suppressNodeClick) {
    suppressNodeClick = false;
    return;
  }
  const node = getNode(id);
  if (!node) return;
  if (state.tool === "select" && (event?.ctrlKey || event?.metaKey)) {
    const ids = new Set(state.multiSelected);
    const annotationIds = new Set(state.multiAnnotations);
    if (state.selected?.kind === "node") ids.add(state.selected.id);
    if (state.selected?.kind === "annotation") annotationIds.add(state.selected.id);
    ids.has(id) ? ids.delete(id) : ids.add(id);
    state.multiSelected = [...ids];
    state.multiAnnotations = [...annotationIds];
    normalizeMultiSelection();
    renderAll();
    return;
  }
  if (state.tool === "delete") return deleteNode(id);
  if (state.tool === "link") {
    if (!state.pendingLink) {
      state.pendingLink = id;
      state.selected = { kind: "node", id };
      toast(`已选择 ${node.name}，请选择另一台设备。`);
    } else if (state.pendingLink !== id) {
      openLinkDialog(state.pendingLink, id);
      state.pendingLink = null;
    }
  } else if (state.tool === "ping") {
    if (!state.pendingPing) {
      state.pendingPing = id;
      state.selected = { kind: "node", id };
      toast(`Ping 源为 ${node.name}，请选择目的设备。`);
    } else if (state.pendingPing !== id) {
      runPing(state.pendingPing, id);
      state.pendingPing = null;
    }
  } else {
    state.selected = { kind: "node", id };
    state.multiSelected = [];
    state.multiAnnotations = [];
  }
  renderAll();
}

function handleLinkClick(id) {
  if (state.tool === "delete") return deleteLink(id);
  state.selected = { kind: "link", id };
  state.multiSelected = [];
  state.multiAnnotations = [];
  state.pendingLink = null;
  state.pendingPing = null;
  renderAll();
}

function handleAnnotationClick(id, event = null) {
  if (suppressAnnotationClick) {
    suppressAnnotationClick = false;
    return;
  }
  if (state.tool === "select" && (event?.ctrlKey || event?.metaKey)) {
    const ids = new Set(state.multiSelected);
    const annotationIds = new Set(state.multiAnnotations);
    if (state.selected?.kind === "node") ids.add(state.selected.id);
    if (state.selected?.kind === "annotation") annotationIds.add(state.selected.id);
    annotationIds.has(id) ? annotationIds.delete(id) : annotationIds.add(id);
    state.multiSelected = [...ids];
    state.multiAnnotations = [...annotationIds];
    normalizeMultiSelection();
    renderAll();
    return;
  }
  if (state.tool === "delete") return deleteAnnotation(id);
  state.selected = { kind: "annotation", id };
  state.multiSelected = [];
  state.multiAnnotations = [];
  state.pendingLink = null;
  state.pendingPing = null;
  renderAll();
}

function addAnnotationAt(point) {
  const note = {
    id: `t${state.counters.text++}`,
    text: "文本标注",
    x: clamp(point.x, 16, maxNodeX()),
    y: clamp(point.y, 16, maxNodeY())
  };
  state.annotations.push(note);
  state.selected = { kind: "annotation", id: note.id };
  toast("已添加文本标注，可双击修改。");
  renderAll();
}

function editAnnotation(id) {
  const note = getAnnotation(id);
  if (!note) return;
  const next = prompt("修改文本标注", note.text);
  if (next === null) return;
  note.text = next.trim() || note.text;
  renderAll();
}

function requireNodeRunning(node, surface = "Console") {
  if (node?.running) return true;
  toast(`${node?.name || "设备"} 未开机，不能进入${surface}。`);
  return false;
}

function showContextMenu(event, kind, id) {
  event.preventDefault();
  event.stopPropagation();
  hideContextMenu();
  const menu = document.createElement("div");
  menu.className = "context-menu";
  menu.style.left = `${event.clientX}px`;
  menu.style.top = `${event.clientY}px`;
  if (kind === "node") {
    const node = getNode(id);
    menu.innerHTML = `
      <button data-action="select">选择 <span>${node.name}</span></button>
      <button data-action="power">${node.running ? "停止" : "启动"} <span>Power</span></button>
      <button data-action="cli">打开 CLI <span>&gt;</span></button>
      <button data-action="copy">复制配置 <span>CFG</span></button>
      <button data-action="duplicate">克隆设备 <span>Clone</span></button>
      <button data-action="ping">${state.contextPingSource ? "Ping 到此处" : "设为 Ping 源"} <span>ICMP</span></button>
      <button data-action="delete" class="danger-item">删除 <span>Del</span></button>`;
  } else {
    const link = getLink(id);
    menu.innerHTML = `
      <button data-action="select">选择链路 <span>${link.id}</span></button>
      <button data-action="toggle">${link.status === "up" ? "断开" : "恢复"} <span>${link.status}</span></button>
      <button data-action="capture">抓包标记 <span>CAP</span></button>
      <button data-action="delete" class="danger-item">删除链路 <span>Del</span></button>`;
  }
  menu.addEventListener("click", (e) => {
    const action = e.target.closest("button")?.dataset.action;
    if (!action) return;
    runContextAction(kind, id, action);
    hideContextMenu();
  });
  document.body.appendChild(menu);
}

function showImportMenu(event) {
  event.preventDefault();
  event.stopPropagation();
  hideContextMenu();
  const rect = event.currentTarget.getBoundingClientRect();
  const menu = document.createElement("div");
  menu.className = "context-menu import-menu";
  menu.style.left = `${Math.min(rect.left, window.innerWidth - 220)}px`;
  menu.style.top = `${rect.bottom + 8}px`;
  menu.innerHTML = `
    <button data-import="folder">导入工程文件夹 <span>Folder</span></button>
    <button data-import="zip">导入 ZIP 工程包 <span>.zip</span></button>`;
  menu.addEventListener("click", (e) => {
    const kind = e.target.closest("button")?.dataset.import;
    if (!kind) return;
    hideContextMenu();
    if (kind === "folder") $("importFolder").click();
    if (kind === "zip") $("importFile").click();
  });
  document.body.appendChild(menu);
}

function hideContextMenu() {
  document.querySelector(".context-menu")?.remove();
}

function runContextAction(kind, id, action) {
  if (kind === "node") {
    const node = getNode(id);
    if (!node) return;
    if (action === "select") state.selected = { kind: "node", id };
    if (action === "power") setNodePower(node, !node.running);
    if (action === "cli") {
      if (!requireNodeRunning(node)) return;
      state.selected = { kind: "node", id };
      setTab("cli");
    }
    if (action === "copy") {
      state.selected = { kind: "node", id };
      renderConfig();
      copyConfig();
    }
    if (action === "duplicate") duplicateDevice(id);
    if (action === "ping") {
      if (!state.contextPingSource) {
        state.contextPingSource = id;
        toast(`${node.name} 已设为 Ping 源。`);
      } else {
        runPing(state.contextPingSource, id);
        state.contextPingSource = null;
      }
    }
    if (action === "delete") deleteNode(id);
  } else {
    const link = getLink(id);
    if (!link) return;
    if (action === "select") state.selected = { kind: "link", id };
    if (action === "toggle") link.status = link.status === "up" ? "down" : "up";
    if (action === "capture") {
      flashLinks([id]);
    }
    if (action === "delete") deleteLink(id);
  }
  renderAll();
}

function duplicateDevice(id) {
  const node = getNode(id);
  if (!node) return;
  const clone = JSON.parse(JSON.stringify(node));
  clone.id = `n${state.counters.node++}`;
  clone.name = `${node.name}_copy`;
  clone.x = node.x + 120;
  clone.y = node.y + 90;
  clone.interfaces.forEach((iface) => {
    iface.ip = "";
    iface.desc = "";
  });
  state.nodes.push(clone);
  state.selected = { kind: "node", id: clone.id };
  log("info", "DEVICE", `克隆 ${node.name} 为 ${clone.name}`);
}

function startDrag(event, id) {
  if (state.tool !== "select" || event.button !== 0) return;
  const node = getNode(id);
  if (!node) return;
  const point = stagePoint(event);
  if (state.multiSelected.includes(id) && selectedItemCount() > 1) {
    drag = createSelectionDrag(point);
    renderInspector();
    return;
  }
  drag = { id, dx: point.x - node.x, dy: point.y - node.y, el: event.currentTarget, moved: false };
  state.selected = { kind: "node", id };
  state.multiSelected = [];
  state.multiAnnotations = [];
  drag.el.classList.add("selected");
  renderInspector();
  renderConfig();
}

function onDragMove(event) {
  if (!drag) return;
  const point = stagePoint(event);
  if (drag.group) {
    moveSelectionDrag(drag, point);
    drag.moved = true;
    renderLinks();
    renderInspector();
    return;
  }
  const node = getNode(drag.id);
  node.x = clamp(point.x - drag.dx, 16, maxNodeX());
  node.y = clamp(point.y - drag.dy, 16, maxNodeY());
  drag.moved = true;
  if (drag.el) {
    drag.el.style.left = `${node.x}px`;
    drag.el.style.top = `${node.y}px`;
  }
  renderLinks();
  renderInspector();
}

function stopDrag() {
  const moved = drag?.moved;
  if (drag?.group && moved) {
    suppressNodeClick = true;
  }
  drag = null;
  if (moved) renderAll();
}

function startAnnotationDrag(event, id) {
  if (state.tool !== "select" || event.button !== 0) return;
  const note = getAnnotation(id);
  if (!note) return;
  event.stopPropagation();
  const point = stagePoint(event);
  if (state.multiAnnotations.includes(id) && selectedItemCount() > 1) {
    annotationDrag = createSelectionDrag(point);
    renderInspector();
    return;
  }
  annotationDrag = {
    id,
    dx: point.x - note.x,
    dy: point.y - note.y,
    moved: false
  };
  state.selected = { kind: "annotation", id };
  state.multiSelected = [];
  state.multiAnnotations = [];
  renderInspector();
}

function onAnnotationDrag(event) {
  if (!annotationDrag) return;
  const point = stagePoint(event);
  if (annotationDrag.group) {
    moveSelectionDrag(annotationDrag, point);
    annotationDrag.moved = true;
    renderLinks();
    renderInspector();
    return;
  }
  const note = getAnnotation(annotationDrag.id);
  if (!note) return;
  note.x = clamp(point.x - annotationDrag.dx, 16, maxNodeX());
  note.y = clamp(point.y - annotationDrag.dy, 16, maxNodeY());
  annotationDrag.moved = true;
  const el = document.querySelector(`.annotation[data-id="${annotationDrag.id}"]`);
  if (el) {
    el.style.left = `${note.x}px`;
    el.style.top = `${note.y}px`;
  }
}

function stopAnnotationDrag() {
  const moved = annotationDrag?.moved;
  if (annotationDrag?.group && moved) {
    suppressAnnotationClick = true;
  }
  annotationDrag = null;
  if (moved) renderAll();
}

function createSelectionDrag(point) {
  return {
    group: true,
    startX: point.x,
    startY: point.y,
    nodes: [...state.multiSelected],
    annotations: [...state.multiAnnotations],
    nodeOriginals: Object.fromEntries(state.multiSelected.map((nodeId) => {
      const node = getNode(nodeId);
      return node ? [nodeId, { x: node.x, y: node.y }] : [nodeId, { x: 0, y: 0 }];
    })),
    annotationOriginals: Object.fromEntries(state.multiAnnotations.map((noteId) => {
      const note = getAnnotation(noteId);
      return note ? [noteId, { x: note.x, y: note.y }] : [noteId, { x: 0, y: 0 }];
    })),
    moved: false
  };
}

function moveSelectionDrag(selectionDrag, point) {
  const dx = point.x - selectionDrag.startX;
  const dy = point.y - selectionDrag.startY;
  selectionDrag.nodes.forEach((nodeId) => {
    const node = getNode(nodeId);
    const original = selectionDrag.nodeOriginals[nodeId];
    if (!node || !original) return;
    node.x = clamp(original.x + dx, 16, maxNodeX());
    node.y = clamp(original.y + dy, 16, maxNodeY());
    const el = document.querySelector(`.device[data-id="${nodeId}"]`);
    if (el) {
      el.style.left = `${node.x}px`;
      el.style.top = `${node.y}px`;
    }
  });
  selectionDrag.annotations.forEach((noteId) => {
    const note = getAnnotation(noteId);
    const original = selectionDrag.annotationOriginals[noteId];
    if (!note || !original) return;
    note.x = clamp(original.x + dx, 16, maxNodeX());
    note.y = clamp(original.y + dy, 16, maxNodeY());
    const el = document.querySelector(`.annotation[data-id="${noteId}"]`);
    if (el) {
      el.style.left = `${note.x}px`;
      el.style.top = `${note.y}px`;
    }
  });
}

function startLasso(event) {
  if (state.tool !== "select" || event.button !== 0) return;
  const classList = event.target.classList;
  if (
    event.target.closest?.(".device") ||
    event.target.closest?.(".annotation") ||
    classList?.contains("link-hit") ||
    classList?.contains("link") ||
    classList?.contains("link-label") ||
    classList?.contains("link-endpoint")
  ) return;
  event.preventDefault();
  const point = stagePoint(event);
  const rect = document.createElement("div");
  rect.className = "selection-rect";
  $("stage").appendChild(rect);
  lasso = { startX: point.x, startY: point.y, x: point.x, y: point.y, rect, moved: false };
  updateLassoRect();
}

function onLassoMove(event) {
  if (!lasso) return;
  const point = stagePoint(event);
  lasso.x = point.x;
  lasso.y = point.y;
  lasso.moved = true;
  updateLassoRect();
}

function stopLasso() {
  if (!lasso) return;
  const box = lassoBox();
  lasso.rect.remove();
  const selectedIds = state.nodes
    .filter((node) => {
      const cx = node.x + 48;
      const cy = node.y + 37;
      return cx >= box.left && cx <= box.right && cy >= box.top && cy <= box.bottom;
    })
    .map((node) => node.id);
  const selectedAnnotationIds = state.annotations
    .filter((note) => annotationIntersectsBox(note, box))
    .map((note) => note.id);
  lasso = null;
  const total = selectedIds.length + selectedAnnotationIds.length;
  if (total > 1) {
    state.multiSelected = selectedIds;
    state.multiAnnotations = selectedAnnotationIds;
    state.selected = null;
  } else if (selectedIds.length === 1) {
    state.multiSelected = [];
    state.multiAnnotations = [];
    state.selected = { kind: "node", id: selectedIds[0] };
  } else if (selectedAnnotationIds.length === 1) {
    state.multiSelected = [];
    state.multiAnnotations = [];
    state.selected = { kind: "annotation", id: selectedAnnotationIds[0] };
  }
  if (total) {
    suppressStageClick = true;
    renderAll();
  }
}

function annotationIntersectsBox(note, box) {
  const el = document.querySelector(`.annotation[data-id="${note.id}"]`);
  const width = el?.offsetWidth || 80;
  const height = el?.offsetHeight || 28;
  const left = note.x;
  const right = note.x + width;
  const top = note.y;
  const bottom = note.y + height;
  return right >= box.left && left <= box.right && bottom >= box.top && top <= box.bottom;
}

function updateLassoRect() {
  const box = lassoBox();
  lasso.rect.style.left = `${box.left}px`;
  lasso.rect.style.top = `${box.top}px`;
  lasso.rect.style.width = `${box.right - box.left}px`;
  lasso.rect.style.height = `${box.bottom - box.top}px`;
}

function lassoBox() {
  return {
    left: Math.min(lasso.startX, lasso.x),
    right: Math.max(lasso.startX, lasso.x),
    top: Math.min(lasso.startY, lasso.y),
    bottom: Math.max(lasso.startY, lasso.y)
  };
}

function stagePoint(event) {
  const rect = $("stage").getBoundingClientRect();
  return {
    x: (event.clientX - rect.left) / state.zoom,
    y: (event.clientY - rect.top) / state.zoom
  };
}

function addDevice(type, pos = null, options = {}) {
  const info = deviceInfo(type, options.model);
  const view = $("stageViewport");
  const id = `n${state.counters.node++}`;
  const count = state.nodes.filter((n) => n.type === type).length + 1;
  const node = {
    id,
    type,
    model: info.model,
    name: options.name || `${info.glyph}${count}`,
    x: pos?.x ?? (view.scrollLeft + view.clientWidth / 2) / state.zoom - 48 + count * 12,
    y: pos?.y ?? (view.scrollTop + view.clientHeight / 2) / state.zoom - 37 + count * 10,
    running: options.running ?? state.running,
    interfaces: info.ports.map((name, index) => ({
      name,
      status: "up",
      ip: "",
      mask: "",
      vlan: index < 4 ? "1" : "",
      linkType: "access",
      trunkAllow: [],
      dot1q: "",
      arpBroadcast: false,
      ospf: null,
      dhcpSelect: "",
      desc: ""
    })),
    protocols: Object.fromEntries(info.protocols.map((p) => [p, false])),
    routes: [],
    acls: {},
    vlans: [],
    ospf: { process: "", routerId: "", areas: [], networks: [] },
    stp: { enabled: false, mode: "", priority: "", root: "" },
    dhcpEnabled: false,
    dhcpPools: [],
    aaaEnabled: false,
    users: [],
    userInterfaces: [],
    bpduEnabled: false,
    securityZones: type === "firewall" ? ["trust", "untrust", "dmz"] : [],
    gateway: "",
    dns: "",
    services: type === "server" ? defaultServerServices() : null,
    mac: options.systemMac || "",
    notes: "",
    config: "",
    rawConfig: ""
  };
  Object.assign(node, options);
  state.nodes.push(node);
  state.selected = { kind: "node", id };
  log("info", "DEVICE", `添加 ${node.model} ${node.name}`);
  renderAll();
  return node;
}

function addLink(aId, bId, options = {}) {
  const a = getNode(aId);
  const b = getNode(bId);
  if (!a || !b) return;
  if (linkBetween(aId, bId)) {
    toast("这两台设备之间已经存在链路。");
    return;
  }
  const aPort = options.aPort || freePort(a);
  const bPort = options.bPort || freePort(b);
  const link = {
    id: `l${state.counters.link++}`,
    a: aId,
    b: bId,
    aPort,
    bPort,
    status: options.status || "up",
    cable: options.cable || "Auto",
    bandwidth: options.bandwidth || 1000,
    latency: options.latency || 1,
    loss: options.loss || 0
  };
  state.links.push(link);
  rebuildLinkIndex();
  state.selected = { kind: "link", id: link.id };
  log("ok", "LINK", `${a.name}:${aPort} <-> ${b.name}:${bPort}`);
  renderAll();
  return link;
}

function openLinkDialog(aId, bId) {
  const a = getNode(aId);
  const b = getNode(bId);
  if (!a || !b) return;
  document.querySelector(".link-dialog")?.remove();
  const dialog = document.createElement("div");
  dialog.className = "link-dialog";
  dialog.innerHTML = `
    <div class="link-dialog-card">
      <h3>连接接口</h3>
      <div class="link-ends">
        <div class="field">
          <label>${escapeHtml(a.name)} 起始网口</label>
          <select id="newLinkAPort">${portOptions(a, freePort(a))}</select>
        </div>
        <div class="field">
          <label>${escapeHtml(b.name)} 目的网口</label>
          <select id="newLinkBPort">${portOptions(b, freePort(b))}</select>
        </div>
      </div>
      <div class="link-ends">
        <div class="field"><label>线缆类型</label><select id="newLinkCable">${["Auto", "Copper", "Ethernet", "Fiber", "Serial", "Console"].map((c) => `<option>${c}</option>`).join("")}</select></div>
        <div class="field"><label>带宽 Mbps</label><input id="newLinkBandwidth" type="number" min="1" value="1000" /></div>
      </div>
      <div class="link-ends">
        <div class="field"><label>时延 ms</label><input id="newLinkLatency" type="number" min="0" value="1" /></div>
        <div class="field"><label>丢包 %</label><input id="newLinkLoss" type="number" min="0" max="100" value="0" /></div>
      </div>
      <div class="button-row">
        <button id="confirmNewLink" class="primary-btn">连接</button>
        <button id="cancelNewLink">取消</button>
      </div>
    </div>`;
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.remove();
  });
  document.body.appendChild(dialog);
  $("newLinkCable").addEventListener("change", (event) => {
    const cable = event.target.value;
    $("newLinkBandwidth").value = cable === "Serial" ? 2 : cable === "Console" ? 1 : cable === "Fiber" ? 10000 : 1000;
  });
  $("cancelNewLink").addEventListener("click", () => dialog.remove());
  $("confirmNewLink").addEventListener("click", () => {
    addLink(aId, bId, {
      aPort: $("newLinkAPort").value,
      bPort: $("newLinkBPort").value,
      cable: $("newLinkCable").value,
      bandwidth: Number($("newLinkBandwidth").value) || 1000,
      latency: Number($("newLinkLatency").value) || 1,
      loss: clamp(Number($("newLinkLoss").value) || 0, 0, 100)
    });
    dialog.remove();
  });
}

function portOptions(node, selected = "") {
  const used = usedPorts(node.id);
  return node.interfaces.map((port) => {
    const isUsed = used.has(port.name);
    const label = `${port.name}${isUsed ? "（已占用）" : ""}`;
    return `<option value="${escapeHtml(port.name)}" ${port.name === selected ? "selected" : ""} ${isUsed && port.name !== selected ? "disabled" : ""}>${escapeHtml(label)}</option>`;
  }).join("");
}

function usedPorts(nodeId) {
  const used = new Set();
  linksOf(nodeId).forEach((link) => {
    if (link.a === nodeId) used.add(link.aPort);
    if (link.b === nodeId) used.add(link.bPort);
  });
  return used;
}

function renderInspector() {
  const body = $("inspectorBody");
  const label = $("selectionLabel");
  if (selectedItemCount() > 1) {
    $("objectType").textContent = "Selection";
    label.textContent = `已选择 ${selectedItemCount()} 个对象`;
    body.innerHTML = bulkInspector();
    bindBulkInspector();
    return;
  }
  if (!state.selected) {
    $("objectType").textContent = "Topology";
    label.textContent = "未选择";
    body.innerHTML = topologyInspector();
    bindTopologyInspector();
    return;
  }
  if (state.selected.kind === "node") {
    const node = getNode(state.selected.id);
    if (!node) return;
    $("objectType").textContent = node.model;
    label.textContent = node.name;
    body.innerHTML = nodeInspector(node);
    bindNodeInspector(node);
    return;
  }
  if (state.selected.kind === "annotation") {
    const note = getAnnotation(state.selected.id);
    if (!note) return;
    $("objectType").textContent = "Text";
    label.textContent = "文本标注";
    body.innerHTML = annotationInspector(note);
    bindAnnotationInspector(note);
    return;
  }
  const link = getLink(state.selected.id);
  if (!link) return;
  $("objectType").textContent = "Link";
  label.textContent = `${getNode(link.a)?.name || "?"} ↔ ${getNode(link.b)?.name || "?"}`;
  body.innerHTML = linkInspector(link);
  bindLinkInspector(link);
}

function openEndpointWindow(id) {
  const node = getNode(id);
  if (!node) return;
  const existing = document.querySelector(`[data-endpoint-window="${id}"]`);
  if (existing) {
    existing.style.zIndex = "90";
    return;
  }
  const iface = node.interfaces[0] || {};
  const serverServicesTab = node.type === "server" ? '<button data-window-tab="services">服务</button>' : "";
  const serverServicesPanel = node.type === "server" ? serverServicePanel(node) : "";
  const clientTab = node.type === "client" ? '<button data-window-tab="client">HttpClient</button>' : "";
  const clientPanel = node.type === "client" ? clientHttpPanel(node) : "";
  const win = document.createElement("div");
  win.className = "device-window";
  win.dataset.endpointWindow = id;
  win.style.left = `${Math.min(window.innerWidth - 540, 180 + document.querySelectorAll(".device-window").length * 28)}px`;
  win.style.top = `${Math.min(window.innerHeight - 410, 120 + document.querySelectorAll(".device-window").length * 24)}px`;
  win.innerHTML = `
    <div class="window-titlebar">
      <strong>${escapeHtml(node.name)} - ${escapeHtml(node.model)} 配置</strong>
      <button data-close-window title="关闭">×</button>
    </div>
    <div class="window-tabs">
      <button class="active" data-window-tab="config">基础配置</button>
      ${serverServicesTab}
      <button data-window-tab="cmd">Console</button>
      ${clientTab}
    </div>
    <div class="window-body">
      <div data-window-panel="config">
        <div class="pc-form">
          <div class="field"><label>IPv4 地址</label><input id="pcIp-${id}" value="${escapeHtml(iface.ip || "")}" placeholder="192.168.1.10" /></div>
          <div class="field"><label>子网掩码</label><input id="pcMask-${id}" value="${escapeHtml(iface.mask || "")}" placeholder="255.255.255.0 或 24" /></div>
          <div class="field"><label>默认网关</label><input id="pcGateway-${id}" value="${escapeHtml(node.gateway || "")}" placeholder="192.168.1.1" /></div>
          <div class="field"><label>DNS</label><input id="pcDns-${id}" value="${escapeHtml(node.dns || "")}" placeholder="8.8.8.8" /></div>
          <div class="field wide"><label>MAC 地址</label><input id="pcMac-${id}" value="${escapeHtml(node.mac || fakeMac(node.id))}" /></div>
          <div class="pc-window-actions">
            <button class="primary-btn" data-apply-pc>应用</button>
            <button data-dhcp-pc>DHCP</button>
            <button data-clear-pc>清空</button>
          </div>
        </div>
      </div>
      ${serverServicesPanel}
      <div data-window-panel="cmd" hidden>
        <div class="pc-console">
          <div class="pc-console-output" data-pc-output>Microsoft Windows [Version eNSP-Web]\n输入 help 查看命令。\n</div>
          <form class="pc-console-form" data-pc-form>
            <span class="console-prompt">${escapeHtml(node.name)}&gt;</span>
            <span class="console-typed" data-console-typed></span>
            <input autocomplete="off" spellcheck="false" />
          </form>
        </div>
      </div>
      ${clientPanel}
    </div>`;
  document.body.appendChild(win);
  bindEndpointWindow(win, node);
  saveUiState();
}

function defaultServerServices() {
  return {
    http: { enabled: false, port: 80, root: "wwwroot", index: "eNSP Web Server", folderName: "", files: [] },
    ftp: { enabled: false, port: 21, user: "admin", password: "admin", root: "ftp-root", folderName: "", files: [] },
    dns: { enabled: false, records: {} }
  };
}

function ensureServerServices(node) {
  if (node.type !== "server") return null;
  const base = defaultServerServices();
  node.services = {
    http: { ...base.http, ...(node.services?.http || {}) },
    ftp: { ...base.ftp, ...(node.services?.ftp || {}) },
    dns: { ...base.dns, ...(node.services?.dns || {}) }
  };
  node.services.http.files = normalizeServerFiles(node.services.http.files);
  node.services.ftp.files = normalizeServerFiles(node.services.ftp.files);
  node.services.dns.records = node.services.dns.records || {};
  return node.services;
}

function serverServicePanel(node) {
  const services = ensureServerServices(node);
  const records = formatDnsRecords(services.dns.records);
  return `
      <div data-window-panel="services" hidden>
        <div class="server-services">
          <section class="service-card">
            <label class="service-toggle"><input type="checkbox" id="srvHttpEnabled-${node.id}" ${services.http.enabled ? "checked" : ""} /> HTTP</label>
            <div class="pc-form">
              <div class="field"><label>端口</label><input id="srvHttpPort-${node.id}" value="${escapeHtml(services.http.port)}" /></div>
              <div class="field wide">
                <label>根目录</label>
                <div class="folder-picker-row">
                  <input id="srvHttpRoot-${node.id}" value="${escapeHtml(services.http.root)}" />
                  <button type="button" data-pick-server-folder="http">选择文件夹</button>
                  <button type="button" data-clear-server-folder="http">清除</button>
                </div>
                <div class="folder-summary" data-server-folder-summary="http">${serverFolderSummary(services.http)}</div>
              </div>
              <div class="field wide"><label>默认页面</label><textarea id="srvHttpIndex-${node.id}">${escapeHtml(services.http.index)}</textarea></div>
            </div>
          </section>
          <section class="service-card">
            <label class="service-toggle"><input type="checkbox" id="srvFtpEnabled-${node.id}" ${services.ftp.enabled ? "checked" : ""} /> FTP</label>
            <div class="pc-form">
              <div class="field"><label>端口</label><input id="srvFtpPort-${node.id}" value="${escapeHtml(services.ftp.port)}" /></div>
              <div class="field wide">
                <label>根目录</label>
                <div class="folder-picker-row">
                  <input id="srvFtpRoot-${node.id}" value="${escapeHtml(services.ftp.root)}" />
                  <button type="button" data-pick-server-folder="ftp">选择文件夹</button>
                  <button type="button" data-clear-server-folder="ftp">清除</button>
                </div>
                <div class="folder-summary" data-server-folder-summary="ftp">${serverFolderSummary(services.ftp)}</div>
              </div>
              <div class="field"><label>用户名</label><input id="srvFtpUser-${node.id}" value="${escapeHtml(services.ftp.user)}" /></div>
              <div class="field"><label>密码</label><input id="srvFtpPassword-${node.id}" value="${escapeHtml(services.ftp.password)}" /></div>
            </div>
          </section>
          <section class="service-card">
            <label class="service-toggle"><input type="checkbox" id="srvDnsEnabled-${node.id}" ${services.dns.enabled ? "checked" : ""} /> DNS</label>
            <div class="field">
              <label>域名记录（每行：域名 IP）</label>
              <textarea id="srvDnsRecords-${node.id}" placeholder="www.lab.local 192.168.1.10">${escapeHtml(records)}</textarea>
            </div>
          </section>
          <div class="pc-window-actions">
            <button class="primary-btn" data-apply-services>应用服务</button>
            <button data-fill-services>示例记录</button>
          </div>
        </div>
      </div>`;
}

function clientHttpPanel(node) {
  return `
      <div data-window-panel="client" hidden>
        <div class="client-http">
          <div class="pc-form">
            <div class="field"><label>服务器地址 / 域名</label><input id="clientHost-${node.id}" value="${escapeHtml(node.clientHost || "www.lab.local")}" placeholder="www.lab.local" /></div>
            <div class="field"><label>端口</label><input id="clientPort-${node.id}" value="${escapeHtml(node.clientPort || 80)}" /></div>
            <div class="field wide"><label>URL</label><input id="clientUrl-${node.id}" value="${escapeHtml(node.clientUrl || "/")}" placeholder="/" /></div>
          </div>
          <div class="pc-window-actions">
            <button class="primary-btn" data-client-get>获取</button>
            <button data-client-clear>清空结果</button>
          </div>
          <pre class="client-response" data-client-response>HttpClient ready.</pre>
        </div>
      </div>`;
}

function openNetworkDeviceWindow(id) {
  const node = getNode(id);
  if (!node) return;
  const existing = document.querySelector(`[data-vrp-window="${id}"]`);
  if (existing) {
    existing.style.zIndex = "90";
    return;
  }
  const win = document.createElement("div");
  win.className = "device-window";
  win.dataset.vrpWindow = id;
  win.style.left = `${Math.min(window.innerWidth - 540, 220 + document.querySelectorAll(".device-window").length * 28)}px`;
  win.style.top = `${Math.min(window.innerHeight - 410, 150 + document.querySelectorAll(".device-window").length * 24)}px`;
  win.innerHTML = `
    <div class="window-titlebar">
      <strong>${escapeHtml(node.name)} - VRP Console</strong>
      <button data-close-window title="关闭">×</button>
    </div>
    <div class="window-tabs">
      <button class="${node.running ? "active" : ""}" data-window-tab="console">Console</button>
      <button class="${node.running ? "" : "active"}" data-window-tab="summary">接口摘要</button>
    </div>
    <div class="window-body">
      <div data-window-panel="console" ${node.running ? "" : "hidden"}>
        <div class="pc-console">
          <div class="pc-console-output" data-vrp-output>Huawei Versatile Routing Platform\n${escapeHtml(node.name)} console ready. 输入 ? 查看命令。\n</div>
          <form class="pc-console-form" data-vrp-form>
            <span class="console-prompt" data-vrp-prompt>&lt;${escapeHtml(node.name)}&gt;</span>
            <span class="console-typed" data-console-typed></span>
            <input autocomplete="off" spellcheck="false" />
          </form>
        </div>
      </div>
      <div data-window-panel="summary" ${node.running ? "hidden" : ""}>
        <div class="port-list">${node.interfaces.map((p, index) => portRow(p, index)).join("")}</div>
      </div>
    </div>`;
  document.body.appendChild(win);
  bindNetworkDeviceWindow(win, node);
  saveUiState();
  if (node.running) setTimeout(() => win.querySelector("[data-vrp-form] input")?.focus(), 0);
}

function bindNetworkDeviceWindow(win, node) {
  const session = { mode: "user", iface: null, vlan: null, ospf: null, area: null, pool: null, userInterface: null };
  const form = win.querySelector("[data-vrp-form]");
  const updateEchoPrompt = bindEchoPrompt(form, () => vrpPrompt(node, session));
  const input = form.querySelector("input");
  node.vrpHistory = node.vrpHistory || [];
  let vrpHistoryIndex = node.vrpHistory.length;
  input.addEventListener("keydown", (event) => {
    if (!["ArrowUp", "ArrowDown"].includes(event.key)) return;
    event.preventDefault();
    if (event.key === "ArrowUp") vrpHistoryIndex = Math.max(0, vrpHistoryIndex - 1);
    if (event.key === "ArrowDown") vrpHistoryIndex = Math.min(node.vrpHistory.length, vrpHistoryIndex + 1);
    input.value = node.vrpHistory[vrpHistoryIndex] || "";
    updateEchoPrompt();
    requestAnimationFrame(() => input.setSelectionRange(input.value.length, input.value.length));
  });
  win.querySelector(".window-titlebar").addEventListener("mousedown", (event) => {
    if (event.target.closest("button")) return;
    startWindowDrag(event, win);
  });
  win.querySelector("[data-close-window]").addEventListener("click", () => {
    win.remove();
    saveUiState();
  });
  win.querySelectorAll("[data-window-tab]").forEach((tab) => {
    tab.addEventListener("click", () => {
      if (tab.dataset.windowTab === "console" && !requireNodeRunning(node, "VRP Console")) return;
      win.querySelectorAll("[data-window-tab]").forEach((item) => item.classList.toggle("active", item === tab));
      win.querySelectorAll("[data-window-panel]").forEach((panel) => (panel.hidden = panel.dataset.windowPanel !== tab.dataset.windowTab));
      if (tab.dataset.windowTab === "console") setTimeout(() => win.querySelector("[data-vrp-form] input")?.focus(), 0);
    });
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!requireNodeRunning(node, "VRP Console")) return;
    const cmd = input.value.trim();
    if (!cmd) return;
    node.vrpHistory.push(cmd);
    vrpHistoryIndex = node.vrpHistory.length;
    input.value = "";
    updateEchoPrompt();
    appendVrpConsole(win, `${vrpPrompt(node, session)} ${cmd}`);
    runVrpWindowCommand(win, node, session, cmd);
    updateEchoPrompt();
    const summary = win.querySelector('[data-window-panel="summary"] .port-list');
    if (summary) summary.innerHTML = node.interfaces.map((p, index) => portRow(p, index)).join("");
  });
}

function runVrpWindowCommand(win, node, session, cmd) {
  cmd = expandCliCommand(cmd);
  const lower = cmd.toLowerCase();
  if (lower === "?" || lower === "help") {
    appendVrpConsole(win, "display this | display acl [all|number] | display traffic-filter applied-record | reset acl counter [number] | display/dis current-configuration | system-view/sys | interface/int g0/0/0 | acl 3000 | rule permit/deny ip source <ip> <wc> destination <ip> <wc> | traffic-filter inbound acl 3000 | ip route-static/ip route <dest> <mask> <next-hop> | undo ip route-static ... | undo ip address | ping <name|ip> | quit/q");
    return;
  }
  if (lower === "clear") {
    win.querySelector("[data-vrp-output]").textContent = "";
    return;
  }
  if (lower === "system-view") {
    session.mode = "system";
    session.iface = null;
    appendVrpConsole(win, "Enter system view, return user view with Ctrl+Z.");
    return;
  }
  if (lower === "quit") {
    if (session.mode === "interface") {
      session.mode = "system";
      session.iface = null;
    } else if (session.mode === "vlan") {
      session.mode = "system";
      session.vlan = null;
    } else if (session.mode === "ospf-area") {
      session.mode = "ospf";
      session.area = null;
    } else if (session.mode === "ospf") {
      session.mode = "system";
      session.ospf = null;
    } else if (session.mode === "acl") {
      session.mode = "system";
      session.acl = null;
    } else if (["ip-pool", "aaa", "user-interface"].includes(session.mode)) {
      session.mode = "system";
      session.pool = null;
      session.userInterface = null;
    } else {
      session.mode = "user";
    }
    return;
  }
  if (lower.startsWith("display")) {
    appendVrpConsole(win, vrpDisplayText(lower, node, session));
    return;
  }
  if (lower.startsWith("reset acl counter")) {
    resetAclCounters(node, parseAclCounterTarget(lower));
    appendVrpConsole(win, "Info: ACL counter reset.");
    renderAll();
    return;
  }
  if (lower.startsWith("ping ")) {
    const target = cmd.slice(5).trim();
    const targetInfo = findEndpointTargetInfo(target, node);
    const dest = targetInfo?.node;
    if (!dest) appendVrpConsole(win, `Error: ${target} not found.`);
    else {
      const packet = runPing(node.id, dest.id, { destIp: targetInfo.ip });
      appendVrpConsole(win, formatVrpPing(packet, dest));
    }
    return;
  }
  if (session.mode === "user") {
    appendVrpConsole(win, "Error: Please enter system-view first.");
    return;
  }
  const aclResult = applyAclCliCommand(node, session, cmd, lower);
  if (aclResult.handled) {
    if (aclResult.error) {
      appendVrpConsole(win, aclResult.error);
      return;
    }
  } else if (applyUndoConfigCommand(node, { mode: session.mode, iface: session.iface }, cmd, lower)) {
    // undo command handled
  } else if (lower.startsWith("sysname ")) {
    node.name = cmd.slice(8).trim() || node.name;
  } else if (lower.startsWith("interface ")) {
    session.iface = findInterfaceByName(node, cmd.slice(10).trim()).name;
    session.mode = "interface";
  } else if (session.mode === "interface" && lower.startsWith("ip address ")) {
    const [, , ip, mask] = cmd.split(/\s+/);
    const iface = findInterfaceByName(node, session.iface);
    iface.ip = ip || "";
    iface.mask = mask || "";
  } else if (session.mode === "interface" && lower === "shutdown") {
    findInterfaceByName(node, session.iface).status = "down";
  } else if (session.mode === "interface" && lower === "undo shutdown") {
    findInterfaceByName(node, session.iface).status = "up";
  } else if (session.mode === "interface" && lower.startsWith("port trunk allow-pass vlan ")) {
    const iface = findInterfaceByName(node, session.iface);
    iface.linkType = "trunk";
    iface.trunkAllow = parseVlanList(cmd.replace(/^port\s+trunk\s+allow-pass\s+vlan\s+/i, ""));
    node.protocols.VLAN = true;
  } else if (session.mode === "interface" && lower.startsWith("port link-type ")) {
    findInterfaceByName(node, session.iface).linkType = cmd.split(/\s+/).pop();
  } else if (session.mode === "interface" && lower.startsWith("port default vlan ")) {
    findInterfaceByName(node, session.iface).vlan = cmd.split(/\s+/).pop();
    node.protocols.VLAN = true;
  } else if (session.mode === "interface" && lower.startsWith("dot1q termination vid ")) {
    findInterfaceByName(node, session.iface).dot1q = cmd.split(/\s+/).pop();
  } else if (session.mode === "interface" && lower === "arp broadcast enable") {
    findInterfaceByName(node, session.iface).arpBroadcast = true;
  } else if (session.mode === "interface" && lower.startsWith("ospf enable ")) {
    const parts = cmd.split(/\s+/);
    findInterfaceByName(node, session.iface).ospf = { process: parts[2] || "1", area: parts[4] || "0" };
    node.protocols.OSPF = true;
  } else if (session.mode === "interface" && lower === "dhcp select global") {
    findInterfaceByName(node, session.iface).dhcpSelect = "global";
    node.dhcpEnabled = true;
  } else if (lower.startsWith("ospf")) {
    node.protocols.OSPF = true;
    const parts = cmd.split(/\s+/);
    node.ospf.process = parts[1] || "1";
    const routerIdIndex = parts.findIndex((p) => p.toLowerCase() === "router-id");
    if (routerIdIndex >= 0) node.ospf.routerId = parts[routerIdIndex + 1] || "";
    session.mode = "ospf";
    session.ospf = node.ospf.process;
  } else if (/^area\s+/.test(lower)) {
    const area = cmd.split(/\s+/)[1] || "0";
    if (!node.ospf.areas.includes(area)) node.ospf.areas.push(area);
    session.mode = "ospf-area";
    session.area = area;
  } else if (/^network\s+/.test(lower)) {
    const [, network, wildcard] = cmd.split(/\s+/);
    node.protocols.OSPF = true;
    node.ospf.networks.push({ network, wildcard, area: session.area || "0" });
  } else if (lower === "dhcp enable") {
    node.dhcpEnabled = true;
  } else if (lower.startsWith("ip pool ")) {
    session.pool = cmd.slice(8).trim();
    getDhcpPool(node, session.pool);
    session.mode = "ip-pool";
  } else if (session.mode === "ip-pool" && lower.startsWith("network ")) {
    const parts = cmd.split(/\s+/);
    const pool = getDhcpPool(node, session.pool);
    pool.network = parts[1] || "";
    pool.mask = parts[3] || parts[2] || "";
  } else if (session.mode === "ip-pool" && lower.startsWith("gateway-list ")) {
    getDhcpPool(node, session.pool).gateway = cmd.slice(13).trim();
  } else if (session.mode === "ip-pool" && lower.startsWith("dns-list ")) {
    getDhcpPool(node, session.pool).dns = cmd.slice(9).trim();
  } else if (lower === "aaa") {
    node.aaaEnabled = true;
    session.mode = "aaa";
  } else if (session.mode === "aaa" && lower.startsWith("local-user ")) {
    applyLocalUserCommand(node, cmd);
  } else if (lower.startsWith("user-interface ")) {
    session.userInterface = cmd.slice(15).trim();
    getUserInterface(node, session.userInterface);
    session.mode = "user-interface";
  } else if (session.mode === "user-interface" && lower.startsWith("authentication-mode ")) {
    getUserInterface(node, session.userInterface).authenticationMode = cmd.split(/\s+/).pop();
  } else if (lower.startsWith("rip")) {
    node.protocols.RIP = true;
  } else if (/^vlan\s+batch\s+/.test(lower)) {
    node.protocols.VLAN = true;
    parseVlanList(cmd.replace(/^vlan\s+batch\s+/i, "")).forEach((vlan) => {
      if (!node.vlans.includes(vlan)) node.vlans.push(vlan);
    });
  } else if (/^vlan\s+\d+/.test(lower)) {
    const vlan = cmd.split(/\s+/)[1];
    node.protocols.VLAN = true;
    if (!node.vlans.includes(vlan)) node.vlans.push(vlan);
    session.mode = "vlan";
    session.vlan = vlan;
  } else if (lower.startsWith("vlan")) {
    node.protocols.VLAN = true;
  } else if (lower === "bpdu enable") {
    node.bpduEnabled = true;
    node.protocols.STP = true;
  } else if (lower.startsWith("ip route-static ")) {
    const [, , dest, mask, nextHop] = cmd.split(/\s+/);
    node.routes.push({ dest, mask, nextHop });
  } else if (applyTutorialCommand(node, { mode: session.mode, iface: session.iface }, cmd, lower)) {
    // handled by shared tutorial command shim
  } else {
    appendVrpConsole(win, "Error: incomplete or unknown command.");
    return;
  }
  node.rawConfig = "";
  appendVrpConsole(win, "Info: command executed successfully.");
  renderAll();
}

function vrpDisplayText(lower, node, session = {}) {
  if (lower === "display this") return displayThisText(node, session);
  if (lower.startsWith("display interface ") || lower.startsWith("display port ")) return displayInterfaceText(node, lower.replace(/^display\s+(interface|port)\s+/, ""));
  if (lower === "display current-configuration") return buildConfig(node);
  if (lower === "display acl") return displayAclText(node);
  if (lower === "display acl all") return displayAclText(node);
  if (lower.startsWith("display acl ")) return displayAclText(node, lower.replace(/^display\s+acl\s+/, "").replace(/^number\s+/, "").trim());
  if (lower.includes("traffic-filter")) return displayTrafficFilterText(node);
  if (lower.includes("ip interface brief") || lower.includes("interface brief")) return node.interfaces.map((i) => `${i.name.padEnd(18)} ${String(i.ip || "unassigned").padEnd(16)} ${i.status}`).join("\n");
  if (lower.includes("routing-table")) return inferRoutes(node).concat(node.routes.map((r) => `${r.dest}/${r.mask} via ${r.nextHop} Static`)).join("\n") || "Routing Tables: empty";
  if (lower.includes("mac-address")) return macTable(node).join("\n") || "MAC address table is empty.";
  if (lower.includes("arp")) return arpTable(node).join("\n") || "ARP table is empty.";
  if (lower === "display version") return `Huawei Versatile Routing Platform Software\n${node.model} Simulator, eNSP Web Lab Edition\nUptime: ${formatClock(state.seconds)}`;
  return "Unrecognized display command.";
}

function displayThisText(node, session = {}) {
  if (session.mode === "interface" && session.iface) {
    const iface = findInterfaceByName(node, session.iface);
    return [
      `interface ${iface.name}`,
      iface.desc ? ` description ${iface.desc}` : "",
      iface.ip ? ` ip address ${iface.ip} ${iface.mask || "24"}` : "",
      iface.vlan ? ` port default vlan ${iface.vlan}` : "",
      iface.linkType ? ` port link-type ${iface.linkType}` : "",
      iface.trafficFilters?.inbound ? ` traffic-filter inbound acl ${iface.trafficFilters.inbound}` : "",
      iface.trafficFilters?.outbound ? ` traffic-filter outbound acl ${iface.trafficFilters.outbound}` : "",
      iface.status === "down" ? " shutdown" : " undo shutdown"
    ].filter(Boolean).join("\n");
  }
  if (session.mode === "vlan" && session.vlan) {
    return `vlan ${session.vlan}\n description VLAN ${session.vlan}`;
  }
  if (session.mode === "ospf") {
    return `ospf ${session.ospf || node.ospf.process || "1"}${node.ospf.routerId ? ` router-id ${node.ospf.routerId}` : ""}`;
  }
  if (session.mode === "ospf-area") {
    return [`area ${session.area || "0"}`, ...node.ospf.networks.filter((item) => item.area === (session.area || "0")).map((item) => ` network ${item.network} ${item.wildcard}`)].join("\n");
  }
  if (session.mode === "acl") {
    return displayAclText(node, session.acl);
  }
  if (session.mode === "ip-pool") {
    const pool = getDhcpPool(node, session.pool);
    return [`ip pool ${pool.name}`, pool.network ? ` network ${pool.network} mask ${pool.mask}` : "", pool.gateway ? ` gateway-list ${pool.gateway}` : "", pool.dns ? ` dns-list ${pool.dns}` : ""].filter(Boolean).join("\n");
  }
  if (session.mode === "aaa") {
    return ["aaa", ...node.users.map((user) => ` local-user ${user.name} service-type ${user.serviceType || "-"}`)].join("\n");
  }
  if (session.mode === "user-interface") {
    const ui = getUserInterface(node, session.userInterface);
    return [`user-interface ${ui.name}`, ui.authenticationMode ? ` authentication-mode ${ui.authenticationMode}` : ""].filter(Boolean).join("\n");
  }
  return [
    `sysname ${node.name}`,
    node.bpduEnabled ? "bpdu enable" : "",
    node.protocols.OSPF ? "ospf 1" : "",
    node.protocols.VLAN ? `vlan batch ${node.vlans.length ? node.vlans.join(" ") : "10 20 30"}` : ""
  ].filter(Boolean).join("\n") || "No configuration in current view.";
}

function displayInterfaceText(node, name) {
  const iface = findInterfaceByName(node, expandInterfaceAlias(name.trim()));
  return [
    `${iface.name} current state : ${iface.status === "up" ? "UP" : "DOWN"}`,
    `Line protocol current state : ${iface.status === "up" ? "UP" : "DOWN"}`,
    `IP Sending Frames' Format is PKTFMT_ETHNT_2`,
    `Internet Address is ${iface.ip || "unassigned"} ${iface.mask || ""}`.trim(),
    `Port link-type : ${iface.linkType || "access"}`,
    `PVID : ${iface.vlan || "1"}`
  ].join("\n");
}

function parseVlanList(text) {
  if (String(text).trim().toLowerCase() === "all") return ["*"];
  const normalized = String(text).replace(/(\d+)\s+to\s+(\d+)/gi, "$1-$2");
  const result = [];
  normalized.split(/\s+/).forEach((part) => {
    if (/^\d+-\d+$/.test(part)) {
      const [start, end] = part.split("-").map(Number);
      for (let value = start; value <= end; value++) result.push(String(value));
    } else if (/^\d+$/.test(part)) {
      result.push(part);
    }
  });
  return [...new Set(result)];
}

function getDhcpPool(node, name) {
  let pool = node.dhcpPools.find((item) => item.name === name);
  if (!pool) {
    pool = { name, network: "", mask: "", gateway: "", dns: "" };
    node.dhcpPools.push(pool);
  }
  return pool;
}

function getLocalUser(node, name) {
  let user = node.users.find((item) => item.name === name);
  if (!user) {
    user = { name, passwordType: "", password: "", serviceType: "", privilege: "" };
    node.users.push(user);
  }
  return user;
}

function getUserInterface(node, name) {
  let ui = node.userInterfaces.find((item) => item.name === name);
  if (!ui) {
    ui = { name, authenticationMode: "" };
    node.userInterfaces.push(ui);
  }
  return ui;
}

function ensureAclStore(node) {
  node.acls = node.acls && typeof node.acls === "object" && !Array.isArray(node.acls) ? node.acls : {};
  if (Array.isArray(node.aclRules) && node.aclRules.length && !node.acls["3000"]) {
    node.acls["3000"] = {
      id: "3000",
      rules: node.aclRules.map((raw, index) => parseAclRule(raw, (index + 1) * 5)).filter(Boolean)
    };
  }
  Object.values(node.acls).forEach((acl) => {
    acl.rules = Array.isArray(acl.rules) ? acl.rules.map((rule, index) => ({
      seq: Number(rule.seq) || (index + 1) * 5,
      action: rule.action || parseAclRule(rule.raw || "")?.action || "permit",
      protocol: rule.protocol || parseAclRule(rule.raw || "")?.protocol || "ip",
      source: rule.source || parseAclRule(rule.raw || "")?.source || "any",
      sourceWildcard: rule.sourceWildcard || parseAclRule(rule.raw || "")?.sourceWildcard || "",
      destination: rule.destination || parseAclRule(rule.raw || "")?.destination || "any",
      destinationWildcard: rule.destinationWildcard || parseAclRule(rule.raw || "")?.destinationWildcard || "",
      raw: rule.raw || formatAclRule(rule),
      matches: Number(rule.matches) || 0
    })) : [];
  });
  return node.acls;
}

function getAcl(node, id) {
  const acls = ensureAclStore(node);
  const key = String(id || "3000");
  if (!acls[key]) acls[key] = { id: key, rules: [] };
  node.protocols.ACL = true;
  return acls[key];
}

function parseAclNumber(cmd) {
  const match = String(cmd).match(/^acl(?:\s+number)?\s+([A-Za-z0-9_-]+)/i);
  return match?.[1] || "";
}

function parseAclRule(cmd, fallbackSeq = 5) {
  const parts = String(cmd).trim().split(/\s+/);
  if (parts[0]?.toLowerCase() !== "rule") return null;
  let index = 1;
  let seq = fallbackSeq;
  if (/^\d+$/.test(parts[index])) seq = Number(parts[index++]);
  const action = parts[index++]?.toLowerCase();
  const protocol = parts[index++]?.toLowerCase() || "ip";
  if (!["permit", "deny"].includes(action)) return null;
  const rule = { seq, action, protocol, source: "any", sourceWildcard: "", sourcePort: "", destination: "any", destinationWildcard: "", destinationPort: "", icmpType: "", raw: String(cmd).trim() };
  while (index < parts.length) {
    const token = parts[index]?.toLowerCase();
    if (token === "source") {
      rule.source = parts[index + 1] || "any";
      rule.sourceWildcard = parts[index + 2] && !/^(destination|dest|source-port|destination-port|dest-port|icmp-type|time-range|vpn-instance)$/i.test(parts[index + 2]) ? parts[index + 2] : "";
      index += rule.sourceWildcard ? 3 : 2;
    } else if (token === "destination" || token === "dest") {
      rule.destination = parts[index + 1] || "any";
      rule.destinationWildcard = parts[index + 2] && !/^(source|source-port|destination-port|dest-port|icmp-type|time-range|vpn-instance)$/i.test(parts[index + 2]) ? parts[index + 2] : "";
      index += rule.destinationWildcard ? 3 : 2;
    } else if (token === "source-port") {
      rule.sourcePort = parseAclPort(parts, index);
      index += parts[index + 1]?.toLowerCase() === "eq" ? 3 : 2;
    } else if (token === "destination-port" || token === "dest-port") {
      rule.destinationPort = parseAclPort(parts, index);
      index += parts[index + 1]?.toLowerCase() === "eq" ? 3 : 2;
    } else if (token === "icmp-type") {
      rule.icmpType = parts[index + 1]?.toLowerCase() || "";
      index += 2;
    } else {
      index += 1;
    }
  }
  return rule;
}

function parseAclPort(parts, index) {
  if (parts[index + 1]?.toLowerCase() === "eq") return normalizeAclPort(parts[index + 2] || "");
  return normalizeAclPort(parts[index + 1] || "");
}

function normalizeAclPort(port) {
  const text = String(port || "").toLowerCase();
  return ({ www: "80", http: "80", https: "443", ftp: "21", "ftp-data": "20", dns: "53" })[text] || String(port || "");
}

function formatAclRule(rule, withStats = false) {
  const text = [
    `rule ${rule.seq} ${rule.action} ${rule.protocol || "ip"} source ${rule.source || "any"}${rule.sourceWildcard ? ` ${rule.sourceWildcard}` : ""} destination ${rule.destination || "any"}${rule.destinationWildcard ? ` ${rule.destinationWildcard}` : ""}`,
    rule.sourcePort ? `source-port eq ${rule.sourcePort}` : "",
    rule.destinationPort ? `destination-port eq ${rule.destinationPort}` : "",
    rule.icmpType ? `icmp-type ${rule.icmpType}` : ""
  ].filter(Boolean).join(" ");
  return withStats ? `${text} (matches ${Number(rule.matches) || 0})` : text;
}

function displayAclText(node, aclId = "") {
  const acls = ensureAclStore(node);
  const ids = aclId ? [aclId] : Object.keys(acls).sort();
  if (!ids.length) return "No ACL configured.";
  return ids.map((id) => {
    const acl = acls[id];
    if (!acl) return `ACL ${id} not found.`;
    const rules = acl.rules.length ? [...acl.rules].sort((a, b) => a.seq - b.seq).map((rule) => ` ${formatAclRule(rule, true)}`) : [" <empty>"];
    return [`Advanced ACL ${id}`, ...rules].join("\n");
  }).join("\n#\n");
}

function displayTrafficFilterText(node) {
  const rows = node.interfaces.flatMap((iface) => {
    const filters = iface.trafficFilters || {};
    return ["inbound", "outbound"]
      .filter((direction) => filters[direction])
      .map((direction) => `${iface.name.padEnd(18)} ${direction.padEnd(8)} acl ${filters[direction]}`);
  });
  return rows.length ? ["Interface          Direction ACL", ...rows].join("\n") : "No traffic-filter applied.";
}

function resetAclCounters(node, aclId = "") {
  const acls = ensureAclStore(node);
  const ids = aclId ? [aclId] : Object.keys(acls);
  ids.forEach((id) => acls[id]?.rules.forEach((rule) => (rule.matches = 0)));
}

function parseAclCounterTarget(lower) {
  return lower.replace(/^reset\s+acl\s+counter\s*/i, "").replace(/^acl\s+number\s+/i, "").replace(/^number\s+/i, "").trim();
}

function applyAclCliCommand(node, view, cmd, lower) {
  ensureAclStore(node);
  if (lower.startsWith("undo acl ")) {
    const id = lower.replace(/^undo\s+acl\s+(number\s+)?/, "").trim();
    delete node.acls[id];
    return { handled: true };
  }
  if (/^acl(\s+number)?\s+/.test(lower)) {
    const id = parseAclNumber(cmd);
    if (!id) return { handled: true, error: "Error: ACL number is required." };
    getAcl(node, id);
    node.protocols.ACL = true;
    view.mode = "acl";
    view.acl = id;
    return { handled: true };
  }
  if (view.mode === "acl" && lower.startsWith("rule ")) {
    const acl = getAcl(node, view.acl || "3000");
    const rule = parseAclRule(cmd, (acl.rules.length + 1) * 5);
    if (!rule) return { handled: true, error: "Error: invalid ACL rule." };
    acl.rules = acl.rules.filter((item) => item.seq !== rule.seq);
    acl.rules.push(rule);
    acl.rules.sort((a, b) => a.seq - b.seq);
    node.aclRules = acl.rules.map(formatAclRule);
    node.protocols.ACL = true;
    return { handled: true };
  }
  if (view.mode === "acl" && lower.startsWith("undo rule")) {
    const acl = getAcl(node, view.acl || "3000");
    const seq = Number(lower.split(/\s+/)[2]);
    acl.rules = Number.isFinite(seq) ? acl.rules.filter((rule) => rule.seq !== seq) : [];
    node.aclRules = acl.rules.map(formatAclRule);
    return { handled: true };
  }
  if (view.mode === "interface" && lower.startsWith("traffic-filter ")) {
    const match = lower.match(/^traffic-filter\s+(inbound|outbound)\s+acl\s+([A-Za-z0-9_-]+)/);
    if (!match) return { handled: true, error: "Error: usage traffic-filter inbound|outbound acl <number>." };
    const iface = findInterfaceByName(node, view.iface);
    iface.trafficFilters = iface.trafficFilters || {};
    iface.trafficFilters[match[1]] = match[2];
    getAcl(node, match[2]);
    node.protocols.ACL = true;
    return { handled: true };
  }
  if (view.mode === "interface" && lower.startsWith("undo traffic-filter ")) {
    const direction = lower.match(/^undo\s+traffic-filter\s+(inbound|outbound)/)?.[1];
    if (!direction) return { handled: true, error: "Error: usage undo traffic-filter inbound|outbound." };
    const iface = findInterfaceByName(node, view.iface);
    if (iface.trafficFilters) delete iface.trafficFilters[direction];
    return { handled: true };
  }
  return { handled: false };
}

function applyLocalUserCommand(node, cmd) {
  const parts = cmd.split(/\s+/);
  const user = getLocalUser(node, parts[1]);
  if (parts[2] === "password") {
    user.passwordType = parts[3] || "cipher";
    user.password = parts.slice(4).join(" ");
  }
  if (parts[2] === "service-type") user.serviceType = parts.slice(3).join(" ");
  if (parts[2] === "privilege" && parts[3] === "level") user.privilege = parts[4] || "";
}

function applyTutorialCommand(node, context, cmd, lower) {
  const iface = context.iface ? findInterfaceByName(node, context.iface) : null;
  if (context.mode === "interface" && iface && lower.startsWith("description ")) {
    iface.desc = cmd.slice(12).trim();
    return true;
  }
  if (context.mode === "interface" && iface && (lower === "stp edged-port enable" || lower === "stp edged enable")) {
    iface.stpEdged = true;
    node.stp.enabled = true;
    return true;
  }
  if (context.mode === "interface" && iface && lower.startsWith("vrrp vrid ")) {
    iface.vrrp = iface.vrrp || {};
    const parts = cmd.split(/\s+/);
    iface.vrrp.vrid = parts[2];
    if (lower.includes("virtual-ip")) iface.vrrp.virtualIp = parts.at(-1);
    if (lower.includes("priority")) iface.vrrp.priority = parts.at(-1);
    return true;
  }
  if (context.mode === "interface" && iface && lower.startsWith("eth-trunk ")) {
    iface.ethTrunk = cmd.split(/\s+/)[1];
    return true;
  }
  if (context.mode === "interface" && iface && lower.startsWith("link-protocol ppp")) {
    iface.linkProtocol = "ppp";
    return true;
  }
  if (context.mode === "interface" && iface && lower.startsWith("ppp ")) {
    iface.ppp = iface.ppp || [];
    iface.ppp.push(cmd);
    return true;
  }
  if (context.mode === "interface" && iface && (lower.startsWith("port-security") || lower.startsWith("port-sercurity"))) {
    iface.portSecurity = cmd;
    return true;
  }
  if (lower === "stp enable") {
    node.stp.enabled = true;
    node.protocols.STP = true;
    return true;
  }
  if (lower.startsWith("stp mode ")) {
    node.stp.enabled = true;
    node.stp.mode = cmd.split(/\s+/).pop();
    node.protocols.STP = true;
    return true;
  }
  if (lower.startsWith("stp priority ")) {
    node.stp.enabled = true;
    node.stp.priority = cmd.split(/\s+/).pop();
    node.protocols.STP = true;
    return true;
  }
  if (lower.startsWith("stp root ")) {
    node.stp.enabled = true;
    node.stp.root = cmd.split(/\s+/).pop();
    node.protocols.STP = true;
    return true;
  }
  if (lower.startsWith("trunkport ")) {
    node.trunkPorts = node.trunkPorts || [];
    node.trunkPorts.push(cmd.replace(/^trunkport\s+/i, ""));
    return true;
  }
  if (lower.startsWith("mode ")) {
    node.modeCommand = cmd;
    return true;
  }
  return false;
}

function applyUndoConfigCommand(node, context, cmd, lower) {
  const iface = context.iface ? findInterfaceByName(node, context.iface) : null;
  if (lower.startsWith("undo ip route-static ")) {
    const [, , , dest, mask, nextHop] = cmd.split(/\s+/);
    node.routes = (node.routes || []).filter((route) => !(route.dest === dest && route.mask === mask && (!nextHop || route.nextHop === nextHop)));
    node.protocols.Static = Boolean(node.routes.length);
    return true;
  }
  if (/^undo\s+vlan\s+\d+/.test(lower)) {
    const vlan = cmd.split(/\s+/).pop();
    node.vlans = (node.vlans || []).filter((item) => item !== vlan);
    return true;
  }
  if (context.mode !== "interface" || !iface) return false;
  if (lower === "undo ip address") {
    iface.ip = "";
    iface.mask = "";
    return true;
  }
  if (lower === "undo port default vlan") {
    iface.vlan = "1";
    return true;
  }
  if (lower.startsWith("undo port trunk allow-pass vlan")) {
    const remove = parseVlanList(cmd.replace(/^undo\s+port\s+trunk\s+allow-pass\s+vlan\s*/i, ""));
    iface.trunkAllow = remove.length && !remove.includes("*")
      ? (iface.trunkAllow || []).filter((vlan) => !remove.includes(String(vlan)))
      : [];
    return true;
  }
  if (lower === "undo port link-type") {
    iface.linkType = "access";
    return true;
  }
  if (lower === "undo dot1q termination vid") {
    iface.dot1q = "";
    return true;
  }
  if (lower === "undo arp broadcast enable") {
    iface.arpBroadcast = false;
    return true;
  }
  if (lower === "undo ospf enable") {
    iface.ospf = null;
    return true;
  }
  if (lower === "undo dhcp select global") {
    iface.dhcpSelect = "";
    return true;
  }
  return false;
}

function vrpPrompt(node, session) {
  if (session.mode === "interface") return `[${node.name}-${session.iface}]`;
  if (session.mode === "vlan") return `[${node.name}-vlan${session.vlan}]`;
  if (session.mode === "ospf-area") return `[${node.name}-ospf-${session.ospf}-area-${session.area}]`;
  if (session.mode === "ospf") return `[${node.name}-ospf-${session.ospf}]`;
  if (session.mode === "acl") return `[${node.name}-acl-${session.acl}]`;
  if (session.mode === "ip-pool") return `[${node.name}-ip-pool-${session.pool}]`;
  if (session.mode === "aaa") return `[${node.name}-aaa]`;
  if (session.mode === "user-interface") return `[${node.name}-ui-${session.userInterface}]`;
  if (session.mode === "system") return `[${node.name}]`;
  return `<${node.name}>`;
}

function appendVrpConsole(win, text) {
  const out = win.querySelector("[data-vrp-output]");
  out.textContent += `${text}\n`;
  out.scrollTop = out.scrollHeight;
}

function bindEndpointWindow(win, node) {
  const form = win.querySelector("[data-pc-form]");
  const updateEchoPrompt = bindEchoPrompt(form, () => `${node.name}>`);
  const input = form.querySelector("input");
  node.pcHistory = node.pcHistory || [];
  let pcHistoryIndex = node.pcHistory.length;
  input.addEventListener("keydown", (event) => {
    if (!["ArrowUp", "ArrowDown"].includes(event.key)) return;
    event.preventDefault();
    if (event.key === "ArrowUp") pcHistoryIndex = Math.max(0, pcHistoryIndex - 1);
    if (event.key === "ArrowDown") pcHistoryIndex = Math.min(node.pcHistory.length, pcHistoryIndex + 1);
    input.value = node.pcHistory[pcHistoryIndex] || "";
    updateEchoPrompt();
    requestAnimationFrame(() => input.setSelectionRange(input.value.length, input.value.length));
  });
  win.querySelector(".window-titlebar").addEventListener("mousedown", (event) => {
    if (event.target.closest("button")) return;
    startWindowDrag(event, win);
  });
  win.querySelector("[data-close-window]").addEventListener("click", () => {
    win.remove();
    saveUiState();
  });
  win.querySelectorAll("[data-window-tab]").forEach((tab) => {
    tab.addEventListener("click", () => {
      if (["cmd", "client"].includes(tab.dataset.windowTab) && !requireNodeRunning(node)) return;
      win.querySelectorAll("[data-window-tab]").forEach((item) => item.classList.toggle("active", item === tab));
      win.querySelectorAll("[data-window-panel]").forEach((panel) => (panel.hidden = panel.dataset.windowPanel !== tab.dataset.windowTab));
      if (tab.dataset.windowTab === "cmd") setTimeout(() => win.querySelector("[data-pc-form] input")?.focus(), 0);
    });
  });
  win.querySelector("[data-apply-pc]").addEventListener("click", () => applyEndpointConfig(win, node));
  win.querySelector("[data-dhcp-pc]").addEventListener("click", () => {
    const host = 100 + Math.floor(Math.random() * 80);
    win.querySelector(`#pcIp-${node.id}`).value = `192.168.1.${host}`;
    win.querySelector(`#pcMask-${node.id}`).value = "255.255.255.0";
    win.querySelector(`#pcGateway-${node.id}`).value = "192.168.1.1";
    win.querySelector(`#pcDns-${node.id}`).value = "8.8.8.8";
    applyEndpointConfig(win, node);
  });
  win.querySelector("[data-clear-pc]").addEventListener("click", () => {
    [`pcIp-${node.id}`, `pcMask-${node.id}`, `pcGateway-${node.id}`, `pcDns-${node.id}`].forEach((id) => (win.querySelector(`#${id}`).value = ""));
    applyEndpointConfig(win, node);
  });
  if (node.type === "server") {
    win.querySelector("[data-apply-services]")?.addEventListener("click", () => applyServerServices(win, node));
    win.querySelectorAll("[data-pick-server-folder]").forEach((button) => {
      button.addEventListener("click", () => pickServerFolder(win, node, button.dataset.pickServerFolder));
    });
    win.querySelectorAll("[data-clear-server-folder]").forEach((button) => {
      button.addEventListener("click", () => clearServerFolder(win, node, button.dataset.clearServerFolder));
    });
    win.querySelector("[data-fill-services]")?.addEventListener("click", () => {
      const ifaceIp = node.interfaces.find((item) => item.ip)?.ip || "192.168.1.10";
      win.querySelector(`#srvDnsRecords-${node.id}`).value = [`www.lab.local ${ifaceIp}`, `ftp.lab.local ${ifaceIp}`, `dns.lab.local ${ifaceIp}`].join("\n");
      applyServerServices(win, node);
    });
  }
  if (node.type === "client") {
    win.querySelector("[data-client-get]")?.addEventListener("click", () => runClientHttpGet(win, node));
    win.querySelector("[data-client-clear]")?.addEventListener("click", () => {
      win.querySelector("[data-client-response]").textContent = "";
    });
  }
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!requireNodeRunning(node)) return;
    const cmd = input.value.trim();
    if (!cmd) return;
    node.pcHistory.push(cmd);
    pcHistoryIndex = node.pcHistory.length;
    input.value = "";
    updateEchoPrompt();
    runEndpointCommand(win, node, cmd);
  });
}

function bindEchoPrompt(form, promptFn) {
  const prompt = form.querySelector(".console-prompt");
  const typed = form.querySelector("[data-console-typed]");
  const input = form.querySelector("input");
  const update = () => {
    prompt.textContent = promptFn();
    typed.textContent = input.value;
    typed.scrollLeft = typed.scrollWidth;
  };
  input.addEventListener("input", update);
  update();
  return update;
}

function applyEndpointConfig(win, node) {
  const iface = node.interfaces[0];
  iface.ip = win.querySelector(`#pcIp-${node.id}`).value.trim();
  iface.mask = win.querySelector(`#pcMask-${node.id}`).value.trim();
  node.gateway = win.querySelector(`#pcGateway-${node.id}`).value.trim();
  node.dns = win.querySelector(`#pcDns-${node.id}`).value.trim();
  node.mac = win.querySelector(`#pcMac-${node.id}`).value.trim();
  updateEndpointNotes(node);
  log("ok", node.type === "client" ? "CLIENT" : "PC", `${node.name} IP 配置已应用`);
  renderAll();
}

function applyServerServices(win, node) {
  const services = ensureServerServices(node);
  if (!services) return;
  services.http.enabled = win.querySelector(`#srvHttpEnabled-${node.id}`).checked;
  services.http.port = Number(win.querySelector(`#srvHttpPort-${node.id}`).value) || 80;
  services.http.root = win.querySelector(`#srvHttpRoot-${node.id}`).value.trim() || "wwwroot";
  services.http.index = win.querySelector(`#srvHttpIndex-${node.id}`).value.trim() || "eNSP Web Server";
  services.ftp.enabled = win.querySelector(`#srvFtpEnabled-${node.id}`).checked;
  services.ftp.port = Number(win.querySelector(`#srvFtpPort-${node.id}`).value) || 21;
  services.ftp.root = win.querySelector(`#srvFtpRoot-${node.id}`).value.trim() || "ftp-root";
  services.ftp.user = win.querySelector(`#srvFtpUser-${node.id}`).value.trim() || "admin";
  services.ftp.password = win.querySelector(`#srvFtpPassword-${node.id}`).value.trim() || "admin";
  services.dns.enabled = win.querySelector(`#srvDnsEnabled-${node.id}`).checked;
  services.dns.records = parseDnsRecords(win.querySelector(`#srvDnsRecords-${node.id}`).value);
  node.protocols.HTTP = services.http.enabled;
  node.protocols.FTP = services.ftp.enabled;
  node.protocols.DNS = services.dns.enabled;
  updateEndpointNotes(node);
  log("ok", "SERVER", `${node.name} 服务配置已应用`);
  renderAll();
}

function pickServerFolder(win, node, serviceKey) {
  const input = document.createElement("input");
  input.type = "file";
  input.multiple = true;
  input.webkitdirectory = true;
  input.directory = true;
  input.setAttribute("webkitdirectory", "");
  input.setAttribute("directory", "");
  input.hidden = true;
  input.addEventListener("change", async () => {
    const files = Array.from(input.files || []);
    if (!files.length) {
      input.remove();
      return;
    }
    try {
      applyServerServices(win, node);
      const picked = await readServerFolder(files);
      const services = ensureServerServices(node);
      const service = services[serviceKey];
      service.root = picked.folderName || service.root;
      service.folderName = picked.folderName;
      service.files = picked.files;
      service.folderTruncated = picked.truncated;
      const rootInput = win.querySelector(`#srv${serviceKey === "http" ? "Http" : "Ftp"}Root-${node.id}`);
      if (rootInput) rootInput.value = service.root;
      const summary = win.querySelector(`[data-server-folder-summary="${serviceKey}"]`);
      if (summary) summary.innerHTML = serverFolderSummary(service);
      if (serviceKey === "http") {
        const indexFile = findServerFile(service.files, "/") || service.files.find((file) => file.content);
        if (indexFile?.content) {
          service.index = indexFile.content;
          const indexInput = win.querySelector(`#srvHttpIndex-${node.id}`);
          if (indexInput) indexInput.value = indexFile.content;
        }
      }
      updateEndpointNotes(node);
      log("ok", "SERVER", `${node.name} ${serviceKey.toUpperCase()} 已选择目录 ${service.root}（${service.files.length} 个文件）`);
      renderAll();
      toast(`${serviceKey.toUpperCase()} 已载入 ${service.files.length} 个文件`);
    } catch (error) {
      toast(`读取文件夹失败：${error.message || error}`);
    } finally {
      input.remove();
    }
  }, { once: true });
  document.body.appendChild(input);
  input.click();
}

function clearServerFolder(win, node, serviceKey) {
  applyServerServices(win, node);
  const services = ensureServerServices(node);
  const service = services[serviceKey];
  service.folderName = "";
  service.files = [];
  service.folderTruncated = false;
  const summary = win.querySelector(`[data-server-folder-summary="${serviceKey}"]`);
  if (summary) summary.textContent = "未选择本地文件夹";
  updateEndpointNotes(node);
  log("info", "SERVER", `${node.name} ${serviceKey.toUpperCase()} 已清除本地目录`);
  renderAll();
  toast(`${serviceKey.toUpperCase()} 本地目录已清除`);
}

async function readServerFolder(files) {
  const rootPath = files[0]?.webkitRelativePath || files[0]?.name || "";
  const folderName = rootPath.includes("/") ? rootPath.split("/")[0] : "local-folder";
  const selected = files.slice(0, SERVER_FOLDER_MAX_FILES);
  const entries = [];
  let remainingContentBudget = SERVER_FOLDER_CONTENT_BUDGET;
  for (const file of selected) {
    const rawPath = file.webkitRelativePath || file.name;
    const path = rawPath.includes("/") ? rawPath.split("/").slice(1).join("/") : rawPath;
    const entry = {
      path: path || file.name,
      name: file.name,
      size: file.size,
      type: file.type || guessMimeType(file.name),
      modified: file.lastModified || 0,
      content: "",
      truncated: false
    };
    if (isTextLikeFile(file) && remainingContentBudget > 0) {
      const readLimit = Math.min(file.size, SERVER_FILE_PREVIEW_LIMIT, remainingContentBudget);
      const blob = file.slice(0, readLimit);
      entry.content = await blob.text();
      remainingContentBudget -= entry.content.length;
      entry.truncated = file.size > readLimit;
    } else if (isTextLikeFile(file)) {
      entry.truncated = true;
    }
    entries.push(entry);
  }
  return {
    folderName,
    files: normalizeServerFiles(entries),
    truncated: files.length > SERVER_FOLDER_MAX_FILES
  };
}

function normalizeServerFiles(files) {
  return Array.isArray(files)
    ? files.slice(0, SERVER_FOLDER_MAX_FILES).map((file) => ({
      path: String(file.path || file.name || "").replace(/^\/+/, ""),
      name: String(file.name || file.path || "").split("/").pop(),
      size: Number(file.size) || 0,
      type: String(file.type || ""),
      modified: Number(file.modified) || 0,
      content: typeof file.content === "string" ? file.content.slice(0, SERVER_FILE_PREVIEW_LIMIT) : "",
      truncated: Boolean(file.truncated)
    })).filter((file) => file.path)
    : [];
}

function serverFolderSummary(service) {
  const files = normalizeServerFiles(service.files);
  if (!files.length) return "未选择本地文件夹";
  const listed = files.slice(0, 6).map((file) => `<div>${escapeHtml(file.path)} <span>${formatBytes(file.size)}</span></div>`).join("");
  const more = files.length > 6 ? `<em>+${files.length - 6} more</em>` : "";
  const truncated = service.folderTruncated ? `<em>文件较多，仅载入前 ${SERVER_FOLDER_MAX_FILES} 个</em>` : "";
  return `<strong>${escapeHtml(service.folderName || service.root || "local-folder")}</strong><div class="folder-file-list">${listed}${more}${truncated}</div>`;
}

function isTextLikeFile(file) {
  const name = file.name.toLowerCase();
  return file.type.startsWith("text/")
    || /\.(html?|css|js|json|txt|xml|csv|md|cfg|conf|ini|log|yml|yaml)$/i.test(name);
}

function guessMimeType(name) {
  const lower = String(name || "").toLowerCase();
  if (lower.endsWith(".html") || lower.endsWith(".htm")) return "text/html";
  if (lower.endsWith(".css")) return "text/css";
  if (lower.endsWith(".js")) return "application/javascript";
  if (lower.endsWith(".json")) return "application/json";
  if (lower.endsWith(".xml")) return "application/xml";
  if (lower.endsWith(".txt") || lower.endsWith(".cfg")) return "text/plain";
  return "application/octet-stream";
}

function formatBytes(size) {
  if (size < 1024) return `${size} B`;
  if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
  return `${(size / 1024 / 1024).toFixed(1)} MB`;
}

function runClientHttpGet(win, node) {
  if (!requireNodeRunning(node, "HttpClient")) return;
  const host = win.querySelector(`#clientHost-${node.id}`).value.trim();
  const port = Number(win.querySelector(`#clientPort-${node.id}`).value) || 80;
  const url = win.querySelector(`#clientUrl-${node.id}`).value.trim() || "/";
  node.clientHost = host;
  node.clientPort = port;
  node.clientUrl = url;
  win.querySelector("[data-client-response]").textContent = simulateHttpRequest(node, host, port, url);
  renderAll();
}

function parseHttpRequestTarget(raw) {
  const source = String(raw || "").trim();
  if (!source) return { host: "", port: 80, url: "/" };
  try {
    const parsed = new URL(/^https?:\/\//i.test(source) ? source : `http://${source}`);
    return {
      host: parsed.hostname,
      port: Number(parsed.port) || 80,
      url: `${parsed.pathname || "/"}${parsed.search || ""}`
    };
  } catch {
    const cleaned = source.replace(/^https?:\/\//i, "");
    const [hostPort, ...pathParts] = cleaned.split("/");
    const [host, portText] = hostPort.split(":");
    return {
      host,
      port: Number(portText) || 80,
      url: pathParts.length ? `/${pathParts.join("/")}` : "/"
    };
  }
}

function updateEndpointNotes(node) {
  const notes = [
    node.gateway ? `Gateway: ${node.gateway}` : "",
    node.dns ? `DNS: ${node.dns}` : "",
    node.mac ? `MAC: ${node.mac}` : ""
  ];
  if (node.type === "server") {
    const services = ensureServerServices(node);
    notes.push(`HTTP: ${services.http.enabled ? `on/${services.http.port}/${services.http.files.length} files` : "off"}`);
    notes.push(`FTP: ${services.ftp.enabled ? `on/${services.ftp.port}/${services.ftp.files.length} files` : "off"}`);
    notes.push(`DNS: ${services.dns.enabled ? `on/${Object.keys(services.dns.records).length} records` : "off"}`);
  }
  node.notes = notes.filter(Boolean).join("\n");
}

function parseDnsRecords(raw) {
  const records = {};
  String(raw || "").split(/\r?\n/).forEach((line) => {
    const cleaned = line.trim();
    if (!cleaned || cleaned.startsWith("#")) return;
    const [host, ip] = cleaned.split(/[\s,=]+/);
    if (host && ip) records[host.toLowerCase()] = ip;
  });
  return records;
}

function formatDnsRecords(records = {}) {
  return Object.entries(records).map(([host, ip]) => `${host} ${ip}`).join("\n");
}

function runEndpointCommand(win, node, cmd) {
  const out = win.querySelector("[data-pc-output]");
  appendPcConsole(out, `${node.name}> ${cmd}`);
  const lower = cmd.toLowerCase();
  if (lower === "help" || lower === "?") {
    appendPcConsole(out, node.type === "client"
      ? "ipconfig | ping <name|ip|domain> | nslookup <domain> | http <host[:port][/path]> | ftp <host> | arp -a | route print | clear"
      : "ipconfig | ping <name|ip|domain> | nslookup <domain> | arp -a | route print | clear");
  } else if (lower === "clear") {
    out.textContent = "";
  } else if (lower === "ipconfig" || lower === "ipconfig /all") {
    const iface = node.interfaces[0] || {};
    appendPcConsole(out, `Ethernet adapter Ethernet0/0/1:\n   Physical Address. . . . . . . . : ${node.mac || fakeMac(node.id)}\n   IPv4 Address. . . . . . . . . . : ${iface.ip || "0.0.0.0"}\n   Subnet Mask . . . . . . . . . . : ${iface.mask || "0.0.0.0"}\n   Default Gateway . . . . . . . . : ${node.gateway || "0.0.0.0"}\n   DNS Servers . . . . . . . . . . : ${node.dns || "0.0.0.0"}`);
  } else if (lower.startsWith("ping ")) {
    const target = cmd.slice(5).trim();
    const targetInfo = findEndpointTargetInfo(target, node);
    const dest = targetInfo?.node;
    if (!dest) appendPcConsole(out, `Ping request could not find host ${target}. Please check the name and try again.`);
    else {
      const packet = runPing(node.id, dest.id, { destIp: targetInfo.ip });
      playPcPing(out, packet, dest, target);
    }
  } else if (lower.startsWith("nslookup ")) {
    const host = cmd.slice(9).trim();
    const ip = resolveDnsName(host, node);
    appendPcConsole(out, ip ? `Server: ${node.dns || "local"}\nName: ${host}\nAddress: ${ip}` : `DNS request timed out or no record for ${host}.`);
  } else if (lower === "services") {
    appendPcConsole(out, node.type === "server" ? formatServerServices(node) : "This endpoint has no server services.");
  } else if (lower.startsWith("http ") || lower.startsWith("curl ")) {
    if (node.type !== "client") {
      appendPcConsole(out, "HttpClient 功能属于 Client 设备，请使用 Client 访问 HTTP Server。");
      return;
    }
    const request = parseHttpRequestTarget(cmd.replace(/^(http|curl)\s+/i, "").trim());
    appendPcConsole(out, simulateHttpRequest(node, request.host, request.port, request.url));
  } else if (lower.startsWith("ftp ")) {
    if (node.type !== "client") {
      appendPcConsole(out, "FTP 功能属于 Client 设备，请使用 Client 连接 FTP Server。");
      return;
    }
    const target = cmd.slice(4).trim().split(/[/:]/)[0];
    const targetInfo = findEndpointTargetInfo(target, node);
    const dest = targetInfo?.node;
    const services = dest ? ensureServerServices(dest) : null;
    if (!dest || dest.type !== "server") appendPcConsole(out, `ftp: unknown host ${target}`);
    else {
      const control = endpointReachabilityStatus(node.id, dest.id, { protocol: "tcp", destinationPort: services.ftp.port || 21, destIp: targetInfo.ip, countAcl: true });
      if (!control.ok) appendPcConsole(out, `ftp: connect to ${target}: Network is unreachable (${control.reason})`);
      else if (!services.ftp.enabled) appendPcConsole(out, `ftp: connect to ${dest.name}: Connection refused`);
      else {
        const data = endpointReachabilityStatus(node.id, dest.id, { protocol: "tcp", destinationPort: 20, destIp: targetInfo.ip, countAcl: true });
        if (!data.ok) appendPcConsole(out, `Connected to ${dest.name}.\n220 ${dest.name} FTP service ready\nUser: ${services.ftp.user}\n230 Login successful\n425 Can't open data connection. (${data.reason})`);
        else appendPcConsole(out, `Connected to ${dest.name}.\n220 ${dest.name} FTP service ready\nUser: ${services.ftp.user}\n230 Login successful\nRemote directory: /${services.ftp.root}\n${formatFtpListing(services.ftp)}`);
      }
    }
  } else if (lower === "arp -a") {
    appendPcConsole(out, arpTable(node).join("\n") || "No ARP Entries Found.");
  } else if (lower === "route print") {
    appendPcConsole(out, `IPv4 Route Table\n0.0.0.0/0 via ${node.gateway || "0.0.0.0"}\n${inferRoutes(node).join("\n")}`);
  } else {
    appendPcConsole(out, `'${cmd}' 不是内部或外部命令。`);
  }
}

function simulateHttpRequest(sourceNode, target, port = 80, url = "/") {
  const targetInfo = findEndpointTargetInfo(target, sourceNode);
  const dest = targetInfo?.node;
  const services = dest ? ensureServerServices(dest) : null;
  if (!dest || dest.type !== "server") return `HttpClient Error: could not resolve host ${target}.`;
  const reachable = endpointReachabilityStatus(sourceNode.id, dest.id, { protocol: "tcp", destinationPort: port || 80, destIp: targetInfo.ip, countAcl: true });
  if (!reachable.ok) return `HttpClient Error: ${target} network unreachable. (${reachable.reason})`;
  if (!services.http.enabled) return `HttpClient Error: ${dest.name} HTTP service disabled.`;
  if (Number(services.http.port) !== Number(port)) return `HttpClient Error: ${dest.name} has no HTTP service on port ${port}.`;
  const file = findServerFile(services.http.files, url);
  if (file) {
    const body = file.content || `[binary file: ${file.name}, ${formatBytes(file.size)}]`;
    return [
      `GET ${url || "/"} HTTP/1.1`,
      `Host: ${target}`,
      "",
      "HTTP/1.1 200 OK",
      `Server: ${dest.name}:${services.http.port}`,
      `Root: /${services.http.root}`,
      `Content-Type: ${file.type || guessMimeType(file.name)}`,
      `Content-Length: ${file.size}`,
      "",
      file.truncated ? `${body}\n\n[content truncated in browser storage]` : body
    ].join("\n");
  }
  if (services.http.files?.length) {
    return [
      `GET ${url || "/"} HTTP/1.1`,
      `Host: ${target}`,
      "",
      "HTTP/1.1 404 Not Found",
      `Server: ${dest.name}:${services.http.port}`,
      "",
      `File not found: ${url || "/"}`,
      "Available files:",
      ...services.http.files.slice(0, 12).map((item) => `  /${item.path}`)
    ].join("\n");
  }
  return [
    `GET ${url || "/"} HTTP/1.1`,
    `Host: ${target}`,
    "",
    "HTTP/1.1 200 OK",
    `Server: ${dest.name}:${services.http.port}`,
    `Root: /${services.http.root}`,
    "",
    services.http.index
  ].join("\n");
}

function findServerFile(files, url = "/") {
  const list = normalizeServerFiles(files);
  if (!list.length) return null;
  let targetPath = String(url || "/").split(/[?#]/)[0];
  try {
    targetPath = decodeURIComponent(targetPath);
  } catch {
    targetPath = String(url || "/");
  }
  targetPath = targetPath.replace(/^\/+/, "").replace(/\/+$/, "");
  if (!targetPath) {
    return list.find((file) => /^index\.(html?|txt)$/i.test(file.name))
      || list.find((file) => file.content)
      || list[0];
  }
  const normalized = targetPath.toLowerCase();
  return list.find((file) => file.path.toLowerCase() === normalized || file.name.toLowerCase() === normalized) || null;
}

function findEndpointTarget(target, sourceNode) {
  return findEndpointTargetInfo(target, sourceNode)?.node || null;
}

function findEndpointTargetInfo(target, sourceNode) {
  const direct = state.nodes.find((n) => n.name.toLowerCase() === target.toLowerCase() || n.interfaces.some((i) => i.ip === target));
  if (direct) {
    const iface = direct.interfaces.find((item) => item.ip === target);
    return { node: direct, ip: iface?.ip || primaryIp(direct) };
  }
  const resolvedIp = resolveDnsName(target, sourceNode);
  if (!resolvedIp) return null;
  const resolved = state.nodes.find((n) => n.interfaces.some((i) => i.ip === resolvedIp)) || null;
  return resolved ? { node: resolved, ip: resolvedIp } : null;
}

function resolveDnsName(host, sourceNode) {
  const name = String(host || "").toLowerCase();
  if (!name) return "";
  const preferredDns = sourceNode?.dns || "";
  const servers = state.nodes.filter((node) => {
    if (node.type !== "server" || !node.running) return false;
    const services = node.services;
    if (!services?.dns?.enabled) return false;
    if (!preferredDns) return true;
    return node.interfaces.some((iface) => iface.ip === preferredDns);
  });
  for (const server of servers) {
    if (sourceNode && sourceNode.id !== server.id && !endpointReachable(sourceNode.id, server.id, { protocol: "udp", destinationPort: 53 })) continue;
    const records = server.services?.dns?.records || {};
    if (records[name]) return records[name];
  }
  return "";
}

function endpointReachable(sourceId, destId, flow = {}) {
  return endpointReachabilityStatus(sourceId, destId, flow).ok;
}

function endpointReachabilityStatus(sourceId, destId, flow = {}) {
  const source = getNode(sourceId);
  const dest = getNode(destId);
  const normalizedFlow = normalizeFlowIps(source, dest, flow);
  if (!state.running) return { ok: false, path: [], reason: "仿真未运行" };
  if (!source?.running) return { ok: false, path: [], reason: "源设备未启动" };
  if (!dest?.running) return { ok: false, path: [], reason: "目的设备未启动" };

  const routedPath = findPath(sourceId, destId, normalizedFlow);
  const trafficPath = routedPath.length ? routedPath : findTrafficPath(sourceId, destId);
  if (!trafficPath.length) {
    const physicalPath = findPhysicalPath(sourceId, destId);
    const blocked = firstTrafficBlock(physicalPath);
    return {
      ok: false,
      path: physicalPath,
      reason: blocked?.reason || "没有可承载业务流量的链路路径"
    };
  }

  const forwardRouteReason = routeFailureReason(trafficPath, normalizedFlow);
  if (forwardRouteReason) return { ok: false, path: trafficPath, reason: forwardRouteReason };

  const forwardBlocked = aclBlocksPath(source, dest, trafficPath, normalizedFlow, { count: Boolean(flow.countAcl) });
  if (forwardBlocked) return { ok: false, path: trafficPath, reason: formatAclBlockReason(forwardBlocked) };

  const returnPath = [...trafficPath].reverse();
  const returnFlow = {
    ...normalizedFlow,
    sourceIp: normalizedFlow.destIp,
    destIp: normalizedFlow.sourceIp,
    sourcePort: normalizedFlow.destinationPort || normalizedFlow.sourcePort,
    destinationPort: normalizedFlow.sourcePort || "",
    icmpType: normalizedFlow.protocol === "icmp" ? "echo-reply" : normalizedFlow.icmpType
  };
  const returnRouteReason = routeFailureReason(returnPath, returnFlow);
  if (returnRouteReason) return { ok: false, path: trafficPath, reason: `返回路径：${returnRouteReason}` };

  const returnBlocked = aclBlocksPath(dest, source, returnPath, returnFlow, { count: Boolean(flow.countAcl) });
  if (returnBlocked) return { ok: false, path: trafficPath, reason: `返回路径：${formatAclBlockReason(returnBlocked)}` };

  return { ok: true, path: trafficPath, reason: "" };
}

function aclBlocksPath(source, dest, path, flow = {}, options = {}) {
  const sourceIp = flow.sourceIp || primaryIp(source);
  const destIp = flow.destIp || primaryIp(dest);
  if (!sourceIp || !destIp) return null;
  for (let index = 0; index < path.length; index += 1) {
    const node = getNode(path[index]);
    if (!node) continue;
    const prev = path[index - 1];
    const next = path[index + 1];
    const checks = [];
    if (prev) checks.push({ direction: "inbound", iface: interfaceToward(node, prev) });
    if (next) checks.push({ direction: "outbound", iface: interfaceToward(node, next) });
    for (const check of checks) {
      const aclId = check.iface?.trafficFilters?.[check.direction];
      if (!aclId) continue;
      const matched = findAclMatch(node, aclId, sourceIp, destIp, flow);
      if (options.count && matched) matched.matches = (Number(matched.matches) || 0) + 1;
      const decision = matched?.action || "permit";
      if (decision === "deny") return { node, iface: check.iface, direction: check.direction, aclId };
    }
  }
  return null;
}

function interfaceToward(node, peerId) {
  const link = linkBetween(node.id, peerId, linkUsableForTraffic);
  if (!link) return null;
  return findInterfaceByName(node, link.a === node.id ? link.aPort : link.bPort);
}

function evaluateAcl(node, aclId, sourceIp, destIp, flow = {}) {
  const matched = findAclMatch(node, aclId, sourceIp, destIp, flow);
  return matched?.action || "permit";
}

function findAclMatch(node, aclId, sourceIp, destIp, flow = {}) {
  const acl = ensureAclStore(node)[String(aclId)];
  if (!acl) return null;
  return [...acl.rules].sort((a, b) => a.seq - b.seq).find((rule) => aclRuleMatches(rule, sourceIp, destIp, flow)) || null;
}

function aclRuleMatches(rule, sourceIp, destIp, flow = {}) {
  return aclProtocolMatches(rule, flow)
    && aclPortMatches(rule.sourcePort, flow.sourcePort)
    && aclPortMatches(rule.destinationPort, flow.destinationPort)
    && aclIcmpTypeMatches(rule, flow)
    && ipMatchesWildcard(sourceIp, rule.source, rule.sourceWildcard)
    && ipMatchesWildcard(destIp, rule.destination, rule.destinationWildcard);
}

function aclProtocolMatches(rule, flow = {}) {
  const ruleProtocol = String(rule.protocol || "ip").toLowerCase();
  const flowProtocol = String(flow.protocol || "ip").toLowerCase();
  return ruleProtocol === "ip" || ruleProtocol === flowProtocol;
}

function aclPortMatches(rulePort, flowPort) {
  if (!rulePort) return true;
  return normalizeAclPort(rulePort) === normalizeAclPort(flowPort || "");
}

function aclIcmpTypeMatches(rule, flow = {}) {
  if (!rule.icmpType) return true;
  return String(rule.icmpType).toLowerCase() === String(flow.icmpType || "").toLowerCase();
}

function ipMatchesWildcard(ip, ruleIp, wildcard = "") {
  if (!ruleIp || ruleIp.toLowerCase() === "any") return true;
  if (!/^\d+\.\d+\.\d+\.\d+$/.test(ruleIp)) return false;
  if (!wildcard || wildcard === "0" || wildcard === "0.0.0.0") return ip === ruleIp;
  const ipNum = ipToNumber(ip);
  const ruleNum = ipToNumber(ruleIp);
  const wcNum = ipToNumber(wildcard);
  const mask = (~wcNum) >>> 0;
  return ((ipNum & mask) >>> 0) === ((ruleNum & mask) >>> 0);
}

function ipToNumber(ip) {
  return String(ip).split(".").reduce((value, part) => ((value << 8) + (Number(part) || 0)) >>> 0, 0);
}

function primaryIp(node) {
  return node?.interfaces?.find((iface) => iface.ip)?.ip || "";
}

function formatServerServices(node) {
  if (node.type !== "server") return "This endpoint has no server services.";
  const services = ensureServerServices(node);
  return [
    `HTTP ${services.http.enabled ? "ON" : "OFF"} port ${services.http.port} root /${services.http.root} files ${services.http.files.length}`,
    `FTP  ${services.ftp.enabled ? "ON" : "OFF"} port ${services.ftp.port} user ${services.ftp.user} root /${services.ftp.root} files ${services.ftp.files.length}`,
    `DNS  ${services.dns.enabled ? "ON" : "OFF"} records ${Object.keys(services.dns.records).length}`,
    formatDnsRecords(services.dns.records)
  ].filter(Boolean).join("\n");
}

function formatFtpListing(service) {
  const files = normalizeServerFiles(service.files);
  if (!files.length) return "Directory is empty.";
  return files.slice(0, 24).map((file) => {
    const date = file.modified ? new Date(file.modified).toISOString().slice(0, 10) : "2026-01-01";
    return `-rw-r--r-- 1 ${service.user || "admin"} ftp ${String(file.size).padStart(8)} ${date} ${file.path}`;
  }).join("\n") + (files.length > 24 ? `\n... ${files.length - 24} more file(s)` : "");
}

function appendPcConsole(out, text) {
  out.textContent += `${text}\n`;
  out.scrollTop = out.scrollHeight;
}

function playPcPing(out, packet, dest, target = "") {
  const lines = pcPingLines(packet, dest, target);
  let delay = 0;
  lines.forEach((line, index) => {
    const isProbe = /^(Reply from|Request timed out\.|PING: transmit failed)/.test(line);
    delay += index === 0 ? 0 : (isProbe ? 520 : 110);
    setTimeout(() => appendPcConsole(out, line), delay);
  });
}

function formatPcPing(packet, dest, target = "") {
  return pcPingLines(packet, dest, target).join("\n");
}

function pcPingLines(packet, dest, target = "") {
  const targetIp = packet.destIp || dest.interfaces.find((iface) => iface.ip)?.ip || dest.name;
  const targetLabel = target && target !== targetIp
    ? `${target} [${targetIp}]`
    : targetIp;
  const header = `Pinging ${targetLabel} with 32 bytes of data:`;
  const probes = Array.isArray(packet.probes) ? packet.probes.slice(0, 4) : [];
  if (probes.length) {
    const ttl = Math.max(1, 128 - Math.max(0, String(packet.path || "").split(" -> ").filter(Boolean).length - 1));
    const received = probes.filter((probe) => probe.ok).length;
    const times = probes.filter((probe) => probe.ok).map((probe) => probe.time);
    const loss = Math.round((1 - received / probes.length) * 100);
    const timeText = (time) => time <= 1 ? "time<1ms" : `time=${time}ms`;
    return [
      header,
      ...probes.map((probe) => probe.ok ? `Reply from ${targetIp}: bytes=32 ${timeText(probe.time)} TTL=${ttl}` : "Request timed out."),
      "",
      `Ping statistics for ${targetIp}:`,
      `    Packets: Sent = ${probes.length}, Received = ${received}, Lost = ${probes.length - received} (${loss}% loss),`,
      ...(times.length ? [
        "Approximate round trip times in milli-seconds:",
        `    Minimum = ${Math.min(...times)}ms, Maximum = ${Math.max(...times)}ms, Average = ${Math.round(times.reduce((a, b) => a + b, 0) / times.length)}ms`
      ] : [])
    ];
  }
  if (packet.result !== "Success") {
    const generalFailure = /仿真未运行|源设备未启动/.test(packet.reason || "");
    const hostUnreachable = /缺少|没有可承载|没有可达|VLAN|Console|路由/.test(packet.reason || "");
    const line = generalFailure
      ? "PING: transmit failed. General failure."
      : (hostUnreachable ? `Reply from ${packet.sourceIp || "0.0.0.0"}: Destination host unreachable.` : "Request timed out.");
    return [
      header,
      line,
      line,
      line,
      line,
      "",
      `Ping statistics for ${targetIp}:`,
      "    Packets: Sent = 4, Received = 0, Lost = 4 (100% loss),"
    ];
  }
  const times = [0, 1, 2, 1].map((extra) => packet.delay + extra);
  const ttl = Math.max(1, 128 - Math.max(0, String(packet.path || "").split(" -> ").filter(Boolean).length - 1));
  const timeText = (time) => time <= 1 ? "time<1ms" : `time=${time}ms`;
  return [
    header,
    ...times.map((time) => `Reply from ${targetIp}: bytes=32 ${timeText(time)} TTL=${ttl}`),
    "",
    `Ping statistics for ${targetIp}:`,
    "    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),",
    "Approximate round trip times in milli-seconds:",
    `    Minimum = ${Math.min(...times)}ms, Maximum = ${Math.max(...times)}ms, Average = ${Math.round(times.reduce((a, b) => a + b, 0) / times.length)}ms`
  ];
}

function formatVrpPing(packet, dest) {
  const targetIp = packet.destIp || dest.interfaces.find((iface) => iface.ip)?.ip || dest.name;
  const probes = Array.isArray(packet.probes) ? packet.probes.slice(0, 5) : [];
  if (probes.length) {
    const received = probes.filter((probe) => probe.ok).length;
    const times = probes.filter((probe) => probe.ok).map((probe) => probe.time);
    const loss = ((1 - received / probes.length) * 100).toFixed(2);
    return [
      `PING ${targetIp}: 56  data bytes, press CTRL_C to break`,
      ...probes.map((probe, index) => probe.ok
        ? `    Reply from ${targetIp}: bytes=56 Sequence=${index + 1} ttl=254 time=${probe.time} ms`
        : "    Request time out"),
      "",
      `--- ${targetIp} ping statistics ---`,
      `    ${probes.length} packet(s) transmitted`,
      `    ${received} packet(s) received`,
      `    ${loss}% packet loss`,
      ...(times.length ? [`    round-trip min/avg/max = ${Math.min(...times)}/${Math.round(times.reduce((a, b) => a + b, 0) / times.length)}/${Math.max(...times)} ms`] : [])
    ].join("\n");
  }
  if (packet.result !== "Success") {
    return [
      `PING ${targetIp}: 56  data bytes, press CTRL_C to break`,
      "    Request time out",
      "    Request time out",
      "    Request time out",
      "    Request time out",
      "    Request time out",
      "",
      `--- ${targetIp} ping statistics ---`,
      "    5 packet(s) transmitted",
      "    0 packet(s) received",
      "    100.00% packet loss"
    ].join("\n");
  }
  const times = [0, 1, 2, 1, 0].map((extra) => packet.delay + extra);
  return [
    `PING ${targetIp}: 56  data bytes, press CTRL_C to break`,
    ...times.map((time, index) => `    Reply from ${targetIp}: bytes=56 Sequence=${index + 1} ttl=254 time=${time} ms`),
    "",
    `--- ${targetIp} ping statistics ---`,
    "    5 packet(s) transmitted",
    "    5 packet(s) received",
    "    0.00% packet loss",
    `    round-trip min/avg/max = ${Math.min(...times)}/${Math.round(times.reduce((a, b) => a + b, 0) / times.length)}/${Math.max(...times)} ms`
  ].join("\n");
}

function startWindowDrag(event, win) {
  event.preventDefault();
  const rect = win.getBoundingClientRect();
  windowDrag = {
    el: win,
    dx: event.clientX - rect.left,
    dy: event.clientY - rect.top,
    startLeft: rect.left,
    startTop: rect.top,
    nextLeft: rect.left,
    nextTop: rect.top,
    raf: 0
  };
  win.classList.add("dragging");
  document.body.classList.add("window-dragging");
}

function onWindowDrag(event) {
  if (!windowDrag) return;
  windowDrag.nextLeft = clamp(event.clientX - windowDrag.dx, 0, window.innerWidth - 120);
  windowDrag.nextTop = clamp(event.clientY - windowDrag.dy, 0, window.innerHeight - 80);
  if (windowDrag.raf) return;
  windowDrag.raf = requestAnimationFrame(() => {
    if (!windowDrag) return;
    const x = windowDrag.nextLeft - windowDrag.startLeft;
    const y = windowDrag.nextTop - windowDrag.startTop;
    windowDrag.el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    windowDrag.raf = 0;
  });
}

function stopWindowDrag() {
  if (windowDrag) {
    if (windowDrag.raf) cancelAnimationFrame(windowDrag.raf);
    windowDrag.el.style.left = `${windowDrag.nextLeft}px`;
    windowDrag.el.style.top = `${windowDrag.nextTop}px`;
    windowDrag.el.style.transform = "";
    windowDrag.el.classList.remove("dragging");
    saveUiState();
  }
  document.body.classList.remove("window-dragging");
  windowDrag = null;
}

function bulkInspector() {
  const nodes = state.multiSelected.map(getNode).filter(Boolean);
  const annotations = state.multiAnnotations.map(getAnnotation).filter(Boolean);
  const running = nodes.filter((node) => node.running).length;
  const types = [...new Set(nodes.map((node) => node.model))].join(", ");
  const total = nodes.length + annotations.length;
  return `
    <div class="kv">
      <div><span>已选择</span><strong>${total}</strong></div>
      <div><span>设备</span><strong>${nodes.length}</strong></div>
      <div><span>文本</span><strong>${annotations.length}</strong></div>
      <div><span>运行</span><strong>${running}/${nodes.length}</strong></div>
      <div><span>型号</span><strong>${escapeHtml(types)}</strong></div>
    </div>
    <div class="button-row">
      <button id="bulkStart" class="primary-btn">启动</button>
      <button id="bulkStop">关机</button>
      <button id="bulkDelete" class="danger-btn">删除</button>
      <button id="bulkClear">取消选择</button>
    </div>
    <div class="port-list">
      ${nodes.map((node) => `<div class="port-row"><strong>${escapeHtml(node.name)}</strong><span>${escapeHtml(node.model)} · ${node.running ? "Running" : "Stopped"}</span><button data-bulk-focus="${node.id}">定位</button></div>`).join("")}
      ${annotations.map((note) => `<div class="port-row"><strong>${escapeHtml(note.text)}</strong><span>文本标注</span><button data-bulk-focus-text="${note.id}">定位</button></div>`).join("")}
    </div>`;
}

function bindBulkInspector() {
  $("bulkStart")?.addEventListener("click", () => bulkPower(true));
  $("bulkStop")?.addEventListener("click", () => bulkPower(false));
  $("bulkDelete")?.addEventListener("click", bulkDelete);
  $("bulkClear")?.addEventListener("click", clearSelection);
  document.querySelectorAll("[data-bulk-focus]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.selected = { kind: "node", id: btn.dataset.bulkFocus };
      state.multiSelected = [];
      state.multiAnnotations = [];
      renderAll();
    });
  });
  document.querySelectorAll("[data-bulk-focus-text]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.selected = { kind: "annotation", id: btn.dataset.bulkFocusText };
      state.multiSelected = [];
      state.multiAnnotations = [];
      renderAll();
    });
  });
}

function bulkPower(running) {
  const nodes = state.multiSelected.map(getNode).filter(Boolean);
  if (!nodes.length) return toast("当前选择中没有设备。");
  nodes.forEach((node) => (node.running = running));
  syncSimulationStateFromDevices();
  log(running ? "ok" : "warn", "BULK", `${running ? "启动" : "关机"} ${nodes.length} 台设备`);
  renderAll();
}

function bulkDelete() {
  const ids = new Set(state.multiSelected);
  const noteIds = new Set(state.multiAnnotations);
  ids.forEach(closeNodeWindows);
  state.nodes = state.nodes.filter((node) => !ids.has(node.id));
  state.links = state.links.filter((link) => !ids.has(link.a) && !ids.has(link.b));
  rebuildLinkIndex();
  state.annotations = state.annotations.filter((note) => !noteIds.has(note.id));
  log("warn", "BULK", `删除 ${ids.size} 台设备、${noteIds.size} 个文本标注`);
  state.multiSelected = [];
  state.multiAnnotations = [];
  state.selected = null;
  renderAll();
}

function topologyInspector() {
  const running = state.nodes.filter((n) => n.running).length;
  const projects = savedProjects();
  return `
    <div class="field"><label>项目名称</label><input id="projectNameInput" value="${escapeHtml(state.project.name)}" /></div>
    <div class="field"><label>历史项目</label><select id="projectSelect">
      <option value="">选择已保存项目</option>
      ${projects.map((p) => `<option value="${escapeHtml(p.id)}" ${p.id === state.project.id ? "selected" : ""}>${escapeHtml(p.name)} · ${new Date(p.updatedAt || p.createdAt).toLocaleString()}</option>`).join("")}
    </select></div>
    <div class="pc-form">
      <div class="field"><label>画布宽度</label><input id="stageWidthInput" type="number" min="900" max="5000" step="100" value="${state.stage.width}" /></div>
      <div class="field"><label>画布高度</label><input id="stageHeightInput" type="number" min="600" max="3200" step="100" value="${state.stage.height}" /></div>
      <div class="pc-window-actions">
        <button id="applyStageSize" class="primary-btn">应用画布大小</button>
        <button id="growStageSize">扩大画布</button>
      </div>
    </div>
    <div class="kv">
      <div><span>设备</span><strong>${state.nodes.length}</strong></div>
      <div><span>链路</span><strong>${state.links.length}</strong></div>
      <div><span>运行</span><strong>${running}/${state.nodes.length}</strong></div>
      <div><span>报文</span><strong>${state.packets.length}</strong></div>
      <div><span>保存</span><strong>${state.project.updatedAt ? new Date(state.project.updatedAt).toLocaleTimeString() : "未保存"}</strong></div>
    </div>
    <div class="button-row">
      <button id="saveNamedProject" class="primary-btn">保存项目</button>
      <button id="saveProjectCopy">另存副本</button>
      <button id="exportEnsPNamedProject" class="primary-btn">导出 eNSP 工程</button>
      <button id="loadNamedProject">加载项目</button>
      <button id="deleteNamedProject" class="danger-btn">删除项目</button>
      <button id="clearPackets">清空报文</button>
      <button id="clearAll" class="danger-btn">清空拓扑</button>
    </div>`;
}

function topologyHealthItems() {
  const items = [];
  if (!state.nodes.length) {
    return [{ level: "info", title: "空白拓扑", detail: "尚未放置设备", kind: "" }];
  }

  const ipMap = new Map();
  state.nodes.forEach((node) => {
    node.interfaces.forEach((iface) => {
      if (!iface.ip) return;
      const list = ipMap.get(iface.ip) || [];
      list.push({ node, iface });
      ipMap.set(iface.ip, list);
    });
  });
  ipMap.forEach((list, ip) => {
    if (list.length > 1) {
      items.push({
        level: "bad",
        title: `重复 IP ${ip}`,
        detail: list.map((item) => `${item.node.name}:${item.iface.name}`).join(" / "),
        kind: "node",
        id: list[0].node.id
      });
    }
  });

  const portUsage = new Map();
  state.links.forEach((link) => {
    [[link.a, link.aPort], [link.b, link.bPort]].forEach(([nodeId, port]) => {
      if (!nodeId || !port) return;
      const key = `${nodeId}::${normalizeInterfaceName(port)}`;
      const list = portUsage.get(key) || [];
      list.push(link);
      portUsage.set(key, list);
    });
  });
  portUsage.forEach((links, key) => {
    if (links.length <= 1) return;
    const [nodeId] = key.split("::");
    const node = getNode(nodeId);
    items.push({
      level: "bad",
      title: "端口重复连接",
      detail: `${node?.name || nodeId} 的同一接口连接了 ${links.length} 条链路`,
      kind: "node",
      id: nodeId
    });
  });

  state.links.forEach((link) => {
    const diagnostic = linkDiagnostic(link);
    if (diagnostic.physical === "up" && diagnostic.traffic === "up") return;
    const a = getNode(link.a);
    const b = getNode(link.b);
    items.push({
      level: diagnostic.physical === "down" ? "bad" : "warn",
      title: `${a?.name || "?"} ↔ ${b?.name || "?"}`,
      detail: diagnostic.reason || "链路不可用",
      kind: "link",
      id: link.id
    });
  });

  state.nodes.filter((node) => !node.running).slice(0, 8).forEach((node) => {
    items.push({
      level: "warn",
      title: `${node.name} 未启动`,
      detail: "设备处于 Stopped 状态",
      kind: "node",
      id: node.id
    });
  });

  state.nodes.filter((node) => ["pc", "client", "server"].includes(node.type)).forEach((node) => {
    const iface = node.interfaces.find((item) => item.ip);
    if (!iface || node.gateway || !state.links.some((link) => link.a === node.id || link.b === node.id)) return;
    items.push({
      level: "warn",
      title: `${node.name} 缺少网关`,
      detail: `${iface.ip} 访问跨网段业务时需要默认网关`,
      kind: "node",
      id: node.id
    });
  });

  return items.length ? items.slice(0, 18) : [{ level: "ok", title: "未发现明显问题", detail: "拓扑基础状态正常", kind: "" }];
}

function healthRow(item) {
  const action = item.kind === "node"
    ? `<button data-health-node="${escapeHtml(item.id)}">定位</button>`
    : item.kind === "link"
      ? `<button data-health-link="${escapeHtml(item.id)}">定位</button>`
      : "";
  return `<div class="health-item ${escapeHtml(item.level)}">
    <span>${escapeHtml(item.level.toUpperCase())}</span>
    <strong>${escapeHtml(item.title)}</strong>
    <small>${escapeHtml(item.detail || "")}</small>
    ${action}
  </div>`;
}

function collapsedCardsHtml(items, renderItem, labelForMore) {
  if (!items.length) return "";
  const [first, ...rest] = items;
  if (!rest.length) return renderItem(first);
  return `${renderItem(first)}
    <details class="collapsed-cards">
      <summary>${escapeHtml(labelForMore(rest.length))}</summary>
      <div class="collapsed-card-list">${rest.map(renderItem).join("")}</div>
    </details>`;
}

function bindTopologyInspector() {
  $("projectNameInput")?.addEventListener("change", (e) => {
    state.project.name = e.target.value.trim() || "Untitled.lab";
    $("projectName").textContent = state.project.name;
    scheduleAutosave(true);
  });
  $("saveNamedProject")?.addEventListener("click", saveProject);
  $("saveProjectCopy")?.addEventListener("click", saveProjectCopy);
  $("exportEnsPNamedProject")?.addEventListener("click", exportEnsPFolder);
  $("loadNamedProject")?.addEventListener("click", loadSelectedProject);
  $("deleteNamedProject")?.addEventListener("click", deleteSelectedProject);
  $("applyStageSize")?.addEventListener("click", applyStageSizeFromInspector);
  $("growStageSize")?.addEventListener("click", () => {
    resizeStage(state.stage.width + 400, state.stage.height + 250);
    toast("画布已扩大。");
  });
  $("clearPackets")?.addEventListener("click", () => {
    state.packets = [];
    log("info", "PACKET", "清空报文记录");
    renderAll();
  });
  $("clearAll")?.addEventListener("click", () => loadTemplate("empty"));
}

function applyStageSizeFromInspector() {
  const width = Number($("stageWidthInput")?.value);
  const height = Number($("stageHeightInput")?.value);
  resizeStage(width, height);
}

function resizeStage(width, height) {
  state.stage = normalizeStageSize({ width, height });
  state.nodes.forEach((node) => {
    node.x = clamp(node.x, 16, maxNodeX());
    node.y = clamp(node.y, 16, maxNodeY());
  });
  log("info", "CANVAS", `画布大小 ${state.stage.width} x ${state.stage.height}`);
  renderAll();
}

function nodeInspector(node) {
  const firstIp = node.interfaces.find((i) => i.ip) || node.interfaces[0];
  return `
    <div class="field"><label>名称</label><input id="nodeName" value="${escapeHtml(node.name)}" /></div>
    <div class="field"><label>型号</label><input value="${escapeHtml(node.model)}" disabled /></div>
    <div class="field"><label>管理地址</label><input id="nodeIp" value="${escapeHtml(firstIp.ip)}" placeholder="192.168.1.1" /></div>
    <div class="field"><label>掩码/前缀</label><input id="nodeMask" value="${escapeHtml(firstIp.mask)}" placeholder="24 或 255.255.255.0" /></div>
    <div class="button-row">
      <button id="nodePower" class="primary-btn">${node.running ? "停止设备" : "启动设备"}</button>
      <button id="openCli">打开 CLI</button>
      <button id="toggleOspf">OSPF</button>
      <button id="toggleVlan">VLAN</button>
      <button id="deleteNode" class="danger-btn">删除</button>
    </div>
    <div class="kv">
      <div><span>状态</span><strong>${node.running ? "Running" : "Stopped"}</strong></div>
      <div><span>接口</span><strong>${node.interfaces.length}</strong></div>
      <div><span>协议</span><strong>${Object.entries(node.protocols).filter(([, v]) => v).map(([k]) => k).join(", ") || "未启用"}</strong></div>
    </div>
    <div class="field"><label>接口</label><div class="port-list">${node.interfaces.map((p, index) => portRow(p, index)).join("")}</div></div>
    <div class="field"><label>备注</label><textarea id="nodeNotes">${escapeHtml(node.notes)}</textarea></div>`;
}

function portRow(port, index) {
  return `<div class="port-row"><strong>${escapeHtml(port.name)}</strong><span>${port.ip || "未配置"} ${port.vlan ? `VLAN ${port.vlan}` : ""}</span><button data-port="${index}">${port.status === "up" ? "Up" : "Down"}</button></div>`;
}

function bindNodeInspector(node) {
  $("nodeName").addEventListener("input", (e) => {
    node.name = e.target.value || node.name;
    renderDevices();
    renderConfig();
    updatePrompt();
  });
  $("nodeIp").addEventListener("change", (e) => {
    const iface = node.interfaces.find((i) => i.ip) || node.interfaces[0];
    iface.ip = e.target.value.trim();
    renderAll();
  });
  $("nodeMask").addEventListener("change", (e) => {
    const iface = node.interfaces.find((i) => i.ip) || node.interfaces[0];
    iface.mask = e.target.value.trim();
    renderAll();
  });
  $("nodeNotes").addEventListener("change", (e) => {
    node.notes = e.target.value;
  });
  $("nodePower").addEventListener("click", () => {
    setNodePower(node, !node.running);
    log(node.running ? "ok" : "warn", "POWER", `${node.name} ${node.running ? "started" : "stopped"}`);
    renderAll();
  });
  $("openCli").addEventListener("click", () => {
    if (!requireNodeRunning(node)) return;
    setTab("cli");
  });
  $("toggleOspf").addEventListener("click", () => toggleProtocol(node, "OSPF"));
  $("toggleVlan").addEventListener("click", () => toggleProtocol(node, "VLAN"));
  $("deleteNode").addEventListener("click", () => deleteNode(node.id));
  document.querySelectorAll("[data-port]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const port = node.interfaces[Number(btn.dataset.port)];
      port.status = port.status === "up" ? "down" : "up";
      log("info", "IFACE", `${node.name} ${port.name} ${port.status}`);
      renderAll();
    });
  });
}

function linkInspector(link) {
  const a = getNode(link.a);
  const b = getNode(link.b);
  const diagnostic = linkDiagnostic(link);
  const aPort = a ? findExistingInterface(a, link.aPort) : null;
  const bPort = b ? findExistingInterface(b, link.bPort) : null;
  return `
    <div class="kv">
      <div><span>端点 A</span><strong>${a?.name || "?"}:${link.aPort}</strong></div>
      <div><span>端点 B</span><strong>${b?.name || "?"}:${link.bPort}</strong></div>
      <div><span>管理状态</span><strong>${link.status}</strong></div>
      <div><span>物理状态</span><strong class="${diagnostic.physical === "up" ? "state-ok" : "state-bad"}">${diagnostic.physical}</strong></div>
      <div><span>业务状态</span><strong class="${diagnostic.traffic === "up" ? "state-ok" : "state-warn"}">${diagnostic.traffic}</strong></div>
      <div><span>诊断</span><strong>${escapeHtml(diagnostic.reason || "-")}</strong></div>
    </div>
    <div class="field"><label>端口状态</label><div class="port-list">
      ${linkEndpointRow("A", a, aPort)}
      ${linkEndpointRow("B", b, bPort)}
    </div></div>
    <div class="field"><label>${a?.name || "端点 A"} 网口</label><select id="linkAPort">${a ? portOptions(a, link.aPort) : ""}</select></div>
    <div class="field"><label>${b?.name || "端点 B"} 网口</label><select id="linkBPort">${b ? portOptions(b, link.bPort) : ""}</select></div>
    <div class="field"><label>带宽 Mbps</label><input id="linkBandwidth" type="number" min="1" value="${link.bandwidth}" /></div>
    <div class="field"><label>线缆类型</label><select id="linkCable">
      ${["Auto", "Copper", "Ethernet", "Fiber", "Serial", "Console"].map((c) => `<option ${link.cable === c ? "selected" : ""}>${c}</option>`).join("")}
    </select></div>
    <div class="field"><label>时延 ms</label><input id="linkLatency" type="number" min="0" value="${link.latency}" /></div>
    <div class="field"><label>丢包 %</label><input id="linkLoss" type="number" min="0" max="100" value="${link.loss}" /></div>
    <div class="button-row">
      <button id="toggleLink" class="primary-btn">${link.status === "up" ? "断开链路" : "恢复链路"}</button>
      <button id="deleteLink" class="danger-btn">删除链路</button>
    </div>`;
}

function linkEndpointRow(label, node, iface) {
  const ip = iface?.ip ? `${iface.ip}/${maskToPrefix(iface.mask || "24")}` : "未配置 IP";
  const vlan = iface ? `VLAN ${formatAllowedVlans(iface, node)}` : "VLAN Auto";
  const status = iface?.status === "down" ? "Down" : "Up";
  return `<div class="port-row link-port-row">
    <strong>${label}</strong>
    <span>${escapeHtml(node?.name || "?")} ${escapeHtml(iface?.name || "-")} · ${escapeHtml(status)} · ${escapeHtml(ip)} · ${escapeHtml(vlan)}</span>
    <button data-link-focus="${escapeHtml(node?.id || "")}" ${node ? "" : "disabled"}>定位</button>
  </div>`;
}

function bindLinkInspector(link) {
  ["Bandwidth", "Latency", "Loss"].forEach((key) => {
    $(`link${key}`).addEventListener("change", (e) => {
      const value = Number(e.target.value);
      link[key.toLowerCase()] = key === "Loss"
        ? clamp(value || 0, 0, 100)
        : (key === "Bandwidth" ? Math.max(1, value || 1) : Math.max(0, value || 0));
      renderAll();
    });
  });
  $("linkCable").addEventListener("change", (e) => {
    link.cable = e.target.value;
    link.bandwidth = link.cable === "Serial" ? 2 : link.cable === "Console" ? 1 : link.cable === "Fiber" ? 10000 : link.cable === "Copper" ? 1000 : link.bandwidth;
    renderAll();
  });
  $("linkAPort")?.addEventListener("change", (e) => {
    link.aPort = e.target.value;
    renderAll();
  });
  $("linkBPort")?.addEventListener("change", (e) => {
    link.bPort = e.target.value;
    renderAll();
  });
  $("toggleLink").addEventListener("click", () => {
    link.status = link.status === "up" ? "down" : "up";
    log(link.status === "up" ? "ok" : "warn", "LINK", `${link.id} ${link.status}`);
    renderAll();
  });
  $("deleteLink").addEventListener("click", () => deleteLink(link.id));
  document.querySelectorAll("[data-link-focus]").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (!btn.dataset.linkFocus) return;
      state.selected = { kind: "node", id: btn.dataset.linkFocus };
      centerNode(btn.dataset.linkFocus);
      renderAll();
    });
  });
}

function annotationInspector(note) {
  return `
    <div class="field"><label>文本</label><textarea id="annotationText">${escapeHtml(note.text)}</textarea></div>
    <div class="pc-form">
      <div class="field"><label>X</label><input id="annotationX" type="number" value="${Math.round(note.x)}" /></div>
      <div class="field"><label>Y</label><input id="annotationY" type="number" value="${Math.round(note.y)}" /></div>
    </div>
    <div class="button-row">
      <button id="applyAnnotation" class="primary-btn">应用</button>
      <button id="deleteAnnotation" class="danger-btn">删除标注</button>
    </div>`;
}

function bindAnnotationInspector(note) {
  $("applyAnnotation").addEventListener("click", () => {
    note.text = $("annotationText").value.trim() || note.text;
    note.x = clamp(Number($("annotationX").value) || note.x, 16, maxNodeX());
    note.y = clamp(Number($("annotationY").value) || note.y, 16, maxNodeY());
    renderAll();
  });
  $("deleteAnnotation").addEventListener("click", () => deleteAnnotation(note.id));
}

function renderConfig() {
  const selectedNode = state.selected?.kind === "node" ? getNode(state.selected.id) : null;
  $("configEditor").value = selectedNode ? buildConfig(selectedNode) : buildTopologyConfig();
  updatePrompt();
}

function buildConfig(node) {
  if (node.rawConfig) return node.rawConfig;
  const lines = [
    "#",
    `sysname ${node.name}`,
    "#",
    ...node.interfaces.flatMap((p) => [
      `interface ${p.name}`,
      p.desc ? ` description ${p.desc}` : "",
      p.ip ? ` ip address ${p.ip} ${p.mask || "24"}` : "",
      p.vlan ? ` port default vlan ${p.vlan}` : "",
      p.linkType ? ` port link-type ${p.linkType}` : "",
      p.trunkAllow?.length ? ` port trunk allow-pass vlan ${p.trunkAllow.map((vlan) => vlan === "*" ? "all" : vlan).join(" ")}` : "",
      p.dot1q ? ` dot1q termination vid ${p.dot1q}` : "",
      p.arpBroadcast ? " arp broadcast enable" : "",
      p.ospf ? ` ospf enable ${p.ospf.process} area ${p.ospf.area}` : "",
      p.dhcpSelect ? ` dhcp select ${p.dhcpSelect}` : "",
      p.trafficFilters?.inbound ? ` traffic-filter inbound acl ${p.trafficFilters.inbound}` : "",
      p.trafficFilters?.outbound ? ` traffic-filter outbound acl ${p.trafficFilters.outbound}` : "",
      p.stpEdged ? " stp edged-port enable" : "",
      p.vrrp ? ` vrrp vrid ${p.vrrp.vrid}${p.vrrp.virtualIp ? ` virtual-ip ${p.vrrp.virtualIp}` : ""}${p.vrrp.priority ? ` priority ${p.vrrp.priority}` : ""}` : "",
      p.ethTrunk ? ` eth-trunk ${p.ethTrunk}` : "",
      p.linkProtocol ? ` link-protocol ${p.linkProtocol}` : "",
      p.ppp?.length ? p.ppp.map((line) => ` ${line}`).join("\n") : "",
      p.portSecurity ? ` ${p.portSecurity}` : "",
      p.status === "down" ? " shutdown" : " undo shutdown",
      "#"
    ].filter(Boolean)),
    ...node.vlans.map((vlan) => `vlan ${vlan}\n#`),
    ...node.ospf.areas.map((area) => `ospf ${node.ospf.process || "1"}${node.ospf.routerId ? ` router-id ${node.ospf.routerId}` : ""}\n area ${area}\n${node.ospf.networks.filter((n) => n.area === area).map((n) => `  network ${n.network} ${n.wildcard}`).join("\n")}\n#`),
    ...aclConfig(node),
    node.stp.enabled ? "stp enable" : "",
    node.stp.mode ? `stp mode ${node.stp.mode}` : "",
    node.stp.priority ? `stp priority ${node.stp.priority}` : "",
    node.stp.root ? `stp root ${node.stp.root}` : "",
    node.modeCommand || "",
    ...(node.trunkPorts || []).map((item) => `trunkport ${item}`),
    node.dhcpEnabled ? "dhcp enable" : "",
    ...node.dhcpPools.map((pool) => `ip pool ${pool.name}\n${pool.network ? ` network ${pool.network} mask ${pool.mask}` : ""}\n${pool.gateway ? ` gateway-list ${pool.gateway}` : ""}\n${pool.dns ? ` dns-list ${pool.dns}` : ""}\n#`),
    node.aaaEnabled ? "aaa" : "",
    ...node.users.flatMap((user) => [
      ` local-user ${user.name}${user.password ? ` password ${user.passwordType || "cipher"} ${user.password}` : ""}`,
      user.serviceType ? ` local-user ${user.name} service-type ${user.serviceType}` : "",
      user.privilege ? ` local-user ${user.name} privilege level ${user.privilege}` : ""
    ].filter(Boolean)),
    ...node.userInterfaces.map((ui) => `user-interface ${ui.name}\n${ui.authenticationMode ? ` authentication-mode ${ui.authenticationMode}` : ""}\n#`),
    node.bpduEnabled ? "bpdu enable" : "",
    node.bpduEnabled ? "#" : "",
    ...serverServiceConfig(node),
    ...Object.entries(node.protocols).filter(([, enabled]) => enabled).flatMap(([p]) => protocolConfig(p, node)),
    ...node.routes.map((r) => `ip route-static ${r.dest} ${r.mask} ${r.nextHop}`),
    "#",
    "return"
  ];
  return lines.join("\n");
}

function aclConfig(node) {
  const acls = ensureAclStore(node);
  return Object.keys(acls).sort().flatMap((id) => [
    `acl number ${id}`,
    ...acls[id].rules.sort((a, b) => a.seq - b.seq).map((rule) => ` ${formatAclRule(rule)}`),
    "#"
  ]);
}

function serverServiceConfig(node) {
  if (node.type !== "server") return [];
  const services = ensureServerServices(node);
  return [
    "# server services",
    services.http.enabled ? `http server enable port ${services.http.port} root ${services.http.root}` : "undo http server enable",
    services.ftp.enabled ? `ftp server enable port ${services.ftp.port} root ${services.ftp.root}` : "undo ftp server enable",
    services.ftp.enabled ? `ftp local-user ${services.ftp.user} password ${services.ftp.password}` : "",
    services.dns.enabled ? "dns server enable" : "undo dns server enable",
    ...Object.entries(services.dns.records).map(([host, ip]) => `dns static ${host} ${ip}`),
    "#"
  ].filter(Boolean);
}

function buildTopologyConfig() {
  return state.nodes.map((node) => `### ${node.name} (${node.model}) ###\n${buildConfig(node)}`).join("\n\n");
}

function protocolConfig(protocol, node) {
  const p = protocol.toUpperCase();
  if (p === "OSPF") return ["ospf 1", " area 0.0.0.0", "  network 0.0.0.0 255.255.255.255", "#"];
  if (p === "RIP") return ["rip 1", " version 2", " network 10.0.0.0", "#"];
  if (p === "VLAN") return ["vlan batch 10 20 30 100", "#"];
  if (p === "STP" || p === "MSTP") return ["stp enable", "#"];
  if (p === "NAT") return ["nat address-group 1 202.100.1.10 202.100.1.20", "#"];
  if (p === "WLAN") return [`wlan`, ` ssid-profile name ${node.name}_ssid`, "  ssid ENSP-Web", "#"];
  return [`# ${protocol} enabled`, "#"];
}

function applyConfig() {
  const node = state.selected?.kind === "node" ? getNode(state.selected.id) : null;
  if (!node) {
    toast("请选择一台设备后再应用配置。");
    return;
  }
  node.rawConfig = $("configEditor").value;
  parseConfig(node, $("configEditor").value);
  log("ok", "CONFIG", `${node.name} 配置已应用`);
  renderAll();
}

function parseConfig(node, text) {
  let current = null;
  let currentAcl = null;
  node.routes = [];
  node.acls = {};
  text.split(/\r?\n/).map(normalizeConfigLine).forEach((line) => {
    if (!line) return;
    if (line === "#" || /^quit$/i.test(line) || /^return$/i.test(line)) {
      current = null;
      currentAcl = null;
      return;
    }
    if (applyUndoConfigCommand(node, { mode: current ? "interface" : "", iface: current?.name || "" }, line, line.toLowerCase())) return;
    if (line.startsWith("sysname ")) node.name = line.slice(8).trim();
    if (line.startsWith("interface ")) {
      current = findInterfaceByName(node, line.slice(10).trim());
      currentAcl = null;
    }
    if (/^acl(\s+number)?\s+/i.test(line)) {
      const aclId = parseAclNumber(line);
      currentAcl = aclId ? getAcl(node, aclId) : null;
      current = null;
    }
    if (line.startsWith("user-interface ")) getUserInterface(node, line.slice(15).trim());
    if (current && line.startsWith("ip address ")) {
      const [, , ip, mask] = line.split(/\s+/);
      current.ip = ip || "";
      current.mask = mask || "";
    }
    if (current && line.startsWith("port default vlan ")) current.vlan = line.split(/\s+/).pop();
    if (current && line.startsWith("port link-type ")) current.linkType = line.split(/\s+/).pop();
    if (current && line.startsWith("port trunk allow-pass vlan ")) current.trunkAllow = parseVlanList(line.replace(/^port\s+trunk\s+allow-pass\s+vlan\s+/i, ""));
    if (current && line.startsWith("dot1q termination vid ")) current.dot1q = line.split(/\s+/).pop();
    if (current && line === "arp broadcast enable") current.arpBroadcast = true;
    if (current && line.startsWith("ospf enable ")) {
      const parts = line.split(/\s+/);
      current.ospf = { process: parts[2] || "1", area: parts[4] || "0" };
      node.protocols.OSPF = true;
    }
    if (current && line === "dhcp select global") {
      current.dhcpSelect = "global";
      node.dhcpEnabled = true;
    }
    if (current && line.startsWith("traffic-filter ")) {
      const match = line.toLowerCase().match(/^traffic-filter\s+(inbound|outbound)\s+acl\s+([A-Za-z0-9_-]+)/i);
      if (match) {
        current.trafficFilters = current.trafficFilters || {};
        current.trafficFilters[match[1]] = match[2];
        getAcl(node, match[2]);
      }
    }
    if (currentAcl && line.startsWith("rule ")) {
      const rule = parseAclRule(line, (currentAcl.rules.length + 1) * 5);
      if (rule) {
        currentAcl.rules = currentAcl.rules.filter((item) => item.seq !== rule.seq);
        currentAcl.rules.push(rule);
        currentAcl.rules.sort((a, b) => a.seq - b.seq);
        node.protocols.ACL = true;
      }
    }
    if (current && line === "shutdown") current.status = "down";
    if (current && line === "undo shutdown") current.status = "up";
    if (line.startsWith("ospf")) node.protocols.OSPF = true;
    if (line.startsWith("rip")) node.protocols.RIP = true;
    if (line.startsWith("vlan")) {
      node.protocols.VLAN = true;
      const vlan = line.match(/^vlan\s+(\d+)/)?.[1];
      if (vlan && !node.vlans.includes(vlan)) node.vlans.push(vlan);
    }
    if (line.startsWith("stp")) node.protocols.STP = true;
    if (line === "bpdu enable") {
      node.bpduEnabled = true;
      node.protocols.STP = true;
    }
    if (line.startsWith("nat")) node.protocols.NAT = true;
    if (line.startsWith("wlan")) node.protocols.WLAN = true;
    if (line === "dhcp enable") node.dhcpEnabled = true;
    if (line.startsWith("local-user ")) {
      node.aaaEnabled = true;
      applyLocalUserCommand(node, line);
    }
    if (applyServerConfigLine(node, line)) return;
    if (line.startsWith("authentication-mode ")) {
      const ui = node.userInterfaces[node.userInterfaces.length - 1] || getUserInterface(node, "vty 0 4");
      ui.authenticationMode = line.split(/\s+/).pop();
    }
    if (line.startsWith("ip route-static ")) {
      const [, , dest, mask, nextHop] = line.split(/\s+/);
      node.routes.push({ dest, mask, nextHop });
      node.protocols.Static = true;
    }
  });
}

function applyServerConfigLine(node, line) {
  if (node.type !== "server") return false;
  const services = ensureServerServices(node);
  const lower = line.toLowerCase();
  if (lower.startsWith("http server enable")) {
    services.http.enabled = true;
    services.http.port = Number(line.match(/\bport\s+(\d+)/i)?.[1]) || services.http.port || 80;
    services.http.root = line.match(/\broot\s+(.+)$/i)?.[1]?.trim() || services.http.root;
    node.protocols.HTTP = true;
    return true;
  }
  if (lower === "undo http server enable") {
    services.http.enabled = false;
    node.protocols.HTTP = false;
    return true;
  }
  if (lower.startsWith("ftp server enable")) {
    services.ftp.enabled = true;
    services.ftp.port = Number(line.match(/\bport\s+(\d+)/i)?.[1]) || services.ftp.port || 21;
    services.ftp.root = line.match(/\broot\s+(.+)$/i)?.[1]?.trim() || services.ftp.root;
    node.protocols.FTP = true;
    return true;
  }
  if (lower === "undo ftp server enable") {
    services.ftp.enabled = false;
    node.protocols.FTP = false;
    return true;
  }
  if (lower.startsWith("ftp local-user ")) {
    const parts = line.split(/\s+/);
    services.ftp.user = parts[2] || services.ftp.user;
    const passwordIndex = parts.findIndex((part) => part.toLowerCase() === "password");
    if (passwordIndex >= 0) services.ftp.password = parts.slice(passwordIndex + 1).join(" ") || services.ftp.password;
    return true;
  }
  if (lower === "dns server enable") {
    services.dns.enabled = true;
    node.protocols.DNS = true;
    return true;
  }
  if (lower === "undo dns server enable") {
    services.dns.enabled = false;
    node.protocols.DNS = false;
    return true;
  }
  if (lower.startsWith("dns static ")) {
    const [, , host, ip] = line.split(/\s+/);
    if (host && ip) {
      services.dns.records[host.toLowerCase()] = ip;
      services.dns.enabled = true;
      node.protocols.DNS = true;
    }
    return true;
  }
  return false;
}

function normalizeConfigLine(line) {
  let text = String(line || "").trim();
  if (!text) return "";
  text = text.replace(/^<[^>]+>\s*/, "").replace(/^\[[^\]]+\]\s*/, "").trim();
  if (!text || /^[-=]{3,}$/.test(text)) return "";
  if (/^(\/\/|!)/.test(text)) return "";
  return text;
}

function submitCli(event) {
  event.preventDefault();
  const input = $("cliInput");
  const cmd = input.value.trim();
  if (!cmd) return;
  state.cliHistory.push(cmd);
  state.cliIndex = state.cliHistory.length;
  input.value = "";
  addTerminal(`${promptText()} ${cmd}`);
  runCommand(cmd);
}

function cliKeydown(event) {
  if (!["ArrowUp", "ArrowDown"].includes(event.key)) return;
  event.preventDefault();
  if (event.key === "ArrowUp") state.cliIndex = Math.max(0, state.cliIndex - 1);
  if (event.key === "ArrowDown") state.cliIndex = Math.min(state.cliHistory.length, state.cliIndex + 1);
  $("cliInput").value = state.cliHistory[state.cliIndex] || "";
  requestAnimationFrame(() => $("cliInput").setSelectionRange($("cliInput").value.length, $("cliInput").value.length));
}

function expandCliCommand(cmd) {
  let text = cmd.trim().replace(/\s+/g, " ");
  text = text.replace(/\s+-\s+/g, "-");
  const lower = text.toLowerCase();
  if (/^sys$|^sys\s*$/.test(lower)) return "system-view";
  if (/^q$|^quit$/.test(lower)) return "quit";
  if (/^dis\s+/.test(lower)) text = text.replace(/^dis\s+/i, "display ");
  if (/^disp\s+/.test(lower)) text = text.replace(/^disp\s+/i, "display ");
  if (/^int\s+/.test(lower)) text = text.replace(/^int\s+/i, "interface ");
  if (/^inter\s+/.test(lower)) text = text.replace(/^inter\s+/i, "interface ");
  if (/^ip add\s+/.test(text.toLowerCase())) text = text.replace(/^ip add\s+/i, "ip address ");
  if (/^trunk allow-pass vlan\s+/.test(text.toLowerCase())) text = text.replace(/^trunk allow-pass vlan\s+/i, "port trunk allow-pass vlan ");
  if (/^un sh$|^undo sh$|^undo shutdown$/.test(text.toLowerCase())) return "undo shutdown";
  if (/^sh$|^shutdown$/.test(text.toLowerCase())) return "shutdown";
  if (/^vlan b\s+/.test(text.toLowerCase())) text = text.replace(/^vlan b\s+/i, "vlan batch ");
  if (/^ip route static\s+/.test(text.toLowerCase())) text = text.replace(/^ip route static\s+/i, "ip route-static ");
  if (/^ip route\s+/.test(text.toLowerCase())) text = text.replace(/^ip route\s+/i, "ip route-static ");
  if (/^undo ip route static\s+/.test(text.toLowerCase())) text = text.replace(/^undo ip route static\s+/i, "undo ip route-static ");
  if (/^undo ip route\s+/.test(text.toLowerCase())) text = text.replace(/^undo ip route\s+/i, "undo ip route-static ");
  if (/^interface\s+/.test(text.toLowerCase())) {
    const name = text.slice(text.indexOf(" ") + 1).trim();
    text = `interface ${expandInterfaceAlias(name)}`;
  }
  const normalized = text.toLowerCase();
  if (/^display\s+(cu|cur)$/.test(normalized)) return "display current-configuration";
  if (/^display\s+ip\s+int\s+(br|brief)$/.test(normalized)) return "display ip interface brief";
  if (/^display\s+int\s+(br|brief)$/.test(normalized)) return "display interface brief";
  if (/^display\s+ip\s+route$/.test(normalized)) return "display ip routing-table";
  if (/^display\s+(g|ge|gi|gig|e|eth|ethernet)/.test(normalized)) {
    const name = text.replace(/^display\s+/i, "");
    return `display interface ${expandInterfaceAlias(name)}`;
  }
  return text;
}

function expandInterfaceAlias(name) {
  return String(name || "")
    .replace(/^g(?=\d)/i, "GE")
    .replace(/^ge(?=\d)/i, "GE")
    .replace(/^gi(?=\d)/i, "GigabitEthernet")
    .replace(/^gig(?=\d)/i, "GigabitEthernet")
    .replace(/^e(?=\d)/i, "Ethernet")
    .replace(/^eth(?=\d)/i, "Ethernet");
}

function runCommand(cmd) {
  const node = state.selected?.kind === "node" ? getNode(state.selected.id) : null;
  cmd = expandCliCommand(cmd);
  const lower = cmd.toLowerCase();
  if (lower === "help" || lower === "?") {
    addTerminal("display this | display acl [all|number] | display traffic-filter applied-record | reset acl counter [number] | display/dis current-configuration | display interface g0/0/0 | display topology | system-view/sys | interface/int g0/0/0 | acl 3000 | rule permit/deny ip source <ip> <wc> destination <ip> <wc> | traffic-filter inbound acl 3000 | ip route-static/ip route <dest> <mask> <next-hop> | undo ip route-static ... | undo ip address | ping <name|ip> | quit/q");
    return;
  }
  if (lower === "clear") {
    $("terminal").innerHTML = "";
    return;
  }
  if (!node && !["display topology", "display device", "save"].includes(lower)) {
    addTerminal("请先在拓扑中选择一台设备。", "warn");
    return;
  }
  if (node && !node.running && !["display topology", "display device", "save"].includes(lower)) {
    addTerminal(`${node.name} 未开机，不能进入 Console。`, "warn");
    return;
  }
  if (lower.startsWith("reset acl counter")) {
    resetAclCounters(node, parseAclCounterTarget(lower));
    addTerminal("Info: ACL counter reset.", "ok");
    renderAll();
    return;
  }
  if (lower === "system-view") {
    state.cliMode = "system";
    addTerminal("Enter system view, return user view with Ctrl+Z.");
    updatePrompt();
    return;
  }
  if (lower === "quit") {
    if (state.cliMode === "interface") {
      state.cliMode = "system";
      state.cliInterface = null;
    } else if (state.cliMode === "vlan") {
      state.cliMode = "system";
      state.cliVlan = null;
    } else if (state.cliMode === "ospf-area") {
      state.cliMode = "ospf";
      state.cliArea = null;
    } else if (state.cliMode === "ospf") {
      state.cliMode = "system";
      state.cliOspf = null;
    } else if (state.cliMode === "acl") {
      state.cliMode = "system";
      state.cliAcl = null;
    } else if (["ip-pool", "aaa", "user-interface"].includes(state.cliMode)) {
      state.cliMode = "system";
      state.cliPool = null;
      state.cliUserInterface = null;
    } else {
      state.cliMode = "user";
    }
    updatePrompt();
    return;
  }
  if (lower.startsWith("display")) return displayCommand(lower, node);
  if (lower.startsWith("ping ")) return pingCommand(cmd.slice(5).trim(), node);
  if (lower === "save") return saveProject();
  if (state.cliMode === "user") {
    addTerminal("Error: Please enter system-view first.", "bad");
    return;
  }
  configureCommand(cmd, lower, node);
}

function displayCommand(lower, node) {
  if (lower === "display this") {
    addTerminal(displayThisText(node, { mode: state.cliMode, iface: state.cliInterface, vlan: state.cliVlan, acl: state.cliAcl }));
  } else if (lower.startsWith("display interface ") || lower.startsWith("display port ")) {
    addTerminal(displayInterfaceText(node, lower.replace(/^display\s+(interface|port)\s+/, "")));
  } else if (lower === "display topology") {
    addTerminal(state.nodes.map((n) => `${n.name.padEnd(8)} ${n.model.padEnd(10)} ${n.running ? "Running" : "Stopped"}`).join("\n") || "Empty topology");
  } else if (lower === "display device") {
    addTerminal(state.nodes.map((n) => `${n.name} ${n.model} interfaces:${n.interfaces.length}`).join("\n"));
  } else if (lower === "display current-configuration") {
    addTerminal(buildConfig(node));
  } else if (lower === "display acl") {
    addTerminal(displayAclText(node));
  } else if (lower === "display acl all") {
    addTerminal(displayAclText(node));
  } else if (lower.startsWith("display acl ")) {
    addTerminal(displayAclText(node, lower.replace(/^display\s+acl\s+/, "").replace(/^number\s+/, "").trim()));
  } else if (lower.includes("traffic-filter")) {
    addTerminal(displayTrafficFilterText(node));
  } else if (lower === "display version") {
    addTerminal(`Huawei Versatile Routing Platform Software\n${node.model} Simulator, eNSP Web Lab Edition\nUptime: ${formatClock(state.seconds)}`);
  } else if (lower.includes("ip interface brief") || lower.includes("interface brief")) {
    addTerminal(node.interfaces.map((i) => `${i.name.padEnd(14)} ${String(i.ip || "unassigned").padEnd(16)} ${i.status}`).join("\n"));
  } else if (lower.includes("routing-table")) {
    const routes = inferRoutes(node).concat(node.routes.map((r) => `${r.dest}/${r.mask} via ${r.nextHop} Static`));
    addTerminal(routes.join("\n") || "Routing Tables: empty");
  } else if (lower.includes("mac-address")) {
    addTerminal(macTable(node).join("\n") || "MAC address table is empty.");
  } else if (lower.includes("arp")) {
    addTerminal(arpTable(node).join("\n") || "ARP table is empty.");
  } else if (lower.includes("dhcp")) {
    addTerminal(node.type === "server" ? "DHCP server: enabled pool ENSP_WEB_POOL 192.168.10.100-192.168.10.200" : "DHCP client: idle");
  } else if (lower.includes("vlan")) {
    addTerminal(node.interfaces.map((i) => `${i.name.padEnd(14)} VLAN ${i.vlan || "-"} ${i.linkType}`).join("\n"));
  } else if (lower.includes("ospf peer")) {
    const peers = neighborNodes(node.id).filter((n) => n.protocols.OSPF);
    addTerminal(peers.length ? peers.map((p) => `${p.name} Full/DR`).join("\n") : "OSPF Process 1 with Router ID 0.0.0.0\nNo peer found.");
  } else {
    addTerminal("Unrecognized display command.", "warn");
  }
}

function configureCommand(cmd, lower, node) {
  const aclView = { mode: state.cliMode, iface: state.cliInterface, acl: state.cliAcl };
  const aclResult = applyAclCliCommand(node, aclView, cmd, lower);
  if (aclResult.handled) {
    state.cliMode = aclView.mode;
    state.cliInterface = aclView.iface || state.cliInterface;
    state.cliAcl = aclView.acl || null;
    if (aclResult.error) {
      addTerminal(aclResult.error, "bad");
      updatePrompt();
      return;
    }
  } else if (applyUndoConfigCommand(node, { mode: state.cliMode, iface: state.cliInterface }, cmd, lower)) {
    // undo command handled
  } else if (lower.startsWith("sysname ")) {
    node.name = cmd.slice(8).trim() || node.name;
  } else if (lower.startsWith("interface ")) {
    const name = cmd.slice(10).trim();
    const iface = node.interfaces.find((i) => i.name.toLowerCase() === name.toLowerCase());
    if (!iface) return addTerminal(`Error: interface ${name} not found.`, "bad");
    state.cliMode = "interface";
    state.cliInterface = iface.name;
  } else if (state.cliMode === "interface" && lower.startsWith("ip address ")) {
    const [, , ip, mask] = cmd.split(/\s+/);
    const iface = node.interfaces.find((i) => i.name === state.cliInterface);
    iface.ip = ip || "";
    iface.mask = mask || "24";
  } else if (state.cliMode === "interface" && lower === "shutdown") {
    node.interfaces.find((i) => i.name === state.cliInterface).status = "down";
  } else if (state.cliMode === "interface" && lower === "undo shutdown") {
    node.interfaces.find((i) => i.name === state.cliInterface).status = "up";
  } else if (state.cliMode === "interface" && lower.startsWith("port default vlan ")) {
    node.interfaces.find((i) => i.name === state.cliInterface).vlan = cmd.split(/\s+/).pop();
    node.protocols.VLAN = true;
  } else if (state.cliMode === "interface" && lower.startsWith("port link-type ")) {
    node.interfaces.find((i) => i.name === state.cliInterface).linkType = cmd.split(/\s+/).pop();
  } else if (state.cliMode === "interface" && lower.startsWith("port trunk allow-pass vlan ")) {
    const iface = findInterfaceByName(node, state.cliInterface);
    iface.linkType = "trunk";
    iface.trunkAllow = parseVlanList(cmd.replace(/^port\s+trunk\s+allow-pass\s+vlan\s+/i, ""));
    node.protocols.VLAN = true;
  } else if (state.cliMode === "interface" && lower.startsWith("dot1q termination vid ")) {
    const iface = findInterfaceByName(node, state.cliInterface);
    iface.dot1q = cmd.split(/\s+/).pop();
  } else if (state.cliMode === "interface" && lower === "arp broadcast enable") {
    findInterfaceByName(node, state.cliInterface).arpBroadcast = true;
  } else if (state.cliMode === "interface" && lower.startsWith("ospf enable ")) {
    const parts = cmd.split(/\s+/);
    findInterfaceByName(node, state.cliInterface).ospf = { process: parts[2] || "1", area: parts[4] || "0" };
    node.protocols.OSPF = true;
  } else if (state.cliMode === "interface" && lower === "dhcp select global") {
    findInterfaceByName(node, state.cliInterface).dhcpSelect = "global";
    node.dhcpEnabled = true;
  } else if (lower.startsWith("ospf")) {
    node.protocols.OSPF = true;
    const parts = cmd.split(/\s+/);
    node.ospf.process = parts[1] || "1";
    const routerIdIndex = parts.findIndex((p) => p.toLowerCase() === "router-id");
    if (routerIdIndex >= 0) node.ospf.routerId = parts[routerIdIndex + 1] || "";
    state.cliMode = "ospf";
    state.cliOspf = node.ospf.process;
  } else if (/^area\s+/.test(lower)) {
    const area = cmd.split(/\s+/)[1] || "0";
    if (!node.ospf.areas.includes(area)) node.ospf.areas.push(area);
    state.cliMode = "ospf-area";
    state.cliArea = area;
  } else if (/^network\s+/.test(lower)) {
    const [, network, wildcard] = cmd.split(/\s+/);
    node.protocols.OSPF = true;
    node.ospf.networks.push({ network, wildcard, area: state.cliArea || "0" });
  } else if (lower === "dhcp enable") {
    node.dhcpEnabled = true;
  } else if (lower.startsWith("ip pool ")) {
    state.cliPool = cmd.slice(8).trim();
    getDhcpPool(node, state.cliPool);
    state.cliMode = "ip-pool";
  } else if (state.cliMode === "ip-pool" && lower.startsWith("network ")) {
    const parts = cmd.split(/\s+/);
    const pool = getDhcpPool(node, state.cliPool);
    pool.network = parts[1] || "";
    pool.mask = parts[3] || parts[2] || "";
  } else if (state.cliMode === "ip-pool" && lower.startsWith("gateway-list ")) {
    getDhcpPool(node, state.cliPool).gateway = cmd.slice(13).trim();
  } else if (state.cliMode === "ip-pool" && lower.startsWith("dns-list ")) {
    getDhcpPool(node, state.cliPool).dns = cmd.slice(9).trim();
  } else if (lower === "aaa") {
    node.aaaEnabled = true;
    state.cliMode = "aaa";
  } else if (state.cliMode === "aaa" && lower.startsWith("local-user ")) {
    applyLocalUserCommand(node, cmd);
  } else if (lower.startsWith("user-interface ")) {
    state.cliUserInterface = cmd.slice(15).trim();
    getUserInterface(node, state.cliUserInterface);
    state.cliMode = "user-interface";
  } else if (state.cliMode === "user-interface" && lower.startsWith("authentication-mode ")) {
    getUserInterface(node, state.cliUserInterface).authenticationMode = cmd.split(/\s+/).pop();
  } else if (lower.startsWith("rip")) {
    node.protocols.RIP = true;
  } else if (/^vlan\s+batch\s+/.test(lower)) {
    node.protocols.VLAN = true;
    parseVlanList(cmd.replace(/^vlan\s+batch\s+/i, "")).forEach((vlan) => {
      if (!node.vlans.includes(vlan)) node.vlans.push(vlan);
    });
  } else if (/^vlan\s+\d+/.test(lower)) {
    const vlan = cmd.split(/\s+/)[1];
    node.protocols.VLAN = true;
    if (!node.vlans.includes(vlan)) node.vlans.push(vlan);
    state.cliMode = "vlan";
    state.cliVlan = vlan;
  } else if (lower.startsWith("vlan")) {
    node.protocols.VLAN = true;
  } else if (lower === "bpdu enable") {
    node.bpduEnabled = true;
    node.protocols.STP = true;
  } else if (lower.startsWith("stp")) {
    node.protocols.STP = true;
  } else if (lower.startsWith("nat")) {
    node.protocols.NAT = true;
  } else if (lower.startsWith("wlan")) {
    node.protocols.WLAN = true;
  } else if (lower.startsWith("ip route-static ")) {
    const [, , dest, mask, nextHop] = cmd.split(/\s+/);
    node.routes.push({ dest, mask, nextHop });
  } else if (applyTutorialCommand(node, { mode: state.cliMode, iface: state.cliInterface }, cmd, lower)) {
    // handled by shared tutorial command shim
  } else {
    addTerminal("Error: incomplete or unknown command.", "bad");
    return;
  }
  addTerminal("Info: command executed successfully.", "ok");
  log("ok", "CLI", `${node.name}: ${cmd}`);
  updatePrompt();
  renderAll();
}

function pingCommand(target, source) {
  const targetInfo = findEndpointTargetInfo(target, source);
  const dest = targetInfo?.node;
  if (!dest) return addTerminal(`Error: ${target} not found.`, "bad");
  const packet = runPing(source.id, dest.id, { destIp: targetInfo.ip });
  const text = ["pc", "client", "server"].includes(source.type)
    ? formatPcPing(packet, dest, target)
    : formatVrpPing(packet, dest);
  addTerminal(text, packet.result === "Success" ? "ok" : "bad");
}

function runPing(sourceId, destId, options = {}) {
  const source = getNode(sourceId);
  const dest = getNode(destId);
  const flow = { protocol: "icmp", icmpType: "echo", ...options };
  const status = endpointReachabilityStatus(sourceId, destId, { ...flow, countAcl: true });
  const path = status.path || [];
  const up = status.ok;
  const delay = up ? path.reduce((sum, nodeId, idx) => {
    const next = path[idx + 1];
    if (!next) return sum;
    const link = linkBetween(nodeId, next, linkUsableForTraffic);
    return sum + (link?.latency || 1);
  }, 1) : 0;
  const probes = up ? buildPingProbes(path, delay, 5) : [];
  const received = probes.filter((probe) => probe.ok).length;
  const lossPercent = up ? Math.round((1 - received / Math.max(1, probes.length)) * 100) : 100;
  const result = up && received > 0 ? "Success" : "Failed";
  const reason = up
    ? (lossPercent ? `部分丢包 ${lossPercent}%` : "")
    : (status.reason || pingFailureReason(source, dest, path, false));
  const packet = {
    id: state.counters.packet++,
    time: new Date().toLocaleTimeString(),
    source: source?.name || "?",
    dest: dest?.name || "?",
    sourceIp: flow.sourceIp || primaryIp(source),
    destIp: flow.destIp || primaryIp(dest),
    protocol: "ICMP",
    path: path.map((id) => getNode(id)?.name).join(" -> "),
    pathIds: [...path],
    result,
    reason,
    delay,
    probes
  };
  state.packets.unshift(packet);
  state.packets = state.packets.slice(0, 240);
  flashPath(path);
  log(result === "Success" ? "ok" : "bad", "PING", `${packet.source} -> ${packet.dest}: ${packet.result}${reason ? ` (${reason})` : ""}`);
  renderAll();
  return packet;
}

function buildPingProbes(path, baseDelay = 1, count = 5) {
  const loss = pathLossPercent(path);
  return Array.from({ length: count }, (_, index) => {
    const ok = loss <= 0 ? true : (loss >= 100 ? false : Math.random() * 100 >= loss);
    return {
      ok,
      time: Math.max(1, Math.round(baseDelay + index % 3 + Math.random() * 2))
    };
  });
}

function pathLossPercent(path = []) {
  let passRate = 1;
  path.forEach((nodeId, index) => {
    const next = path[index + 1];
    if (!next) return;
    const link = linkBetween(nodeId, next, linkUsableForTraffic);
    const loss = clamp(Number(link?.loss) || 0, 0, 100) / 100;
    passRate *= (1 - loss);
  });
  return Math.round((1 - passRate) * 100);
}

function pingFailureReason(source, dest, path, returnRouteOk = true) {
  if (!state.running) return "仿真未运行";
  if (!source?.running) return "源设备未启动";
  if (!dest?.running) return "目的设备未启动";
  if (!path.length) return "没有可达链路或路由";
  if (!returnRouteOk) return "返回路径缺少网关或静态路由";
  return "未知网络错误";
}

function flashPath(path) {
  if (path.length < 2) return;
  const ids = [];
  path.forEach((nodeId, index) => {
    const next = path[index + 1];
    if (!next) return;
    const link = linkBetween(nodeId, next);
    if (link) ids.push(link.id);
  });
  flashLinks(ids);
}

function flashLinks(ids) {
  ids.forEach((id) => flashingLinks.add(id));
  renderLinks();
  setTimeout(() => {
    ids.forEach((id) => flashingLinks.delete(id));
    renderLinks();
  }, 1700);
}

function findPath(sourceId, destId, options = {}) {
  const queue = [[sourceId]];
  let physicalFallback = [];
  while (queue.length) {
    const path = queue.shift();
    const last = path[path.length - 1];
    if (last === destId) {
      if (routeAllowsPath(path, options)) return path;
      physicalFallback = physicalFallback.length ? physicalFallback : path;
      continue;
    }
    linksOf(last, linkUsableForTraffic).forEach((link) => {
      const next = link.a === last ? link.b : link.a;
      const node = getNode(next);
      if (node?.running && pathCanVisit(path, next, node) && path.length <= state.nodes.length * 2) {
        queue.push(path.concat(next));
      }
    });
  }
  return physicalFallback.length && !hasIpRoutingContext(physicalFallback, options.sourceIp, options.destIp) ? physicalFallback : [];
}

function findTrafficPath(sourceId, destId) {
  return findPathByLinkPredicate(sourceId, destId, linkUsableForTraffic);
}

function findPhysicalPath(sourceId, destId) {
  return findPathByLinkPredicate(sourceId, destId, (link) => linkEffectiveStatus(link) === "up");
}

function findPathByLinkPredicate(sourceId, destId, predicate) {
  if (!sourceId || !destId) return [];
  const queue = [[sourceId]];
  while (queue.length) {
    const path = queue.shift();
    const last = path[path.length - 1];
    if (last === destId) return path;
    linksOf(last, predicate).forEach((link) => {
      const next = link.a === last ? link.b : link.a;
      const node = getNode(next);
      if (node?.running && pathCanVisit(path, next, node) && path.length <= state.nodes.length * 2) {
        queue.push(path.concat(next));
      }
    });
  }
  return [];
}

function firstTrafficBlock(path = []) {
  for (let index = 0; index < path.length - 1; index += 1) {
    const current = path[index];
    const next = path[index + 1];
    const link = linkBetween(current, next);
    if (!link) continue;
    const diagnostic = linkDiagnostic(link);
    if (diagnostic.traffic !== "up") return diagnostic;
  }
  return null;
}

function pathCanVisit(path, nextId, node) {
  const visits = path.filter((id) => id === nextId).length;
  const maxVisits = ["switch", "hub"].includes(node?.type) ? 2 : 1;
  return visits < maxVisits;
}

function linkUsableForTraffic(link) {
  if (linkEffectiveStatus(link) !== "up") return false;
  if (/^console$/i.test(String(link.cable || ""))) return false;
  return linkVlanCompatible(link);
}

function linkDiagnostic(link) {
  const a = getNode(link.a);
  const b = getNode(link.b);
  if (!a || !b) return { physical: "down", traffic: "blocked", reason: "端点设备不存在" };
  if (link.status !== "up") return { physical: "down", traffic: "blocked", reason: "链路被手动关闭" };
  if (!a.running || !b.running) return { physical: "down", traffic: "blocked", reason: "链路两端设备需要启动" };
  const aPort = findExistingInterface(a, link.aPort);
  const bPort = findExistingInterface(b, link.bPort);
  if (aPort?.status === "down") return { physical: "down", traffic: "blocked", reason: `${a.name} ${aPort.name} 已 shutdown` };
  if (bPort?.status === "down") return { physical: "down", traffic: "blocked", reason: `${b.name} ${bPort.name} 已 shutdown` };
  if (/^console$/i.test(String(link.cable || ""))) return { physical: "up", traffic: "blocked", reason: "Console 线缆只用于管理口，不承载业务数据" };
  if (!linkVlanCompatible(link)) return { physical: "up", traffic: "blocked", reason: `VLAN 不匹配（${a.name}:${formatAllowedVlans(aPort, a)} / ${b.name}:${formatAllowedVlans(bPort, b)}）` };
  return { physical: "up", traffic: "up", reason: "业务流量可通过" };
}

function formatAllowedVlans(iface, node) {
  if (!iface) return "Auto";
  const vlans = [...interfaceAllowedVlans(iface, node)];
  if (!vlans.length || vlans.includes("*")) return "all";
  return vlans.join(",");
}

function linkVlanCompatible(link) {
  const a = getNode(link.a);
  const b = getNode(link.b);
  const aIface = a ? findExistingInterface(a, link.aPort) : null;
  const bIface = b ? findExistingInterface(b, link.bPort) : null;
  if (!aIface || !bIface) return true;
  const aVlans = interfaceAllowedVlans(aIface, a);
  const bVlans = interfaceAllowedVlans(bIface, b);
  if (aVlans.has("*") || bVlans.has("*")) return true;
  return [...aVlans].some((vlan) => bVlans.has(vlan));
}

function interfaceAllowedVlans(iface, node = null) {
  if (iface.dot1q) return new Set([String(iface.dot1q)]);
  const subVlans = node?.interfaces
    ?.filter((item) => item.name.startsWith(`${iface.name}.`) && item.dot1q)
    .map((item) => String(item.dot1q)) || [];
  if (subVlans.length) return new Set(subVlans);
  const linkType = String(iface.linkType || "access").toLowerCase();
  if (linkType === "trunk") {
    const allow = iface.trunkAllow || [];
    return allow.length ? new Set(allow.map((item) => String(item).toLowerCase() === "all" ? "*" : String(item))) : new Set(["*"]);
  }
  return new Set([String(iface.vlan || "1")]);
}

function routeAllowsPath(path, options = {}) {
  if (path.length < 2) return false;
  const source = getNode(path[0]);
  const dest = getNode(path[path.length - 1]);
  const sourceIp = options.sourceIp || primaryIp(source);
  const destIp = options.destIp || primaryIp(dest);
  if (!hasIpRoutingContext(path, sourceIp, destIp)) return true;
  if (!sourceIp || !destIp) return true;
  if (!endpointHasExit(source, sourceIp, destIp, path)) return false;
  if (!endpointHasExit(dest, destIp, sourceIp, path)) return false;
  const nodes = path.map(getNode);
  return nodes.every((node, index) => !isRoutingNode(node) || nodeCanRouteTo(node, destIp, nodes, index));
}

function routeFailureReason(path, options = {}) {
  if (path.length < 2) return "没有可达链路路径";
  const source = getNode(path[0]);
  const dest = getNode(path[path.length - 1]);
  const sourceIp = options.sourceIp || primaryIp(source);
  const destIp = options.destIp || primaryIp(dest);
  if (!hasIpRoutingContext(path, sourceIp, destIp)) return "";
  if (!sourceIp) return `${source?.name || "源设备"} 未配置 IP 地址`;
  if (!destIp) return `${dest?.name || "目的设备"} 未配置 IP 地址`;
  if (!endpointHasExit(source, sourceIp, destIp, path)) return `${source.name} 缺少可用默认网关`;
  if (!endpointHasExit(dest, destIp, sourceIp, path)) return `${dest.name} 缺少返回网关`;
  const nodes = path.map(getNode);
  const failedRouter = nodes.find((node, index) => isRoutingNode(node) && !nodeCanRouteTo(node, destIp, nodes, index));
  if (failedRouter) return `${failedRouter.name} 缺少到 ${destIp} 的直连、动态或静态路由`;
  return "";
}

function normalizeFlowIps(source, dest, flow = {}) {
  return {
    ...flow,
    sourceIp: flow.sourceIp || primaryIp(source),
    destIp: flow.destIp || primaryIp(dest)
  };
}

function formatAclBlockReason(block) {
  if (!block) return "";
  return `ACL ${block.aclId} 在 ${block.node.name}:${block.iface?.name || "接口"} ${block.direction} 拒绝`;
}

function hasIpRoutingContext(path, sourceIp = "", destIp = "") {
  const source = getNode(path[0]);
  sourceIp = sourceIp || primaryIp(source);
  destIp = destIp || primaryIp(getNode(path[path.length - 1]));
  if (!sourceIp || !destIp) return false;
  const sourceIface = source.interfaces?.find((iface) => iface.ip === sourceIp) || source.interfaces?.[0] || {};
  if (sameSubnet(sourceIp, sourceIface.mask, destIp)) return false;
  return true;
}

function endpointHasExit(node, ownIp, targetIp, path = []) {
  if (!node || isRoutingNode(node)) return true;
  const iface = node.interfaces?.find((item) => item.ip === ownIp) || node.interfaces?.find((item) => item.ip) || {};
  if (sameSubnet(iface.ip, iface.mask, targetIp)) return true;
  if (!node.gateway) return false;
  return path
    .map(getNode)
    .filter(Boolean)
    .some((candidate) => candidate.interfaces?.some((item) => item.ip === node.gateway || sameSubnet(item.ip, item.mask, node.gateway)));
}

function isRoutingNode(node) {
  return ["router", "l3switch", "firewall"].includes(node?.type);
}

function nodeCanRouteTo(node, destIp, pathNodes = [], index = 0) {
  if (!node || !isRoutingNode(node)) return true;
  if (node.interfaces?.some((iface) => iface.ip && sameSubnet(iface.ip, iface.mask, destIp))) return true;
  if (dynamicRouteAlongPath(node, destIp, pathNodes, index)) return true;
  return (node.routes || []).some((route) => routeMatchesIp(route, destIp) && routeNextHopReachable(node, route, pathNodes, index));
}

function dynamicRouteAlongPath(node, destIp, pathNodes = [], index = 0) {
  const protocol = ["OSPF", "RIP", "ISIS", "BGP"].find((name) => node.protocols?.[name]);
  if (!protocol) return false;
  const routed = pathNodes.slice(index).filter(isRoutingNode);
  if (!routed.length || !routed.every((item) => item.protocols?.[protocol])) return false;
  return routed.some((item) => item.interfaces?.some((iface) => iface.ip && sameSubnet(iface.ip, iface.mask, destIp)));
}

function routeMatchesIp(route, ip) {
  if (!route?.dest || !route?.mask) return false;
  return ipInNetwork(ip, route.dest, route.mask);
}

function routeNextHopReachable(node, route, pathNodes = [], index = 0) {
  if (!route?.nextHop || route.nextHop === "0.0.0.0") return true;
  const connected = node.interfaces?.some((iface) => iface.ip && sameSubnet(iface.ip, iface.mask, route.nextHop));
  if (!connected) return false;
  const downstream = pathNodes.slice(index + 1);
  if (!downstream.length) return true;
  return downstream.some((candidate) => candidate?.interfaces?.some((iface) => iface.ip === route.nextHop || sameSubnet(iface.ip, iface.mask, route.nextHop)));
}

function startSimulation() {
  const wasRunning = state.running;
  const targets = powerTargetNodes();
  if (!wasRunning) {
    state.seconds = 0;
    $("clock").textContent = formatClock(state.seconds);
  }
  targets.forEach((n) => (n.running = true));
  syncSimulationStateFromDevices();
  log("ok", "SIM", `启动 ${targets.length} 台设备`);
  renderAll();
}

function pauseSimulation() {
  const targets = powerTargetNodes();
  targets.forEach((n) => (n.running = false));
  syncSimulationStateFromDevices();
  log("warn", "SIM", `暂停 ${targets.length} 台设备`);
  renderAll();
}

function powerTargetNodes() {
  if (state.multiSelected.length) return state.multiSelected.map(getNode).filter(Boolean);
  if (state.selected?.kind === "node") return [getNode(state.selected.id)].filter(Boolean);
  return state.nodes;
}

function setNodePower(node, running) {
  node.running = running;
  syncSimulationStateFromDevices();
}

function syncSimulationStateFromDevices() {
  state.running = state.nodes.some((node) => node.running);
  if (state.running && !ticker) {
    ticker = setInterval(() => {
      state.seconds += 1;
      $("clock").textContent = formatClock(state.seconds);
    }, 1000);
  }
  if (!state.running && ticker) {
    clearInterval(ticker);
    ticker = null;
  }
  $("stateBadge").textContent = state.running ? "Running" : "Stopped";
  $("stateBadge").classList.toggle("running", state.running);
}

function loadTemplate(name) {
  state.nodes = [];
  state.links = [];
  state.annotations = [];
  state.packets = [];
  state.selected = null;
  state.multiSelected = [];
  state.multiAnnotations = [];
  flashingLinks.clear();
  state.pendingLink = null;
  state.pendingPing = null;
  state.counters = { node: 1, link: 1, packet: 1, text: 1 };
  if (name === "empty") {
    log("info", "TEMPLATE", "创建空白拓扑");
    return renderAll();
  }
  const add = (type, x, y, options) => addDevice(type, { x, y }, { ...options, running: state.running });
  const setIp = (node, ifaceName, ip, mask = "24", extra = {}) => Object.assign(findInterfaceByName(node, ifaceName), { ip, mask, ...extra });
  const addRoute = (node, dest, mask, nextHop) => node.routes.push({ dest, mask, nextHop });
  if (name === "campus") {
    const pc1 = add("pc", 180, 250, { name: "PC1" });
    const pc2 = add("pc", 180, 420, { name: "PC2" });
    const sw = add("switch", 420, 335, { name: "Access_SW" });
    const core = add("l3switch", 690, 335, { name: "Core_SW", protocols: { ...defaultProtocols("l3switch"), VLAN: true, OSPF: true, STP: true } });
    const ar = add("router", 950, 335, { name: "AR_Border", protocols: { ...defaultProtocols("router"), OSPF: true, NAT: true } });
    const fw = add("firewall", 1210, 335, { name: "USG_FW", protocols: { ...defaultProtocols("firewall"), NAT: true, ACL: true } });
    const sv = add("server", 690, 545, { name: "Server1" });
    pc1.interfaces[0].ip = "192.168.10.10"; pc1.interfaces[0].mask = "24"; pc1.interfaces[0].vlan = "10";
    pc2.interfaces[0].ip = "192.168.20.10"; pc2.interfaces[0].mask = "24"; pc2.interfaces[0].vlan = "20";
    sv.interfaces[0].ip = "10.10.100.10"; sv.interfaces[0].mask = "24"; sv.interfaces[0].vlan = "100";
    addLink(pc1.id, sw.id); addLink(pc2.id, sw.id); addLink(sw.id, core.id); addLink(core.id, ar.id); addLink(ar.id, fw.id); addLink(core.id, sv.id);
  }
  if (name === "datacenter") {
    const border = add("router", 1040, 250, { name: "DC_Border" });
    const fw = add("firewall", 800, 250, { name: "DC_FW" });
    const spine1 = add("l3switch", 560, 180, { name: "Spine1" });
    const spine2 = add("l3switch", 560, 320, { name: "Spine2" });
    const leaf1 = add("switch", 320, 180, { name: "Leaf1" });
    const leaf2 = add("switch", 320, 320, { name: "Leaf2" });
    const app = add("server", 120, 160, { name: "AppSrv" });
    const db = add("server", 120, 340, { name: "DbSrv" });
    [spine1, spine2, leaf1, leaf2].forEach((n) => { n.protocols.VLAN = true; n.protocols.STP = true; });
    addLink(border.id, fw.id); addLink(fw.id, spine1.id); addLink(fw.id, spine2.id); addLink(spine1.id, leaf1.id); addLink(spine1.id, leaf2.id); addLink(spine2.id, leaf1.id); addLink(spine2.id, leaf2.id); addLink(leaf1.id, app.id); addLink(leaf2.id, db.id);
  }
  if (name === "wlan") {
    const cloud = add("cloud", 1160, 300, { name: "Internet" });
    const ar = add("router", 930, 300, { name: "AR_WAN" });
    const ac = add("ac", 680, 300, { name: "AC6605", protocols: { ...defaultProtocols("ac"), CAPWAP: true, WLAN: true, VLAN: true } });
    const sw = add("switch", 430, 300, { name: "PoE_SW", protocols: { ...defaultProtocols("switch"), VLAN: true, STP: true } });
    const ap1 = add("ap", 190, 190, { name: "AP_Office" });
    const ap2 = add("ap", 190, 420, { name: "AP_Guest" });
    const pc = add("pc", 430, 520, { name: "Wireless_Client" });
    addLink(cloud.id, ar.id); addLink(ar.id, ac.id); addLink(ac.id, sw.id); addLink(sw.id, ap1.id); addLink(sw.id, ap2.id); addLink(sw.id, pc.id);
  }
  if (name === "lab-ospf") {
    state.project.name = "OSPF实验.lab";
    state.stage = normalizeStageSize({ width: 2200, height: 1300 });
    const pc1 = add("pc", 120, 260, { name: "PC_A" });
    const pc2 = add("pc", 1780, 260, { name: "PC_B" });
    const r1 = add("router", 430, 250, { name: "AR1", protocols: { ...defaultProtocols("router"), OSPF: true } });
    const r2 = add("router", 860, 250, { name: "AR2", protocols: { ...defaultProtocols("router"), OSPF: true } });
    const r3 = add("router", 1290, 250, { name: "AR3", protocols: { ...defaultProtocols("router"), OSPF: true } });
    setIp(pc1, "Ethernet0/0/1", "192.168.10.10", "24"); pc1.gateway = "192.168.10.1";
    setIp(pc2, "Ethernet0/0/1", "192.168.30.10", "24"); pc2.gateway = "192.168.30.1";
    setIp(r1, "GE0/0/0", "192.168.10.1", "24"); setIp(r1, "GE0/0/1", "10.0.12.1", "30");
    setIp(r2, "GE0/0/0", "10.0.12.2", "30"); setIp(r2, "GE0/0/1", "10.0.23.1", "30");
    setIp(r3, "GE0/0/0", "10.0.23.2", "30"); setIp(r3, "GE0/0/1", "192.168.30.1", "24");
    [r1, r2, r3].forEach((r, index) => {
      r.ospf.process = "1";
      r.ospf.routerId = `1.1.1.${index + 1}`;
      r.ospf.areas = ["0.0.0.0"];
      r.ospf.networks = r.interfaces.filter((i) => i.ip).map((i) => ({ area: "0.0.0.0", network: i.ip, wildcard: "0.0.0.0" }));
      r.notes = "已预配置 OSPF area 0；验证 PC_A ping PC_B。";
    });
    addLink(pc1.id, r1.id, { aPort: "Ethernet0/0/1", bPort: "GE0/0/0", cable: "Copper" });
    addLink(r1.id, r2.id, { aPort: "GE0/0/1", bPort: "GE0/0/0", cable: "Copper" });
    addLink(r2.id, r3.id, { aPort: "GE0/0/1", bPort: "GE0/0/0", cable: "Copper" });
    addLink(r3.id, pc2.id, { aPort: "GE0/0/1", bPort: "Ethernet0/0/1", cable: "Copper" });
  }
  if (name === "lab-acl") {
    state.project.name = "ACL实验.lab";
    state.stage = normalizeStageSize({ width: 2000, height: 1200 });
    const pcAllow = add("pc", 120, 220, { name: "PC_Allow" });
    const pcBlock = add("pc", 120, 420, { name: "PC_Block" });
    const sw = add("switch", 390, 320, { name: "Access_SW", protocols: { ...defaultProtocols("switch"), VLAN: true } });
    const ar = add("router", 760, 320, { name: "AR_ACL", protocols: { ...defaultProtocols("router"), ACL: true, Static: true } });
    const server = add("server", 1180, 320, { name: "Web_Server" });
    setIp(pcAllow, "Ethernet0/0/1", "192.168.10.10", "24"); pcAllow.gateway = "192.168.10.1";
    setIp(pcBlock, "Ethernet0/0/1", "192.168.10.20", "24"); pcBlock.gateway = "192.168.10.1";
    setIp(ar, "GE0/0/0", "192.168.10.1", "24"); setIp(ar, "GE0/0/1", "10.10.10.1", "24");
    setIp(server, "Ethernet0/0/1", "10.10.10.10", "24"); server.gateway = "10.10.10.1";
    ensureServerServices(server).http.enabled = true; server.protocols.HTTP = true;
    ar.notes = "ACL 3000 样板：允许 192.168.10.10 访问服务器，拒绝 192.168.10.20。可在 AR_ACL 上继续补充 acl/traffic-filter。";
    ar.aclRules = ["rule permit ip source 192.168.10.10 0 destination 10.10.10.10 0", "rule deny ip source 192.168.10.20 0 destination 10.10.10.10 0"];
    ensureAclStore(ar);
    findInterfaceByName(ar, "GE0/0/1").trafficFilters = { outbound: "3000" };
    addLink(pcAllow.id, sw.id, { cable: "Copper" }); addLink(pcBlock.id, sw.id, { cable: "Copper" });
    addLink(sw.id, ar.id, { aPort: "GE0/0/1", bPort: "GE0/0/0", cable: "Copper" });
    addLink(ar.id, server.id, { aPort: "GE0/0/1", bPort: "Ethernet0/0/1", cable: "Copper" });
  }
  if (name === "lab-trunk-stick") {
    state.project.name = "Trunk和单臂路由实验.lab";
    state.stage = normalizeStageSize({ width: 1900, height: 1200 });
    const pc10 = add("pc", 120, 210, { name: "PC_VLAN10" });
    const pc20 = add("pc", 120, 430, { name: "PC_VLAN20" });
    const sw = add("switch", 480, 320, { name: "S5700", protocols: { ...defaultProtocols("switch"), VLAN: true, STP: true } });
    const ar = add("router", 860, 320, { name: "AR_Stick", protocols: { ...defaultProtocols("router"), Static: true } });
    setIp(pc10, "Ethernet0/0/1", "192.168.10.10", "24"); pc10.gateway = "192.168.10.1";
    setIp(pc20, "Ethernet0/0/1", "192.168.20.10", "24"); pc20.gateway = "192.168.20.1";
    sw.vlans = ["10", "20"];
    findInterfaceByName(sw, "GE0/0/1").vlan = "10";
    findInterfaceByName(sw, "GE0/0/2").vlan = "20";
    Object.assign(findInterfaceByName(sw, "GE0/0/3"), { linkType: "trunk", trunkAllow: ["10", "20"] });
    setIp(ar, "GE0/0/0.10", "192.168.10.1", "24", { dot1q: "10" });
    setIp(ar, "GE0/0/0.20", "192.168.20.1", "24", { dot1q: "20" });
    sw.notes = "GE0/0/1 access VLAN10，GE0/0/2 access VLAN20，GE0/0/3 trunk allow-pass vlan 10 20。";
    ar.notes = "单臂路由子接口已预置：GE0/0/0.10 dot1q 10、GE0/0/0.20 dot1q 20。";
    addLink(pc10.id, sw.id, { aPort: "Ethernet0/0/1", bPort: "GE0/0/1", cable: "Copper" });
    addLink(pc20.id, sw.id, { aPort: "Ethernet0/0/1", bPort: "GE0/0/2", cable: "Copper" });
    addLink(sw.id, ar.id, { aPort: "GE0/0/3", bPort: "GE0/0/0", cable: "Copper" });
  }
  if (name === "lab-static") {
    state.project.name = "静态路由实验.lab";
    state.stage = normalizeStageSize({ width: 2100, height: 1200 });
    const pc1 = add("pc", 120, 320, { name: "PC_Left" });
    const r1 = add("router", 430, 320, { name: "AR_Left", protocols: { ...defaultProtocols("router"), Static: true } });
    const r2 = add("router", 860, 320, { name: "AR_Right", protocols: { ...defaultProtocols("router"), Static: true } });
    const pc2 = add("pc", 1230, 320, { name: "PC_Right" });
    setIp(pc1, "Ethernet0/0/1", "192.168.1.10", "24"); pc1.gateway = "192.168.1.1";
    setIp(pc2, "Ethernet0/0/1", "192.168.2.10", "24"); pc2.gateway = "192.168.2.1";
    setIp(r1, "GE0/0/0", "192.168.1.1", "24"); setIp(r1, "GE0/0/1", "10.0.0.1", "30");
    setIp(r2, "GE0/0/0", "10.0.0.2", "30"); setIp(r2, "GE0/0/1", "192.168.2.1", "24");
    addRoute(r1, "192.168.2.0", "255.255.255.0", "10.0.0.2");
    addRoute(r2, "192.168.1.0", "255.255.255.0", "10.0.0.1");
    r1.notes = "已配置到 192.168.2.0/24 的静态路由，验证 PC_Left ping PC_Right。";
    r2.notes = "已配置到 192.168.1.0/24 的静态路由，验证 PC_Right ping PC_Left。";
    addLink(pc1.id, r1.id, { cable: "Copper" }); addLink(r1.id, r2.id, { cable: "Copper" }); addLink(r2.id, pc2.id, { cable: "Copper" });
  }
  log("ok", "TEMPLATE", `加载 ${name} 拓扑模板`);
  renderAll();
}

function renderLabs() {
  $("labProgress").textContent = `${labTemplates.length}套`;
  $("labList").innerHTML = labTemplates.map((lab) => `
    <div class="lab-item">
      <strong>${lab.title}</strong>
      <span>${lab.desc}</span>
      <button data-lab-template="${lab.id}">加载</button>
    </div>`).join("");
  document.querySelectorAll("[data-lab-template]").forEach((btn) => {
    btn.addEventListener("click", () => loadTemplate(btn.dataset.labTemplate));
  });
}

function renderProtocols() {
  const names = ["VLAN", "STP", "OSPF", "RIP", "NAT", "ACL", "WLAN", "CAPWAP", "VRRP", "IPSec"];
  const enabled = new Set(enabledProtocols());
  $("protocolBadges").innerHTML = names.map((p) => `<span class="badge ${enabled.has(p) ? "enabled" : ""}">${p}</span>`).join("");
}

function renderIpAddressList() {
  const rows = state.nodes.flatMap((node) => node.interfaces
    .filter((iface) => iface.ip)
    .map((iface) => ({ node, iface })));
  const ipHtml = rows.length
    ? collapsedCardsHtml(rows, ipAddressRow, (count) => `展开其他 ${count} 个 IP`)
    : `<div class="ip-item"><span>暂无 IP 地址</span></div>`;
  const health = topologyHealthItems();
  $("ipAddressList").innerHTML = `${ipHtml}
    <div class="health-section">
      <div class="subsection-label">健康检查</div>
      <div class="health-list">${collapsedCardsHtml(health, healthRow, (count) => `展开其他 ${count} 项`)}</div>
    </div>`;
  document.querySelectorAll("[data-ip-node]").forEach((item) => {
    item.addEventListener("click", () => {
      state.selected = { kind: "node", id: item.dataset.ipNode };
      state.multiSelected = [];
      state.multiAnnotations = [];
      renderAll();
      centerNode(item.dataset.ipNode);
    });
  });
  bindHealthActions();
}

function bindHealthActions() {
  document.querySelectorAll("[data-health-node]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.selected = { kind: "node", id: btn.dataset.healthNode };
      state.multiSelected = [];
      state.multiAnnotations = [];
      centerNode(btn.dataset.healthNode);
      renderAll();
    });
  });
  document.querySelectorAll("[data-health-link]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.selected = { kind: "link", id: btn.dataset.healthLink };
      state.multiSelected = [];
      state.multiAnnotations = [];
      centerLink(btn.dataset.healthLink);
      renderAll();
    });
  });
}

function ipAddressRow({ node, iface }) {
  return `<div class="ip-item" data-ip-node="${node.id}">
    <strong><span>${escapeHtml(node.name)}</span><span>${escapeHtml(iface.ip)}</span></strong>
    <span>${escapeHtml(iface.name)} · ${escapeHtml(iface.mask || "mask -")} · ${escapeHtml(node.gateway ? `GW ${node.gateway}` : node.model)}</span>
  </div>`;
}

function renderPackets() {
  $("packetRows").innerHTML = state.packets.map((p) => {
    const result = `${p.result}${p.delay ? ` ${p.delay}ms` : ""}${p.reason ? ` - ${p.reason}` : ""}`;
    return `<tr data-packet-id="${p.id}"><td>${p.time}</td><td>${escapeHtml(p.source)}</td><td>${escapeHtml(p.dest)}</td><td>${escapeHtml(p.protocol)}</td><td>${escapeHtml(p.path || "-")}</td><td title="${escapeHtml(p.reason || "")}">${escapeHtml(result)}</td></tr>`;
  }).join("");
  document.querySelectorAll("[data-packet-id]").forEach((row) => {
    row.addEventListener("click", () => replayPacketPath(Number(row.dataset.packetId)));
  });
}

function replayPacketPath(packetId) {
  const packet = state.packets.find((item) => item.id === packetId);
  const path = packetPathIds(packet);
  if (path.length < 2) return toast("该报文没有可回放路径。");
  flashPath(path);
  centerPath(path);
}

function packetPathIds(packet) {
  if (Array.isArray(packet?.pathIds) && packet.pathIds.length) return packet.pathIds;
  return String(packet?.path || "")
    .split("->")
    .map((name) => state.nodes.find((node) => node.name === name.trim())?.id)
    .filter(Boolean);
}

function renderEvents() {
  $("eventLog").innerHTML = state.events.slice(0, 160).map((e) => `<div class="event"><span>${e.time}</span><span class="level-${e.level}">${e.source}</span><span>${escapeHtml(e.message)}</span></div>`).join("");
}

function addTerminal(text, cls = "") {
  const line = document.createElement("div");
  if (cls) line.className = cls;
  line.textContent = text;
  $("terminal").appendChild(line);
  $("terminal").scrollTop = $("terminal").scrollHeight;
}

function updatePrompt() {
  $("prompt").textContent = promptText();
}

function promptText() {
  const node = state.selected?.kind === "node" ? getNode(state.selected.id) : null;
  if (!node) return "<Lab>";
  if (state.cliMode === "interface") return `[${node.name}-${state.cliInterface}]`;
  if (state.cliMode === "vlan") return `[${node.name}-vlan${state.cliVlan}]`;
  if (state.cliMode === "ospf-area") return `[${node.name}-ospf-${state.cliOspf}-area-${state.cliArea}]`;
  if (state.cliMode === "ospf") return `[${node.name}-ospf-${state.cliOspf}]`;
  if (state.cliMode === "acl") return `[${node.name}-acl-${state.cliAcl}]`;
  if (state.cliMode === "ip-pool") return `[${node.name}-ip-pool-${state.cliPool}]`;
  if (state.cliMode === "aaa") return `[${node.name}-aaa]`;
  if (state.cliMode === "user-interface") return `[${node.name}-ui-${state.cliUserInterface}]`;
  if (state.cliMode === "system") return `[${node.name}]`;
  return `<${node.name}>`;
}

function setTab(name) {
  document.querySelectorAll(".tab").forEach((t) => t.classList.toggle("active", t.dataset.tab === name));
  document.querySelectorAll(".tab-panel").forEach((p) => p.classList.remove("active"));
  $(`${name}Tab`).classList.add("active");
}

function setTool(tool) {
  state.tool = tool;
  state.pendingLink = null;
  state.pendingPing = null;
  ["select", "link", "text", "delete"].forEach((name) => $(`${name}Tool`).classList.toggle("active", name === tool));
}

function setZoom(value) {
  state.zoom = clamp(Number(value.toFixed(2)), 0.5, 1.6);
  $("stage").style.transform = `scale(${state.zoom})`;
  $("zoomLabel").textContent = `${Math.round(state.zoom * 100)}%`;
  saveUiState();
}

function zoomAtViewportPoint(value, localX, localY) {
  const viewport = $("stageViewport");
  const oldZoom = state.zoom;
  const nextZoom = clamp(Number(value.toFixed(2)), 0.5, 1.6);
  if (nextZoom === oldZoom) return;
  const anchorX = (viewport.scrollLeft + localX) / oldZoom;
  const anchorY = (viewport.scrollTop + localY) / oldZoom;
  setZoom(nextZoom);
  viewport.scrollLeft = anchorX * state.zoom - localX;
  viewport.scrollTop = anchorY * state.zoom - localY;
  saveUiState();
}

function zoomAtViewportCenter(value) {
  const viewport = $("stageViewport");
  zoomAtViewportPoint(value, viewport.clientWidth / 2, viewport.clientHeight / 2);
}

function zoomWithWheel(event) {
  const mostlyVertical = Math.abs(event.deltaY) >= Math.abs(event.deltaX) * 1.35;
  const explicitZoom = event.ctrlKey || event.metaKey;
  if (!explicitZoom && (!mostlyVertical || event.shiftKey)) return;
  event.preventDefault();
  const viewport = $("stageViewport");
  const rect = viewport.getBoundingClientRect();
  const localX = event.clientX - rect.left;
  const localY = event.clientY - rect.top;
  const step = explicitZoom ? 0.06 : 0.08;
  zoomAtViewportPoint(state.zoom + (event.deltaY > 0 ? -step : step), localX, localY);
}

function startStagePan(event) {
  if (event.button !== 1) return;
  event.preventDefault();
  $("stageViewport").classList.add("panning");
  stagePan = {
    x: event.clientX,
    y: event.clientY,
    left: $("stageViewport").scrollLeft,
    top: $("stageViewport").scrollTop
  };
}

function onStagePan(event) {
  if (!stagePan) return;
  const viewport = $("stageViewport");
  viewport.scrollLeft = stagePan.left - (event.clientX - stagePan.x);
  viewport.scrollTop = stagePan.top - (event.clientY - stagePan.y);
}

function stopStagePan() {
  if (stagePan) saveUiState();
  stagePan = null;
  $("stageViewport").classList.remove("panning");
}

function startBottomPanelResize(event) {
  if (event.button !== 0) return;
  const panel = event.currentTarget;
  const rect = panel.getBoundingClientRect();
  if (event.clientY - rect.top > 8) return;
  event.preventDefault();
  const shell = document.querySelector(".app-shell");
  if (shell.classList.contains("bottom-collapsed")) {
    shell.classList.remove("bottom-collapsed");
    syncBottomPanelButton();
  }
  consoleResize = {
    y: event.clientY,
    height: rect.height
  };
  document.body.classList.add("panel-resizing");
}

function onBottomPanelResize(event) {
  if (!consoleResize) return;
  const max = Math.floor(window.innerHeight * 0.62);
  const next = clamp(consoleResize.height - (event.clientY - consoleResize.y), 130, max);
  document.documentElement.style.setProperty("--console-height", `${next}px`);
}

function stopBottomPanelResize() {
  if (!consoleResize) return;
  consoleResize = null;
  document.body.classList.remove("panel-resizing");
  saveUiState();
}

function togglePanel(side) {
  const workspace = document.querySelector(".workspace");
  const cls = side === "left" ? "left-collapsed" : "right-collapsed";
  workspace.classList.toggle(cls);
  $(side === "left" ? "toggleLeftPanel" : "toggleRightPanel").classList.toggle("active", workspace.classList.contains(cls));
  saveUiState();
}

function toggleBottomPanel() {
  const shell = document.querySelector(".app-shell");
  shell.classList.toggle("bottom-collapsed");
  syncBottomPanelButton();
  saveUiState();
}

function syncBottomPanelButton() {
  const collapsed = document.querySelector(".app-shell").classList.contains("bottom-collapsed");
  const btn = $("toggleBottomPanel");
  btn.textContent = collapsed ? "展开" : "收起";
  btn.classList.toggle("active", collapsed);
}

function saveUiState() {
  const workspace = document.querySelector(".workspace");
  const viewport = $("stageViewport");
  const shell = document.querySelector(".app-shell");
  const currentConsoleHeight = Number.parseInt(getComputedStyle(document.documentElement).getPropertyValue("--console-height"), 10) || 190;
  const consoleHeight = shell.classList.contains("bottom-collapsed")
    ? currentConsoleHeight
    : Math.round(document.querySelector(".bottom-console").getBoundingClientRect().height);
  localStorage.setItem(UI_STATE_KEY, JSON.stringify({
    consoleHeight,
    zoom: state.zoom,
    stageScrollLeft: viewport.scrollLeft,
    stageScrollTop: viewport.scrollTop,
    leftCollapsed: workspace.classList.contains("left-collapsed"),
    rightCollapsed: workspace.classList.contains("right-collapsed"),
    bottomCollapsed: shell.classList.contains("bottom-collapsed"),
    openWindows: collectOpenWindows()
  }));
}

function scheduleUiStateSave() {
  clearTimeout(uiStateTimer);
  uiStateTimer = setTimeout(saveUiState, 180);
}

function loadUiState() {
  try {
    const data = JSON.parse(localStorage.getItem(UI_STATE_KEY) || "{}");
    if (data.consoleHeight) {
      const max = Math.floor(window.innerHeight * 0.62);
      document.documentElement.style.setProperty("--console-height", `${clamp(Number(data.consoleHeight), 130, max)}px`);
    }
    if (data.zoom) {
      state.zoom = clamp(Number(data.zoom), 0.5, 1.6);
      $("stage").style.transform = `scale(${state.zoom})`;
      $("zoomLabel").textContent = `${Math.round(state.zoom * 100)}%`;
    }
    document.querySelector(".app-shell").classList.toggle("bottom-collapsed", Boolean(data.bottomCollapsed));
    syncBottomPanelButton();
    const workspace = document.querySelector(".workspace");
    workspace.classList.toggle("left-collapsed", Boolean(data.leftCollapsed));
    workspace.classList.toggle("right-collapsed", Boolean(data.rightCollapsed));
    $("toggleLeftPanel").classList.toggle("active", Boolean(data.leftCollapsed));
    $("toggleRightPanel").classList.toggle("active", Boolean(data.rightCollapsed));
    state.pendingOpenWindows = Array.isArray(data.openWindows) ? data.openWindows : [];
    if (Number.isFinite(data.stageScrollLeft) || Number.isFinite(data.stageScrollTop)) {
      requestAnimationFrame(() => {
        const viewport = $("stageViewport");
        viewport.scrollLeft = Number(data.stageScrollLeft) || 0;
        viewport.scrollTop = Number(data.stageScrollTop) || 0;
      });
    }
  } catch {
    localStorage.removeItem(UI_STATE_KEY);
  }
}

function collectOpenWindows() {
  return Array.from(document.querySelectorAll("[data-endpoint-window], [data-vrp-window]")).map((win) => ({
    kind: win.dataset.endpointWindow ? "endpoint" : "vrp",
    id: win.dataset.endpointWindow || win.dataset.vrpWindow,
    left: parseFloat(win.style.left) || win.getBoundingClientRect().left,
    top: parseFloat(win.style.top) || win.getBoundingClientRect().top
  }));
}

function restoreOpenWindows() {
  state.pendingOpenWindows.forEach((item) => {
    if (!getNode(item.id)) return;
    item.kind === "endpoint" ? openEndpointWindow(item.id) : openNetworkDeviceWindow(item.id);
    const selector = item.kind === "endpoint" ? `[data-endpoint-window="${item.id}"]` : `[data-vrp-window="${item.id}"]`;
    const win = document.querySelector(selector);
    if (win) {
      win.style.left = `${clamp(Number(item.left) || 160, 0, window.innerWidth - 120)}px`;
      win.style.top = `${clamp(Number(item.top) || 120, 0, window.innerHeight - 80)}px`;
    }
  });
  saveUiState();
}

function syncOpenWindows() {
  document.querySelectorAll("[data-endpoint-window], [data-vrp-window]").forEach((win) => {
    const id = win.dataset.endpointWindow || win.dataset.vrpWindow;
    const node = getNode(id);
    if (!node) {
      win.remove();
      return;
    }
    const title = win.querySelector(".window-titlebar strong");
    if (title) {
      title.textContent = win.dataset.endpointWindow ? `${node.name} - ${node.model} 配置` : `${node.name} - VRP Console`;
    }
    const activeTab = win.querySelector("[data-window-tab].active")?.dataset.windowTab;
    if (!node.running && win.dataset.vrpWindow && activeTab === "console") activateWindowTab(win, "summary");
    if (!node.running && win.dataset.endpointWindow && ["cmd", "client"].includes(activeTab)) activateWindowTab(win, "config");
  });
}

function activateWindowTab(win, tabName) {
  win.querySelectorAll("[data-window-tab]").forEach((tab) => tab.classList.toggle("active", tab.dataset.windowTab === tabName));
  win.querySelectorAll("[data-window-panel]").forEach((panel) => (panel.hidden = panel.dataset.windowPanel !== tabName));
}

function closeNodeWindows(id) {
  document.querySelector(`[data-endpoint-window="${id}"]`)?.remove();
  document.querySelector(`[data-vrp-window="${id}"]`)?.remove();
  saveUiState();
}

function handleGlobalHotkeys(event) {
  const tag = event.target?.tagName?.toLowerCase();
  const editable = tag === "input" || tag === "textarea" || event.target?.isContentEditable;
  if (!editable && (event.key === "Delete" || event.key === "Backspace")) {
    event.preventDefault();
    deleteSelection();
    return;
  }
  if (!editable && event.key === "Escape") {
    event.preventDefault();
    cancelCurrentAction();
    return;
  }
  if (!(event.ctrlKey || event.metaKey)) return;
  if (editable) return;
  const key = event.key.toLowerCase();
  if (key === "a") {
    event.preventDefault();
    selectAllDevices();
  }
  if (key === "c") {
    event.preventDefault();
    copySelection();
  }
  if (key === "v") {
    event.preventDefault();
    pasteSelection();
  }
  if (key === "z") {
    event.preventDefault();
    event.shiftKey ? redoTopology() : undoTopology();
  }
  if (key === "y") {
    event.preventDefault();
    redoTopology();
  }
  if (key === "s") {
    event.preventDefault();
    saveProject();
  }
  if (key === "+" || key === "=") {
    event.preventDefault();
    zoomAtViewportCenter(state.zoom + 0.1);
  }
  if (key === "-" || key === "_") {
    event.preventDefault();
    zoomAtViewportCenter(state.zoom - 0.1);
  }
  if (key === "0") {
    event.preventDefault();
    fitStage();
  }
}

function selectedNodeIds() {
  if (state.multiSelected.length) return [...state.multiSelected];
  if (state.selected?.kind === "node") return [state.selected.id];
  return [];
}

function selectedItemCount() {
  return state.multiSelected.length + state.multiAnnotations.length;
}

function normalizeMultiSelection() {
  const total = selectedItemCount();
  if (total === 1) {
    state.selected = state.multiSelected.length
      ? { kind: "node", id: state.multiSelected[0] }
      : { kind: "annotation", id: state.multiAnnotations[0] };
    state.multiSelected = [];
    state.multiAnnotations = [];
  } else {
    state.selected = null;
  }
}

function copySelection() {
  const ids = new Set(selectedNodeIds());
  if (!ids.size) return toast("请选择要复制的设备。");
  state.clipboard = {
    nodes: state.nodes.filter((node) => ids.has(node.id)).map((node) => JSON.parse(JSON.stringify(node))),
    links: state.links.filter((link) => ids.has(link.a) && ids.has(link.b)).map((link) => JSON.parse(JSON.stringify(link)))
  };
  toast(`已复制 ${state.clipboard.nodes.length} 台设备。`);
}

function pasteSelection() {
  if (!state.clipboard?.nodes?.length) return toast("剪贴板为空。");
  const idMap = new Map();
  const pastedIds = [];
  state.clipboard.nodes.forEach((node) => {
    const clone = JSON.parse(JSON.stringify(node));
    clone.id = `n${state.counters.node++}`;
    clone.name = uniqueNodeName(`${node.name}_copy`);
    clone.x = clamp(node.x + 80, 16, maxNodeX());
    clone.y = clamp(node.y + 80, 16, maxNodeY());
    idMap.set(node.id, clone.id);
    pastedIds.push(clone.id);
    state.nodes.push(clone);
  });
  state.clipboard.links.forEach((link) => {
    if (!idMap.has(link.a) || !idMap.has(link.b)) return;
    const clone = JSON.parse(JSON.stringify(link));
    clone.id = `l${state.counters.link++}`;
    clone.a = idMap.get(link.a);
    clone.b = idMap.get(link.b);
    state.links.push(clone);
  });
  state.selected = null;
  state.multiSelected = pastedIds;
  state.multiAnnotations = [];
  log("info", "HOTKEY", `粘贴 ${pastedIds.length} 台设备`);
  renderAll();
}

function selectAllDevices() {
  state.selected = null;
  state.multiSelected = state.nodes.map((node) => node.id);
  state.multiAnnotations = [];
  renderAll();
  toast(`已选择 ${state.multiSelected.length} 台设备。`);
}

function deleteSelection() {
  if (state.multiSelected.length || state.multiAnnotations.length) {
    bulkDelete();
    return;
  }
  if (state.selected?.kind === "node") {
    deleteNode(state.selected.id);
    return;
  }
  if (state.selected?.kind === "link") {
    deleteLink(state.selected.id);
    return;
  }
  if (state.selected?.kind === "annotation") {
    deleteAnnotation(state.selected.id);
    return;
  }
}

function cancelCurrentAction() {
  document.querySelector(".link-dialog")?.remove();
  state.pendingLink = null;
  state.pendingPing = null;
  state.selected = null;
  state.multiSelected = [];
  state.multiAnnotations = [];
  setTool("select");
  renderAll();
}

function undoTopology() {
  if (state.history.length < 2) return toast("没有可撤销的操作。");
  state.redoHistory.push(state.history.pop());
  const previous = JSON.parse(state.history[state.history.length - 1]);
  state.historyRestoring = true;
  hydrate(previous);
  state.historyRestoring = false;
  state.lastHistoryJson = JSON.stringify(serialize());
  toast("已撤销上一步。");
}

function redoTopology() {
  if (!state.redoHistory.length) return toast("没有可重做的操作。");
  const nextJson = state.redoHistory.pop();
  state.history.push(nextJson);
  state.historyRestoring = true;
  hydrate(JSON.parse(nextJson));
  state.historyRestoring = false;
  state.lastHistoryJson = JSON.stringify(serialize());
  toast("已重做。");
}

function recordHistory() {
  if (state.historyRestoring) return;
  const json = JSON.stringify(serialize());
  if (json === state.lastHistoryJson) return;
  state.history.push(json);
  if (state.history.length > 80) state.history.shift();
  state.redoHistory = [];
  state.lastHistoryJson = json;
}

function uniqueNodeName(base) {
  let name = base;
  let index = 2;
  while (state.nodes.some((node) => node.name === name)) {
    name = `${base}${index++}`;
  }
  return name;
}

function fitStage() {
  const viewport = $("stageViewport");
  const next = Math.min(viewport.clientWidth / state.stage.width, viewport.clientHeight / state.stage.height) * 0.94;
  setZoom(clamp(next, 0.5, 1.6));
  $("stageViewport").scrollTo({ left: 0, top: 0, behavior: "smooth" });
}

function centerNode(id) {
  const node = getNode(id);
  if (!node) return;
  const viewport = $("stageViewport");
  viewport.scrollTo({
    left: Math.max(0, (node.x + 48) * state.zoom - viewport.clientWidth / 2),
    top: Math.max(0, (node.y + 37) * state.zoom - viewport.clientHeight / 2),
    behavior: "smooth"
  });
}

function centerLink(id) {
  const link = getLink(id);
  const a = link ? getNode(link.a) : null;
  const b = link ? getNode(link.b) : null;
  if (!a || !b) return;
  const viewport = $("stageViewport");
  const x = (a.x + b.x) / 2 + 48;
  const y = (a.y + b.y) / 2 + 37;
  viewport.scrollTo({
    left: Math.max(0, x * state.zoom - viewport.clientWidth / 2),
    top: Math.max(0, y * state.zoom - viewport.clientHeight / 2),
    behavior: "smooth"
  });
}

function centerPath(path = []) {
  const nodes = path.map(getNode).filter(Boolean);
  if (!nodes.length) return;
  const viewport = $("stageViewport");
  const x = nodes.reduce((sum, node) => sum + node.x + 48, 0) / nodes.length;
  const y = nodes.reduce((sum, node) => sum + node.y + 37, 0) / nodes.length;
  viewport.scrollTo({
    left: Math.max(0, x * state.zoom - viewport.clientWidth / 2),
    top: Math.max(0, y * state.zoom - viewport.clientHeight / 2),
    behavior: "smooth"
  });
}

function updateMeters() {
  const running = state.nodes.filter((n) => n.running);
  const cpu = clamp(Math.round(running.reduce((s, n) => s + deviceInfo(n.type).cpu, 0) + Math.random() * 6), 0, 100);
  const mem = clamp(Math.round(running.reduce((s, n) => s + deviceInfo(n.type).mem, 0) + Math.random() * 4), 0, 100);
  const link = state.links.length ? Math.round((state.links.filter((l) => linkEffectiveStatus(l) === "up").length / state.links.length) * 100) : 0;
  $("cpuMeter").value = cpu; $("cpuText").textContent = `${cpu}%`;
  $("memMeter").value = mem; $("memText").textContent = `${mem}%`;
  $("linkMeter").value = link; $("linkText").textContent = `${link}%`;
}

function saveProject() {
  state.project.name = $("projectNameInput")?.value?.trim() || state.project.name || "Untitled.lab";
  state.project.id = state.project.id || slugId(state.project.name);
  state.project.updatedAt = new Date().toISOString();
  const data = serialize();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  const projects = savedProjects().filter((p) => p.id !== state.project.id);
  projects.unshift({
    id: state.project.id,
    name: state.project.name,
    createdAt: state.project.createdAt,
    updatedAt: state.project.updatedAt,
    data
  });
  localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects.slice(0, 24)));
  updateProjectTitle("Saved");
  toast("项目已持久化保存。");
  log("ok", "SAVE", `Project saved: ${state.project.name}`);
  renderInspector();
}

function saveProjectCopy() {
  state.project.name = $("projectNameInput")?.value?.trim() || `${state.project.name || "Untitled"}.copy`;
  state.project.id = slugId(state.project.name);
  state.project.createdAt = new Date().toISOString();
  saveProject();
}

function loadSaved() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY) || localStorage.getItem(LEGACY_STORAGE_KEY);
    if (!raw) return false;
    hydrate(JSON.parse(raw));
    log("ok", "SAVE", "已恢复上次保存的项目");
    return true;
  } catch {
    return false;
  }
}

function scheduleAutosave(immediate = false) {
  clearTimeout(persistTimer);
  persistTimer = setTimeout(() => {
    try {
      state.project.updatedAt = new Date().toISOString();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(serialize()));
      updateProjectTitle("Auto-saved");
    } catch {
      updateProjectTitle("Save failed");
    }
  }, immediate ? 0 : 650);
}

function savedProjects() {
  try {
    return JSON.parse(localStorage.getItem(PROJECTS_KEY) || "[]");
  } catch {
    return [];
  }
}

function loadSelectedProject() {
  const id = $("projectSelect")?.value;
  if (!id) return toast("请先选择一个历史项目。");
  const project = savedProjects().find((p) => p.id === id);
  if (!project) return toast("没有找到该项目。");
  hydrate(project.data);
  log("ok", "LOAD", `Loaded project: ${project.name}`);
  toast(`已加载 ${project.name}`);
}

function deleteSelectedProject() {
  const id = $("projectSelect")?.value;
  if (!id) return toast("请先选择一个历史项目。");
  const projects = savedProjects().filter((p) => p.id !== id);
  localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects));
  toast("历史项目已删除。");
  renderInspector();
}

function updateProjectTitle(status = "") {
  $("projectName").textContent = state.project.name;
  const badge = $("autoSaveBadge");
  if (badge) {
    badge.textContent = status ? `${status} ${new Date(state.project.updatedAt || Date.now()).toLocaleTimeString()}` : "Auto-Save";
  }
}

async function loadClientIp() {
  const badge = $("currentIpBadge");
  if (!badge) return;

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 3000);

    // 尝试多个 IP 检测 API，提高成功率
    const apis = [
      "https://api.ipify.org?format=json",
      "https://api64.ipify.org?format=json",
      "https://ipapi.co/json/",
      "https://api.ip.sb/ip"
    ];

    let success = false;

    for (const api of apis) {
      if (success) break;

      try {
        const response = await fetch(api, {
          signal: controller.signal,
          mode: 'cors',
          cache: 'no-cache'
        });

        if (response.ok) {
          const contentType = response.headers.get('content-type');

          if (contentType && contentType.includes('application/json')) {
            const data = await response.json();
            const ip = data.ip || data.query || data;

            if (ip && typeof ip === 'string' && /^\d+\.\d+\.\d+\.\d+$/.test(ip)) {
              badge.textContent = `IP ADDRESS: ${ip}`;
              success = true;
              break;
            }
          } else {
            // 纯文本响应
            const text = await response.text();
            const ip = text.trim();

            if (/^\d+\.\d+\.\d+\.\d+$/.test(ip)) {
              badge.textContent = `IP ADDRESS: ${ip}`;
              success = true;
              break;
            }
          }
        }
      } catch (err) {
        // 继续尝试下一个 API
        continue;
      }
    }

    clearTimeout(timer);

    if (!success) {
      badge.textContent = "IP ADDRESS: Local / Offline";
    }

  } catch (error) {
    badge.textContent = "IP ADDRESS: Local / Offline";
    if (window.DEBUG) {
      console.warn('IP detection failed:', error);
    }
  }
}

function exportProject() {
  state.project.updatedAt = new Date().toISOString();
  const blob = new Blob([JSON.stringify(serialize(), null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "ensp-web-lab.json";
  a.click();
  URL.revokeObjectURL(a.href);
  log("ok", "EXPORT", "导出 JSON 项目");
}

async function exportEnsPFolder() {
  if (!("showDirectoryPicker" in window)) {
    toast("当前浏览器不支持直接写入文件夹，请使用 Chrome/Edge 并通过 localhost 打开。");
    return;
  }
  try {
    const baseName = safeFileName(cleanFileName(state.project.name || "123456")) || "123456";
    const root = await window.showDirectoryPicker({ mode: "readwrite" });
    const projectDir = root.name === baseName ? root : await root.getDirectoryHandle(baseName, { create: true });
    await clearDirectoryHandle(projectDir);
    const idMap = ensureEnsPExportIds();
    scheduleAutosave(true);
    await writeTextFile(projectDir, `${baseName}.topo`, buildEnsPTopoXml(baseName, idMap));
    for (const node of state.nodes) {
      const dir = await projectDir.getDirectoryHandle(idMap.get(node.id), { create: true });
      if (["pc", "client", "server"].includes(node.type)) {
        await writeTextFile(dir, "PC.xml", buildPcXml(node));
      } else {
        await writeBlobFile(dir, "vrpcfg.zip", createStoredZip([{ name: "vrpcfg.cfg", content: buildConfig(node) }]));
      }
    }
    toast(`已导出工程文件夹：${baseName}`);
    log("ok", "EXPORT", `导出 eNSP 工程文件夹 ${baseName}`);
  } catch (error) {
    if (error?.name !== "AbortError") toast(`导出工程失败：${error.message || error}`);
  }
}

async function writeTextFile(dirHandle, fileName, text) {
  return writeBlobFile(dirHandle, fileName, new Blob([text], { type: "text/plain;charset=utf-8" }));
}

async function clearDirectoryHandle(dirHandle) {
  if (!dirHandle.keys || !dirHandle.removeEntry) return;
  for await (const name of dirHandle.keys()) {
    await dirHandle.removeEntry(name, { recursive: true });
  }
}

async function writeBlobFile(dirHandle, fileName, blob) {
  const fileHandle = await dirHandle.getFileHandle(fileName, { create: true });
  const writable = await fileHandle.createWritable();
  await writable.write(blob);
  await writable.close();
}

function ensureEnsPExportIds() {
  const used = new Set();
  state.nodes.forEach((node) => {
    if (!isEnsPGuid(node.enspId) || used.has(node.enspId)) node.enspId = createEnsPGuid();
    used.add(node.enspId);
  });
  return new Map(state.nodes.map((node) => [node.id, node.enspId]));
}

function buildEnsPTopoXml(projectName, idMap = new Map()) {
  let consolePort = 2000;
  const devs = state.nodes.map((node) => {
    const iface = node.interfaces.find((item) => item.ip) || {};
    const exportId = idMap.get(node.id) || node.id;
    const mac = node.mac || node.systemMac || fakeMac(node.id);
    const settings = ensPDeviceSettings(node, iface, mac);
    const slots = ensPDeviceSlots(node);
    const comPort = isEndpointNode(node) ? "0" : String(consolePort++);
    return `        <dev id="${escapeXml(exportId)}" name="${escapeXml(node.name)}" poe="0" model="${escapeXml(node.model)}" settings="${escapeXml(settings)}" system_mac="${escapeXml(mac)}" com_port="${comPort}" bootmode="0" cx="${Number(node.x).toFixed(6)}" cy="${Number(node.y).toFixed(6)}" edit_left="${Math.round(Number(node.x) + 27)}" edit_top="${Math.round(Number(node.y) + 54)}">\n${slots}\n        </dev>`;
  }).join("\n");
  const lines = state.links.map((link) => {
    const a = getNode(link.a);
    const b = getNode(link.b);
    const ap = nodeAnchorPoint(a, b);
    const bp = nodeAnchorPoint(b, a);
    return `        <line srcDeviceID="${escapeXml(idMap.get(link.a) || link.a)}" destDeviceID="${escapeXml(idMap.get(link.b) || link.b)}">\n            <interfacePair lineName="${escapeXml(normalizeCableName(link.cable))}" srcIndex="${enspPortIndex(a, link.aPort)}" srcBoundRectIsMoved="0" srcBoundRect_X="${ap.x.toFixed(6)}" srcBoundRect_Y="${ap.y.toFixed(6)}" srcOffset_X="0.000000" srcOffset_Y="0.000000" tarIndex="${enspPortIndex(b, link.bPort)}" tarBoundRectIsMoved="0" tarBoundRect_X="${bp.x.toFixed(6)}" tarBoundRect_Y="${bp.y.toFixed(6)}" tarOffset_X="0.000000" tarOffset_Y="0.000000" />\n        </line>`;
  }).join("\n");
  const tips = state.annotations.map((note) => {
    const left = Math.round(note.x);
    const top = Math.round(note.y);
    const right = left + Math.max(70, String(note.text || "").length * 8);
    const bottom = top + 17;
    return `        <txttip left="${left}" top="${top}" right="${right}" bottom="${bottom}" content="${escapeXml(note.text)}" fontname="Consolas" fontstyle="0" editsize="100" txtcolor="-16777216" txtbkcolor="-7278960" charset="1" />`;
  }).join("\n");
  return `<?xml version="1.0" encoding="UNICODE" ?>\n<topo version="1.3.00.100">\n    <devices>\n${devs}\n    </devices>\n    <lines>\n${lines}\n    </lines>\n    <shapes />\n    <txttips>\n${tips}\n    </txttips>\n</topo>\n`;
}

function isEnsPGuid(value) {
  return /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i.test(String(value || ""));
}

function isEndpointNode(node) {
  return ["pc", "client", "server"].includes(node?.type);
}

function ensPDeviceSettings(node, iface, mac) {
  if (!isEndpointNode(node)) return "";
  const ip = iface.ip || "0.0.0.0";
  const mask = maskToDotted(iface.mask || "0");
  const gateway = node.gateway || "0.0.0.0";
  const dns = node.dns || "0.0.0.0";
  return [
    "-domain 0",
    `-eth ${mac}`,
    `-ipaddr ${ip}`,
    `-ipmask ${mask}`,
    `-gateway ${gateway}`,
    "-ipv6addr 2000::2",
    "-ipv6gateway 2000::1",
    "-prefixlen 64",
    `-ipv4dns ${dns}`,
    "-ipv6dns 3000::1",
    "-dnslist NULL"
  ].join(" ");
}

function ensPDeviceSlots(node) {
  const ports = node.interfaces?.length ? node.interfaces : [{ name: "Ethernet0/0/1" }];
  const grouped = new Map();
  ports.forEach((port) => {
    const display = ensPInterfaceDisplayName(node, port.name);
    grouped.set(display, (grouped.get(display) || 0) + 1);
  });
  const interfaces = Array.from(grouped.entries()).map(([name, count]) => `                <interface sztype="Ethernet" interfacename="${escapeXml(name)}" count="${count}" />`).join("\n");
  return `            <slot number="slot17" isMainBoard="1">\n${interfaces}\n            </slot>`;
}

function ensPInterfaceDisplayName(node, portName) {
  if (isEndpointNode(node)) return "Ethernet";
  const text = String(portName || "");
  if (/^10GE/i.test(text)) return "10GE";
  if (/^GE|GigabitEthernet/i.test(text)) return "GE";
  if (/^Serial/i.test(text)) return "Serial";
  if (/^Eth|Ethernet/i.test(text)) return "Ethernet";
  if (/^WLAN|Wlan/i.test(text)) return "WLAN";
  return text.replace(/[0-9/.-]+$/g, "") || "GE";
}

function nodeAnchorPoint(node, other) {
  if (!node) return { x: 0, y: 0 };
  const cx = Number(node.x) + 48;
  const cy = Number(node.y) + 37;
  if (!other) return { x: cx, y: cy };
  const ox = Number(other.x) + 48;
  const oy = Number(other.y) + 37;
  const angle = Math.atan2(oy - cy, ox - cx);
  return { x: cx + Math.cos(angle) * 44, y: cy + Math.sin(angle) * 36 };
}

function normalizeCableName(cable) {
  const text = String(cable || "Copper").toLowerCase();
  if (text.includes("serial")) return "Serial";
  if (text.includes("fiber") || text.includes("optical")) return "Fiber";
  return "Copper";
}

function createEnsPGuid() {
  const uuid = globalThis.crypto?.randomUUID ? globalThis.crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (ch) => {
    const value = Math.random() * 16 | 0;
    return (ch === "x" ? value : (value & 0x3) | 0x8).toString(16);
  });
  const parts = uuid.split("-");
  if (parts.length !== 5) return uuid;
  return [parts[0], parts[1], parts[2].toLowerCase(), parts[3], parts[4]].map((part, index) => index === 2 ? part : part.toUpperCase()).join("-");
}

function createStoredZip(files) {
  const encoder = new TextEncoder();
  const localParts = [];
  const centralParts = [];
  let offset = 0;
  files.forEach((file) => {
    const nameBytes = encoder.encode(file.name);
    const data = typeof file.content === "string" ? encoder.encode(file.content) : file.content;
    const crc = crc32(data);
    const local = new Uint8Array(30 + nameBytes.length);
    const localView = new DataView(local.buffer);
    localView.setUint32(0, 0x04034b50, true);
    localView.setUint16(4, 20, true);
    localView.setUint16(6, 0x0800, true);
    localView.setUint16(8, 0, true);
    localView.setUint32(14, crc, true);
    localView.setUint32(18, data.length, true);
    localView.setUint32(22, data.length, true);
    localView.setUint16(26, nameBytes.length, true);
    local.set(nameBytes, 30);
    const central = new Uint8Array(46 + nameBytes.length);
    const centralView = new DataView(central.buffer);
    centralView.setUint32(0, 0x02014b50, true);
    centralView.setUint16(4, 20, true);
    centralView.setUint16(6, 20, true);
    centralView.setUint16(8, 0x0800, true);
    centralView.setUint16(10, 0, true);
    centralView.setUint32(16, crc, true);
    centralView.setUint32(20, data.length, true);
    centralView.setUint32(24, data.length, true);
    centralView.setUint16(28, nameBytes.length, true);
    centralView.setUint32(42, offset, true);
    central.set(nameBytes, 46);
    localParts.push(local, data);
    centralParts.push(central);
    offset += local.length + data.length;
  });
  const centralSize = centralParts.reduce((sum, part) => sum + part.length, 0);
  const end = new Uint8Array(22);
  const endView = new DataView(end.buffer);
  endView.setUint32(0, 0x06054b50, true);
  endView.setUint16(8, files.length, true);
  endView.setUint16(10, files.length, true);
  endView.setUint32(12, centralSize, true);
  endView.setUint32(16, offset, true);
  return new Blob([...localParts, ...centralParts, end], { type: "application/zip" });
}

function crc32(bytes) {
  let crc = 0xffffffff;
  for (let index = 0; index < bytes.length; index += 1) {
    crc = (crc >>> 8) ^ crc32Table()[(crc ^ bytes[index]) & 0xff];
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function crc32Table() {
  if (crc32Table.cache) return crc32Table.cache;
  crc32Table.cache = Array.from({ length: 256 }, (_, index) => {
    let value = index;
    for (let bit = 0; bit < 8; bit += 1) value = value & 1 ? 0xedb88320 ^ (value >>> 1) : value >>> 1;
    return value >>> 0;
  });
  return crc32Table.cache;
}

function buildPcXml(node) {
  const iface = node.interfaces[0] || {};
  const mac = node.mac || node.systemMac || fakeMac(node.id);
  return `<?xml version="1.0" ?>\n<PC>\n  <FrameCfg>\n    <NetCardNode>\n      <domain>0</domain>\n      <eth>${escapeXml(mac)}</eth>\n      <ipaddr>${escapeXml(iface.ip || "0.0.0.0")}</ipaddr>\n      <ipmask>${escapeXml(maskToDotted(iface.mask || "0"))}</ipmask>\n      <gateway>${escapeXml(node.gateway || "0.0.0.0")}</gateway>\n      <ipv6addr>2000::2</ipv6addr>\n      <ipv6gateway>2000::1</ipv6gateway>\n      <ipv4dns>${escapeXml(node.dns || "0.0.0.0")}</ipv4dns>\n      <ipv6dns>3000::1</ipv6dns>\n    </NetCardNode>\n    <Ping>\n      <pingipv4>0.0.0.0</pingipv4>\n      <pingipv6>2000::1</pingipv6>\n      <pingtimes>0</pingtimes>\n    </Ping>\n  </FrameCfg>\n</PC>\n`;
}

function enspPortIndex(node, portName) {
  if (isEndpointNode(node)) return "0";
  const match = String(portName || "").match(/(\d+)$/);
  return match ? match[1] : "0";
}

function maskToDotted(mask) {
  const text = String(mask || "");
  if (text.includes(".")) return text;
  const prefix = Number(text);
  if (!Number.isFinite(prefix)) return text;
  const bits = "1".repeat(clamp(prefix, 0, 32)).padEnd(32, "0");
  return bits.match(/.{8}/g).map((chunk) => parseInt(chunk, 2)).join(".");
}

function safeFileName(name) {
  return String(name || "123456").replace(/[<>:"/\\|?*\x00-\x1f]/g, "_").replace(/\s+/g, "_").slice(0, 80);
}

function escapeXml(text) {
  return String(text ?? "").replace(/[<>&"']/g, (ch) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&apos;" })[ch]);
}

async function importProject(event) {
  const file = event.target.files[0];
  event.target.value = "";
  if (!file) return;
  try {
    if (file.name.toLowerCase().endsWith(".zip")) {
      await importEnsPZip(file);
      return;
    }
    const imported = parseImportedTopology(await readFileTextSmart(file), file.name);
    if (imported.mode === "native") {
      hydrate(imported.data);
    } else if (imported.mode === "config-bundle") {
      applyConfigBundle(imported);
    } else {
      applyImportedTopology(imported, file.name);
    }
    log("ok", "IMPORT", `导入 ${file.name}`);
    renderAll();
  } catch {
    toast("导入失败：文件结构无法识别。");
  }
}

async function importEnsPZip(file) {
  const entries = await readZipEntries(file);
  const topoEntry = entries.find((entry) => entry.name.toLowerCase().endsWith(".topo"));
  if (!topoEntry) {
    toast("压缩包中没有找到 .topo 文件。");
    return;
  }
  const imported = parseImportedTopology(decodeSmartText(topoEntry.data), topoEntry.name);
  const idMap = applyImportedTopology(imported, topoEntry.name);
  const configCounts = await applyEnsPZipConfigs(entries, idMap);
  log("ok", "IMPORT", `eNSP ZIP 工程已导入：${file.name}`);
  toast(`ZIP 工程导入完成：${state.nodes.length} 台设备，${state.links.length} 条链路，${configCounts.pc} 份终端配置，${configCounts.vrp} 份 VRP 配置。`);
  renderAll();
}

async function applyEnsPZipConfigs(entries, idMap) {
  const counts = { pc: 0, vrp: 0 };
  for (const entry of entries) {
    const lower = entry.name.toLowerCase();
    const deviceId = parentFolderNameFromPath(entry.name);
    const node = getNode(idMap.get(deviceId));
    if (!node) continue;
    if (lower.endsWith("/pc.xml") || lower.endsWith("\\pc.xml") || lower.endsWith("pc.xml")) {
      const pc = parsePcXml(decodeSmartText(entry.data));
      applyPcConfig(node, pc);
      counts.pc += 1;
    }
    if (lower.endsWith("/vrpcfg.zip") || lower.endsWith("\\vrpcfg.zip") || lower.endsWith("vrpcfg.zip")) {
      const cfg = await readZipEntryTextFromBytes(entry.data, "vrpcfg.cfg");
      if (cfg) {
        applyVrpConfig(node, cfg);
        counts.vrp += 1;
      }
    }
    if (lower.endsWith("/vrpcfg.cfg") || lower.endsWith("\\vrpcfg.cfg") || lower.endsWith("vrpcfg.cfg")) {
      applyVrpConfig(node, decodeSmartText(entry.data));
      counts.vrp += 1;
    }
  }
  return counts;
}

async function importEnsPFolder(event) {
  const files = Array.from(event.target.files || []);
  event.target.value = "";
  if (!files.length) return;
  try {
    const topoFile = files.find((file) => file.name.toLowerCase().endsWith(".topo"));
    if (!topoFile) {
      toast("没有找到 .topo 文件。请选择 eNSP 工程根目录。");
      return;
    }
    const topoText = await readFileTextSmart(topoFile);
    const imported = parseImportedTopology(topoText, topoFile.name);
    const idMap = applyImportedTopology(imported, topoFile.name);
    const configCounts = await applyEnsPDeviceConfigs(files, idMap);
    log("ok", "IMPORT", `eNSP 工程已导入：${topoFile.name}`);
    toast(`eNSP 工程导入完成：${state.nodes.length} 台设备，${state.links.length} 条链路，${configCounts.pc} 份终端配置，${configCounts.vrp} 份 VRP 配置。`);
    renderAll();
  } catch (error) {
    console.error(error);
    toast("eNSP 工程导入失败，请检查文件夹结构。");
  }
}

async function applyEnsPDeviceConfigs(files, idMap) {
  const counts = { pc: 0, vrp: 0 };
  for (const file of files) {
    const deviceId = parentFolderName(file);
    const node = getNode(idMap.get(deviceId));
    if (!node) continue;
    if (file.name.toLowerCase() === "pc.xml") {
      applyPcConfig(node, parsePcXml(await readFileTextSmart(file)));
      counts.pc += 1;
    }
    if (file.name.toLowerCase() === "vrpcfg.zip") {
      const cfg = await readZipEntryText(file, "vrpcfg.cfg");
      if (cfg) {
        applyVrpConfig(node, cfg);
        counts.vrp += 1;
      }
    }
    if (file.name.toLowerCase() === "vrpcfg.cfg") {
      applyVrpConfig(node, await readFileTextSmart(file));
      counts.vrp += 1;
    }
  }
  return counts;
}

function applyPcConfig(node, pc) {
  if (pc.ipaddr) {
    node.interfaces[0].ip = pc.ipaddr;
    node.interfaces[0].mask = pc.ipmask || "";
  }
  node.gateway = pc.gateway || node.gateway || "";
  node.mac = pc.eth || node.mac || "";
  node.dns = pc.ipv4dns || node.dns || "";
  node.notes = [node.gateway ? `Gateway: ${node.gateway}` : "", node.mac ? `MAC: ${node.mac}` : ""].filter(Boolean).join("\n");
}

function applyVrpConfig(node, cfg) {
  node.rawConfig = cfg;
  parseConfig(node, cfg);
}

function parsePcXml(raw) {
  const doc = new DOMParser().parseFromString(raw, "application/xml");
  const value = (tag) => doc.getElementsByTagName(tag)[0]?.textContent?.trim() || "";
  return {
    eth: value("eth"),
    ipaddr: value("ipaddr"),
    ipmask: value("ipmask"),
    gateway: value("gateway"),
    ipv4dns: value("ipv4dns"),
    ipv6addr: value("ipv6addr"),
    ipv6gateway: value("ipv6gateway")
  };
}

function parentFolderName(file) {
  const path = file.webkitRelativePath || file.name;
  return parentFolderNameFromPath(path);
}

function parentFolderNameFromPath(path) {
  const parts = path.split(/[\\/]/);
  return parts.length >= 2 ? parts[parts.length - 2] : "";
}

async function readZipEntryText(file, entryName) {
  return readZipEntryTextFromBytes(new Uint8Array(await file.arrayBuffer()), entryName);
}

async function readZipEntryTextFromBytes(bytes, entryName) {
  const entries = await readZipEntriesFromBytes(bytes);
  const entry = entries.find((item) => item.name.replace(/\\/g, "/").endsWith(entryName));
  return entry ? decodeSmartText(entry.data) : "";
}

async function readZipEntries(file) {
  return readZipEntriesFromBytes(new Uint8Array(await file.arrayBuffer()));
}

async function readZipEntriesFromBytes(bytes) {
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  let offset = 0;
  const entries = [];
  while (offset + 30 < bytes.length) {
    const signature = view.getUint32(offset, true);
    if (signature !== 0x04034b50) break;
    const method = view.getUint16(offset + 8, true);
    const compressedSize = view.getUint32(offset + 18, true);
    const nameLength = view.getUint16(offset + 26, true);
    const extraLength = view.getUint16(offset + 28, true);
    const nameStart = offset + 30;
    const name = new TextDecoder().decode(bytes.slice(nameStart, nameStart + nameLength));
    const dataStart = nameStart + nameLength + extraLength;
    const data = bytes.slice(dataStart, dataStart + compressedSize);
    if (compressedSize && !name.endsWith("/")) {
      entries.push({
        name,
        data: method === 0 ? data : await inflateDeflateRaw(data)
      });
    }
    offset = dataStart + compressedSize;
  }
  return entries;
}

async function inflateDeflateRaw(data) {
  if (!("DecompressionStream" in window)) {
    throw new Error("This browser does not support zip deflate decompression.");
  }
  const stream = new Blob([data]).stream().pipeThrough(new DecompressionStream("deflate-raw"));
  return new Uint8Array(await new Response(stream).arrayBuffer());
}

function decodeConfigText(bytes) {
  try {
    return new TextDecoder("gb18030").decode(bytes);
  } catch {
    return new TextDecoder().decode(bytes);
  }
}

function decodeSmartText(bytes) {
  if (bytes[0] === 0xff && bytes[1] === 0xfe) return new TextDecoder("utf-16le").decode(bytes);
  if (bytes[0] === 0xfe && bytes[1] === 0xff) return new TextDecoder("utf-16be").decode(bytes);
  const zeroCount = bytes.slice(0, Math.min(bytes.length, 80)).filter((value) => value === 0).length;
  if (zeroCount > 8) return new TextDecoder("utf-16le").decode(bytes);
  return decodeConfigText(bytes);
}

async function readFileTextSmart(file) {
  return decodeSmartText(new Uint8Array(await file.arrayBuffer()));
}

function parseImportedTopology(text, fileName = "Imported.lab") {
  const raw = text.trim();
  if (!raw) throw new Error("empty import");
  try {
    return parseJsonTopology(JSON.parse(raw), fileName);
  } catch {
    if (raw.startsWith("<")) return parseXmlTopology(raw, fileName);
    const configBundle = parseVrpTranscriptBundle(raw, fileName);
    if (configBundle) return configBundle;
    return parseTextTopology(raw, fileName);
  }
}

function parseVrpTranscriptBundle(raw, fileName) {
  if (!/(^|\n)\s*(<[^>]+>|\[[^\]]+\])\s*(system-view|sysname|interface|ip route-static|acl|rule|traffic-filter)/i.test(raw)) return null;
  const configs = new Map();
  let currentName = "";
  const ensure = (name) => {
    const clean = String(name || "").trim();
    if (!clean || /^huawei$/i.test(clean)) return null;
    if (!configs.has(clean)) configs.set(clean, []);
    return configs.get(clean);
  };
  raw.split(/\r?\n/).forEach((line) => {
    const promptMatch = line.match(/^\s*<([^>]+)>\s*(.*)$/) || line.match(/^\s*\[([^\]-]+)(?:-[^\]]*)?\]\s*(.*)$/);
    const command = normalizeConfigLine(line);
    if (!command) return;
    if (promptMatch) {
      const promptName = promptMatch[1].trim();
      if (!/^huawei$/i.test(promptName)) currentName = promptName;
    }
    const sysname = command.match(/^sysname\s+(.+)$/i)?.[1]?.trim();
    if (sysname) currentName = sysname;
    const bucket = ensure(currentName);
    if (bucket) bucket.push(command);
  });
  if (!configs.size) return null;
  return {
    mode: "config-bundle",
    projectName: cleanFileName(fileName),
    configs: Array.from(configs.entries()).map(([name, lines]) => ({ name, config: lines.join("\n") })),
    endpoints: parseEndpointConfigsFromText(raw),
    dnsRecords: parseDnsHintsFromText(raw)
  };
}

function applyConfigBundle(imported) {
  const cols = Math.ceil(Math.sqrt(imported.configs.length || 1));
  imported.configs.forEach((item, index) => {
    let node = state.nodes.find((candidate) => candidate.name.toLowerCase() === item.name.toLowerCase());
    if (!node) {
      node = addDevice("router", { x: 160 + (index % cols) * 190, y: 140 + Math.floor(index / cols) * 150 }, { name: item.name, model: "AR2220", running: state.running });
    }
    applyVrpConfig(node, item.config);
  });
  applyEndpointConfigBundle(imported.endpoints || [], imported.configs.length, imported.dnsRecords || []);
  log("ok", "IMPORT", `导入 VRP 配置记录：${imported.configs.length} 台设备，终端 ${imported.endpoints?.length || 0} 台`);
  toast(`已导入配置记录：${imported.configs.length} 台网络设备，${imported.endpoints?.length || 0} 台终端。`);
  renderAll();
}

function parseEndpointConfigsFromText(raw) {
  const endpoints = new Map();
  const lines = String(raw || "").split(/\r?\n/);
  lines.forEach((line) => {
    const name = line.match(/((?:Client|PC|Server)\s*\d+)/i)?.[1]?.replace(/\s+/g, "");
    if (!name) return;
    const ips = line.match(/(?:\d{1,3}\.){3}\d{1,3}/g) || [];
    if (!ips.length) return;
    const isServer = /^Server/i.test(name);
    if (!isServer && ips.length < 2) return;
    const score = ips.length + (/\bIP\s*[:：]/i.test(line) ? 3 : 0) + (/gateway|网关/i.test(line) ? 1 : 0) + (/dns/i.test(line) ? 1 : 0);
    const key = name.toLowerCase();
    if ((endpoints.get(key)?.score || 0) > score) return;
    endpoints.set(key, {
      name,
      type: isServer ? "server" : "client",
      ip: ips[0],
      mask: ips[1] || "255.255.255.0",
      gateway: ips[2] || "",
      dns: ips[3] || "",
      score
    });
  });
  return Array.from(endpoints.values()).map(({ score, ...item }) => item);
}

function parseDnsHintsFromText(raw) {
  const domains = [...new Set((String(raw || "").match(/\b[a-z0-9][a-z0-9-]*(?:\.[a-z0-9-]+){2,}\b/gi) || [])
    .map((item) => item.toLowerCase())
    .filter((item) => !/^\d+\.\d+\.\d+/.test(item)))];
  return domains.map((host) => ({ host, ip: "" }));
}

function applyEndpointConfigBundle(endpoints, offset = 0, dnsRecords = []) {
  if (!Array.isArray(endpoints) || !endpoints.length) return;
  const server2 = endpoints.find((item) => /^server\s*2$/i.test(item.name));
  const dnsHost = endpoints.find((item) => item.type === "server")?.name || "";
  endpoints.forEach((item, index) => {
    let node = state.nodes.find((candidate) => candidate.name.toLowerCase() === item.name.toLowerCase());
    if (!node) {
      node = addDevice(item.type, { x: 120 + (index % 4) * 170, y: 520 + Math.floor((index + offset) / 4) * 130 }, { name: item.name, running: state.running });
    }
    const iface = node.interfaces[0] || findInterfaceByName(node, "Ethernet0/0/1");
    iface.ip = item.ip;
    iface.mask = item.mask;
    node.gateway = item.gateway || node.gateway || "";
    node.dns = item.dns || node.dns || "";
    if (node.type === "server") {
      const services = ensureServerServices(node);
      services.http.enabled = true;
      services.ftp.enabled = true;
      if (node.dns || node.name === dnsHost) {
        services.dns.enabled = true;
        services.dns.records[`www.${node.name.toLowerCase()}.local`] = item.ip;
        dnsRecords.forEach((record) => {
          const ip = record.ip || server2?.ip || item.ip;
          if (record.host && ip) services.dns.records[record.host] = ip;
        });
      }
      node.protocols.HTTP = true;
      node.protocols.FTP = true;
      node.protocols.DNS = services.dns.enabled;
    }
    updateEndpointNotes(node);
  });
}

function parseJsonTopology(data, fileName) {
  if (Array.isArray(data.nodes) && data.nodes.every((n) => Array.isArray(n.interfaces))) {
    return { mode: "native", data };
  }
  const nodes = data.nodes || data.devices || data.vertices || data.topology?.nodes || data.topology?.devices;
  const links = data.links || data.edges || data.connections || data.topology?.links || data.topology?.edges;
  if (!Array.isArray(nodes)) throw new Error("json topology missing nodes");
  return {
    mode: "topology",
    projectName: data.project?.name || data.name || cleanFileName(fileName),
    nodes: nodes.map((node, index) => normalizeImportedNode(node, index)),
    links: Array.isArray(links) ? links.map(normalizeImportedLink).filter(Boolean) : []
  };
}

function parseXmlTopology(raw, fileName) {
  const doc = new DOMParser().parseFromString(raw, "application/xml");
  const ensp = parseEnsPTopoDocument(doc, fileName);
  if (ensp) return ensp;
  const elements = Array.from(doc.getElementsByTagName("*"));
  const nodeElements = elements.filter((el) => {
    const tag = el.tagName.toLowerCase();
    return ["node", "device", "router", "switch", "firewall", "pc", "server", "cloud", "ap", "ac"].some((name) => tag.includes(name)) && (attr(el, "name") || attr(el, "id"));
  });
  const linkElements = elements.filter((el) => {
    const tag = el.tagName.toLowerCase();
    return ["link", "edge", "connection", "line", "cable"].some((name) => tag.includes(name));
  });
  return {
    mode: "topology",
    projectName: cleanFileName(fileName),
    nodes: nodeElements.map((el, index) => normalizeImportedNode({
      id: attr(el, "id") || attr(el, "uuid") || attr(el, "name"),
      name: attr(el, "name") || attr(el, "label") || attr(el, "id"),
      type: attr(el, "type") || attr(el, "deviceType") || attr(el, "class") || el.tagName,
      model: attr(el, "model"),
      x: attr(el, "x") || attr(el, "left"),
      y: attr(el, "y") || attr(el, "top"),
      ip: attr(el, "ip") || attr(el, "address")
    }, index)),
    links: linkElements.map((el) => normalizeImportedLink({
      source: attr(el, "source") || attr(el, "src") || attr(el, "from") || attr(el, "a") || attr(el, "start") || attr(el, "sourceId"),
      target: attr(el, "target") || attr(el, "dst") || attr(el, "to") || attr(el, "b") || attr(el, "end") || attr(el, "targetId"),
      aPort: attr(el, "sourcePort") || attr(el, "aPort") || attr(el, "fromPort"),
      bPort: attr(el, "targetPort") || attr(el, "bPort") || attr(el, "toPort"),
      cable: attr(el, "type") || attr(el, "cable")
    })).filter(Boolean)
  };
}

function parseEnsPTopoDocument(doc, fileName) {
  const devs = Array.from(doc.getElementsByTagName("dev"));
  if (!devs.length) return null;
  const devById = new Map();
  const nodes = devs.map((dev, index) => {
    const id = attr(dev, "id");
    const model = attr(dev, "model");
    const settings = parseEnsPSettings(attr(dev, "settings"));
    const node = normalizeImportedNode({
      id,
      enspId: id,
      name: attr(dev, "name") || id,
      type: model,
      model,
      x: attr(dev, "cx"),
      y: attr(dev, "cy"),
      ip: settings.ipaddr ? `${settings.ipaddr}/${settings.ipmask || ""}` : ""
    }, index);
    node.gateway = settings.gateway || "";
    node.systemMac = attr(dev, "system_mac");
    node.model = model;
    devById.set(id, { dev, node });
    return node;
  });
  const links = Array.from(doc.getElementsByTagName("line")).map((line) => {
    const pair = line.getElementsByTagName("interfacePair")[0];
    const source = attr(line, "srcDeviceID");
    const target = attr(line, "destDeviceID");
    return normalizeImportedLink({
      source,
      target,
      aPort: enspPortName(devById.get(source)?.node, attr(pair, "srcIndex")),
      bPort: enspPortName(devById.get(target)?.node, attr(pair, "tarIndex")),
      cable: attr(pair, "lineName") || "Copper"
    });
  }).filter(Boolean);
  const annotations = Array.from(doc.getElementsByTagName("txttip")).map((tip, index) => {
    const text = attr(tip, "content").trim();
    if (!text) return null;
    return {
      id: `t${index + 1}`,
      text,
      x: Number(attr(tip, "left")) || 80,
      y: Number(attr(tip, "top")) || 80
    };
  }).filter(Boolean);
  return {
    mode: "topology",
    source: "ensp",
    projectName: cleanFileName(fileName),
    nodes,
    links,
    annotations
  };
}

function parseTextTopology(raw, fileName) {
  const nodes = new Map();
  const links = [];
  raw.split(/\r?\n/).map((line) => line.trim()).filter((line) => line && !line.startsWith("#") && !line.startsWith("//")).forEach((line, index) => {
    const csv = line.split(",").map((part) => part.trim());
    if (/^(node|device)$/i.test(csv[0]) && csv.length >= 2) {
      const node = normalizeImportedNode({ id: csv[1], name: csv[1], type: csv[2], x: csv[3], y: csv[4], ip: csv[5] }, index);
      nodes.set(node.id, node);
      return;
    }
    if (/^(link|edge|connection)$/i.test(csv[0]) && csv.length >= 3) {
      links.push(normalizeImportedLink({ source: csv[1], target: csv[2], aPort: csv[3], bPort: csv[4], cable: csv[5] }));
      ensureTextNode(nodes, csv[1]);
      ensureTextNode(nodes, csv[2]);
      return;
    }
    const edge = line.replace(/;$/, "").split(/\s*(?:-->|---|--|<->|->)\s*/);
    if (edge.length >= 2) {
      const left = parseEndpoint(edge[0]);
      const right = parseEndpoint(edge[1]);
      nodes.set(left.id, normalizeImportedNode(left, nodes.size));
      nodes.set(right.id, normalizeImportedNode(right, nodes.size));
      links.push(normalizeImportedLink({ source: left.id, target: right.id }));
    } else {
      const node = normalizeImportedNode(parseEndpoint(line), nodes.size);
      nodes.set(node.id, node);
    }
  });
  if (!nodes.size) throw new Error("text topology empty");
  return { mode: "topology", projectName: cleanFileName(fileName), nodes: Array.from(nodes.values()), links };
}

function applyImportedTopology(imported, fileName) {
  state.nodes = [];
  state.links = [];
  state.annotations = [];
  state.packets = [];
  state.events = [];
  state.selected = null;
  state.multiSelected = [];
  state.multiAnnotations = [];
  flashingLinks.clear();
  state.pendingLink = null;
  state.pendingPing = null;
  state.counters = { node: 1, link: 1, packet: 1, text: 1 };
  state.project = {
    id: slugId(imported.projectName || fileName),
    name: imported.projectName || cleanFileName(fileName),
    createdAt: new Date().toISOString(),
    updatedAt: ""
  };
  const withLayout = layoutImportedNodes(imported.nodes);
  const idMap = new Map();
  withLayout.forEach((node) => {
    const created = addDevice(node.type, { x: node.x, y: node.y }, { name: node.name, running: state.running });
    created.model = node.model || created.model;
    created.enspId = isEnsPGuid(node.enspId) ? node.enspId : created.enspId;
    created.gateway = node.gateway || "";
    created.mac = node.systemMac || "";
    created.notes = [created.gateway ? `Gateway: ${created.gateway}` : "", created.mac ? `MAC: ${created.mac}` : ""].filter(Boolean).join("\n");
    if (node.ip) {
      const [ip, mask] = String(node.ip).split("/");
      created.interfaces[0].ip = ip;
      created.interfaces[0].mask = mask || "";
    }
    idMap.set(node.id, created.id);
    idMap.set(node.name, created.id);
  });
  imported.links.forEach((link) => {
    const a = idMap.get(link.source);
    const b = idMap.get(link.target);
    if (a && b) addLink(a, b, { aPort: link.aPort, bPort: link.bPort, cable: link.cable || "Auto" });
  });
  if (Array.isArray(imported.annotations)) {
    state.annotations = imported.annotations.map((note, index) => ({
      id: note.id || `t${index + 1}`,
      text: String(note.text || "文本标注"),
      x: clamp(Number(note.x) || 80, 0, state.stage.width - 40),
      y: clamp(Number(note.y) || 80, 0, state.stage.height - 24)
    }));
    state.counters.text = state.annotations.length + 1;
  }
  updateProjectTitle();
  toast(`已导入拓扑：${withLayout.length} 台设备，${state.links.length} 条链路。`);
  return idMap;
}

function serialize() {
  return {
    version: 2,
    project: state.project,
    stage: state.stage,
    nodes: state.nodes,
    links: state.links.map(serializeLink),
    annotations: state.annotations,
    packets: state.packets.slice(0, 80),
    events: state.events.slice(0, 120),
    counters: state.counters,
    seconds: state.seconds
  };
}

function hydrate(data) {
  state.project = data.project || {
    id: "enterprise-campus",
    name: "EnterpriseCampus.lab",
    createdAt: new Date().toISOString(),
    updatedAt: ""
  };
  state.nodes = (data.nodes || []).map(migrateSavedNode);
  state.stage = normalizeStageSize(data.stage);
  state.links = (data.links || []).map(serializeLink);
  rebuildLinkIndex();
  state.annotations = data.annotations || [];
  state.packets = data.packets || [];
  state.events = data.events || [];
  state.counters = { node: state.nodes.length + 1, link: state.links.length + 1, packet: state.packets.length + 1, text: (state.annotations?.length || 0) + 1, ...(data.counters || {}) };
  state.seconds = data.seconds || 0;
  state.selected = null;
  state.multiSelected = [];
  state.multiAnnotations = [];
  flashingLinks.clear();
  state.running = false;
  pauseSimulation();
  updateProjectTitle();
  renderAll();
}

function migrateSavedNode(node) {
  if (node.type === "pc" && String(node.model || "").toLowerCase() === "client") {
    node.type = "client";
    node.model = "Client";
    node.protocols = { ...(node.protocols || {}), "HTTP Client": false };
  }
  ensureAclStore(node);
  if (node.type === "server") ensureServerServices(node);
  return node;
}

function serializeLink(link) {
  const { flash, ...stable } = link;
  return stable;
}

function copyConfig() {
  const text = $("configEditor").value;
  navigator.clipboard?.writeText(text).then(() => toast("配置已复制。")).catch(() => {
    $("configEditor").select();
    document.execCommand("copy");
    toast("配置已复制。");
  });
}

function downloadConfig() {
  const node = state.selected?.kind === "node" ? getNode(state.selected.id) : null;
  const blob = new Blob([$("configEditor").value], { type: "text/plain" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `${node?.name || "topology"}-config.txt`;
  a.click();
  URL.revokeObjectURL(a.href);
}

function toggleProtocol(node, protocol) {
  if (!(protocol in node.protocols)) node.protocols[protocol] = false;
  node.protocols[protocol] = !node.protocols[protocol];
  log("info", "PROTO", `${node.name} ${protocol} ${node.protocols[protocol] ? "enabled" : "disabled"}`);
  renderAll();
}

function enabledProtocols() {
  const set = new Set();
  state.nodes.forEach((n) => Object.entries(n.protocols || {}).forEach(([p, v]) => v && set.add(p)));
  return [...set];
}

function freePort(node) {
  const used = new Set();
  linksOf(node.id).forEach((l) => {
    if (l.a === node.id) used.add(l.aPort);
    if (l.b === node.id) used.add(l.bPort);
  });
  return node.interfaces.find((p) => !used.has(p.name))?.name || node.interfaces[0]?.name || "GE0/0/0";
}

function linkEffectiveStatus(link) {
  const a = getNode(link.a);
  const b = getNode(link.b);
  if (!a || !b || link.status !== "up" || !a.running || !b.running) return "down";
  const aPort = findExistingInterface(a, link.aPort);
  const bPort = findExistingInterface(b, link.bPort);
  if (aPort?.status === "down" || bPort?.status === "down") return "down";
  return "up";
}

function findExistingInterface(node, name) {
  const normalized = normalizeInterfaceName(name);
  return node.interfaces.find((iface) => normalizeInterfaceName(iface.name) === normalized);
}

function inferRoutes(node) {
  return node.interfaces.filter((i) => i.ip).map((i) => `${networkOf(i.ip, i.mask)} Direct ${i.name}`);
}

function macTable(node) {
  return state.links
    .filter((l) => linkUsableForTraffic(l) && (l.a === node.id || l.b === node.id))
    .map((l, index) => {
      const peer = getNode(l.a === node.id ? l.b : l.a);
      const port = l.a === node.id ? l.aPort : l.bPort;
      return `${fakeMac(peer?.id || index).padEnd(18)} VLAN ${String(index + 1).padEnd(4)} ${port.padEnd(12)} dynamic ${peer?.name || "unknown"}`;
    });
}

function arpTable(node) {
  return neighborNodes(node.id)
    .flatMap((peer) => peer.interfaces.filter((i) => i.ip).map((i) => `${i.ip.padEnd(16)} ${fakeMac(peer.id).padEnd(18)} ${peer.name}`));
}

function fakeMac(seed) {
  const hex = Array.from(String(seed)).reduce((sum, ch) => sum + ch.charCodeAt(0), 0).toString(16).padStart(6, "0").slice(-6);
  return `54-45-00-${hex.slice(0, 2)}-${hex.slice(2, 4)}-${hex.slice(4, 6)}`.toUpperCase();
}

function normalizeImportedNode(node, index = 0) {
  const id = String(node.id || node.name || `imported-${index + 1}`).trim();
  const name = String(node.name || node.label || node.hostname || id).trim();
  return {
    id,
    enspId: node.enspId || node.ensPId || node.guid || "",
    name,
    type: normalizeDeviceType(node.type || node.kind || node.category || node.model || name),
    model: node.model || "",
    gateway: node.gateway || "",
    systemMac: node.systemMac || node.mac || "",
    x: Number(node.x ?? node.left),
    y: Number(node.y ?? node.top),
    ip: node.ip || node.address || node.managementIp || ""
  };
}

function normalizeImportedLink(link) {
  const source = String(link.source || link.src || link.from || link.a || link.start || link.sourceId || "").trim();
  const target = String(link.target || link.dst || link.to || link.b || link.end || link.targetId || "").trim();
  if (!source || !target) return null;
  return {
    source,
    target,
    aPort: link.aPort || link.sourcePort || link.fromPort || "",
    bPort: link.bPort || link.targetPort || link.toPort || "",
    cable: normalizeCable(link.cable || link.type || "Auto")
  };
}

function normalizeDeviceType(value) {
  const text = String(value || "").toLowerCase();
  if (/(usg|firewall|fw|防火墙)/.test(text)) return "firewall";
  if (/(l3|s7700|core|三层)/.test(text)) return "l3switch";
  if (/(switch|s57|s37|交换)/.test(text)) return "switch";
  if (/(router|ar|路由)/.test(text)) return "router";
  if (/(server|srv|服务器)/.test(text)) return "server";
  if (/(client|httpclient|客户端)/.test(text)) return "client";
  if (/(cloud|internet|wan|公网|云)/.test(text)) return "cloud";
  if (/(ac|controller|控制器)/.test(text)) return "ac";
  if (/(ap|access.?point)/.test(text)) return "ap";
  if (/(hub|集线器)/.test(text)) return "hub";
  return "pc";
}

function normalizeCable(value) {
  const text = String(value || "Auto").toLowerCase();
  if (/copper|铜/.test(text)) return "Copper";
  if (/fiber|光/.test(text)) return "Fiber";
  if (/serial|串/.test(text)) return "Serial";
  if (/console|控制/.test(text)) return "Console";
  if (/ether|ge|fast|电/.test(text)) return "Ethernet";
  return "Auto";
}

function parseEnsPSettings(settings) {
  const result = {};
  const matches = String(settings || "").matchAll(/-([a-zA-Z0-9_]+)\s+([^\s]+)/g);
  for (const match of matches) result[match[1]] = match[2] === "NULL" ? "" : match[2];
  return result;
}

function enspPortName(node, indexValue) {
  const index = Number(indexValue || 0);
  if (!node) return "";
  if (["pc", "client", "server", "cloud", "hub"].includes(node.type)) return "Ethernet0/0/1";
  if (["router", "l3switch", "switch", "firewall", "ac", "ap"].includes(node.type)) return `GE0/0/${index}`;
  return "";
}

function cleanFileName(fileName) {
  return String(fileName || "Imported.lab").split(/[\\/]/).pop().replace(/\.[^.]+$/, "") || "Imported.lab";
}

function parseEndpoint(text) {
  const cleaned = String(text).trim().replace(/^["']|["']$/g, "");
  const matched = cleaned.match(/^([A-Za-z0-9_.-]+)\s*(?:\[|\(|\{)\s*([^\]\)\}]+)\s*(?:\]|\)|\})/);
  if (matched) return { id: matched[1], name: matched[1], type: matched[2] };
  const parts = cleaned.split(/\s+/);
  return { id: parts[0], name: parts[0], type: parts[1] || parts[0] };
}

function ensureTextNode(nodes, name) {
  if (!nodes.has(name)) nodes.set(name, normalizeImportedNode({ id: name, name, type: name }, nodes.size));
}

function layoutImportedNodes(nodes) {
  const cols = Math.ceil(Math.sqrt(nodes.length || 1));
  return nodes.map((node, index) => ({
    ...node,
    x: Number.isFinite(node.x) ? node.x : 130 + (index % cols) * 220,
    y: Number.isFinite(node.y) ? node.y : 120 + Math.floor(index / cols) * 160
  }));
}

function attr(element, name) {
  if (!element) return "";
  const direct = element.getAttribute(name);
  if (direct !== null) return direct;
  const lower = name.toLowerCase();
  const found = Array.from(element.attributes || []).find((a) => a.name.toLowerCase() === lower);
  return found?.value || "";
}

function networkOf(ip, mask) {
  if (!ip) return "0.0.0.0/0";
  const prefix = mask && mask.includes(".") ? maskToPrefix(mask) : Number(mask || 24);
  return `${ip}/${prefix}`;
}

function maskToPrefix(mask) {
  if (/^\d+$/.test(String(mask || ""))) return clamp(Number(mask), 0, 32);
  return String(mask || "255.255.255.0").split(".").map(Number).map((n) => n.toString(2).padStart(8, "0")).join("").replace(/0+$/, "").length;
}

function sameSubnet(ip, mask, otherIp) {
  if (!ip || !otherIp) return false;
  return ipInNetwork(otherIp, ip, mask || "255.255.255.0");
}

function ipInNetwork(ip, networkIp, mask) {
  if (!/^\d+\.\d+\.\d+\.\d+$/.test(String(ip || "")) || !/^\d+\.\d+\.\d+\.\d+$/.test(String(networkIp || ""))) return false;
  const prefix = maskToPrefix(mask || "255.255.255.0");
  const maskNum = prefix <= 0 ? 0 : (0xffffffff << (32 - prefix)) >>> 0;
  return (ipToNumber(ip) & maskNum) === (ipToNumber(networkIp) & maskNum);
}

function neighborNodes(id) {
  return linksOf(id, linkUsableForTraffic).map((l) => getNode(l.a === id ? l.b : l.a)).filter(Boolean);
}

function findInterfaceByName(node, name) {
  const normalized = normalizeInterfaceName(name);
  let iface = node.interfaces.find((i) => normalizeInterfaceName(i.name) === normalized);
  if (!iface) {
    iface = {
      name,
      status: "up",
      ip: "",
      mask: "",
      vlan: "",
      linkType: "access",
      desc: ""
    };
    node.interfaces.push(iface);
  }
  return iface;
}

function normalizeInterfaceName(name) {
  return String(name || "")
    .toLowerCase()
    .replace(/^gigabitethernet/, "ge")
    .replace(/^gig(?=\d)/, "ge")
    .replace(/^gi(?=\d)/, "ge")
    .replace(/^g(?=\d)/, "ge")
    .replace(/^gigabitethernet/, "ge")
    .replace(/^ethernet/, "ethernet")
    .replace(/^eth(?=\d)/, "ethernet")
    .replace(/^e(?=\d)/, "ethernet")
    .replace(/\s+/g, "");
}

function deleteNode(id) {
  const node = getNode(id);
  closeNodeWindows(id);
  state.nodes = state.nodes.filter((n) => n.id !== id);
  state.links = state.links.filter((l) => l.a !== id && l.b !== id);
  rebuildLinkIndex();
  state.selected = null;
  state.multiSelected = state.multiSelected.filter((nodeId) => nodeId !== id);
  log("warn", "DELETE", `删除设备 ${node?.name || id}`);
  renderAll();
}

function deleteLink(id) {
  state.links = state.links.filter((l) => l.id !== id);
  rebuildLinkIndex();
  state.selected = null;
  log("warn", "DELETE", `删除链路 ${id}`);
  renderAll();
}

function deleteAnnotation(id) {
  state.annotations = state.annotations.filter((note) => note.id !== id);
  state.multiAnnotations = state.multiAnnotations.filter((noteId) => noteId !== id);
  state.selected = null;
  log("warn", "DELETE", `删除文本标注 ${id}`);
  renderAll();
}

function log(level, source, message) {
  state.events.unshift({ time: new Date().toLocaleTimeString(), level, source, message });
  state.events = state.events.slice(0, 240);
  renderEvents();
}

function toast(message) {
  const old = document.querySelector(".toast");
  old?.remove();
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = message;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2400);
}

function deviceInfo(type, model = "") {
  return catalog.find((d) => d.type === type && (!model || d.model === model)) || catalog.find((d) => d.type === type) || catalog[0];
}

function defaultProtocols(type) {
  return Object.fromEntries(deviceInfo(type).protocols.map((p) => [p, false]));
}

function getNode(id) {
  return state.nodes.find((n) => n.id === id);
}

function getLink(id) {
  return state.links.find((l) => l.id === id);
}

function getAnnotation(id) {
  return state.annotations.find((note) => note.id === id);
}

function isSelected(kind, id) {
  return state.selected?.kind === kind && state.selected?.id === id;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function formatClock(seconds) {
  const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return `${h}:${m}:${s}`;
}

function escapeHtml(text) {
  return String(text ?? "").replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch]);
}

function slugId(text) {
  const slug = String(text || "project").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return `${slug || "project"}-${Date.now().toString(36)}`;
}

init();
