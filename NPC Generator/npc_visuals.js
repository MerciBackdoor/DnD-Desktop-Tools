// Словарь всех доступных генераторов
const raceGenerators = {
    'ааракокра': generateAarakocraSVG,
    'дварф': generateDwarfSVG,
    'гоблин': generateGoblinSVG,
    'человек': generateHumanSVG,
    'тифлинг': generateTieflingSVG,
    'голиаф': generateGoliathSVG,
    'кобольд': generateKoboldSVG,
    'драконорождённый': generateDragonbornSVG,
    'табакси': generateTabaxiSVG,
    'эльф': (gender) => generateElfBaseSVG(gender, false),
    'эльф (астральный)': (gender) => generateElfBaseSVG(gender, true),
    'хобгоблин': generateHobgoblinSVG,
    'тортл': generateTortleSVG,
    'аасимар': generateAasimarSVG,
    'авен': generateAvenSVG,
    'автогном': generateAutognomeSVG,
    'багбир': generateBugbearSVG,
    'ведалкен': generateVedalkenSVG
};

// Главная функция, которая определяет, какую расу рисовать
function generateVisualForRace(npc) {
    const race = npc.race.toLowerCase().trim();
    const generator = raceGenerators[race];
    
    if (generator) {
        return generator(npc.gender);
    }
    
    return `<p style="color: #888; text-align: center; margin-top: 50px;">Визуализация для расы "${npc.race}" пока не добавлена.</p>`;
}

// ==========================================
// ГЕНЕРАТОР: ДВАРФ
// ==========================================
function generateDwarfSVG(gender) {
    const isMale = gender === 'Мужчина';
    
    // Кожа от темно-коричневой до светлой с красноватым оттенком
    const skinColors = ['#5d4037', '#8d6e63', '#a1887f', '#d7ccc8', '#e2a76f', '#e9967a'];
    const skinColor = skinColors[Math.floor(Math.random() * skinColors.length)];
    
    // Волосы: черные, серые, коричневые, иногда рыжие
    const hairColors = ['#1a1a1a', '#555555', '#757575', '#3e2723', '#4e342e', '#bf360c', '#d35400'];
    const hairColor = hairColors[Math.floor(Math.random() * hairColors.length)];
    
    // Одежда (жесткая, плотная кожаная или кольчужная)
    const clothColors = ['#263238', '#37474f', '#455a64', '#546e7a', '#3e2723'];
    const clothColor = clothColors[Math.floor(Math.random() * clothColors.length)];

    let beardSVG = '';
    if (isMale) {
        // У мужчин массивная, ухоженная борода
        beardSVG = `
            <path d="M 65 110 Q 100 230 135 110 Q 120 250 100 260 Q 80 250 65 110" fill="${hairColor}" stroke="#111" stroke-width="2"/>
            <line x1="85" y1="130" x2="85" y2="220" stroke="rgba(0,0,0,0.3)" stroke-width="3" stroke-linecap="round"/>
            <line x1="115" y1="130" x2="115" y2="220" stroke="rgba(0,0,0,0.3)" stroke-width="3" stroke-linecap="round"/>
            <path d="M 80 120 Q 100 105 120 120 Q 130 135 115 135 Q 100 125 85 135 Q 70 135 80 120" fill="${hairColor}" stroke="#111" stroke-width="1"/>
            <rect x="95" y="190" width="10" height="15" rx="3" fill="#f1c40f" stroke="#b7950b" stroke-width="1"/>
        `;
    }

    return `
        <svg viewBox="0 0 200 300" width="100%" height="300px" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="140" width="160" height="160" rx="40" fill="${clothColor}" stroke="#1e1f22" stroke-width="3"/>
            <line x1="20" y1="260" x2="180" y2="260" stroke="#271c19" stroke-width="20"/>
            <rect x="80" y="240" width="40" height="40" rx="5" fill="#95a5a6" stroke="#7f8c8d" stroke-width="4"/>
            
            <path d="M 50 50 Q 30 100 40 180 L 160 180 Q 170 100 150 50 Z" fill="${hairColor}" />

            <rect x="60" y="45" width="80" height="85" rx="20" fill="${skinColor}" stroke="#1e1f22" stroke-width="2"/>
            
            <line x1="70" y1="75" x2="90" y2="80" stroke="${hairColor}" stroke-width="5" stroke-linecap="round"/> 
            <line x1="130" y1="75" x2="110" y2="80" stroke="${hairColor}" stroke-width="5" stroke-linecap="round"/>
            <circle cx="82" cy="85" r="3" fill="#111" />
            <circle cx="118" cy="85" r="3" fill="#111" />
            
            <path d="M 95 85 L 100 110 L 105 85" fill="rgba(0,0,0,0.1)" />
            <path d="M 90 110 Q 100 115 110 110" fill="none" stroke="rgba(0,0,0,0.3)" stroke-width="3" stroke-linecap="round"/>

            <path d="M 60 65 Q 100 35 140 65 Q 145 40 100 35 Q 55 40 60 65" fill="${hairColor}" />

            ${beardSVG}
            ${!isMale ? `
                <path d="M 90 125 Q 100 130 110 125" fill="none" stroke="#a05245" stroke-width="2"/>
                <path d="M 55 120 Q 50 180 60 220" fill="none" stroke="${hairColor}" stroke-width="8" stroke-dasharray="10 5"/>
                <path d="M 145 120 Q 150 180 140 220" fill="none" stroke="${hairColor}" stroke-width="8" stroke-dasharray="10 5"/>
            ` : ''}
        </svg>
    `;
}

// ==========================================
// ГЕНЕРАТОР: ААРАКОКРА
// ==========================================
function generateAarakocraSVG(gender) {
    const isMale = gender === 'Мужчина';
    
    // Палитры согласно лору
    const maleColors = ['#e74c3c', '#d35400', '#f39c12', '#c0392b']; 
    const femaleColors = ['#795548', '#5d4037', '#8d6e63', '#7f8c8d', '#95a5a6']; 
    
    const palette = isMale ? maleColors : femaleColors;
    
    const mainColor = palette[Math.floor(Math.random() * palette.length)];
    const secColor = palette[Math.floor(Math.random() * palette.length)];

    return `
        <svg viewBox="0 0 200 300" width="100%" height="300px" xmlns="http://www.w3.org/2000/svg">
            <line x1="85" y1="200" x2="85" y2="260" stroke="#e67e22" stroke-width="4"/>
            <line x1="115" y1="200" x2="115" y2="260" stroke="#e67e22" stroke-width="4"/>
            
            <path d="M 85 260 L 75 270 M 85 260 L 85 275 M 85 260 L 95 270" stroke="#e67e22" stroke-width="3" fill="none"/>
            <path d="M 115 260 L 105 270 M 115 260 L 115 275 M 115 260 L 125 270" stroke="#e67e22" stroke-width="3" fill="none"/>
            
            <ellipse cx="100" cy="150" rx="45" ry="65" fill="${mainColor}" />
            
            <path d="M 55 120 Q 20 180 55 220" fill="${secColor}" stroke="#1e1f22" stroke-width="2"/>
            <path d="M 145 120 Q 180 180 145 220" fill="${secColor}" stroke="#1e1f22" stroke-width="2"/>
            
            <circle cx="100" cy="80" r="28" fill="${mainColor}" />
            
            <path d="M 120 75 Q 150 75 140 100 Q 125 95 110 88 Z" fill="#f1c40f" stroke="#d35400" stroke-width="1"/>
            
            <circle cx="110" cy="73" r="5" fill="#111" />
            <circle cx="111" cy="71" r="2" fill="#fff" />
        </svg>
    `;
}

// ==========================================
// ГЕНЕРАТОР: ГОБЛИН
// ==========================================
function generateGoblinSVG(gender) {
    const isMale = gender === 'Мужчина';
    const skinColors = ['#d4ac0d', '#ca6f1e', '#ba4a00', '#cb4335', '#e59866'];
    const skinColor = skinColors[Math.floor(Math.random() * skinColors.length)];
    const clothColors = ['#5d4037', '#455a64', '#784212', '#112211'];
    const clothColor = clothColors[Math.floor(Math.random() * clothColors.length)];

    return `
        <svg viewBox="0 0 200 300" width="100%" height="300px" xmlns="http://www.w3.org/2000/svg">
            <rect x="50" y="120" width="100" height="180" rx="20" fill="${clothColor}" stroke="#111" stroke-width="2"/>
            
            <path d="M 50 140 L 35 230 L 30 260" fill="none" stroke="${skinColor}" stroke-width="12" stroke-linecap="round"/>
            <path d="M 150 140 L 165 230 L 170 260" fill="none" stroke="${skinColor}" stroke-width="12" stroke-linecap="round"/>
            <path d="M 30 260 L 25 270 M 30 260 L 30 273 M 30 260 L 35 270" stroke="#eee" stroke-width="2"/>
            <path d="M 170 260 L 165 270 M 170 260 L 170 273 M 170 260 L 175 270" stroke="#eee" stroke-width="2"/>

            <polygon points="65,90 15,70 60,110" fill="${skinColor}" stroke="#111" stroke-width="1.5"/>
            <polygon points="135,90 185,70 140,110" fill="${skinColor}" stroke="#111" stroke-width="1.5"/>

            <ellipse cx="100" cy="100" rx="40" ry="32" fill="${skinColor}" stroke="#111" stroke-width="2" />

            <ellipse cx="85" cy="95" rx="10" ry="6" fill="#f1c40f" />
            <line x1="85" y1="89" x2="85" y2="101" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>
            <ellipse cx="115" cy="95" rx="10" ry="6" fill="#f1c40f" />
            <line x1="115" y1="89" x2="115" y2="101" stroke="#000" stroke-width="2.5" stroke-linecap="round"/>

            <path d="M 92 102 Q 100 108 108 102" fill="none" stroke="rgba(0,0,0,0.4)" stroke-width="3"/>
            <path d="M 75 115 Q 100 135 125 115 Z" fill="#4a0000" stroke="#111" stroke-width="1.5"/>
            <polygon points="85,116 88,122 91,116" fill="#fff"/>
            <polygon points="115,116 112,122 109,116" fill="#fff"/>
            <path d="M 70 75 Q 100 65 130 75 Q 100 85 70 75" fill="#271c19" />
        </svg>
    `;
}
// ==========================================
// ГЕНЕРАТОР: ЧЕЛОВЕК
// ==========================================
function generateHumanSVG(gender) {
    const isMale = gender === 'Мужчина';
    const skinColors = ['#fdd9b5', '#ffdbac', '#e0ac69', '#c68642', '#8d5524', '#3c2016', '#221108'];
    const skinColor = skinColors[Math.floor(Math.random() * skinColors.length)];
    const hairColors = ['#1a1a1a', '#4a3728', '#bfa36f', '#debe93', '#a84325'];
    const hairColor = hairColors[Math.floor(Math.random() * hairColors.length)];
    const clothColor = ['#2980b9', '#27ae60', '#8e44ad', '#c0392b', '#d35400'][Math.floor(Math.random() * 5)];

    let faceDetail = '';
    let backHair = `<circle cx="100" cy="80" r="45" fill="${hairColor}" />`;

    if (isMale) {
        const beardStyle = Math.random();
        if (beardStyle > 0.6) {
            faceDetail = `<path d="M 65 110 Q 100 170 135 110 Q 100 130 65 110" fill="${hairColor}" opacity="0.9"/>`;
        } else if (beardStyle > 0.3) {
            faceDetail = `<path d="M 70 115 Q 100 140 130 115" fill="none" stroke="${hairColor}" stroke-width="5" opacity="0.6" stroke-linecap="round"/>`;
        }
    } else {
        // Длинные волосы женщин теперь генерируются отдельным путем, чтобы уйти НА ЗАДНИЙ ПЛАН
        backHair += `
            <path d="M 55 80 Q 30 160 55 220 L 70 220 Q 50 160 75 80 Z" fill="${hairColor}"/>
            <path d="M 145 80 Q 170 160 145 220 L 130 220 Q 150 160 125 80 Z" fill="${hairColor}"/>
        `;
    }

    return `
        <svg viewBox="0 0 200 300" width="100%" height="300px" xmlns="http://www.w3.org/2000/svg">
            ${backHair}

            <rect x="85" y="110" width="30" height="50" fill="${skinColor}" stroke="#111" stroke-width="1.5"/>

            <path d="M 40 150 L 160 150 L 180 300 L 200 300 L 0 300 Z" fill="${clothColor}" stroke="#111" stroke-width="1.5"/>
            
            <ellipse cx="100" cy="95" rx="38" ry="48" fill="${skinColor}" stroke="#111" stroke-width="1.5" />
            
            <ellipse cx="85" cy="90" rx="6" ry="4" fill="#fff" stroke="#111"/>
            <circle cx="85" cy="90" r="3" fill="#4a2711" />
            <ellipse cx="115" cy="90" rx="6" ry="4" fill="#fff" stroke="#111"/>
            <circle cx="115" cy="90" r="3" fill="#4a2711" />
            <path d="M 100 88 L 100 102 L 104 102" fill="none" stroke="rgba(0,0,0,0.3)" stroke-width="2" stroke-linecap="round"/>
            <path d="M 90 120 Q 100 126 110 120" fill="none" stroke="#b05245" stroke-width="2.5" stroke-linecap="round"/>
            
            <path d="M 63 75 Q 100 45 137 75" fill="none" stroke="${hairColor}" stroke-width="10" stroke-linecap="round" />
            ${faceDetail}
        </svg>
    `;
}

// ==========================================
// ГЕНЕРАТОР: ТИФЛИНГ
// ==========================================
function generateTieflingSVG(gender) {
    const isMale = gender === 'Мужчина';
    
    // Кожа: Человеческие тона + все оттенки красного
    const skinColors = ['#c0392b', '#922b21', '#cd6155', '#7b241c', '#e0ac69', '#c68642'];
    const skinColor = skinColors[Math.floor(Math.random() * skinColors.length)];
    
    // Глаза сплошного цвета без зрачков (черный, красный, белый, серебро, золото)
    const eyeColors = ['#111111', '#e74c3c', '#ffffff', '#ecf0f1', '#f1c40f'];
    const eyeColor = eyeColors[Math.floor(Math.random() * eyeColors.length)];
    
    // Волосы: темные, красные, синие, фиолетовые
    const hairColors = ['#111116', '#2c1a36', '#1b263b', '#4a0e17', '#4d1354'];
    const hairColor = hairColors[Math.floor(Math.random() * hairColors.length)];

    // ЛОР: Разные формы рогов (витые бараньи, прямые газельи, спиральные)
    const hornTypes = ['ram', 'straight', 'spiral'];
    const hornType = hornTypes[Math.floor(Math.random() * hornTypes.length)];
    
    let hornsSVG = '';
    if (hornType === 'ram') { // Витые рога
        hornsSVG = `
            <path d="M 75 55 Q 30 10 20 50 Q 40 70 70 60" fill="#2c3e50" stroke="#111" stroke-width="1.5"/>
            <path d="M 125 55 Q 170 10 180 50 Q 160 70 130 60" fill="#2c3e50" stroke="#111" stroke-width="1.5"/>
        `;
    } else if (hornType === 'straight') { // Длинные прямые
        hornsSVG = `
            <path d="M 72 52 L 40 -10 L 60 45" fill="#34495e" stroke="#111" stroke-width="1.5"/>
            <path d="M 128 52 L 160 -10 L 140 45" fill="#34495e" stroke="#111" stroke-width="1.5"/>
        `;
    } else { // Спиральные
        hornsSVG = `
            <path d="M 72 52 Q 50 15 60 0 Q 45 20 66 48" fill="#1a252f" stroke="#111" stroke-width="2"/>
            <path d="M 128 52 Q 150 15 140 0 Q 155 20 134 48" fill="#1a252f" stroke="#111" stroke-width="2"/>
        `;
    }

    return `
        <svg viewBox="0 0 200 300" width="100%" height="300px" xmlns="http://www.w3.org/2000/svg">
            <path d="M 100 270 Q 160 280 170 230 Q 180 180 160 190" fill="none" stroke="${skinColor}" stroke-width="10" stroke-linecap="round"/>
            
            <path d="M 50 170 L 150 170 L 170 300 L 30 300 Z" fill="#212f3d" stroke="#111"/>

            ${hornsSVG}

            <path d="M 60 60 Q 100 30 140 60 L 155 210 Q 100 180 45 210 Z" fill="${hairColor}"/>

            <ellipse cx="100" cy="105" rx="36" ry="46" fill="${skinColor}" stroke="#111" stroke-width="1.5"/>
            
            <ellipse cx="85" cy="100" rx="8" ry="5" fill="${eyeColor}" stroke="rgba(0,0,0,0.4)"/>
            <ellipse cx="115" cy="100" rx="8" ry="5" fill="${eyeColor}" stroke="rgba(0,0,0,0.4)"/>

            <path d="M 85 125 Q 100 140 115 125 Z" fill="#fff" stroke="#111" stroke-width="1"/>
            <path d="M 85 125 Q 100 140 115 125" fill="none" stroke="#111" stroke-width="1.5"/>
            <line x1="93" y1="127" x2="93" y2="132" stroke="#444" stroke-width="1"/>
            <line x1="107" y1="127" x2="107" y2="132" stroke="#444" stroke-width="1"/>

            <path d="M 66 80 Q 100 65 134 80" fill="none" stroke="${hairColor}" stroke-width="6" stroke-linecap="round"/>
        </svg>
    `;
}

// ==========================================
// ГЕНЕРАТОР: ГОЛИАФ
// ==========================================
function generateGoliathSVG(gender) {
    // Кожа каменных и землистых оттенков
    const skinColors = ['#bdc3c7', '#95a5a6', '#7f8c8d', '#566573', '#7b7d7d', '#a6acaf'];
    const skinColor = skinColors[Math.floor(Math.random() * skinColors.length)];
    
    // Ритуальные отметки / трещины на камне (синие или темные)
    const patternColors = ['rgba(41, 128, 185, 0.4)', 'rgba(0,0,0,0.2)', 'rgba(255,255,255,0.15)'];
    const patColor = patternColors[Math.floor(Math.random() * patternColors.length)];

    return `
        <svg viewBox="0 0 200 300" width="100%" height="300px" xmlns="http://www.w3.org/2000/svg">
            <path d="M 10 130 L 190 130 L 180 300 L 200 300 L 0 300 Z" fill="#5e483a" stroke="#111" stroke-width="2"/> <path d="M 35 130 L 165 130 L 155 300 L 45 300 Z" fill="#784212" opacity="0.6"/>

            <rect x="75" y="90" width="50" height="50" fill="${skinColor}" stroke="#111" stroke-width="1.5"/>

            <path d="M 60 40 L 140 40 L 145 100 L 130 120 L 70 120 L 55 100 Z" fill="${skinColor}" stroke="#111" stroke-width="2"/>

            <path d="M 65 50 Q 80 55 75 80 M 135 60 Q 120 75 130 95 M 100 110 L 115 120" fill="none" stroke="${patColor}" stroke-width="4" stroke-linecap="round"/>

            <rect x="68" y="58" width="28" height="7" fill="rgba(0,0,0,0.25)" rx="2"/>
            <rect x="104" y="58" width="28" height="7" fill="rgba(0,0,0,0.25)" rx="2"/>

            <circle cx="82" cy="68" r="3.5" fill="#111"/>
            <circle cx="118" cy="68" r="3.5" fill="#111"/>
            
            <path d="M 94 65 L 100 88 L 106 65" fill="none" stroke="rgba(0,0,0,0.3)" stroke-width="3" stroke-linecap="round"/>

            <line x1="85" y1="102" x2="115" y2="102" stroke="rgba(0,0,0,0.5)" stroke-width="2.5" stroke-linecap="round"/>

            ${gender === 'Женщина' ? `
                <path d="M 60 42 Q 100 25 140 42" fill="none" stroke="#2c3e50" stroke-width="6"/>
            ` : ''}
        </svg>
    `;
}

// ==========================================
// ГЕНЕРАТОР: КОБОЛЬД
// ==========================================
function generateKoboldSVG(gender) {
    const scaleColors = ['#78281f', '#196f3d', '#7e5109', '#212f3d', '#b03a2e'];
    const scaleColor = scaleColors[Math.floor(Math.random() * scaleColors.length)];

    return `
        <svg viewBox="0 0 200 300" width="100%" height="300px" xmlns="http://www.w3.org/2000/svg">
            <path d="M 60 160 Q 100 140 140 160 L 150 300 L 50 300 Z" fill="#7b7d7d" stroke="#111"/>
            <path d="M 90 200 Q 100 205 110 200 M 85 220 Q 100 225 115 220" fill="none" stroke="rgba(0,0,0,0.2)" stroke-width="2"/>

            <rect x="85" y="100" width="30" height="80" fill="${scaleColor}" stroke="#111" stroke-width="1"/>

            <polygon points="80,50 70,25 90,45" fill="#222"/>
            <polygon points="120,50 130,25 110,45" fill="#222"/>

            <path d="M 70 70 Q 100 40 130 70 Q 155 95 130 115 Q 100 125 70 115 Q 45 95 70 70 Z" fill="${scaleColor}" stroke="#111" stroke-width="1.5"/>

            <circle cx="80" cy="80" r="9" fill="#f39c12"/>
            <ellipse cx="80" cy="80" rx="2" ry="7" fill="#000"/>
            <circle cx="120" cy="80" r="9" fill="#f39c12"/>
            <ellipse cx="120" cy="80" rx="2" ry="7" fill="#000"/>

            <path d="M 65 100 Q 100 115 135 100" fill="none" stroke="rgba(0,0,0,0.5)" stroke-width="2.5"/>
            <path d="M 95 60 Q 100 63 105 60 M 92 68 Q 100 71 108 68" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>

            ${gender === 'Женщина' ? `
                <circle cx="62" cy="95" r="4" fill="none" stroke="#f1c40f" stroke-width="2"/>
                <path d="M 62 99 L 60 115" stroke="#fff" stroke-width="2"/>
            ` : `
                <line x1="72" y1="65" x2="88" y2="95" stroke="#c0392b" stroke-width="2" opacity="0.7" stroke-linecap="round"/>
            `}
        </svg>
    `;
}

// ==========================================
// ГЕНЕРАТОР: ДРАКОНОРОЖДЁННЫЙ
// ==========================================
function generateDragonbornSVG(gender) {
    // Хроматические и металлические цвета чешуи
    const scaleColors = ['#b87333', '#b5a642', '#cd7f32', '#c0392b', '#27ae60', '#2980b9', '#ecf0f1', '#2c3e50', '#f1c40f', '#bdc3c7'];
    const scaleColor = scaleColors[Math.floor(Math.random() * scaleColors.length)];

    return `
        <svg viewBox="0 0 200 300" width="100%" height="300px" xmlns="http://www.w3.org/2000/svg">
            <path d="M 30 140 Q 100 120 170 140 L 160 300 L 40 300 Z" fill="${scaleColor}" stroke="#111" stroke-width="2"/>
            <path d="M 40 140 L 160 140 L 130 300 L 70 300 Z" fill="#34495e" opacity="0.8"/>
            
            <path d="M 30 180 L 80 230" stroke="${scaleColor}" stroke-width="20" stroke-linecap="round"/>
            <path d="M 80 230 L 95 235 M 80 230 L 95 245 M 80 230 L 85 255 M 80 230 L 70 250" stroke="#eee" stroke-width="3" stroke-linecap="round"/>
            
            <path d="M 170 180 L 120 230" stroke="${scaleColor}" stroke-width="20" stroke-linecap="round"/>
            <path d="M 120 230 L 105 235 M 120 230 L 105 245 M 120 230 L 115 255 M 120 230 L 130 250" stroke="#eee" stroke-width="3" stroke-linecap="round"/>

            <rect x="75" y="80" width="50" height="70" fill="${scaleColor}" stroke="#111" stroke-width="1.5"/>

            <path d="M 60 50 L 140 50 L 150 90 L 130 120 L 70 120 L 50 90 Z" fill="${scaleColor}" stroke="#111" stroke-width="2"/>
            
            <polygon points="60,50 40,30 70,40" fill="#222"/>
            <polygon points="140,50 160,30 130,40" fill="#222"/>
            
            <path d="M 80 80 Q 100 110 120 80 Z" fill="rgba(0,0,0,0.1)"/>
            <circle cx="75" cy="75" r="5" fill="#f1c40f"/>
            <circle cx="125" cy="75" r="5" fill="#f1c40f"/>
            <circle cx="90" cy="105" r="2" fill="#111"/>
            <circle cx="110" cy="105" r="2" fill="#111"/>
            
            <line x1="85" y1="115" x2="115" y2="115" stroke="#111" stroke-width="2"/>
        </svg>
    `;
}

// ==========================================
// ГЕНЕРАТОР: ТАБАКСИ
// ==========================================
function generateTabaxiSVG(gender) {
    const furColors = ['#e67e22', '#f1c40f', '#bdc3c7', '#34495e', '#795548', '#e8daef']; // От рыжего до сфинкса
    const furColor = furColors[Math.floor(Math.random() * furColors.length)];
    
    // Случайный узор: 0 - без узора/сфинкс, 1 - пятна (ягуар), 2 - полосы (тигр)
    const patternType = Math.floor(Math.random() * 3);
    
    let patternSVG = '';
    if (patternType === 1) { // Пятна
        patternSVG = `
            <circle cx="70" cy="60" r="4" fill="rgba(0,0,0,0.4)"/>
            <circle cx="130" cy="60" r="4" fill="rgba(0,0,0,0.4)"/>
            <circle cx="100" cy="45" r="3" fill="rgba(0,0,0,0.4)"/>
            <circle cx="85" cy="140" r="5" fill="rgba(0,0,0,0.4)"/>
            <circle cx="115" cy="155" r="5" fill="rgba(0,0,0,0.4)"/>
        `;
    } else if (patternType === 2) { // Полосы
        patternSVG = `
            <line x1="50" y1="60" x2="70" y2="65" stroke="rgba(0,0,0,0.4)" stroke-width="3" stroke-linecap="round"/>
            <line x1="150" y1="60" x2="130" y2="65" stroke="rgba(0,0,0,0.4)" stroke-width="3" stroke-linecap="round"/>
            <line x1="90" y1="40" x2="110" y2="40" stroke="rgba(0,0,0,0.4)" stroke-width="3" stroke-linecap="round"/>
        `;
    }

    return `
        <svg viewBox="0 0 200 300" width="100%" height="300px" xmlns="http://www.w3.org/2000/svg">
            <path d="M 60 140 Q 100 120 140 140 L 160 300 L 40 300 Z" fill="${furColor}" stroke="#111" stroke-width="1.5"/>
            <path d="M 50 170 L 150 170 L 140 250 L 60 250 Z" fill="#27ae60" opacity="0.8"/>

            <rect x="85" y="100" width="30" height="50" fill="${furColor}" stroke="#111" stroke-width="1.5"/>

            <polygon points="65,55 50,15 85,45" fill="${furColor}" stroke="#111" stroke-width="1.5"/>
            <polygon points="135,55 150,15 115,45" fill="${furColor}" stroke="#111" stroke-width="1.5"/>

            <ellipse cx="100" cy="80" rx="45" ry="40" fill="${furColor}" stroke="#111" stroke-width="1.5"/>

            ${patternSVG}

            <ellipse cx="80" cy="75" rx="10" ry="7" fill="#2ecc71" stroke="#111"/>
            <ellipse cx="80" cy="75" rx="2" ry="6" fill="#000"/>
            
            <ellipse cx="120" cy="75" rx="10" ry="7" fill="#2ecc71" stroke="#111"/>
            <ellipse cx="120" cy="75" rx="2" ry="6" fill="#000"/>

            <polygon points="95,95 105,95 100,102" fill="#e74c3c"/>
            <path d="M 90 108 Q 100 102 100 102 Q 100 102 110 108" fill="none" stroke="#111" stroke-width="2"/>

            <line x1="85" y1="100" x2="50" y2="95" stroke="#fff" stroke-width="1"/>
            <line x1="85" y1="105" x2="50" y2="105" stroke="#fff" stroke-width="1"/>
            <line x1="115" y1="100" x2="150" y2="95" stroke="#fff" stroke-width="1"/>
            <line x1="115" y1="105" x2="150" y2="105" stroke="#fff" stroke-width="1"/>
        </svg>
    `;
}

// ==========================================
// ГЕНЕРАТОР: ЭЛЬФ И АСТРАЛЬНЫЙ ЭЛЬФ (Базовая логика)
// ==========================================
function generateElfBaseSVG(gender, isAstral) {
    const isMale = gender === 'Мужчина';
    
    // Цвета кожи: человеческие + медь, бронза, голубовато-белый
    const skinColors = ['#fdd9b5', '#ffdbac', '#e0ac69', '#c68642', '#8d5524', '#b87333', '#cd7f32', '#eaf2f8'];
    const skinColor = skinColors[Math.floor(Math.random() * skinColors.length)];
    
    // Цвета волос: человеческие + зеленый, синий
    const hairColors = ['#1a1a1a', '#f1c40f', '#debe93', '#2ecc71', '#3498db', '#e74c3c'];
    const hairColor = hairColors[Math.floor(Math.random() * hairColors.length)];
    
    // Глаза: жидкое золото или серебро
    const eyeColors = ['#ffd700', '#c0c0c0'];
    const eyeColor = eyeColors[Math.floor(Math.random() * eyeColors.length)];

    return `
        <svg viewBox="0 0 200 300" width="100%" height="300px" xmlns="http://www.w3.org/2000/svg">
            <path d="M 65 140 Q 100 130 135 140 L 145 300 L 55 300 Z" fill="#9b59b6" stroke="#111" stroke-width="1"/>
            <path d="M 80 140 L 120 140 L 100 200 Z" fill="#f1c40f" opacity="0.7"/>

            <rect x="90" y="100" width="20" height="50" fill="${skinColor}" stroke="#111" stroke-width="1"/>

            <path d="M 70 50 Q 40 150 50 250 L 150 250 Q 160 150 130 50 Z" fill="${hairColor}"/>

            <path d="M 70 95 L 30 70 L 65 110" fill="${skinColor}" stroke="#111" stroke-width="1"/>
            <path d="M 130 95 L 170 70 L 135 110" fill="${skinColor}" stroke="#111" stroke-width="1"/>

            <ellipse cx="100" cy="90" rx="30" ry="45" fill="${skinColor}" stroke="#111" stroke-width="1"/>

            <ellipse cx="87" cy="85" rx="6" ry="3" fill="${eyeColor}" stroke="#111"/>
            <ellipse cx="113" cy="85" rx="6" ry="3" fill="${eyeColor}" stroke="#111"/>

            ${isAstral ? `
                <circle cx="87" cy="85" r="1.5" fill="#fff"/>
                <path d="M 87 81 L 88 85 L 92 85 L 88 86 L 87 90 L 86 86 L 82 85 L 86 85 Z" fill="#fff"/>
                <circle cx="113" cy="85" r="1.5" fill="#fff"/>
                <path d="M 113 81 L 114 85 L 118 85 L 114 86 L 113 90 L 112 86 L 108 85 L 112 85 Z" fill="#fff"/>
            ` : `
                <circle cx="87" cy="85" r="1.5" fill="#111"/>
                <circle cx="113" cy="85" r="1.5" fill="#111"/>
            `}

            <path d="M 100 85 L 100 100 L 103 100" fill="none" stroke="rgba(0,0,0,0.3)" stroke-width="1.5"/>
            <path d="M 93 110 Q 100 113 107 110" fill="none" stroke="#e74c3c" stroke-width="1.5"/>

            <path d="M 70 50 Q 100 30 130 50" fill="none" stroke="${hairColor}" stroke-width="15" stroke-linecap="round"/>
        </svg>
    `;
}

// ==========================================
// ГЕНЕРАТОР: ХОБГОБЛИН
// ==========================================
function generateHobgoblinSVG(gender) {
    const skinColor = '#5d4037'; // Темная кожа
    const furColor = ['#7b241c', '#4a2311', '#1a1a1a'][Math.floor(Math.random() * 3)]; // Красно-коричневая/черная шерсть

    return `
        <svg viewBox="0 0 200 300" width="100%" height="300px" xmlns="http://www.w3.org/2000/svg">
            <path d="M 40 140 Q 100 120 160 140 L 170 300 L 30 300 Z" fill="#2c3e50" stroke="#111" stroke-width="2"/>
            
            <rect x="75" y="90" width="50" height="60" fill="${skinColor}" stroke="#111" stroke-width="1.5"/>
            <path d="M 30 140 Q 100 100 170 140" fill="none" stroke="${furColor}" stroke-width="20" stroke-linecap="round" stroke-dasharray="10, 5"/>

            <rect x="65" y="40" width="70" height="85" rx="15" fill="${skinColor}" stroke="#111" stroke-width="2"/>
            
            <path d="M 60 40 Q 100 10 140 40 L 145 90 L 135 90 L 130 45 L 70 45 L 65 90 L 55 90 Z" fill="${furColor}"/>

            <line x1="68" y1="65" x2="90" y2="72" stroke="#111" stroke-width="4" stroke-linecap="round"/>
            <line x1="132" y1="65" x2="110" y2="72" stroke="#111" stroke-width="4" stroke-linecap="round"/>
            <circle cx="85" cy="75" r="4" fill="#f1c40f"/>
            <circle cx="115" cy="75" r="4" fill="#f1c40f"/>

            <path d="M 75 95 Q 100 115 125 95 Z" fill="#111"/>
            <polygon points="80,95 85,110 90,95" fill="#fff"/>
            <polygon points="95,95 100,110 105,95" fill="#fff"/>
            <polygon points="110,95 115,110 120,95" fill="#fff"/>
        </svg>
    `;
}

// ==========================================
// ГЕНЕРАТОР: ТОРТЛ
// ==========================================
function generateTortleSVG(gender) {
    // Цвета черепах (зеленые, коричневые, оливковые)
    const shellColors = ['#1e8449', '#27ae60', '#8a6a42', '#5d6d7e', '#117a65'];
    const skinColors = ['#a2d9ce', '#7dcea0', '#f5cba7', '#b2babb'];
    const shellColor = shellColors[Math.floor(Math.random() * shellColors.length)];
    const skinColor = skinColors[Math.floor(Math.random() * skinColors.length)];

    return `
        <svg viewBox="0 0 200 300" width="100%" height="300px" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="100" cy="200" rx="80" ry="90" fill="${shellColor}" stroke="#111" stroke-width="3"/>
            
            <path d="M 60 170 L 100 140 L 140 170 L 140 230 L 100 260 L 60 230 Z" fill="none" stroke="rgba(0,0,0,0.3)" stroke-width="4"/>
            <line x1="100" y1="140" x2="100" y2="110" stroke="rgba(0,0,0,0.3)" stroke-width="4"/>
            <line x1="60" y1="170" x2="25" y2="150" stroke="rgba(0,0,0,0.3)" stroke-width="4"/>
            <line x1="140" y1="170" x2="175" y2="150" stroke="rgba(0,0,0,0.3)" stroke-width="4"/>
            <line x1="60" y1="230" x2="35" y2="260" stroke="rgba(0,0,0,0.3)" stroke-width="4"/>
            <line x1="140" y1="230" x2="165" y2="260" stroke="rgba(0,0,0,0.3)" stroke-width="4"/>

            <path d="M 85 120 Q 100 90 115 120" fill="${skinColor}" stroke="#111" stroke-width="2"/>
            <line x1="90" y1="105" x2="110" y2="105" stroke="rgba(0,0,0,0.2)" stroke-width="1.5"/>
            <line x1="95" y1="115" x2="105" y2="115" stroke="rgba(0,0,0,0.2)" stroke-width="1.5"/>

            <ellipse cx="100" cy="70" rx="25" ry="30" fill="${skinColor}" stroke="#111" stroke-width="2"/>

            <circle cx="88" cy="65" r="4" fill="#111"/>
            <circle cx="112" cy="65" r="4" fill="#111"/>

            <path d="M 85 85 Q 100 95 115 85" fill="none" stroke="#111" stroke-width="2"/>
        </svg>
    `;
}

// ==========================================
// ГЕНЕРАТОР: ААСИМАР
// ==========================================
function generateAasimarSVG(gender) {
    const skinColors = ['#fdd9b5', '#ffdbac', '#e0ac69', '#c68642'];
    const skinColor = skinColors[Math.floor(Math.random() * skinColors.length)];
    
    // Небесные особенности (к6) - выбираем случайно
    const celestialFeature = Math.floor(Math.random() * 6) + 1;
    
    let hairColor = '#bfa36f'; // Стандартный цвет
    let eyeColor = '#fff';
    let extraEffects = '';

    if (celestialFeature === 2) eyeColor = '#f1c40f'; // Светящиеся глаза
    if (celestialFeature === 3) hairColor = ['#3498db', '#9b59b6', '#e74c3c'][Math.floor(Math.random()*3)]; // Яркие волосы
    if (celestialFeature === 5) {
        // Призрачный ореол
        extraEffects += `<ellipse cx="100" cy="30" rx="35" ry="10" fill="none" stroke="#f1c40f" stroke-width="3" opacity="0.8"/>`;
    }
    if (celestialFeature === 6) {
        // Радуга на коже
        extraEffects += `<path d="M 70 80 Q 100 120 130 80" fill="none" stroke="rgba(231, 76, 60, 0.3)" stroke-width="4"/>`;
        extraEffects += `<path d="M 70 85 Q 100 125 130 85" fill="none" stroke="rgba(46, 204, 113, 0.3)" stroke-width="4"/>`;
    }

    return `
        <svg viewBox="0 0 200 300" width="100%" height="300px" xmlns="http://www.w3.org/2000/svg">
            <path d="M 100 130 Q 10 50 20 200 Q 50 180 100 160 Z" fill="#fff" opacity="0.6" stroke="#f1c40f" stroke-width="2"/>
            <path d="M 100 130 Q 190 50 180 200 Q 150 180 100 160 Z" fill="#fff" opacity="0.6" stroke="#f1c40f" stroke-width="2"/>

            <circle cx="100" cy="80" r="45" fill="${hairColor}" />
            
            <rect x="85" y="110" width="30" height="50" fill="${skinColor}" stroke="#111" stroke-width="1.5"/>

            <path d="M 50 150 L 150 150 L 170 300 L 30 300 Z" fill="#ecf0f1" stroke="#f1c40f" stroke-width="2"/>

            <ellipse cx="100" cy="95" rx="35" ry="45" fill="${skinColor}" stroke="#111" stroke-width="1.5" />
            
            <ellipse cx="85" cy="90" rx="7" ry="4" fill="${eyeColor}" stroke="#111"/>
            <ellipse cx="115" cy="90" rx="7" ry="4" fill="${eyeColor}" stroke="#111"/>
            
            <path d="M 100 88 L 100 102 L 104 102" fill="none" stroke="rgba(0,0,0,0.2)" stroke-width="2" stroke-linecap="round"/>
            <path d="M 92 120 Q 100 125 108 120" fill="none" stroke="#b05245" stroke-width="2" stroke-linecap="round"/>
            
            ${extraEffects}
            ${celestialFeature === 1 ? `<circle cx="85" cy="105" r="1" fill="#111"/><circle cx="115" cy="105" r="1" fill="#111"/><circle cx="90" cy="108" r="1" fill="#111"/>` : ''} <path d="M 65 75 Q 100 45 135 75" fill="none" stroke="${hairColor}" stroke-width="10" stroke-linecap="round" />
        </svg>
    `;
}

// ==========================================
// ГЕНЕРАТОР: АВЕН
// ==========================================
function generateAvenSVG(gender) {
    // 0 - Ястреб (короткая шея, клюв хищника), 1 - Ибис (длинная шея, длинный клюв)
    const avenType = Math.floor(Math.random() * 2);
    const featherColors = avenType === 0 ? ['#8d6e63', '#5d4037', '#e67e22'] : ['#ecf0f1', '#bdc3c7', '#34495e'];
    const fColor = featherColors[Math.floor(Math.random() * featherColors.length)];

    let neckHeight = avenType === 0 ? 30 : 60;
    let headY = avenType === 0 ? 80 : 50;

    let headSVG = avenType === 0 ? `
        <path d="M 115 ${headY} Q 150 ${headY-10} 140 ${headY+20} Q 130 ${headY+10} 115 ${headY+5} Z" fill="#f39c12" stroke="#111" stroke-width="1.5"/>
        <circle cx="100" cy="${headY}" r="30" fill="${fColor}" stroke="#111" stroke-width="1.5"/>
        <circle cx="110" cy="${headY-5}" r="4" fill="#f1c40f"/><circle cx="110" cy="${headY-5}" r="2" fill="#000"/>
    ` : `
        <path d="M 115 ${headY} Q 160 ${headY-10} 180 ${headY+30} Q 160 ${headY+20} 115 ${headY+5} Z" fill="#111" stroke="#333" stroke-width="1"/>
        <circle cx="100" cy="${headY}" r="25" fill="${fColor}" stroke="#111" stroke-width="1.5"/>
        <circle cx="110" cy="${headY-5}" r="3" fill="#000"/>
    `;

    return `
        <svg viewBox="0 0 200 300" width="100%" height="300px" xmlns="http://www.w3.org/2000/svg">
            <path d="M 80 140 Q 10 90 20 220 Z" fill="${fColor}" stroke="#111" stroke-width="2"/>
            <path d="M 120 140 Q 190 90 180 220 Z" fill="${fColor}" stroke="#111" stroke-width="2"/>

            <rect x="85" y="${headY + 10}" width="30" height="${neckHeight}" fill="${fColor}" stroke="#111" stroke-width="1.5"/>

            <path d="M 60 140 L 140 140 L 150 300 L 50 300 Z" fill="#e0ac69" stroke="#111" stroke-width="1.5"/>
            <path d="M 70 140 L 100 170 L 130 140 Z" fill="${fColor}" stroke="#111" stroke-width="1"/>

            ${headSVG}
        </svg>
    `;
}

// ==========================================
// ГЕНЕРАТОР: АВТОГНОМ
// ==========================================
function generateAutognomeSVG(gender) {
    const metalColors = ['#bdc3c7', '#95a5a6', '#d35400', '#f39c12']; // Сталь, медь, латунь
    const mColor = metalColors[Math.floor(Math.random() * metalColors.length)];
    const eyeColors = ['#3498db', '#e74c3c', '#2ecc71'];
    const eColor = eyeColors[Math.floor(Math.random() * eyeColors.length)];

    return `
        <svg viewBox="0 0 200 300" width="100%" height="300px" xmlns="http://www.w3.org/2000/svg">
            <line x1="90" y1="120" x2="90" y2="160" stroke="#333" stroke-width="4"/>
            <line x1="110" y1="120" x2="110" y2="160" stroke="#333" stroke-width="4"/>
            <path d="M 95 120 L 105 160 M 105 120 L 95 160" stroke="#7f8c8d" stroke-width="3"/>

            <rect x="60" y="160" width="80" height="120" rx="20" fill="${mColor}" stroke="#111" stroke-width="2"/>
            
            <circle cx="100" cy="200" r="20" fill="#111" stroke="#333" stroke-width="3"/>
            <circle cx="100" cy="200" r="15" fill="none" stroke="${eColor}" stroke-width="2" stroke-dasharray="5 5"/>
            <circle cx="100" cy="200" r="5" fill="${eColor}"/>

            <circle cx="50" cy="180" r="15" fill="#7f8c8d" stroke="#111" stroke-width="2"/>
            <circle cx="150" cy="180" r="15" fill="#7f8c8d" stroke="#111" stroke-width="2"/>

            <rect x="70" y="50" width="60" height="70" rx="30" fill="${mColor}" stroke="#111" stroke-width="2"/>
            
            <polygon points="70,80 40,60 70,90" fill="#7f8c8d" stroke="#111" stroke-width="1.5"/>
            <polygon points="130,80 160,60 130,90" fill="#7f8c8d" stroke="#111" stroke-width="1.5"/>

            <circle cx="85" cy="85" r="8" fill="#111"/>
            <circle cx="85" cy="85" r="4" fill="${eColor}"/>
            <circle cx="115" cy="85" r="8" fill="#111"/>
            <circle cx="115" cy="85" r="4" fill="${eColor}"/>

            <rect x="85" y="105" width="30" height="8" rx="2" fill="#111"/>
            <line x1="90" y1="105" x2="90" y2="113" stroke="${mColor}" stroke-width="1"/>
            <line x1="100" y1="105" x2="100" y2="113" stroke="${mColor}" stroke-width="1"/>
            <line x1="110" y1="105" x2="110" y2="113" stroke="${mColor}" stroke-width="1"/>
        </svg>
    `;
}

// ==========================================
// ГЕНЕРАТОР: БАГБИР
// ==========================================
function generateBugbearSVG(gender) {
    const furColors = ['#5d4037', '#3e2723', '#271c19', '#8d6e63', '#a04000'];
    const furColor = furColors[Math.floor(Math.random() * furColors.length)];
    const skinColor = '#ca6f1e'; // Оранжево-коричневая кожа под мехом

    return `
        <svg viewBox="0 0 200 300" width="100%" height="300px" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="60" fill="${furColor}"/>

            <path d="M 30 140 Q 100 120 170 140 L 180 300 L 20 300 Z" fill="#2c3e50" stroke="#111" stroke-width="2"/>
            
            <path d="M 20 140 Q 100 80 180 140" fill="none" stroke="${furColor}" stroke-width="30" stroke-linecap="round" stroke-dasharray="15 10"/>

            <rect x="65" y="50" width="70" height="80" rx="20" fill="${skinColor}" stroke="#111" stroke-width="1.5"/>
            
            <polygon points="65,70 30,50 65,90" fill="${skinColor}" stroke="#111" stroke-width="1.5"/>
            <polygon points="135,70 170,50 135,90" fill="${skinColor}" stroke="#111" stroke-width="1.5"/>

            <ellipse cx="80" cy="80" rx="8" ry="5" fill="#f1c40f" stroke="#111"/>
            <line x1="80" y1="76" x2="80" y2="84" stroke="#000" stroke-width="2"/>
            <ellipse cx="120" cy="80" rx="8" ry="5" fill="#f1c40f" stroke="#111"/>
            <line x1="120" y1="76" x2="120" y2="84" stroke="#000" stroke-width="2"/>
            
            <polygon points="90,100 110,100 100,108" fill="#4a2311"/>
            
            <path d="M 80 115 Q 100 125 120 115" fill="none" stroke="#111" stroke-width="3"/>
            <polygon points="85,117 88,125 91,118" fill="#fff"/>
            <polygon points="109,118 112,125 115,117" fill="#fff"/>

            <path d="M 60 50 Q 100 20 140 50" fill="none" stroke="${furColor}" stroke-width="15" stroke-linecap="round"/>
        </svg>
    `;
}

// ==========================================
// ГЕНЕРАТОР: ВЕДАЛКЕН
// ==========================================
function generateVedalkenSVG(gender) {
    const skinColors = ['#5dade2', '#3498db', '#2874a6', '#21618c', '#85c1e9'];
    const skinColor = skinColors[Math.floor(Math.random() * skinColors.length)];
    const eyeColors = ['#8e44ad', '#4a235a', '#154360', '#1f618d'];
    const eyeColor = eyeColors[Math.floor(Math.random() * eyeColors.length)];

    return `
        <svg viewBox="0 0 200 300" width="100%" height="300px" xmlns="http://www.w3.org/2000/svg">
            <rect x="88" y="100" width="24" height="60" fill="${skinColor}" stroke="#111" stroke-width="1.5"/>

            <path d="M 55 150 L 145 150 L 155 300 L 45 300 Z" fill="#2c3e50" stroke="#111" stroke-width="1.5"/>
            <path d="M 70 150 L 130 150 L 100 240 Z" fill="#bdc3c7"/>

            <ellipse cx="100" cy="85" rx="33" ry="48" fill="${skinColor}" stroke="#111" stroke-width="1.5" />
            
            <path d="M 92 120 Q 95 130 92 140" fill="none" stroke="rgba(0,0,0,0.3)" stroke-width="1.5"/>
            <path d="M 108 120 Q 105 130 108 140" fill="none" stroke="rgba(0,0,0,0.3)" stroke-width="1.5"/>

            <path d="M 95 95 L 90 105 L 110 105 L 105 95 Z" fill="rgba(0,0,0,0.15)"/>

            <ellipse cx="85" cy="85" rx="7" ry="4" fill="${eyeColor}" stroke="#111"/>
            <ellipse cx="115" cy="85" rx="7" ry="4" fill="${eyeColor}" stroke="#111"/>

            <line x1="90" y1="118" x2="110" y2="118" stroke="#111" stroke-width="1.5"/>
        </svg>
    `;
}