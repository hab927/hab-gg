window.addEventListener('resize', (e) => {
    const w = window.innerWidth;
    const rfs = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const wRem = w / rfs;

    skillsWidth = wRem / 3.5;
    skillsHeight = wRem / 16;
    const fontSize = wRem / 5;

    for (let i = 0; i < logos.length; i++) {
        const logoDiv = document.querySelector('#' + logos[i] + '-bubble');
        const depthDiv = logoDiv.children[0]; //a wrapper for depth animation
        let caption = depthDiv.children[2];
        caption.style.fontSize = Math.max(fontSize, 6) + 'px';
    }

    stopAnimations();
    runAnimations();
});