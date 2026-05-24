(() => {
    const files = ["StoneDoor.mp3", "WoodDoor.mp3", "Zombie.mp3", "Dragon.mp3"];
    let vol = JSON.parse(localStorage.getItem("dnd_soundboard_volume") || "{}").v ?? 0.3;

    const board = document.getElementById("board");
    const addBtn = document.getElementById("add-btn");
    const fileInput = document.getElementById("file-input");
    const slots = 14;
    const pool = {};
    let currentSlot = 0;

    function saveSoundboardVolume() {
        localStorage.setItem("dnd_soundboard_volume", JSON.stringify({ v: vol }));
    }

    function assignButton(fileSrc, fileName) {
        // stop if no free space on board
        if (currentSlot >= slots) return;

        const b = board.children[currentSlot];
        b.classList.remove("empty");
        b.disabled = false;
        b.textContent = fileName.replace(".mp3", "");

        const a = new Audio(fileSrc);
        a.volume = vol;
        pool[fileName] = a;

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

        currentSlot++;
    }

    // make empty buttons first
    for (let i = 0; i < slots; i++) {
        const b = document.createElement("button");
        b.classList.add("empty");
        b.disabled = true;
        if (board) board.appendChild(b);
    }

    // load first files from folder
    files.forEach(file => {
        assignButton("sounds/" + file, file);
    });

    // open file select
    addBtn.onclick = () => {
        fileInput.click();
    };

    // read file when user pick it
    fileInput.onchange = (event) => {
        const file = event.target.files[0];
        if (file) {
            // make fake url for browser to play local file
            const fileUrl = URL.createObjectURL(file);
            assignButton(fileUrl, file.name);
            
            // clear input to allow adding same file again if needed
            fileInput.value = ""; 
        }
    };
})();