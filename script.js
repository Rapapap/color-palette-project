const container = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh-btn");
const maxPaletteBox = 32;

const generatePalette = () => {
    container.innerHTML = ""; //biar kosong
    for (let i = 0;  i < maxPaletteBox;  i++) {
        //Generate random hex value
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);// untuk mengeluarkan hex random
        randomHex = `#${randomHex.padStart(6, "0")}`;
        console.log(randomHex);
        //Membuat element li
        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = `<div class="box" style="background: ${randomHex}"></div>
                            <span class="hex">${randomHex}</span>`;
        //adding click event to li element to copy color code
        color.addEventListener("click", () => copyColor(color, randomHex));
        container.appendChild(color);
    };
};

generatePalette();

refreshBtn.addEventListener("click", generatePalette);
