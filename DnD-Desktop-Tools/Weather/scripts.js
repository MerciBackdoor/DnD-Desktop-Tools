// scripts.js

const weatherData = {
    clear: {
        icon: "☀",
        title: "Ясно",
        effect: "Спокойная погода без негативных эффектов."
    },

    rain: {
        icon: "🌧",
        title: "Сильный дождь",
        effect: "Область считается слабо заслонённой. Существа совершают с помехой проверки Мудрости (Внимательность), основанные на зрении. Открытое пламя гаснет."
    },

    snow: {
        icon: "❄",
        title: "Снегопад",
        effect: "Область считается слабо заслонённой. Существа совершают с помехой проверки Мудрости (Внимательность), основанные на зрении. Поверхности могут считаться труднопроходимой местностью."
    },

    fog: {
        icon: "🌫",
        title: "Туман",
        effect: "Область считается слабо заслонённой. Существа совершают с помехой проверки Мудрости (Внимательность), полагающиеся на зрение."
    },

    storm: {
        icon: "⛈",
        title: "Шторм",
        effect: "Помеха для проверок Мудрости (Внимательность), основанных на зрении и слухе. Полёт без магии практически невозможен. Летающее существо в шторм должно приземляться в конце каждого своего хода, иначе оно падает."
    },

    wind: {
        icon: "🌪",
        title: "Сильный ветер",
        effect: "Помеха для бросков дальнобойных атак оружием и проверкам Мудрости (Внимательность), полагающимся на слух. Открытое пламя гаснет, туман рассеивается. Полёт без помощи магии практически невозможен. Летающее существо при сильном ветре должно приземляться в конце каждого своего хода, иначе оно падает."
    },
};

const weatherSelect = document.getElementById("weatherSelect");
const weatherIcon = document.getElementById("weatherIcon");
const weatherTitle = document.getElementById("weatherTitle");
const effectText = document.getElementById("effectText");

const tempSlider = document.getElementById("tempSlider");
const tempValue = document.getElementById("tempValue");
const weatherTemp = document.getElementById("weatherTemp");

function saveState() {
    localStorage.setItem("weatherType", weatherSelect.value);
    localStorage.setItem("weatherTemp", tempSlider.value);
}

function loadState() {

    const savedWeather = localStorage.getItem("weatherType");
    const savedTemp = localStorage.getItem("weatherTemp");

    if (savedWeather) {
        weatherSelect.value = savedWeather;
    }

    if (savedTemp) {
        tempSlider.value = savedTemp;
    }
}

function getTemperatureEffect(temp) {

    if (temp >= 37) {
        return "\n\nЧрезвычайная жара:\nСущества без Сопротивления или Иммунитета должны регулярно совершать спасброски Телосложения сл. 5+1 за каждый час во избежание истощения. Cредние или Тяжёлые доспехи накладывают Помеху.";
    }

    if (temp <= -17) {
        return "\n\nЧрезвычайный холод:\nСущества без Сопротивления или Иммунитета должны регулярно совершать спасброски Телосложения сл. 10 во избежание истощения. Тепло одетые существа (толстые куртки, варежки, и т.п.) преуспевают автоматически.";
    }

    return "";
}

function updateWeather() {

    const selected = weatherData[weatherSelect.value];
    const temp = parseInt(tempSlider.value);

    weatherIcon.textContent = selected.icon;
    weatherTitle.textContent = selected.title;

    let fullEffect = selected.effect;

    fullEffect += getTemperatureEffect(temp);

    effectText.textContent = fullEffect;

    saveState();
}

function updateTemperature() {

    const value = tempSlider.value + "°C";

    tempValue.textContent = value;
    weatherTemp.textContent = value;

    updateWeather();
}

weatherSelect.addEventListener("change", updateWeather);
tempSlider.addEventListener("input", updateTemperature);

loadState();
updateTemperature();