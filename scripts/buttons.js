let emailButton = document.getElementById("emailButton");
let defaultFontButton = document.getElementById("defaultFontButton");
let dyslexicFontButton = document.getElementById("dyslexicFontButton");
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