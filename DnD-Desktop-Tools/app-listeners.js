/**
 * app-listeners.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Централизованный реестр межоконных событий (window.message).
 *
 * КАК ДОБАВИТЬ ОБРАБОТЧИК ДЛЯ НОВОГО ПРИЛОЖЕНИЯ:
 *   1. Добавьте новый ключ в объект APP_HANDLERS ниже.
 *   2. Ключ = значение поля `type` в объекте event.data, которое шлёт приложение.
 *   3. Значение = функция (data, event) => { ... }
 *      - data  — это event.data (уже проверено на существование и наличие type)
 *      - event — оригинальный MessageEvent (нужен редко, например для event.origin)
 *
 * КАК НАЛАДИТЬ ВЗАИМОДЕЙСТВИЕ МЕЖДУ СУЩЕСТВУЮЩИМИ ПРИЛОЖЕНИЯМИ:
 *   Обработчик одного типа может вызывать логику другого — просто обратитесь
 *   к winState, postMessageToApp() или другим вспомогательным функциям ниже.
 * ─────────────────────────────────────────────────────────────────────────────
 */

// ── Дефолтные размеры окон по приложениям ───────────────────────────────────
//
// Ключ — фрагмент URL, id или title приложения; значение — { w, h } в пикселях.
// Применяется только при ПЕРВОМ открытии окна (не при восстановлении сессии).
//
// КАК ДОБАВИТЬ НОВОЕ ПРИЛОЖЕНИЕ:
//   Укажите любую уникальную подстроку из URL файла, его id или title.
//   Пример: 'myapp.html' совпадёт с 'C:\DnD\apps\myapp.html'
//
const APP_WINDOW_DEFAULTS = {  
  'Battle Tracker':  { w: 1400,  h: 800 },  
  'Bestiary':    { w: 400,  h: 650 }, 
  'Cubes': { w: 735,  h: 300 },
  'Body Parts': { w: 735,  h: 700 }, 
  'Chaos Meter': { w: 420,  h: 250 }, 
  'Clock': { w: 425,  h: 835 },
  'Weather': { w: 450,  h: 835 },
  'NPC Generator': { w: 900,  h: 650 },
  'Small Loot Generator': { w: 550,  h: 480 },
  'Soundboard': { w: 825,  h: 300 },
  'Spell Book': { w: 1000,  h: 770 },
  'Vivarium':   { w: 1100, h: 700 }, 
  'Wonderful Decks':   { w: 1050, h: 700 }, 
};

/**
 * Применяет размеры из APP_WINDOW_DEFAULTS к объекту app.
 * Вызывается из createWindow() в scripts.js.
 * Пропускает окна, восстановленные из сессии (_fromSession = true).
 */
function applyWindowDefaults(app) {
  if (app._fromSession) return; // сохранённые размеры пользователя — не трогаем

  const matchedKey = Object.keys(APP_WINDOW_DEFAULTS).find(fragment =>
    (app.url   && app.url.includes(fragment))  ||
    (app.id    && app.id.includes(fragment))   ||
    (app.title && app.title.includes(fragment))
  );

  if (matchedKey) {
    const def = APP_WINDOW_DEFAULTS[matchedKey];
    app.w = def.w;
    app.h = def.h;
    // Пересчитываем позицию под новые размеры
    if (typeof centeredWindowPosition === 'function') {
      const pos = centeredWindowPosition(app.w, app.h);
      app.x = pos.x;
      app.y = pos.y;
    }
  }
}


// ── Вспомогательные функции ──────────────────────────────────────────────────

/**
 * Отправить postMessage во все открытые окна с заданным фрагментом URL.
 * Пример: postMessageToApp('bestiary.html', { type: 'HIGHLIGHT', id: 42 });
 */
function postMessageToApp(urlFragment, message) {
  Object.values(winState).forEach(s => {
    if (!s || !s.el) return;
    const iframe = s.el.querySelector('iframe');
    if (iframe && iframe.getAttribute('src') && iframe.getAttribute('src').includes(urlFragment)) {
      try { iframe.contentWindow.postMessage(message, '*'); } catch (e) { /* cross-origin */ }
    }
  });
}

/**
 * Найти winState-запись по фрагменту URL iframe.
 * Возвращает первое совпадение или null.
 */
function findWinByUrl(urlFragment) {
  return Object.values(winState).find(s => {
    if (!s || !s.el) return false;
    const iframe = s.el.querySelector('iframe');
    return iframe && iframe.getAttribute('src') && iframe.getAttribute('src').includes(urlFragment);
  }) || null;
}


// ── Реестр обработчиков ──────────────────────────────────────────────────────
//
// Структура записи:
//   'ТИП_СООБЩЕНИЯ': function(data, event) { ... }
//
const APP_HANDLERS = {

  // ── Динамическое изменение размера окна просмотрщика изображений ──────────
  // Источник: viewer.html
  // Шлёт: { type: 'resize-image-viewer', width: Number, height: Number }
  'resize-image-viewer': function(data) {
    const targetW = data.width;
    const targetH = data.height;

    Object.keys(winState).forEach(id => {
      const s = winState[id];
      if (!s || !s.el) return;

      const iframe = s.el.querySelector('iframe');
      if (iframe && iframe.getAttribute('src') && iframe.getAttribute('src').includes('viewer.html')) {
        s.el.style.width  = targetW + 'px';
        s.el.style.height = targetH + 'px';
        s.app.w = targetW;
        s.app.h = targetH;
      }
    });

    saveSession();
  },


  // ── Открытие карточки монстра из Бестиария / Вивария ─────────────────────
  // Источник: bestiary.html (передаёт url) или vivarium.html (передаёт html)
  // Шлёт: { type: 'OPEN_MONSTER_TAB', title: String, html?: String, url?: String }
  'OPEN_MONSTER_TAB': function(data) {
    const { title, html, url } = data;

    const monsterId = 'monster_' + title.replace(/[^a-zA-Z0-9а-яА-ЯёЁ]/g, '_');
    const isNew = !winState[monsterId];

    const app = {
      id:     monsterId,
      title,
      icon:   '🐉',
      url:    url || 'about:blank',
      srcdoc: html,
      ...(() => { const p = centeredWindowPosition(520, 700, Math.floor(Math.random() * 3)); return { x: p.x, y: p.y }; })(),
      w: 520,
      h: 700
    };

    createWindow(app);

    // Для Вивария (srcdoc-режим) — явно прописываем HTML в iframe
    if (isNew && html) {
      const iframe = document.getElementById(`fr-${monsterId}`);
      if (iframe) iframe.srcdoc = html;
    }
  },


  // ── Добавьте обработчики новых приложений ниже ───────────────────────────
  //
  // Пример:
  // 'MY_APP_EVENT': function(data, event) {
  //   console.log('Получено из моего приложения:', data);
  // },

};


// ── Единая точка входа для всех message-событий ──────────────────────────────
window.addEventListener('message', function(event) {
  if (!event.data || !event.data.type) return;

  const handler = APP_HANDLERS[event.data.type];
  if (handler) {
    handler(event.data, event);
  }
});
