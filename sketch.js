console.log("what are you looking at? :)");

let ixa, iyb, izc = 0;

function setup() {
    background(0, 0, 0, 0);
    let w = document.body.clientWidth;
    let h = document.body.clientHeight;
    let canvas = createCanvas(w, h, WEBGL);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    ixa = random(-0.0125, 0.0125);
    iyb = random(-0.0125, 0.0125);
    izc = random(-0.0125, 0.0125);
}

function draw() {
    background(44);
    noStroke();
    normalMaterial();
    rotateX(frameCount * ixa);
    rotateY(frameCount * iyb);
    rotateZ(frameCount * izc);
    box(2000, 4000, 4000);
}

function windowResized() {
    resizeCanvas(document.body.clientWidth, document.body.clientlHeight);
}
