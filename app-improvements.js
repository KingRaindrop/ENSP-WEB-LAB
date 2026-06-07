// ===================================================================
// eNSP Web Lab - 改进增强模块
// ===================================================================

// -------------------- 错误处理增强 --------------------

/**
 * 全局错误处理器
 * @param {Error} error - 错误对象
 * @param {string} context - 错误上下文描述
 * @param {boolean} silent - 是否静默处理
 */
function handleError(error, context = '操作', silent = false) {
  const errorMessage = error?.message || String(error);
  const fullMessage = `${context}失败: ${errorMessage}`;

  // 记录到事件日志
  log('bad', 'ERROR', fullMessage);

  // 显示用户提示
  if (!silent) {
    toast(`❌ ${fullMessage}`, 'error');
  }

  // 开发环境详细日志
  if (window.DEBUG) {
    console.error(`[${context}]`, error);
  }

  return null;
}

/**
 * 异步操作包装器，统一错误处理
 * @param {Function} fn - 异步函数
 * @param {string} context - 操作描述
 * @returns {Promise<any>}
 */
async function safeAsync(fn, context = '操作') {
  try {
    return await fn();
  } catch (error) {
    return handleError(error, context);
  }
}

// -------------------- 加载状态管理 --------------------

const loadingState = {
  active: false,
  message: '',
  overlay: null
};

/**
 * 显示加载状态
 * @param {string} message - 加载提示信息
 */
function showLoading(message = '加载中...') {
  hideLoading(); // 先清除旧的

  loadingState.active = true;
  loadingState.message = message;

  const overlay = document.createElement('div');
  overlay.className = 'loading-overlay';
  overlay.innerHTML = `
    <div class="loading-spinner">
      <div class="spinner-ring"></div>
      <div class="loading-text">${message}</div>
    </div>
  `;

  document.body.appendChild(overlay);
  loadingState.overlay = overlay;

  // 防止过度渲染
  requestAnimationFrame(() => {
    overlay.style.opacity = '1';
  });
}

/**
 * 隐藏加载状态
 */
function hideLoading() {
  if (loadingState.overlay) {
    loadingState.overlay.style.opacity = '0';
    setTimeout(() => {
      loadingState.overlay?.remove();
      loadingState.overlay = null;
    }, 200);
  }
  loadingState.active = false;
  loadingState.message = '';
}

/**
 * 带加载状态的异步操作
 * @param {Function} fn - 异步函数
 * @param {string} loadingMessage - 加载提示
 * @param {string} context - 操作上下文
 */
async function withLoading(fn, loadingMessage, context) {
  showLoading(loadingMessage);
  try {
    const result = await fn();
    hideLoading();
    return result;
  } catch (error) {
    hideLoading();
    return handleError(error, context);
  }
}

// -------------------- 确认对话框 --------------------

/**
 * 显示确认对话框
 * @param {Object} options - 对话框选项
 * @returns {Promise<boolean>}
 */
function showConfirmDialog(options) {
  const {
    title = '确认操作',
    message = '确定要执行此操作吗？',
    confirmText = '确定',
    cancelText = '取消',
    dangerous = false
  } = options;

  return new Promise((resolve) => {
    const dialog = document.createElement('div');
    dialog.className = 'confirm-dialog-overlay';
    dialog.innerHTML = `
      <div class="confirm-dialog">
        <div class="confirm-header ${dangerous ? 'dangerous' : ''}">
          <strong>${title}</strong>
        </div>
        <div class="confirm-body">
          <p>${message}</p>
        </div>
        <div class="confirm-actions">
          <button class="dialog-btn cancel-btn">${cancelText}</button>
          <button class="dialog-btn confirm-btn ${dangerous ? 'danger-btn' : 'primary-btn'}">${confirmText}</button>
        </div>
      </div>
    `;

    document.body.appendChild(dialog);

    const confirmBtn = dialog.querySelector('.confirm-btn');
    const cancelBtn = dialog.querySelector('.cancel-btn');

    const cleanup = (result) => {
      dialog.style.opacity = '0';
      setTimeout(() => dialog.remove(), 200);
      resolve(result);
    };

    confirmBtn.addEventListener('click', () => cleanup(true));
    cancelBtn.addEventListener('click', () => cleanup(false));
    dialog.addEventListener('click', (e) => {
      if (e.target === dialog) cleanup(false);
    });

    // ESC 键取消
    const escHandler = (e) => {
      if (e.key === 'Escape') {
        cleanup(false);
        document.removeEventListener('keydown', escHandler);
      }
    };
    document.addEventListener('keydown', escHandler);

    // 渐入动画
    requestAnimationFrame(() => {
      dialog.style.opacity = '1';
      confirmBtn.focus();
    });
  });
}

// -------------------- Toast 消息增强 --------------------

const toastQueue = [];
let currentToast = null;

/**
 * 增强版 Toast 消息
 * @param {string} message - 消息内容
 * @param {string} type - 消息类型: success/info/warning/error
 * @param {number} duration - 显示时长(ms)
 */
function toastEnhanced(message, type = 'info', duration = 3000) {
  const toast = { message, type, duration };

  // 如果有正在显示的 toast，加入队列
  if (currentToast) {
    toastQueue.push(toast);
    return;
  }

  showToast(toast);
}

function showToast(toast) {
  const { message, type, duration } = toast;

  // 清除旧的
  const old = document.querySelector('.toast-enhanced');
  old?.remove();

  const icons = {
    success: '✓',
    info: 'ℹ',
    warning: '⚠',
    error: '✗'
  };

  const el = document.createElement('div');
  el.className = `toast-enhanced toast-${type}`;
  el.innerHTML = `
    <span class="toast-icon">${icons[type] || icons.info}</span>
    <span class="toast-message">${message}</span>
  `;

  document.body.appendChild(el);
  currentToast = el;

  // 渐入
  requestAnimationFrame(() => {
    el.style.opacity = '1';
    el.style.transform = 'translateY(0)';
  });

  // 自动移除
  setTimeout(() => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(-10px)';
    setTimeout(() => {
      el.remove();
      currentToast = null;

      // 显示队列中的下一个
      if (toastQueue.length > 0) {
        showToast(toastQueue.shift());
      }
    }, 200);
  }, duration);
}

// -------------------- 快捷键帮助面板 --------------------

const shortcuts = [
  { category: '通用', keys: 'Ctrl + S', desc: '保存项目' },
  { category: '通用', keys: 'Ctrl + Z', desc: '撤销' },
  { category: '通用', keys: 'Ctrl + Y', desc: '重做' },
  { category: '通用', keys: 'Esc', desc: '取消操作' },
  { category: '选择', keys: 'Ctrl + A', desc: '全选设备' },
  { category: '选择', keys: 'Ctrl + 左键', desc: '多选设备' },
  { category: '选择', keys: 'Delete', desc: '删除选中项' },
  { category: '编辑', keys: 'Ctrl + C', desc: '复制选中设备' },
  { category: '编辑', keys: 'Ctrl + V', desc: '粘贴设备' },
  { category: '画布', keys: 'Ctrl + 0', desc: '适配画布' },
  { category: '画布', keys: 'Ctrl + =', desc: '放大' },
  { category: '画布', keys: 'Ctrl + -', desc: '缩小' },
  { category: '画布', keys: '鼠标中键拖动', desc: '平移画布' },
  { category: '画布', keys: '鼠标滚轮', desc: '缩放画布' },
];

let shortcutsPanel = null;

/**
 * 显示快捷键帮助面板
 */
function showShortcutsPanel() {
  if (shortcutsPanel) {
    hideShortcutsPanel();
    return;
  }

  const panel = document.createElement('div');
  panel.className = 'shortcuts-panel-overlay';

  const categories = [...new Set(shortcuts.map(s => s.category))];
  const categoriesHtml = categories.map(cat => {
    const items = shortcuts.filter(s => s.category === cat);
    return `
      <div class="shortcuts-category">
        <h4>${cat}</h4>
        <div class="shortcuts-list">
          ${items.map(item => `
            <div class="shortcut-item">
              <kbd>${item.keys}</kbd>
              <span>${item.desc}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');

  panel.innerHTML = `
    <div class="shortcuts-panel">
      <div class="shortcuts-header">
        <h3>⌨️ 快捷键</h3>
        <button class="shortcuts-close">✕</button>
      </div>
      <div class="shortcuts-body">
        ${categoriesHtml}
      </div>
      <div class="shortcuts-footer">
        <small>按 <kbd>?</kbd> 或 <kbd>Shift + /</kbd> 切换此面板</small>
      </div>
    </div>
  `;

  document.body.appendChild(panel);
  shortcutsPanel = panel;

  panel.querySelector('.shortcuts-close').addEventListener('click', hideShortcutsPanel);
  panel.addEventListener('click', (e) => {
    if (e.target === panel) hideShortcutsPanel();
  });

  requestAnimationFrame(() => {
    panel.style.opacity = '1';
  });
}

/**
 * 隐藏快捷键帮助面板
 */
function hideShortcutsPanel() {
  if (shortcutsPanel) {
    shortcutsPanel.style.opacity = '0';
    setTimeout(() => {
      shortcutsPanel?.remove();
      shortcutsPanel = null;
    }, 200);
  }
}

// -------------------- 进度条 --------------------

let progressBar = null;

/**
 * 显示进度条
 * @param {string} message - 进度提示
 */
function showProgress(message = '处理中...') {
  hideProgress();

  const bar = document.createElement('div');
  bar.className = 'progress-overlay';
  bar.innerHTML = `
    <div class="progress-container">
      <div class="progress-message">${message}</div>
      <div class="progress-bar">
        <div class="progress-fill"></div>
      </div>
      <div class="progress-percent">0%</div>
    </div>
  `;

  document.body.appendChild(bar);
  progressBar = bar;

  requestAnimationFrame(() => {
    bar.style.opacity = '1';
  });
}

/**
 * 更新进度
 * @param {number} percent - 进度百分比 (0-100)
 * @param {string} message - 更新提示信息
 */
function updateProgress(percent, message = null) {
  if (!progressBar) return;

  const fill = progressBar.querySelector('.progress-fill');
  const percentText = progressBar.querySelector('.progress-percent');
  const messageEl = progressBar.querySelector('.progress-message');

  if (fill) fill.style.width = `${Math.min(100, Math.max(0, percent))}%`;
  if (percentText) percentText.textContent = `${Math.round(percent)}%`;
  if (message && messageEl) messageEl.textContent = message;
}

/**
 * 隐藏进度条
 */
function hideProgress() {
  if (progressBar) {
    progressBar.style.opacity = '0';
    setTimeout(() => {
      progressBar?.remove();
      progressBar = null;
    }, 200);
  }
}

// -------------------- 批量操作确认 --------------------

/**
 * 批量删除前确认
 * @param {Array} items - 要删除的项目
 * @param {string} itemType - 项目类型
 * @returns {Promise<boolean>}
 */
async function confirmBatchDelete(items, itemType = '项') {
  if (items.length === 0) return false;

  if (items.length === 1) {
    return await showConfirmDialog({
      title: `删除${itemType}`,
      message: `确定要删除选中的 ${itemType} 吗？`,
      dangerous: true
    });
  }

  return await showConfirmDialog({
    title: `批量删除${itemType}`,
    message: `确定要删除选中的 ${items.length} 个${itemType}吗？此操作不可撤销。`,
    confirmText: `删除 ${items.length} 个`,
    dangerous: true
  });
}

// -------------------- 导出模块函数 --------------------

// 将这些函数添加到 window 对象，供主代码使用
if (typeof window !== 'undefined') {
  window.EnspEnhancements = {
    handleError,
    safeAsync,
    showLoading,
    hideLoading,
    withLoading,
    showConfirmDialog,
    toastEnhanced,
    showShortcutsPanel,
    hideShortcutsPanel,
    showProgress,
    updateProgress,
    hideProgress,
    confirmBatchDelete
  };
}
