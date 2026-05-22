(() => {
    const files = ["StoneDoor.mp3", "WoodDoor.mp3", "Zombie.mp3", "Dragon.mp3"];
    // Используем уникальный ключ, чтобы не пересекаться с системой окон Desktop
    let vol = JSON.parse(localStorage.getItem("dnd_soundboard_volume") || "{}").v ?? 0.3;

    const board = document.getElementById("board");
    const slots = 14; // 2x7
    const pool = {};

    function saveSoundboardVolume() {
        localStorage.setItem("dnd_soundboard_volume", JSON.stringify({ v: vol }));
    }

    // Создаём пустую сетку
    for (let i = 0; i < slots; i++) {
        const b = document.createElement("button");
        b.classList.add("empty");
        b.textContent = "";

        const file = files[i];

        if (file) {
            b.textContent = file.replace(".mp3", "");

            const a = new Audio("sounds/" + file);
            a.volume = vol;
            pool[file] = a;

            b.onclick = () => {
                if (!a.paused && !a.ended) {
                    a.pause();
                    a.currentTime = 0;
                    b.classList.remove("play");
                    return;
                }

                a.currentTime = 0;
                a.play();
                b.classList.add("play");

                a.onended = () => b.classList.remove("play");

                saveSoundboardVolume();
            };
        } else {
            b.disabled = true;
        }

        if (board) board.appendChild(b);
    }
})();