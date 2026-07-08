let tooltips = document.getElementsByClassName("tooltip");

document.addEventListener('mousemove', mouseHover, true);

function mouseHover(e) {
    for (var i=tooltips.length; i--;) {
        tooltips[i].style.left = Number(e.pageX + 15) + 'px';
        tooltips[i].style.top = Number(e.pageY - 70) + 'px';
    }
}