console.log("what are you looking at? :)");

// sorry about bad code

let ixa, iyb, izc = 0;

function setup() {
    background(16);
    let w = document.body.clientWidth;
    let h = document.body.clientHeight;
    let canvas = createCanvas(w, h, WEBGL);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    // ixa = random(-0.0125, 0.0125);
    // iyb = random(-0.0125, 0.0125);
    // izc = random(-0.0125, 0.0125);
    ix = random(-5000, 5000);
    iy = random(-5000, 5000);
    iz = random(-5000, 5000);
}

function draw() {
    background(127)
    ambientLight(127);
    specularMaterial(64);
    noStroke();
    rotateX(frameCount / ix);
    rotateY(frameCount / iy);
    rotateZ(frameCount / iz);
    torus(frameCount + 2000, frameCount + 4000, 8, 8);
    torus(frameCount / 2, frameCount, 8, 8);
    torus(frameCount / 4, frameCount / 2, 8, 8);
    torus(frameCount / 6, frameCount / 3, 8, 8);
    pointLight(0, 256, 64, frameCount * iz * iy, frameCount * iy * ix, frameCount * ix * iz);
    pointLight(64, 0, 256, frameCount * iy * ix, frameCount * ix * iz, frameCount * iz * iy);
    pointLight(256, 64, 0, frameCount * ix * iz, frameCount * iz * iy, frameCount * iy * ix);
}

function windowResized() {
    resizeCanvas(document.body.clientWidth, document.body.clientlHeight);
}
