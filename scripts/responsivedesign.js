const mobileMediaQuery = window.matchMedia('(width < 40rem)');

let pressTypeSpans = document.getElementsByClassName('press-type');

mobileMediaQuery.addEventListener('change', (e) => {
    if (!e.matches) {   // desktop
        mobileMenu.style.display = "none";
        for (let i = 0; i < pressTypeSpans.length; i++) {
            pressTypeSpans[i].textContent = "CLICK";
        }
    }

    else {              // mobile
        // uncomment if people like having the mobile menu stay open

        // if (MMactive) {
        //     mobileMenu.style.display = 'block';
        // }
        for (let i = 0; i < pressTypeSpans.length; i++) {
            pressTypeSpans[i].textContent = "TAP";
        }
    }
});