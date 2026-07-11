async function mouseTrail() {
    await delay(50);
    if (checkMouse.matches && trailOn) {
        let color = rainbowMode(10.001);
        spawnParticle(color);
        mouseTrail();
    }
}

async function spawnParticle(textColor) {
    spawnOffset = {x:-5, y:-12};
    let div = document.createElement("particle");
    document.querySelector("#trail").appendChild(div);
    let originMousePosition = structuredClone(mousePosition);
    div.style.pointerEvents = 'none';
    div.style.color = textColor;
    div.textContent = "+";
    div.style.fontFamily = "Arial Black";
    div.style.fontSize = '15px';
    // div.style.textShadow = '0 0 5px black';
    div.style.position = 'fixed';
    div.style.left = mousePosition.x + spawnOffset.x + 'px';
    div.style.top = mousePosition.y + spawnOffset.y + 'px';

    let lifespan = 0; // 0 is just made. 1 is expired
    let fallDirection = Math.random() - 0.5;
    let scale = Math.random() * 100 + 50;
    let rotation = Math.random() * 360;

    const whateverAnimation = async () => {
        let verticalDisplacement = 0;
        for await (const life of lerp(600)) {
            lifespan = life;
            // now change everything that i want

            // gravity simulation
            let gravityFactor = 0.002;
            verticalDisplacement += verticalDisplacement * gravityFactor + lifespan;

            div.style.top = (originMousePosition.y + spawnOffset.y + verticalDisplacement) +'px';
            div.style.left = (originMousePosition.x + spawnOffset.x +  50 * fallDirection * lifespan) + 'px';
            div.style.opacity = 1 - lifespan;
            div.style.scale = (1 - lifespan) * scale + '%';
            div.style.rotate = 1 - lifespan * rotation + 'deg';
        }
        div.remove();
    }
    whateverAnimation();
}

if (checkMouse.matches) {
    mouseTrail();
}

// handle rainbow mode
let hue = 0;

let red = 60; // max of all colors is going to be 60 to make the math easier
let green = 0;
let blue = 0;

// Source - https://stackoverflow.com/a/5624139
// Posted by Tim Down, modified by community. See post 'Timeline' for change history
// Retrieved 2026-07-10, License - CC BY-SA 4.0

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function rainbowMode(hue_step) {
  hue = (hue + hue_step) % 360; // update hue

  if (0 < hue && hue <= 60) { // red 60, green up, blue 0
    red = 60;
    green = hue % 60;
    blue = 0;
  }
  else if (60 < hue && hue <= 120) { // red down, green 60, blue 0
    red = 60 - (hue % 60);
    green = 60;
    blue = 0;
  }
  else if (120 < hue && hue <= 180) { // red 0, green 60, blue up
    red = 0;
    green = 60;
    blue = hue % 60;
  }
  else if (180 < hue && hue <= 240) { // red 0, green down, blue 60
    red = 0;
    green = 60 - (hue % 60);
    blue = 60;
  }
  else if (240 < hue && hue <= 300) { // red up, green 0, blue 60
    red = hue % 60;
    green = 0;
    blue = 60;
  }
  else { // red 60, green 0, blue down
    red = 60;
    green = 0;
    blue = 60 - (hue % 60);
  }

  elementColor = rgbToHex(
    Math.trunc(red/60 * 255), 
    Math.trunc(green/60 * 255), 
    Math.trunc(blue/60 * 255)
  );
  return elementColor;
}