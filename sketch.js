var iX1, iY1, iZ1, iX2, iY2, iZ2 = 0;

function dome(st, iX, iY, iZ) {
    rotateX(frameCount * iX);
    rotateY(frameCount * iY);
    rotateZ(frameCount * iZ);
    noFill();
    stroke(st);
    strokeWeight(1);
    sphere(250);
}

function setup() {
    background(0, 0, 0, 0);
    var w = document.body.clientWidth;
    var h = document.body.clientHeight;
    var canvas = createCanvas(w, h, WEBGL);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    iX1 = random(-0.0025, 0.0025);
    iY1 = random(-0.0025, 0.0025);
    iZ1 = random(-0.0025, 0.0025);
    iX2 = random(-0.0025, 0.0025);
    iY2 = random(-0.0025, 0.0025);
    iZ2 = random(-0.0025, 0.0025);
}

function draw() {
    background(0, 0, 0, 0);
    camera(0, 0, 250, 0, 0, 0, 0, 1, 0);
    dome(33, iX1, iY1, iZ1);
    dome(22, iX2, iY2, iZ2);
}

function windowResized() {
    resizeCanvas(document.body.clientWidth, document.body.clientHeight);
}
