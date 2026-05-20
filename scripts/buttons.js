let emailButton = document.getElementById("emailButton");
let defaultFontButton = document.getElementById("defaultFontButton");
let dyslexicFontButton = document.getElementById("dyslexicFontButton");

emailButton.addEventListener('click', function() {
    let encryption = "btgxt|gwtyyzz{Urxt|y;vzx";
    let decryption = "";
    for (let i = 0; i < encryption.length; i++) {
        decryption += String.fromCharCode(encryption.charCodeAt(i) ^ 0b010101);
    }
    console.log(decryption);
    navigator.clipboard.writeText(decryption);
});

defaultFontButton.addEventListener('click', function() {
    document.documentElement.classList.remove("font-alt");
});

dyslexicFontButton.addEventListener('click', function() {
    document.documentElement.classList.add("font-alt");
});