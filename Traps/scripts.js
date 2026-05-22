// Правила D&D 5e для ловушек
const rules = {
    medium: {
        dcRange: [10, 11],
        atkRange: [3, 5],
        damageDice: { "1": "1d10", "2": "2d10", "3": "4d10", "4": "10d10" }
    },
    dangerous: {
        dcRange: [12, 15],
        atkRange: [6, 8],
        damageDice: { "1": "2d10", "2": "4d10", "3": "10d10", "4": "18d10" }
    },
    deadly: {
        dcRange: [16, 20],
        atkRange: [9, 12],
        damageDice: { "1": "4d10", "2": "10d10", "3": "18d10", "4": "24d10" }
    }
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Прячем выбор спасброска, если выбрана Атака
document.getElementById('mechType').addEventListener('change', function() {
    document.getElementById('saveAttrGroup').style.display = this.value === 'save' ? 'flex' : 'none';
});

document.getElementById('generateBtn').addEventListener('click', () => {
    const name = document.getElementById('trapName').value || "Неизвестная ловушка";
    const trigger = document.getElementById('trapTrigger').value || "Не указан.";
    const effect = document.getElementById('trapEffect').value || "Не указан.";
    
    const level = document.getElementById('level').value;
    const danger = document.getElementById('danger').value;
    const isMagic = document.getElementById('isMagic').checked;
    
    const mechType = document.getElementById('mechType').value;
    const saveAttr = document.getElementById('saveAttr').value;

    const ruleSet = rules[danger];

    // Расчет статов
    const detectDC = getRandomInt(ruleSet.dcRange[0], ruleSet.dcRange[1]);
    const disableDC = detectDC + getRandomInt(-1, 2);
    const atkBonus = getRandomInt(ruleSet.atkRange[0], ruleSet.atkRange[1]);
    const saveDC = detectDC; 
    const damage = ruleSet.damageDice[level];
    
    const ac = getRandomInt(12, 18);
    const hp = getRandomInt(10, 30);

    // Формирование итогового объекта
    const trapData = {
        name: name,
        trigger: trigger,
        effect: effect,
        detectDC: detectDC,
        disableDC: isMagic ? `${disableDC} (Интеллект/Магия или Рассеивание магии)` : `${disableDC} (Ловкость/Вор. инструменты)`,
        ac: ac,
        hp: isMagic ? `${hp} (неприменимо к магии)` : hp,
        combatStat: mechType === 'attack' ? `Атака: +${atkBonus} к попаданию` : `Спасбросок: СЛ ${saveDC} (${saveAttr})`,
        damage: damage
    };

    // Отправка сообщения в родительское окно (dnd-desktop)
    if (window.parent && window.parent !== window) {
        window.parent.postMessage({
            type: 'dnd-desktop-create-trap-card',
            trap: trapData
        }, '*');
    } else {
        alert("Окно генерируется только внутри рабочего стола D&D.");
    }
});