mobileMediaQuery.addEventListener('change', (e) => {
    if (!e.matches) {   // desktop
        mobileMenu.style.display = "none";
        for (let i = 0; i < pressTypeSpans.length; i++) {
            pressTypeSpans[i].textContent = "CLICK";
        }
        skillsWidth = 12;
        stopAnimations();
        runAnimations();
    }

    else {              // mobile
        // uncomment if people like having the mobile menu stay open

        // if (MMactive) {
        //     mobileMenu.style.display = 'block';
        // }
        for (let i = 0; i < pressTypeSpans.length; i++) {
            pressTypeSpans[i].textContent = "TAP";
        }
        skillsWidth = 5;
        stopAnimations();
        runAnimations();
    }
});