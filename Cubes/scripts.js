let rollHistory = [];

function rollDice(sides) {
    const countInput = document.getElementById('dice-count');
    let count = parseInt(countInput.value) || 1;
    
    if (count < 1) count = 1;

    let rolls = [];
    let sum = 0;

    for (let i = 0; i < count; i++) {
        let roll = Math.floor(Math.random() * sides) + 1;
        
        let rollText = roll;
        if (roll === 1) {
            rollText = `<span class="crit-fail">1</span>`;
        } else if (roll === sides) {
            rollText = `<span class="crit-success">${sides}</span>`;
        }
        
        rolls.push(rollText);
        sum += roll;
    }

    const output = document.getElementById('result-output');
    let resultHTML = "";

    if (count === 1) {
        resultHTML = `d${sides}: <span class="total-sum">[${sum}]</span>`;
    } else {
        resultHTML = `${rolls.join('+')} = <span class="total-sum">[${sum}]</span>`;
    }

    output.innerHTML = resultHTML;

    let historyLabel = count === 1 ? `d${sides}` : `${count}d${sides}`;
    addToHistory(`${historyLabel} → ${resultHTML}`);
}

function rollCoin() {
    const coinFlip = Math.random() < 0.5 ? "Орёл" : "Решка";
    const output = document.getElementById('result-output');
    
    let coinHTML = coinFlip === "Орёл" 
        ? `<span class="crit-success">Орёл</span>` 
        : `<span class="crit-fail">Решка</span>`;

    let resultHTML = `🪙 Coin: ${coinHTML}`;
    output.innerHTML = resultHTML;

    addToHistory(resultHTML);
}

function addToHistory(record) {
    rollHistory.unshift(record);

    if (rollHistory.length > 3) {
        rollHistory.pop();
    }

    const historyItems = document.querySelectorAll('.history-item');
    for (let i = 0; i < 3; i++) {
        if (rollHistory[i]) {
            historyItems[i].innerHTML = rollHistory[i];
            historyItems[i].classList.remove('empty');
        } else {
            historyItems[i].innerHTML = "—";
            historyItems[i].classList.add('empty');
        }
    }
}