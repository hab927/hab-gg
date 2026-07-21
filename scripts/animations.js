let skillsWidth = 12;   // in rem
const skillsHeight = 6; // rem too
const duration = 30; // in seconds

const anim1Obj = {
    duration: duration * 1000,
    iterations: Infinity,
    easing: 'ease-in-out',
    direction: 'alternate'
};

const anim2Keyframes = [
    { 
        transform: `translateY(${skillsHeight * 0.5}rem)`, 
        opacity: '0.2',
        scale: '60%',
        zIndex: '0',
        offset: 0
    },
    { 
        opacity: '0.25',
        zIndex: '0', 
        offset: 0.49 
    },
    { 
        opacity: '0.25',
        zIndex: '3', 
        offset: 0.5 
    },
    { 
        transform: `translateY(${skillsHeight}rem)`,
        scale: '90%',
        zIndex: '3',
    }
];

const anim2Obj = {
    duration: duration * 1000,
    iterations: Infinity,
    easing: 'ease-in-out',
    direction: 'alternate'
}

function runAnimations() {

    let anim1Keyframes = [
        { transform: `translateX(-${skillsWidth}rem)` }, 
        { transform: `translateX(${skillsWidth}rem)` },
    ];

    for (let i = 0; i < logos.length; i++) {
        const logoDiv = document.querySelector('#' + logos[i] + '-bubble');
        const depthDiv = logoDiv.children[0]; //a wrapper for depth animation

        const anim = logoDiv.animate(anim1Keyframes, anim1Obj);
        const anim_2 = depthDiv.animate(anim2Keyframes, anim2Obj);

        anim.pause();
        const prog = ((i + 1) / logos.length)
        anim.currentTime = anim.effect.getTiming().duration * prog * 2;
        anim.play();

        anim_2.pause();
        const prog_2 = ((i + 1) / logos.length)
        anim_2.currentTime = anim_2.effect.getTiming().duration * (prog_2 + 0.75) * 2;
        anim_2.play();
    }
};

function stopAnimations() {
    for (const logo of logos) {
        const logoDiv = document.querySelector('#' + logo + '-bubble');

        logoDiv.getAnimations({ subtree: true }).forEach((animation) => {
            animation.cancel();
        });
    }
}

runAnimations();