const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

let text = document.getElementsByClassName("flashing")[0];
let time = 250;
let color1 = "cyan";
let color2 = "yellow";

async function flashyText(time, color1, color2) {
    await delay(time);
    text.style.color = color1;
    await delay(time);
    text.style.color = color2;
    flashyText(time, color1, color2);
}

flashyText(time, color1, color2);