let emailButton = document.getElementById("emailButton");
let defaultFontButton = document.getElementById("defaultFontButton");
let dyslexicFontButton = document.getElementById("dyslexicFontButton");
let mobileInfoButton = document.querySelector("#mobile-info-button");

let lightBG = document.querySelector("#wp-light");
let darkBG = document.querySelector("#wp-dark");

// let testButton = document.querySelector("#test-button");
let trailToggle = document.querySelector("#mouse-trail-toggle");
let mobileMenu = document.querySelector("#mobile-menu-container");

emailButton.addEventListener('click', function() {
    // i will not let anybody scrape my data
    let encryption = "btgxt|gwtyyzz{Urxt|y;vzx";
    let decryption = "";
    for (let i = 0; i < encryption.length; i++) {
        decryption += String.fromCharCode(encryption.charCodeAt(i) ^ 0b010101);
    }
    // console.log(decryption);
    navigator.clipboard.writeText(decryption);

    // tooltip appearance & disappearance
    setTimeout(() => { tooltip.style.visibility = 'hidden' }, 3000);
    tooltip.style.visibility = 'visible';
});

defaultFontButton.addEventListener('click', function() {
    savePref('font', 'default');
    document.documentElement.classList.remove("font-alt");
});

dyslexicFontButton.addEventListener('click', function() {
    savePref('font', 'df')
    document.documentElement.classList.add("font-alt");
});

// testButton.addEventListener('click', async function() {
//     loadLogos();
// });

trailToggle.addEventListener('click', () => {
    if (trailOn) {
        trailText.textContent = "OFF";
        savePref('trail', false);
        trailOn = false;
    }
    else {
        trailText.textContent = "ON";
        savePref('trail', true);
        trailOn = true;
        mouseTrail();
    }
});

let MMactive = false;

mobileInfoButton.addEventListener('click', () => {
    if (!MMactive) {
        mobileMenu.style.display = "block";
        mobileInfoButton.textContent = "close";
        mobileInfoButton.style.backgroundColor = "red";
        MMactive = true;
    }
    else {
        mobileMenu.style.display = "none";
        mobileInfoButton.textContent = "menu";
        mobileInfoButton.style.backgroundColor = "blue";
        MMactive = false;
    }
});

lightBG.addEventListener('click', () => { changeBG('light') });
darkBG.addEventListener('click', () => { changeBG('dark') });