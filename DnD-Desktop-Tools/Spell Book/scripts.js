let spellsData = [];
let currentSpellName = null; // Для сохранения выбранного заклинания

const searchInput  = document.getElementById('search-input');
const levelFilter  = document.getElementById('level-filter');
const spellList    = document.getElementById('spell-list');
const spellDisplay = document.getElementById('spell-display');
const emptyState   = document.getElementById('empty-state');

// Загрузка базы данных (теперь берется из подключенного spells_db.js)
function loadDatabase() {
  if (typeof spellsDatabase === 'undefined') {
    spellList.innerHTML = `<div style="padding: 10px; color: #e74c3c; text-align: center;">
      Критическая ошибка: База заклинаний (spells_db.js) не найдена или повреждена.
    </div>`;
    return;
  }

  // Передаем данные из глобальной переменной в нашу рабочую
  spellsData = spellsDatabase;
  
  // Сортировка по алфавиту (игнорируя цифру уровня в начале)
  spellsData.sort((a, b) => {
    const nameA = a.name.replace(/\[\d+\]\s*/, '');
    const nameB = b.name.replace(/\[\d+\]\s*/, '');
    return nameA.localeCompare(nameB);
  });

  restoreState();
  renderList();
}

// Восстановление состояния из localStorage
function restoreState() {
  const saved = localStorage.getItem('dnd_spellbook_state');
  if (saved) {
    try {
      const state = JSON.parse(saved);
      if (state.search) searchInput.value = state.search;
      if (state.level)  levelFilter.value = state.level;
      if (state.selected) currentSpellName = state.selected;
    } catch (e) {}
  }
}

// Сохранение состояния
function saveState() {
  const state = {
    search: searchInput.value.trim(),
    level: levelFilter.value,
    selected: currentSpellName
  };
  localStorage.setItem('dnd_spellbook_state', JSON.stringify(state));
}

// Отрисовка списка с учетом фильтров
function renderList() {
  spellList.innerHTML = '';
  const query = searchInput.value.toLowerCase().trim();
  const lvl = levelFilter.value;

  const filtered = spellsData.filter(spell => {
    // Проверка уровня
    let matchLevel = true;
    if (lvl !== 'all') {
      // Ищем точное совпадение [уровень] в начале имени
      matchLevel = spell.name.startsWith(`[${lvl}]`);
    }

    // Проверка текста (поиск по русскому и английскому названиям)
    let matchText = true;
    if (query !== '') {
      // text_content содержит и русское, и английское название заклинания
      const content = spell.text_content ? spell.text_content.toLowerCase() : spell.name.toLowerCase();
      matchText = content.includes(query);
    }

    return matchLevel && matchText;
  });

  if (filtered.length === 0) {
    spellList.innerHTML = `<div style="padding:15px; text-align:center; color:var(--text-dim);">Заклинания не найдены</div>`;
    return;
  }

  filtered.forEach(spell => {
    // Извлекаем уровень из строки "[1] Название"
    const lvlMatch = spell.name.match(/\\[(\\d+)\\]/);
    const spellLevel = lvlMatch ? lvlMatch[1] : '?';
    const cleanName = spell.name.replace(/\\[\\d+\\]\\s*/, ''); // Убираем "[1] " из названия

    const btn = document.createElement('button');
    btn.className = 'spell-item';
    if (spell.name === currentSpellName) btn.classList.add('active');
    
    btn.innerHTML = `
      <span class="spell-lvl-badge">${spellLevel}</span>
      <span>${cleanName}</span>
    `;

    btn.onclick = () => {
      document.querySelectorAll('.spell-item').forEach(el => el.classList.remove('active'));
      btn.classList.add('active');
      openSpell(spell);
    };

    spellList.appendChild(btn);
  });

  // Если при загрузке было сохранено активное заклинание - открываем его
  if (currentSpellName) {
    const spellToOpen = spellsData.find(s => s.name === currentSpellName);
    if (spellToOpen) openSpell(spellToOpen, true);
  }
}

// Открытие заклинания в правой панели
function openSpell(spell, skipSave = false) {
  emptyState.style.display = 'none';
  spellDisplay.style.display = 'block';
  
  // Вставляем готовую верстку из базы
  spellDisplay.innerHTML = spell.html_content;

  currentSpellName = spell.name;
  if (!skipSave) saveState();
}

// Обработчики событий поиска
searchInput.addEventListener('input', () => {
  renderList();
  saveState();
});

levelFilter.addEventListener('change', () => {
  renderList();
  saveState();
});

// Запуск
loadDatabase();