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

const mobileMediaQuery = window.matchMedia('(width < 40rem)');
const bigScreenQuery = window.matchMedia('(width < 80rem)')
let pressTypeSpans = document.getElementsByClassName('press-type');

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

const skillsMap = new Map([
  ['blender', 'Blender'],
  ['web-dev', 'HTML/CSS/JS'],
  ['unity', 'Unity'],
  ['python', 'Python'],
  ['c', 'C'],
  ['cpp', 'C++'],
  ['csharp', 'C#'],
  ['ubuntu', 'Ubuntu'],
  ['hlsl', 'HLSL'],
  ['git', 'Git'],
  ['github', 'GitHub'],
  ['fmod', 'FMOD'],
  ['opengl', 'OpenGL'],
  ['webgl', 'WebGL'],
  ['nodejs', 'Node.js'],
  ['react', 'React'],
  ['typescript', 'TypeScript']
]);

const logos = [...skillsMap.keys()];
const captions = [...skillsMap.values()];

async function loadLogos() {
    for (let i = 0; i < logos.length; i++) {
        logo = logos[i];
        let div = document.createElement('div');
        div.classList.add('logo-bubble');
        div.id = logo + '-bubble';

        // logo
        const img = document.createElement('img');
        img.classList.add('logo');
        img.src = '../assets/logos/' + logo + '.png';
        img.alt = logo + ' logo';

        //wrapper for animation
        const tdw = document.createElement('div');
        tdw.classList.add('depth-wrapper');

        //bubble
        const bubble = document.createElement('img');
        bubble.classList.add('bubble');
        bubble.src = '../assets/bubble.png';

        //caption
        const caption = document.createElement('div');
        caption.textContent = captions[i];
        caption.style.fontSize = '9px';
        caption.classList.add('bubble-caption');

        tdw.appendChild(img);
        tdw.appendChild(bubble);
        tdw.appendChild(caption);
        div.appendChild(tdw);
        let container = document.getElementById('spinning-logos');
        container.appendChild(div);
    }
}

loadPrefs();
loadLogos();