/* ════════════════════════════════════════════════════════════
    WINDOW & CANVAS MANAGER
════════════════════════════════════════════════════════════ */
const desktop = document.getElementById('desktop');
const canvas  = document.getElementById('desktop-canvas');
const taskbarEl = document.getElementById('taskbar-apps');

let zBase     = 10;
let focusedId = null;
const winState = {};   // id → { el, minimized, maximized, savedGeom, app }
let customApps = [];   // Хранилище динамически загруженных приложений

// По умолчанию центрируем бесконечную карту во все стороны
let zoom = 1;
let panX = -window.innerWidth;   
let panY = -window.innerHeight;  

// ── Сборка окна (Добавление на холст) ─────────────────────────
function createWindow(app) {
  const id  = app.id;
  
  if (winState[id]) {
    restoreWin(id);
    return;
  }

  const el  = document.createElement('div');
  el.className = 'app-window';
  el.id = `win-${id}`;
  el.style.cssText = `left:${app.x}px;top:${app.y}px;width:${app.w}px;height:${app.h}px;z-index:${++zBase}`;

  el.innerHTML = `
    <div class="win-titlebar" id="tb-${id}">
      <div class="win-dots">
        <button class="win-dot close"    title="Закрыть"    onclick="closeWin('${id}')"></button>
        <button class="win-dot minimize" title="Свернуть"   onclick="minimizeWin('${id}')"></button>
        <button class="win-dot maximize" title="Развернуть" onclick="maximizeWin('${id}')"></button>
      </div>
      <div class="win-title">${app.icon || ''} ${app.title}</div>
      <div style="width:42px;flex-shrink:0;"></div>
    </div>
    <div class="win-body">
      <iframe
        src="${app.url}"
        id="fr-${id}"
        sandbox="allow-scripts allow-same-origin allow-forms allow-modals allow-downloads allow-popups"
        loading="lazy"
        title="${app.title}"
      ></iframe>
      <div class="win-shield" id="sh-${id}"></div>
    </div>
    <div class="win-resize" id="rz-${id}"></div>
  `;

canvas.appendChild(el);

// ФИКС ДЛЯ СЫРОГО HTML (Чтобы монстры не пропадали после loadSession)
if (app.srcdoc) {
  el.querySelector('iframe').srcdoc = app.srcdoc;
}

  winState[id] = { el, minimized: false, maximized: false, savedGeom: null, app };

  el.addEventListener('mousedown', () => focusWin(id));
  makeDraggable(el, document.getElementById(`tb-${id}`), id);
  makeResizable(el, document.getElementById(`rz-${id}`), id);
  addTaskbarBtn(app);
  focusWin(id);
  saveSession();
}

// ── Кнопки таскбара ──────────────────────────────────────────
function addTaskbarBtn(app) {
  const id  = app.id;
  if (document.getElementById(`tbbtn-${id}`)) return;
  const btn = document.createElement('button');
  btn.className = 'tb-btn is-focused';
  btn.id = `tbbtn-${id}`;
  btn.innerHTML = `<span class="tb-icon">${app.icon || '📄'}</span>${app.title}`;
  btn.onclick = () => handleTaskbarClick(id);
  taskbarEl.appendChild(btn);
}

function updateTaskbarBtn(id) {
  const btn = document.getElementById(`tbbtn-${id}`);
  if (!btn) return;
  const s = winState[id];
  btn.classList.toggle('is-focused',   !s.minimized && focusedId === id);
  btn.classList.toggle('is-minimized', s.minimized);
}

// ── Фокусировка (ИСПРАВЛЕНО) ──────────────────────────────────────────────
function focusWin(id, skipSave = false) {
  if (focusedId === id && !winState[id].minimized) return;
  Object.values(winState).forEach(s => s.el.classList.remove('focused'));
  if (winState[id]) {
    winState[id].el.classList.add('focused');
    winState[id].el.style.zIndex = ++zBase;
  }
  focusedId = id;
  Object.keys(winState).forEach(updateTaskbarBtn);
  
  // Если передан флаг skipSave, сессию не сохраняем!
  if (!skipSave) {
    saveSession();
  }
}

function handleTaskbarClick(id) {
  const s = winState[id];
  if (s.minimized) {
    restoreWin(id);
  } else if (focusedId === id) {
    minimizeWin(id);
  } else {
    focusWin(id);
  }
}

// ── Свернуть / Развернуть / Закрыть ─────────────────────────
function minimizeWin(id) {
  winState[id].el.classList.add('minimized');
  winState[id].minimized = true;
  if (focusedId === id) focusedId = null;
  updateTaskbarBtn(id);
  saveSession();
}

function restoreWin(id) {
  winState[id].el.classList.remove('minimized');
  winState[id].minimized = false;
  focusWin(id);
  saveSession();
}

function maximizeWin(id) {
  const s  = winState[id];
  const el = s.el;
  if (s.maximized) {
    const g = s.savedGeom;
    el.style.left   = g.x + 'px';
    el.style.top    = g.y + 'px';
    el.style.width  = g.w + 'px';
    el.style.height = g.h + 'px';
    s.maximized = false;
  } else {
    s.savedGeom = { x: el.offsetLeft, y: el.offsetTop, w: el.offsetWidth, h: el.offsetHeight };
    
    // Подстраиваем окно под текущий вьюпорт пользователя с учётом зума и сдвига карты
    el.style.left   = (-panX / zoom) + 'px';
    el.style.top    = (-panY / zoom) + 'px';
    el.style.width  = (window.innerWidth / zoom) + 'px';
    el.style.height = (desktop.offsetHeight / zoom) + 'px';
    s.maximized = true;
  }
  focusWin(id);
  saveSession();
}

function closeWin(id) {
  winState[id].el.remove();
  document.getElementById(`tbbtn-${id}`)?.remove();
  if (focusedId === id) focusedId = null;
  delete winState[id];
  saveSession();
}

// ── Перетаскивание (В границах всего холста 300vw / 300vh) ────
function makeDraggable(winEl, handle, id) {
  let active = false, ox, oy, sx, sy;

  handle.addEventListener('mousedown', e => {
    if (e.target.classList.contains('win-dot')) return;
    active = true;
    sx = e.clientX;
    sy = e.clientY;
    ox = winEl.offsetLeft;
    oy = winEl.offsetTop;
    document.querySelectorAll('.win-shield').forEach(sh => sh.style.display = 'block');
    e.preventDefault();
  });

  document.addEventListener('mousemove', e => {
    if (!active) return;
    const nx = ox + (e.clientX - sx) / zoom;
    const ny = oy + (e.clientY - sy) / zoom;
    
    const maxX = canvas.offsetWidth  - 60;
    const maxY = canvas.offsetHeight - 10;
    
    winEl.style.left = Math.max(-winEl.offsetWidth + 100, Math.min(nx, maxX)) + 'px';
    winEl.style.top  = Math.max(0, Math.min(ny, maxY)) + 'px';
  });

  document.addEventListener('mouseup', () => {
    if (!active) return;
    active = false;
    document.querySelectorAll('.win-shield').forEach(sh => sh.style.display = 'none');
    saveSession();
  });
}

// ── Изменение размера (С учётом коэффициента Zoom) ───────────
function makeResizable(winEl, handle, id) {
  let active = false, sx, sy, sw, sh;

  handle.addEventListener('mousedown', e => {
    active = true;
    sx = e.clientX;
    sy = e.clientY;
    sw = winEl.offsetWidth;
    sh = winEl.offsetHeight;
    document.querySelectorAll('.win-shield').forEach(s => s.style.display = 'block');
    e.preventDefault();
    e.stopPropagation();
  });

  document.addEventListener('mousemove', e => {
    if (!active) return;
    const nw = Math.max(360, sw + (e.clientX - sx) / zoom);
    const nh = Math.max(240, sh + (e.clientY - sy) / zoom);
    winEl.style.width  = nw + 'px';
    winEl.style.height = nh + 'px';
  });

  document.addEventListener('mouseup', () => {
    if (!active) return;
    active = false;
    document.querySelectorAll('.win-shield').forEach(s => s.style.display = 'none');
    saveSession();
  });
}

/* ════════════════════════════════════════════════════════════
    МАСШТАБИРОВАНИЕ И ПАНОРАМИРОВАНИЕ (Draw.io style)
════════════════════════════════════════════════════════════ */
function updateCanvasTransform() {
  canvas.style.transform = `translate(${panX}px, ${panY}px) scale(${zoom})`;
  document.getElementById('zoom-level').textContent = Math.round(zoom * 100) + '%';
}

function zoomIn() { zoom = Math.min(zoom * 1.15, 3); updateCanvasTransform(); saveSession(); }
function zoomOut() { zoom = Math.max(zoom / 1.15, 0.25); updateCanvasTransform(); saveSession(); }
function resetZoom() { zoom = 1; panX = -window.innerWidth; panY = -window.innerHeight; updateCanvasTransform(); saveSession(); }

// Зум колесиком (Ctrl + Wheel, либо Wheel на пустом месте)
// Зум колесиком к курсору мыши (Ctrl + Wheel, либо Wheel на пустом месте)
desktop.addEventListener('wheel', e => {
  if (e.ctrlKey || e.target === desktop || e.target === canvas) {
    e.preventDefault();
    
    // 1. Фиксируем координаты мыши относительно экрана в момент скролла
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    // 2. Вычисляем точку на холсте, в которую указывает курсор ДО изменения зума
    const canvasX = (mouseX - panX) / zoom;
    const canvasY = (mouseY - panY) / zoom;
    
    // 3. Изменяем масштаб
    const zoomFactor = 1.08;
    if (e.deltaY < 0) {
      zoom = Math.min(zoom * zoomFactor, 3);
    } else {
      zoom = Math.max(zoom / zoomFactor, 0.25);
    }
    
    // 4. Корректируем панорамирование, чтобы точка под курсором не сдвинулась
    panX = mouseX - canvasX * zoom;
    panY = mouseY - canvasY * zoom;
    
    updateCanvasTransform();
    saveSession();
  }
}, { passive: false });

// Движение холста левым кликом мыши
let isPanning = false;
let startX, startY;

desktop.addEventListener('mousedown', e => {
  if (e.target === desktop || e.target === canvas) {
    isPanning = true;
    desktop.classList.add('grabbing');
    startX = e.clientX - panX;
    startY = e.clientY - panY;
  }
});

document.addEventListener('mousemove', e => {
  if (!isPanning) return;
  panX = e.clientX - startX;
  panY = e.clientY - startY;
  updateCanvasTransform();
});

document.addEventListener('mouseup', () => {
  if (isPanning) {
    isPanning = false;
    desktop.classList.remove('grabbing');
    saveSession();
  }
});

/* ════════════════════════════════════════════════════════════
    УПРАВЛЕНИЕ ДИНАМИЧЕСКИМИ ПАПКАМИ И МОДАЛКОЙ
════════════════════════════════════════════════════════════ */
let appCounter = Date.now();

function openAddModal() {
  document.getElementById('modal-overlay').classList.add('open');
  document.getElementById('m-title').focus();
}

function closeAddModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  ['m-title','m-icon','m-url'].forEach(id => document.getElementById(id).value = '');
}

function triggerFolderSelect() {
  document.getElementById('folder-input').click();
}

// Чтение структуры папки и автоматический запуск HTML
function handleFolderSelect(e) {
  const files = e.target.files;
  let detectedHTMLCount = 0;

  for (let file of files) {
    if (file.name.toLowerCase().endsWith('.html')) {
      const title = file.name.replace(/\.html$/i, '');
      const url = file.webkitRelativePath; 
      const id = 'dyn_' + (++appCounter);

      // Раскидываем новые окна в области видимости текущего экрана на холсте
      const app = {
        id, title, icon: '📁', url,
        x: (-panX / zoom) + 60 + Math.random() * 160,
        y: (-panY / zoom) + 40 + Math.random() * 100,
        w: 860, h: 600
      };

      customApps.push(app);
      createWindow(app);
      detectedHTMLCount++;
    }
  }

  if (detectedHTMLCount > 0) {
    showToast(`Запущено приложений из папки: ${detectedHTMLCount}`);
    closeAddModal();
    saveSession();
  } else {
    showToast('В выбранной папке не найдены файлы .html');
  }
}

function confirmAddApp() {
  const title = document.getElementById('m-title').value.trim() || 'Приложение';
  const icon  = document.getElementById('m-icon').value.trim()  || '📄';
  const url   = document.getElementById('m-url').value.trim();
  if (!url) { showToast('Укажите URL или имя файла'); return; }

  const id  = 'manual_' + (++appCounter);
  const app = {
    id, title, icon, url,
    x: (-panX / zoom) + 100, 
    y: (-panY / zoom) + 80, 
    w: 860, h: 600
  };

  customApps.push(app);
  createWindow(app);
  closeAddModal();
  showToast(`Открыто: ${title}`);
}

document.getElementById('modal-overlay').addEventListener('click', e => {
  if (e.target === document.getElementById('modal-overlay')) closeAddModal();
});

document.getElementById('modal-overlay').addEventListener('keydown', e => {
  if (e.key === 'Enter') confirmAddApp();
  if (e.key === 'Escape') closeAddModal();
});

window.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'OPEN_MONSTER_TAB') {
        const { title, html } = event.data;
        
        // Генерируем безопасный ID на основе имени монстра.
        // Благодаря этому, если ты кликнешь на одного и того же гоблина дважды,
        // вместо создания дубликата просто сфокусируется уже открытое окно.
        const monsterId = 'monster_' + title.replace(/[^a-zA-Z0-9а-яА-ЯёЁ]/g, '_');
        
        const isNew = !winState[monsterId];
        
        const app = {
            id: monsterId,
            title: title,
            icon: '🐉', 
            url: 'about:blank', // Фолбек-заглушка для src
            srcdoc: html,       // Клади сам HTML прямо в объект приложения
            x: (-panX / zoom) + 120 + Math.random() * 60,
            y: (-panY / zoom) + 80 + Math.random() * 60,
            w: 520, // Оптимальная ширина для вертикального листа монстра
            h: 700
        };
        
        // Запускаем твою стандартную сборку окна
        createWindow(app);
        
        // Если окно создано впервые, прокидываем в него присланный HTML
        if (isNew) {
            const iframe = document.getElementById(`fr-${monsterId}`);
            if (iframe) {
                iframe.srcdoc = html;
            }
        }
    }
});
/* ════════════════════════════════════════════════════════════
    СОХРАНЕНИЕ СЕССИИ (LOCALSTORAGE)
════════════════════════════════════════════════════════════ */
function saveSession() {
  const openWindowsData = [];
  
  Object.keys(winState).forEach(id => {
    const s = winState[id];
    openWindowsData.push({
      id: id,
      app: s.app,
      x: s.maximized ? s.savedGeom.x : s.el.offsetLeft,
      y: s.maximized ? s.savedGeom.y : s.el.offsetTop,
      w: s.maximized ? s.savedGeom.w : s.el.offsetWidth,
      h: s.maximized ? s.savedGeom.h : s.el.offsetHeight,
      minimized: s.minimized,
      maximized: s.maximized,
      savedGeom: s.savedGeom,
      zIndex: s.el.style.zIndex
    });
  });

  const session = {
    zoom, panX, panY, zBase, focusedId,
    customApps,
    openWindowsData
  };

  localStorage.setItem('dnd_desktop_session', JSON.stringify(session));
}

function loadSession() {
  const sessionStr = localStorage.getItem('dnd_desktop_session');
  if (!sessionStr) {
    // Если сессии нет, просто первично инициализируем стартовый вид
    updateCanvasTransform();
    return;
  }

  try {
    const session = JSON.parse(sessionStr);
    zoom = session.zoom || 1;
    panX = session.panX !== undefined ? session.panX : -window.innerWidth;
    panY = session.panY !== undefined ? session.panY : -window.innerHeight;
    zBase = session.zBase || 10;
    customApps = session.customApps || [];

    updateCanvasTransform();

    if (session.openWindowsData && session.openWindowsData.length > 0) {
      session.openWindowsData.forEach(wData => {
        const app = wData.app;
        createWindow(app);
        
        const s = winState[app.id];
        if (s) {
          s.el.style.left = wData.x + 'px';
          s.el.style.top = wData.y + 'px';
          s.el.style.width = wData.w + 'px';
          s.el.style.height = wData.h + 'px';
          s.el.style.zIndex = wData.zIndex;
          s.minimized = wData.minimized;
          s.maximized = wData.maximized;
          s.savedGeom = wData.savedGeom;

          if (s.minimized) s.el.classList.add('minimized');
          if (s.maximized) {
            s.el.style.left   = (-panX / zoom) + 'px';
            s.el.style.top    = (-panY / zoom) + 'px';
            s.el.style.width  = (window.innerWidth / zoom) + 'px';
            s.el.style.height = (desktop.offsetHeight / zoom) + 'px';
          }
          updateTaskbarBtn(app.id);
        }
      });
    }
    
    if (session.focusedId) {
      focusWin(session.focusedId);
    }
  } catch (err) {
    console.error("Ошибка парсинга сессии:", err);
  }
}

/* ════════════════════════════════════════════════════════════
    TOAST & BOOT
════════════════════════════════════════════════════════════ */
let toastTimer;
function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2500);
}

(function boot() {
  loadSession();
})();

