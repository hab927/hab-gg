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

// helepr functions to make saving/loading preferences from LocalStorage less painful
function savePref(prefKey, prefValue) {
    window.localStorage.setItem(prefKey, JSON.stringify(prefValue));
}
function loadPref(prefKey, prefValue) {
    return JSON.parse(window.localStorage.getItem(prefKey));
}

let body = document.querySelector("body");
let wallpaperButtons = document.getElementsByClassName("wp-button");
let trailText = document.querySelector("#MTTtext");
body.classList.add('bg-light');

function changeBG(wallpaperName) {
    savePref("wallpaper", wallpaperName);
    for (const wb of wallpaperButtons) {
        wb.style.border = 'none';
    }
    let div = document.getElementById('wp-' + wallpaperName);
    div.style.border = "2px solid white";
    body.className = '';
    body.classList.add('bg-' + wallpaperName);
}

function loadPrefs() {
    // wallpaper
    let wallpaperPref = loadPref('wallpaper');
    if (wallpaperPref == null) {
        changeBG('light');
    }
    else {
        changeBG(wallpaperPref);
    }

    // mouse trail
    let trailPref = loadPref('trail');
    if (trailPref == null) {
        trailOn = true;
        trailText = "ON";
    }
    else {
        trailOn = trailPref;
        if (trailOn) {
            trailText.textContent = "ON";
        }
        else {
            trailText.textContent = "OFF";
        }
    }

    // fonts
    let fontPref = loadPref('font');
    if (fontPref == null) {
        document.documentElement.classList.remove('font-alt');
    }
    else {
        if (fontPref == 'default') {
            document.documentElement.classList.remove('font-alt');
        }
        else {
            document.documentElement.classList.add('font-alt');
        }
    }
}

loadPrefs();