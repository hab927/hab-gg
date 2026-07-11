let emailButton = document.getElementById("emailButton");
let defaultFontButton = document.getElementById("defaultFontButton");
let dyslexicFontButton = document.getElementById("dyslexicFontButton");
let mobileInfoButton = document.querySelector("#mobile-info-button");

// let testButton = document.querySelector("#test-button");
let trailToggle = document.querySelector("#mouse-trail-toggle");

let mobileMenu = document.querySelector("#mobile-menu-container");
let trailText = document.querySelector("#MTTtext");
let trailOn = true;

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
    tooltip.style.visibility = 'visible';
    setTimeout(() => { tooltip.style.visibility = 'hidden' }, 3000);
});

defaultFontButton.addEventListener('click', function() {
    document.documentElement.classList.remove("font-alt");
});

dyslexicFontButton.addEventListener('click', function() {
    document.documentElement.classList.add("font-alt");
});

// testButton.addEventListener('click', async function() {
//     await lerp(20);
//     console.log("alsdjk");
// });

trailToggle.addEventListener('click', () => {
    if (trailOn) {
        trailText.textContent = "OFF";
        trailOn = false;
    }
    else {
        trailText.textContent = "ON";
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