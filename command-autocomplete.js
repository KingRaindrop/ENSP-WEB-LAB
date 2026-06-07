// ===================================================================
// eNSP Web Lab - 命令自动补全模块
// ===================================================================

/**
 * VRP 命令字典和自动补全引擎
 */
const CommandAutocomplete = (function() {

  // VRP 命令库
  const commands = {
    // 用户视图命令
    user: [
      'system-view',
      'display current-configuration',
      'display this',
      'display ip interface brief',
      'display interface',
      'display vlan',
      'display routing-table',
      'display arp',
      'display mac-address',
      'display ospf',
      'display ospf peer',
      'display ospf routing',
      'display rip',
      'display acl',
      'display acl all',
      'display traffic-filter applied-record',
      'ping',
      'tracert',
      'quit',
      'save',
      'reset saved-configuration',
      'reset acl counter',
      'reboot'
    ],

    // 系统视图命令
    system: [
      'sysname',
      'interface',
      'vlan',
      'vlan batch',
      'ospf',
      'rip',
      'acl',
      'acl number',
      'ip route-static',
      'undo ip route-static',
      'dhcp enable',
      'ip pool',
      'aaa',
      'user-interface',
      'quit',
      'return',
      'display this'
    ],

    // 接口视图命令
    interface: [
      'ip address',
      'undo ip address',
      'shutdown',
      'undo shutdown',
      'description',
      'port link-type',
      'port default vlan',
      'port trunk allow-pass vlan',
      'port trunk pvid vlan',
      'speed',
      'duplex',
      'mtu',
      'ospf enable',
      'rip enable',
      'traffic-filter inbound acl',
      'traffic-filter outbound acl',
      'undo traffic-filter inbound',
      'undo traffic-filter outbound',
      'dot1q termination vid',
      'arp-proxy enable',
      'quit',
      'return'
    ],

    // VLAN 视图命令
    vlan: [
      'description',
      'name',
      'quit',
      'return'
    ],

    // OSPF 视图命令
    ospf: [
      'area',
      'router-id',
      'quit',
      'return'
    ],

    // OSPF 区域视图命令
    ospfArea: [
      'network',
      'quit',
      'return'
    ],

    // ACL 视图命令
    acl: [
      'rule permit',
      'rule deny',
      'rule',
      'undo rule',
      'description',
      'quit',
      'return'
    ],

    // DHCP 地址池视图命令
    pool: [
      'network',
      'gateway-list',
      'dns-list',
      'lease',
      'quit',
      'return'
    ],

    // 接口类型
    interfaceTypes: [
      'GigabitEthernet',
      'Ethernet',
      'Serial',
      'Vlanif',
      'LoopBack',
      'NULL'
    ],

    // 常用参数
    params: {
      'port link-type': ['access', 'trunk', 'hybrid'],
      'port trunk allow-pass vlan': ['all', 'to'],
      'speed': ['10', '100', '1000', 'auto'],
      'duplex': ['full', 'half', 'auto'],
      'rule': ['permit', 'deny']
    }
  };

  // 命令缩写映射
  const abbreviations = {
    'sys': 'system-view',
    'int': 'interface',
    'dis': 'display',
    'q': 'quit',
    'ret': 'return',
    'un': 'undo',
    'sh': 'shutdown',
    'ip': 'ip',
    'add': 'address',
    'ge': 'GigabitEthernet',
    'gi': 'GigabitEthernet',
    'eth': 'Ethernet',
    'vlan': 'vlan',
    'ospf': 'ospf'
  };

  /**
   * 获取当前模式的可用命令
   * @param {string} mode - 命令模式 (user/system/interface/vlan/ospf等)
   * @returns {Array<string>}
   */
  function getCommandsForMode(mode) {
    return commands[mode] || commands.user;
  }

  /**
   * 扩展命令缩写
   * @param {string} input - 输入的命令
   * @returns {string}
   */
  function expandAbbreviation(input) {
    const parts = input.trim().split(/\s+/);
    const expanded = parts.map(part => {
      const lower = part.toLowerCase();
      return abbreviations[lower] || part;
    });
    return expanded.join(' ');
  }

  /**
   * 获取命令补全建议
   * @param {string} input - 用户输入
   * @param {string} mode - 当前命令模式
   * @returns {Array<Object>}
   */
  function getSuggestions(input, mode = 'user') {
    if (!input || input.trim() === '') return [];

    const inputLower = input.toLowerCase().trim();
    const parts = inputLower.split(/\s+/);
    const firstWord = parts[0];

    const availableCommands = getCommandsForMode(mode);
    const suggestions = [];

    // 匹配完整命令
    availableCommands.forEach(cmd => {
      const cmdLower = cmd.toLowerCase();

      // 前缀匹配
      if (cmdLower.startsWith(inputLower)) {
        suggestions.push({
          text: cmd,
          display: cmd,
          type: 'command',
          match: 'prefix'
        });
      }
      // 包含匹配
      else if (cmdLower.includes(inputLower) && suggestions.length < 10) {
        suggestions.push({
          text: cmd,
          display: cmd,
          type: 'command',
          match: 'contains'
        });
      }
    });

    // 缩写匹配
    Object.keys(abbreviations).forEach(abbr => {
      if (abbr.startsWith(firstWord) && !suggestions.find(s => s.text === abbreviations[abbr])) {
        const fullCmd = abbreviations[abbr];
        suggestions.push({
          text: fullCmd,
          display: `${abbr} → ${fullCmd}`,
          type: 'abbreviation',
          match: 'abbr'
        });
      }
    });

    // 接口类型补全
    if (firstWord === 'interface' || firstWord === 'int') {
      if (parts.length === 1 || parts.length === 2) {
        commands.interfaceTypes.forEach(type => {
          if (parts.length === 1 || type.toLowerCase().startsWith(parts[1])) {
            suggestions.push({
              text: `interface ${type}`,
              display: `interface ${type}`,
              type: 'interface',
              match: 'type'
            });
          }
        });
      }
    }

    // 参数补全
    const cmdKey = parts.slice(0, -1).join(' ');
    if (commands.params[cmdKey] && parts.length > 1) {
      const lastWord = parts[parts.length - 1];
      commands.params[cmdKey].forEach(param => {
        if (param.toLowerCase().startsWith(lastWord)) {
          suggestions.push({
            text: `${cmdKey} ${param}`,
            display: param,
            type: 'parameter',
            match: 'param'
          });
        }
      });
    }

    // 按匹配质量排序
    suggestions.sort((a, b) => {
      const order = { prefix: 0, abbr: 1, type: 2, param: 3, contains: 4 };
      return order[a.match] - order[b.match];
    });

    return suggestions.slice(0, 8); // 最多返回8条建议
  }

  /**
   * 创建补全UI
   * @param {HTMLElement} inputElement - 输入框元素
   * @param {Function} getModeCallback - 获取当前模式的回调
   */
  function attachAutocomplete(inputElement, getModeCallback) {
    let suggestionsBox = null;
    let currentSuggestions = [];
    let selectedIndex = -1;

    // 创建建议框
    function createSuggestionsBox() {
      if (suggestionsBox) return suggestionsBox;

      const box = document.createElement('div');
      box.className = 'cli-suggestions';
      box.style.display = 'none';
      inputElement.parentElement.appendChild(box);
      suggestionsBox = box;
      return box;
    }

    // 显示建议
    function showSuggestions(suggestions) {
      if (suggestions.length === 0) {
        hideSuggestions();
        return;
      }

      const box = createSuggestionsBox();
      currentSuggestions = suggestions;
      selectedIndex = -1;

      box.innerHTML = suggestions.map((sug, idx) => {
        const typeClass = `sug-${sug.type}`;
        return `<div class="cli-suggestion ${typeClass}" data-index="${idx}">
          <span class="sug-text">${highlightMatch(sug.display, inputElement.value)}</span>
          <span class="sug-type">${sug.type}</span>
        </div>`;
      }).join('');

      box.style.display = 'block';

      // 点击选择
      box.querySelectorAll('.cli-suggestion').forEach(item => {
        item.addEventListener('click', () => {
          const idx = parseInt(item.dataset.index);
          selectSuggestion(idx);
        });
      });
    }

    // 隐藏建议
    function hideSuggestions() {
      if (suggestionsBox) {
        suggestionsBox.style.display = 'none';
      }
      currentSuggestions = [];
      selectedIndex = -1;
    }

    // 高亮匹配部分
    function highlightMatch(text, input) {
      const inputLower = input.toLowerCase();
      const textLower = text.toLowerCase();
      const index = textLower.indexOf(inputLower);

      if (index === -1) return text;

      return text.slice(0, index) +
             '<strong>' + text.slice(index, index + input.length) + '</strong>' +
             text.slice(index + input.length);
    }

    // 选择建议
    function selectSuggestion(index) {
      if (index < 0 || index >= currentSuggestions.length) return;

      const suggestion = currentSuggestions[index];
      inputElement.value = suggestion.text;
      hideSuggestions();
      inputElement.focus();
    }

    // 更新选中状态
    function updateSelection() {
      if (!suggestionsBox) return;

      const items = suggestionsBox.querySelectorAll('.cli-suggestion');
      items.forEach((item, idx) => {
        if (idx === selectedIndex) {
          item.classList.add('selected');
          item.scrollIntoView({ block: 'nearest' });
        } else {
          item.classList.remove('selected');
        }
      });
    }

    // 输入事件
    inputElement.addEventListener('input', (e) => {
      const input = e.target.value;
      const mode = getModeCallback();
      const suggestions = getSuggestions(input, mode);
      showSuggestions(suggestions);
    });

    // 键盘事件
    inputElement.addEventListener('keydown', (e) => {
      // Tab 键补全
      if (e.key === 'Tab') {
        e.preventDefault();

        if (currentSuggestions.length > 0) {
          const index = selectedIndex >= 0 ? selectedIndex : 0;
          selectSuggestion(index);
        } else {
          // 尝试扩展缩写
          const expanded = expandAbbreviation(inputElement.value);
          if (expanded !== inputElement.value) {
            inputElement.value = expanded;
          }
        }
        return;
      }

      // 上下箭头选择
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (currentSuggestions.length > 0) {
          selectedIndex = (selectedIndex + 1) % currentSuggestions.length;
          updateSelection();
        }
        return;
      }

      if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (currentSuggestions.length > 0) {
          selectedIndex = selectedIndex <= 0 ? currentSuggestions.length - 1 : selectedIndex - 1;
          updateSelection();
        }
        return;
      }

      // Enter 确认
      if (e.key === 'Enter') {
        if (selectedIndex >= 0 && currentSuggestions.length > 0) {
          e.preventDefault();
          selectSuggestion(selectedIndex);
          return;
        }
      }

      // Esc 取消
      if (e.key === 'Escape') {
        hideSuggestions();
        return;
      }
    });

    // 失去焦点时隐藏
    inputElement.addEventListener('blur', () => {
      setTimeout(hideSuggestions, 200); // 延迟以允许点击选择
    });

    return {
      destroy: () => {
        suggestionsBox?.remove();
        suggestionsBox = null;
      }
    };
  }

  // 公开 API
  return {
    getSuggestions,
    expandAbbreviation,
    attachAutocomplete,
    commands
  };
})();

// 导出到全局
if (typeof window !== 'undefined') {
  window.CommandAutocomplete = CommandAutocomplete;
}
