const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

let elements = document.getElementsByClassName("flashing");
let time = 250;
let color1 = "cyan";
let color2 = "yellow";

async function flashyText(time, color1, color2) {
    await delay(time);
    for (i = 0; i < elements.length; i++) {
        elements[i].style.color = color1;
    }
    await delay(time);
    for (i = 0; i < elements.length; i++) {
        elements[i].style.color = color2;
    }
    flashyText(time, color1, color2);
}

flashyText(time, color1, color2);