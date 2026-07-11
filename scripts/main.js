const checkMouse = window.matchMedia('(pointer: fine)');

const mousePosition = {x:0, y:0};

document.addEventListener('mousemove', (e) => {
    mousePosition.x = e.clientX;
    mousePosition.y = e.clientY;
});

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const lerp = async function* (ms) {
    for (let i=0; i<ms; i++) {
        await new Promise(resolve => setTimeout(resolve, 1));
        yield (i/ms);
    }
}

let body = document.querySelector("body");
body.classList.add('bg-image-light');