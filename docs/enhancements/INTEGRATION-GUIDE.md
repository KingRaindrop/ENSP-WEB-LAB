# 增强功能集成指南

## 📦 文件清单

已创建以下增强文件：

1. **app-improvements.js** - 增强功能 JavaScript 模块
2. **styles-improvements.css** - 增强功能 CSS 样式
3. **IMPROVEMENTS.md** - 完整改进计划
4. **INTEGRATION-GUIDE.md** - 本集成指南

---

## 🔧 集成步骤

### 第 1 步：引入文件

在 `index.html` 中，在原有文件之后添加：

```html
<!-- 在 </head> 标签之前添加 -->
<link rel="stylesheet" href="./styles-improvements.css" />

<!-- 在 <script src="./app.js"></script> 之后添加 -->
<script src="./app-improvements.js"></script>
```

完整修改后的引用顺序：

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>eNSP Web Lab</title>
  <link rel="stylesheet" href="./styles.css" />
  <link rel="stylesheet" href="./styles-improvements.css" />
</head>
<body>
  <!-- ... 页面内容 ... -->
  
  <script src="./app.js"></script>
  <script src="./app-improvements.js"></script>
</body>
```

### 第 2 步：在主代码中集成增强功能

在 `app.js` 文件顶部添加：

```javascript
// ===================================================================
// 增强功能别名 (在 app-improvements.js 加载后可用)
// ===================================================================

let enhancedToast, enhancedShowLoading, enhancedHideLoading;
let enhancedWithLoading, enhancedShowConfirm, enhancedShowShortcuts;
let enhancedShowProgress, enhancedUpdateProgress, enhancedHideProgress;
let enhancedConfirmBatchDelete, enhancedHandleError;

// 在 init() 函数中初始化
function initEnhancements() {
  if (window.EnspEnhancements) {
    const enh = window.EnspEnhancements;
    enhancedToast = enh.toastEnhanced;
    enhancedShowLoading = enh.showLoading;
    enhancedHideLoading = enh.hideLoading;
    enhancedWithLoading = enh.withLoading;
    enhancedShowConfirm = enh.showConfirmDialog;
    enhancedShowShortcuts = enh.showShortcutsPanel;
    enhancedShowProgress = enh.showProgress;
    enhancedUpdateProgress = enh.updateProgress;
    enhancedHideProgress = enh.hideProgress;
    enhancedConfirmBatchDelete = enh.confirmBatchDelete;
    enhancedHandleError = enh.handleError;
    
    console.log('✓ 增强功能已加载');
  }
}
```

### 第 3 步：替换现有 toast 调用

**原代码：**
```javascript
function toast(message) {
  const old = document.querySelector(".toast");
  old?.remove();
  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = message;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2400);
}
```

**增强版本：**
```javascript
// 保留原有 toast 作为回退
function toast(message, type = 'info') {
  if (enhancedToast) {
    enhancedToast(message, type, 2400);
  } else {
    // 原有实现作为回退
    const old = document.querySelector(".toast");
    old?.remove();
    const el = document.createElement("div");
    el.className = "toast";
    el.textContent = message;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2400);
  }
}
```

### 第 4 步：添加快捷键监听

在 `handleGlobalHotkeys` 函数中添加：

```javascript
function handleGlobalHotkeys(event) {
  // ... 现有代码 ...

  // 快捷键帮助 (? 或 Shift+/)
  if ((event.key === '?' || (event.shiftKey && event.key === '/')) && !isTyping()) {
    event.preventDefault();
    if (enhancedShowShortcuts) {
      enhancedShowShortcuts();
    }
    return;
  }

  // ... 其他快捷键 ...
}
```

### 第 5 步：增强导入/导出操作

**导入 eNSP 工程（带进度）：**

```javascript
async function importEnsPFolder(event) {
  const files = Array.from(event.target.files || []);
  event.target.value = "";
  if (!files.length) return;

  try {
    enhancedShowProgress && enhancedShowProgress('解析 eNSP 工程...');
    
    const topoFile = files.find((file) => file.name.toLowerCase().endsWith(".topo"));
    if (!topoFile) {
      enhancedHideProgress && enhancedHideProgress();
      toast("没有找到 .topo 文件。请选择 eNSP 工程根目录。", 'warning');
      return;
    }

    enhancedUpdateProgress && enhancedUpdateProgress(20, '读取拓扑文件...');
    const topoText = await readFileTextSmart(topoFile);
    
    enhancedUpdateProgress && enhancedUpdateProgress(40, '解析拓扑结构...');
    const imported = parseImportedTopology(topoText, topoFile.name);
    const idMap = applyImportedTopology(imported, topoFile.name);
    
    enhancedUpdateProgress && enhancedUpdateProgress(60, '应用设备配置...');
    const configCounts = await applyEnsPDeviceConfigs(files, idMap);
    
    enhancedUpdateProgress && enhancedUpdateProgress(100, '完成！');
    
    setTimeout(() => {
      enhancedHideProgress && enhancedHideProgress();
      log("ok", "IMPORT", `eNSP 工程已导入：${topoFile.name}`);
      toast(`eNSP 工程导入完成：${state.nodes.length} 台设备，${state.links.length} 条链路`, 'success');
      renderAll();
    }, 500);

  } catch (error) {
    enhancedHideProgress && enhancedHideProgress();
    if (enhancedHandleError) {
      enhancedHandleError(error, 'eNSP 工程导入');
    } else {
      console.error(error);
      toast("eNSP 工程导入失败，请检查文件夹结构。", 'error');
    }
  }
}
```

**导出操作（带加载状态）：**

```javascript
async function exportEnsPFolder() {
  try {
    enhancedShowLoading && enhancedShowLoading('准备导出 eNSP 工程...');
    
    // ... 原有导出逻辑 ...
    
    enhancedHideLoading && enhancedHideLoading();
    toast('eNSP 工程导出完成！', 'success');
  } catch (error) {
    enhancedHideLoading && enhancedHideLoading();
    if (enhancedHandleError) {
      enhancedHandleError(error, 'eNSP 工程导出');
    }
  }
}
```

### 第 6 步：批量删除确认

**删除多个设备前确认：**

```javascript
async function deleteSelectedDevices() {
  const selectedIds = state.multiSelected.length > 0 
    ? state.multiSelected 
    : (state.selected?.kind === 'node' ? [state.selected.id] : []);

  if (selectedIds.length === 0) return;

  // 使用增强的确认对话框
  const confirmed = enhancedConfirmBatchDelete 
    ? await enhancedConfirmBatchDelete(selectedIds, '设备')
    : confirm(`确定要删除 ${selectedIds.length} 个设备吗？`);

  if (!confirmed) return;

  selectedIds.forEach(id => deleteNode(id));
  state.multiSelected = [];
  renderAll();
  toast(`已删除 ${selectedIds.length} 个设备`, 'success');
}
```

### 第 7 步：更新 init() 函数

```javascript
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
  
  // 初始化增强功能
  initEnhancements();
  
  addTerminal("eNSP Web Lab ready. 输入 help 查看可用 VRP 风格命令。按 ? 查看快捷键。", "ok");
  setInterval(updateMeters, 1600);
}
```

---

## 🎨 使用示例

### 1. 显示不同类型的 Toast

```javascript
// 成功消息
toast('保存成功！', 'success');

// 信息提示
toast('正在加载项目...', 'info');

// 警告
toast('文件格式可能不兼容', 'warning');

// 错误
toast('导入失败', 'error');
```

### 2. 显示加载状态

```javascript
// 简单加载
enhancedShowLoading('加载中...');
// ... 执行操作 ...
enhancedHideLoading();

// 带自动加载的异步操作
await enhancedWithLoading(
  async () => {
    // 你的异步操作
    await someAsyncOperation();
  },
  '正在处理...', // 加载提示
  '处理操作'     // 错误上下文
);
```

### 3. 显示进度条

```javascript
enhancedShowProgress('导入中...');

// 更新进度
enhancedUpdateProgress(25, '解析文件...');
enhancedUpdateProgress(50, '创建设备...');
enhancedUpdateProgress(75, '建立链路...');
enhancedUpdateProgress(100, '完成！');

// 隐藏
setTimeout(() => enhancedHideProgress(), 500);
```

### 4. 确认对话框

```javascript
// 普通确认
const ok = await enhancedShowConfirm({
  title: '确认操作',
  message: '确定要继续吗？',
  confirmText: '确定',
  cancelText: '取消'
});

// 危险操作确认
const deleteOk = await enhancedShowConfirm({
  title: '删除设备',
  message: '此操作不可撤销，确定要删除吗？',
  confirmText: '删除',
  dangerous: true
});

// 批量删除
const batchOk = await enhancedConfirmBatchDelete(items, '设备');
```

### 5. 显示快捷键面板

```javascript
// 手动显示
enhancedShowShortcuts();

// 通常绑定到 ? 键（已在全局快捷键中实现）
```

---

## 🔍 测试清单

集成完成后，测试以下功能：

- [ ] 按 `?` 键显示/隐藏快捷键面板
- [ ] 导入 eNSP 工程时显示进度条
- [ ] 删除多个设备时显示确认对话框
- [ ] Toast 消息正确显示不同类型（成功/警告/错误）
- [ ] 加载状态在长时间操作时正确显示
- [ ] 所有动画流畅，无视觉闪烁
- [ ] ESC 键可以关闭对话框和面板
- [ ] 移动端/小屏幕下布局正常

---

## 🐛 故障排除

### 问题：增强功能未加载

**解决方案：**
1. 确保文件引用顺序正确（app.js 在 app-improvements.js 之前）
2. 检查浏览器控制台是否有错误
3. 确认 `window.EnspEnhancements` 对象存在

### 问题：样式显示异常

**解决方案：**
1. 检查 CSS 文件是否正确加载
2. 清除浏览器缓存
3. 确保 CSS 变量（如 `--brand`）在主样式中已定义

### 问题：快捷键冲突

**解决方案：**
1. 检查 `isTyping()` 函数是否正确过滤输入框场景
2. 调整快捷键绑定，避免与浏览器默认快捷键冲突

---

## 📈 性能影响

增强功能对性能的影响：

- **额外文件大小**：~15KB (JS) + ~8KB (CSS)
- **运行时开销**：可忽略（仅在调用时执行）
- **内存占用**：<100KB
- **兼容性**：支持所有现代浏览器

---

## 🚀 下一步

完成集成后，可以继续实现：

1. **命令自动补全** - Tab 键补全 VRP 命令
2. **拖拽对齐辅助线** - 设备对齐时显示引导线
3. **设备批量配置** - 选中多设备统一设置
4. **暗色主题** - 完整的暗色模式支持
5. **导出为图片** - PNG/SVG 格式拓扑图导出

详见 `IMPROVEMENTS.md` 完整改进计划。
