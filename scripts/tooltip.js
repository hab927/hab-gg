let tooltips = document.getElementsByClassName("tooltip");

document.addEventListener('mousemove', mouseHover, true);

function mouseHover(e) {
    for (var i=tooltips.length; i--;) {
        if (tooltips[i].style.visibility == 'visible') {
            let tt = tooltips[i];

            let bounds = tt.getBoundingClientRect();

            let xpos = e.clientX + window.scrollX;
            let ypos = e.clientY + window.scrollY - 70;

            const newXpos = Math.max(window.scrollX, Math.min(window.innerWidth + window.scrollX - bounds.width, xpos));
            const newYpos = Math.max(window.scrollY, Math.min(window.innerHeight + window.scrollY - bounds.height, ypos));

            tt.style.left = Number(newXpos) + 'px';
            tt.style.top = Number(newYpos) + 'px';
        }
    }
}