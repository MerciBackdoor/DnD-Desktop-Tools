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
  'Cubes': { w: 880,  h: 340 },
  'Body Parts': { w: 735,  h: 700 }, 
  'Chaos Meter': { w: 420,  h: 250 }, 
  'Clock': { w: 425,  h: 835 },
  'Weather': { w: 450,  h: 835 },
  'NPC Generator': { w: 900,  h: 650 },
  'Small Loot Generator': { w: 550,  h: 480 },
  'Soundboard': { w: 820,  h: 370 },
  'Spell Book': { w: 1000,  h: 770 },
  'Vivarium':   { w: 1100, h: 700 }, 
  'Wonderful Decks':   { w: 1050, h: 700 }, 
  'Ability Scores': { w: 1090,  h: 580 },
  'Character Card': { w: 420,  h: 720 },
  'Traps': { w: 610,  h: 680 },
  'trap_card': { w: 650, h: 560 },
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



  'dnd-desktop-show-trap-ref': function(data) {
    const traps = data.traps;
    const refId = 'trap_reference_window';
    const isNew = !winState[refId];
    
    let htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
        <style>
          body { background: #12141a; color: #d4c9b0; font-family: 'Cormorant Garamond', serif; font-size: 1.15em; padding: 15px; margin: 0; }
          h2 { font-family: 'Cinzel', serif; color: #c9a84c; border-bottom: 1px solid #2a2e3a; padding-bottom: 5px; margin-top: 0; }
          .trap-card { background: #1c1f28; border: 1px solid #2a2e3a; border-radius: 4px; padding: 12px; margin-bottom: 15px; }
          .trap-title { font-family: 'Cinzel', serif; color: #d32f2f; font-size: 1.3em; margin-bottom: 5px; display: flex; justify-content: space-between; }
          .trap-meta { font-style: italic; color: #9e9e9d; font-size: 0.9em; margin-bottom: 10px; }
          .trap-prop { margin-bottom: 4px; }
          .trap-prop strong { color: #fff; font-family: 'Cinzel', serif; font-size: 0.85em; }
        </style>
      </head>
      <body>
        <h2>Справочник ловушек</h2>
    `;
    
    traps.forEach(t => {
      htmlContent += `
        <div class="trap-card">
          <div class="trap-title"><span>${t.name}</span><span style="font-size: 0.7em; color: #c9a84c;">${t.danger}</span></div>
          <div class="trap-meta">${t.type}</div>
          <div class="trap-prop"><strong>Триггер:</strong> ${t.trigger}</div>
          <div class="trap-prop"><strong>Эффект:</strong> ${t.effect}</div>
          <div class="trap-prop"><strong>Обнаружение:</strong> ${t.detect}</div>
          <div class="trap-prop"><strong>Обезвреживание:</strong> ${t.disable}</div>
          ${t.note ? `<div class="trap-prop"><strong>Примечание:</strong> ${t.note}</div>` : ''}
        </div>
      `;
    });
    
    htmlContent += `</body></html>`;

    const app = {
      id: refId,
      title: 'Справочник ловушек',
      url: 'about:blank',
      srcdoc: htmlContent,
      w: 600,
      h: 800
    };

    if (typeof centeredWindowPosition === 'function') {
      const p = centeredWindowPosition(600, 800);
      app.x = p.x;
      app.y = p.y;
    }

    if (typeof createWindow === 'function') {
      createWindow(app);
      if (isNew) {
        setTimeout(() => {
          const iframe = document.getElementById('fr-' + refId);
          if (iframe) iframe.srcdoc = htmlContent;
        }, 50);
      }
    }
  },
// ── Create Character Card Window ──────────────────────────────────────────
  // Source: Ability Scores app
  // Triggers: Creates a new styled window holding character summary sheets
  'dnd-desktop-create-card': function(data) {
    const char = data.character;
    const cardId = 'char_card_' + char.name.replace(/[^a-zA-Z0-9а-яА-ЯёЁ]/g, '_');
    const isNew = !winState[cardId];

    // Map through the skills array to generate HTML output for the skill grid
    const skillsHTML = char.skills.map(s => `
      <div class="skill-item ${s.state > 0 ? 'proficient' : ''}">
        <span class="skill-val">${s.val}</span>
        <span class="skill-name">${s.name}</span>
      </div>
    `).join('');

    // Generate a self-contained HTML document for the iframe srcdoc
const cardHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
        <style>
          body {
            background: #12141a; color: #d4c9b0;
            font-family: 'Cormorant Garamond', serif; font-size: 1.1em;
            padding: 15px; margin: 0; box-sizing: border-box;
          }
          h2 {
            font-family: 'Cinzel', serif; color: #c9a84c;
            margin: 0 0 4px 0; border-bottom: 1px solid #2a2e3a; padding-bottom: 4px;
            font-size: 1.4em; letter-spacing: 1px;
          }
          .sub { font-style: italic; color: #9e9e9d; margin-bottom: 12px; font-size: 0.9em; }
          
          .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 12px; text-align: center; }
          .stat-badge { background: #1c1f28; padding: 6px; border-radius: 4px; border: 1px solid #2a2e3a; }
          
          /* Updated label styling: larger size and white color */
          .stat-badge label { font-family: 'Cinzel', serif; font-size: 13px; color: #ffffff; display: block; letter-spacing: 0.5px; }
          .stat-badge val { color: #c9a84c; font-size: 1.2em; font-weight: bold; display: block; margin-top: 4px; }
          
          h3 { font-family: 'Cinzel', serif; font-size: 12px; color: #c9a84c; margin: 12px 0 6px 0; letter-spacing: 1px; text-transform: uppercase; }
          
          .scores-box {
            display: grid; grid-template-columns: repeat(6, 1fr); gap: 4px;
            background: #1c1f28; padding: 8px; border-radius: 4px; border: 1px solid #2a2e3a; text-align: center;
            margin-bottom: 12px;
          }
          .score-row { border: 1px solid rgba(255,255,255,0.03); padding: 4px 0; background: #12141a; border-radius: 3px; }
          .score-row label { font-family: 'Cinzel', serif; font-size: 10px; color: #9e9e9d; display: block; }
          .score-row val { font-size: 1.1em; font-weight: bold; color: #fff; }
          
          .skills-box {
            display: grid; grid-template-columns: 1fr 1fr; gap: 4px 10px;
            background: #1c1f28; padding: 10px; border-radius: 4px; border: 1px solid #2a2e3a;
            font-size: 0.85em;
          }
          .skill-item { display: flex; gap: 8px; align-items: center; }
          .skill-val { font-family: 'Cinzel', serif; font-weight: bold; width: 22px; text-align: right; color: #5a5e69; }
          .skill-name { color: #a19a89; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
          
          .proficient .skill-val { color: #c9a84c; }
          .proficient .skill-name { color: #fff; }
        </style>
      </head>
      <body>
        <h2>${char.name}</h2>
        <div class="sub">Уровень ${char.level} — ${char.race} (${char.class} ${char.subclass})</div>
        
        <div class="grid-3">
          <div class="stat-badge"><label>Владение</label><val>${char.profBonus}</val></div>
          <div class="stat-badge"><label>Пасс. Внимат.</label><val>${char.passivePerception}</val></div>
          <div class="stat-badge"><label>Спас. Магии</label><val>${char.spellDC}</val></div>
        </div>

        <div class="grid-3" style="grid-template-columns: 1fr 1fr; margin-bottom: 5px;">
          <div class="stat-badge" style="padding: 6px;"><label>Атака Заклинанием</label><val>${char.spellAttack}</val></div>
          <div class="stat-badge" style="padding: 6px;"><label>Каст. Характеристика</label><val style="font-family:'Cinzel'; font-size:1em; margin-top:4px;">${char.spellBase}</val></div>
        </div>

        <h3>Модификаторы Характеристик</h3>
        <div class="scores-box">
          <div class="score-row"><label>STR</label><val>${char.modifiers.STR}</val></div>
          <div class="score-row"><label>DEX</label><val>${char.modifiers.DEX}</val></div>
          <div class="score-row"><label>CON</label><val>${char.modifiers.CON}</val></div>
          <div class="score-row"><label>INT</label><val>${char.modifiers.INT}</val></div>
          <div class="score-row"><label>WIS</label><val>${char.modifiers.WIS}</val></div>
          <div class="score-row"><label>CHA</label><val>${char.modifiers.CHA}</val></div>
        </div>

        <h3>Спасброски и Навыки</h3>
        <div class="skills-box">
          ${skillsHTML}
        </div>
      </body>
      </html>
    `;

    const app = {
      id:     cardId,
      title:  'Карточка: ' + char.name,
      icon:   '🛡️',
      url:    'about:blank',
      srcdoc: cardHTML,
      ...(() => { const p = centeredWindowPosition(460, 720, Math.floor(Math.random() * 2)); return { x: p.x, y: p.y }; })(),
      w: 460,
      h: 720
    };

    // Spawn window in DnD Desktop
    createWindow(app);

    if (isNew) {
      const iframe = document.getElementById(`fr-${cardId}`);
      if (iframe) iframe.srcdoc = cardHTML;
    }
  },


  // ── Create Trap Card Window ──────────────────────────────────────────
  // Source: Traps app
  // Triggers: Creates a new styled window holding a generated trap
  'dnd-desktop-create-trap-card': function(data) {
    const trap = data.trap;
    const cardId = 'trap_card_' + Date.now(); // Уникальный ID для каждой ловушки
    
    // Генерируем HTML для окна ловушки
    const trapHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
        <style>
          body {
            background: #12141a; color: #d4c9b0;
            font-family: 'Cormorant Garamond', serif; font-size: 1.15em;
            padding: 8px; margin: 0; box-sizing: border-box;
          }
          h2 {
            font-family: 'Cinzel', serif; color: #d32f2f;
            margin: 0 0 10px 0; border-bottom: 1px solid #3f3f4e; padding-bottom: 4px;
            font-size: 1.5em; letter-spacing: 1px; text-align: center;
          }
          .block {
            background: #1c1f28; padding: 10px; border-radius: 4px; border: 1px solid #2a2e3a;
            margin-bottom: 12px;
          }
          h3 { 
            font-family: 'Cinzel', serif; font-size: 13px; color: #c9a84c; 
            margin: 0 0 6px 0; letter-spacing: 1px; text-transform: uppercase; 
          }
          p { margin: 0 0 8px 0; line-height: 1.4; }
          p:last-child { margin: 0; }
          strong { color: #ffffff; font-family: 'Cinzel', serif; font-size: 0.9em; letter-spacing: 0.5px; }
          
          .stats-grid {
            display: grid; grid-template-columns: 1fr; gap: 8px;
          }
          .stat-row {
            display: flex; justify-content: space-between; border-bottom: 1px dotted #3f3f4e; padding-bottom: 4px;
          }
          .stat-row:last-child { border-bottom: none; padding-bottom: 0; }
          .highlight { color: #ff5252; font-weight: bold; font-family: 'Segoe UI', sans-serif;}
        </style>
      </head>
      <body>
        <h2>${trap.name}</h2>
        
        <div class="block">
          <h3>Описание</h3>
          <p><strong>Триггер:</strong><br>${trap.trigger}</p>
          <p><strong>Эффект:</strong><br>${trap.effect}</p>
        </div>

        <div class="block stats-grid">
          <h3>Механика</h3>
          <div class="stat-row">
            <strong>Обнаружение:</strong> <span>СЛ ${trap.detectDC} (Внимательность)</span>
          </div>
          <div class="stat-row">
            <strong>Обезвреживание:</strong> <span>СЛ ${trap.disableDC}</span>
          </div>
          <div class="stat-row">
            <strong>Прочность:</strong> <span>КД ${trap.ac}, ХП ${trap.hp}</span>
          </div>
        </div>

        <div class="block stats-grid" style="border-color: #5c1e1e;">
          <h3>Угроза</h3>
          <div class="stat-row">
            <strong>Спасбросок / Атака:</strong> <span>${trap.combatStat}</span>
          </div>
          <div class="stat-row">
            <strong>Урон:</strong> <span class="highlight">${trap.damage}</span>
          </div>
        </div>
      </body>
      </html>
    `;

    const app = {
      id:     cardId,
      title:  'Ловушка: ' + trap.name,
      icon:   '⚙️',
      url:    'about:blank',
      srcdoc: trapHTML,
      ...(() => { 
        // Если функция позиционирования доступна, используем её
        if (typeof centeredWindowPosition === 'function') {
            const p = centeredWindowPosition(400, 580, Math.floor(Math.random() * 3)); 
            return { x: p.x, y: p.y };
        }
        return { x: 100, y: 100 }; 
      })(),
      w: 400,
      h: 580
    };

    // Создаем окно средствами desktop-среды
    if (typeof createWindow === 'function') {
      createWindow(app);
      
      // Явно вливаем srcdoc, как это сделано для character card
      setTimeout(() => {
          const iframe = document.getElementById(`fr-${cardId}`);
          if (iframe) iframe.srcdoc = trapHTML;
      }, 50);
    } else {
      console.error("Функция createWindow не найдена.");
    }
  },


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
