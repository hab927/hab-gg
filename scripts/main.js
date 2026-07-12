const checkMouse = window.matchMedia('(pointer: fine)');

const mousePosition = {x:0, y:0};

document.addEventListener('mousemove', (e) => {
    mousePosition.x = e.clientX;
    mousePosition.y = e.clientY;
});

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const lerp = async function* (ms) {
    for (let i=0; i<ms; i++) {
        await new Promise(resolve => setTimeout(resolve, 1));
        yield (i/ms);
    }
}

let body = document.querySelector("body");
let wallpaperButtons = document.getElementsByClassName("wp-button");
body.classList.add('bg-light');

function changeBG(wallpaperName) {
    window.localStorage.setItem("wallpaper", wallpaperName);
    for (const wb of wallpaperButtons) {
        wb.style.border = 'none';
    }
    let div = document.getElementById('wp-' + wallpaperName);
    div.style.border = "2px solid white";
    body.className = '';
    body.classList.add('bg-' + wallpaperName);
}

function loadPrefs() {
    let wallpaperPref = window.localStorage.getItem('wallpaper');
    console.log(wallpaperPref);
    if (!wallpaperPref) {
        changeBG('light');
    }
    else {
        changeBG(wallpaperPref);
    }
}

loadPrefs();