let emailButton = document.getElementById("emailButton");
let defaultFontButton = document.getElementById("defaultFontButton");
let dyslexicFontButton = document.getElementById("dyslexicFontButton");
let mobileInfoButton = document.querySelector("#mobile-info-button");
let mobileMenu = document.querySelector("#mobile-menu-container");
let testButton = document.querySelector("#test-button");
let tooltip = document.getElementById("copiedTT");

emailButton.addEventListener('click', function() {
    // i will not let anybody scrape my data
    let encryption = "btgxt|gwtyyzz{Urxt|y;vzx";
    let decryption = "";
    for (let i = 0; i < encryption.length; i++) {
        decryption += String.fromCharCode(encryption.charCodeAt(i) ^ 0b010101);
    }
    console.log(decryption);
    navigator.clipboard.writeText(decryption);

    // tooltip appearance & disappearance
    tooltip.style.visibility = 'visible';
    setTimeout(() => { tooltip.style.visibility = 'hidden' }, 3000);
});

defaultFontButton.addEventListener('click', function() {
    document.documentElement.classList.remove("font-alt");
});

dyslexicFontButton.addEventListener('click', function() {
    document.documentElement.classList.add("font-alt");
});

testButton.addEventListener('click', async function() {
    await lerp(20);
    console.log("alsdjk");
});

let MMactive = false;
const mobileMediaQuery = window.matchMedia('(width < 40rem)');

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

mobileMediaQuery.addEventListener('change', (e) => {
    if (!e.matches) {    // desktop
        mobileMenu.style.display = "none";
    }
    // uncomment if people like having the mobile menu stay open

    // else {
    //     if (MMactive) {
    //         mobileMenu.style.display = 'block';
    //     }
    // }
});