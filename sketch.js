console.log("what are you looking at? :)");

// sorry about bad code

var i = 0;

var mandala = {
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
    n: 0,
    init: function() {
        a1a = random(-1000, 1000);
        a1b = random(-1000, 1000);
        a1c = random(-1000, 1000);
        a1d = random(-1000, 1000);
        b1a = random(-1000, 1000);
        b1b = random(-1000, 1000);
        b1c = random(-1000, 1000);
        b1d = random(-1000, 1000);
        a2a = random(-1000, 1000);
        a2b = random(-1000, 1000);
        a2c = random(-1000, 1000);
        a2d = random(-1000, 1000);
        b2a = random(-1000, 1000);
        b2b = random(-1000, 1000);
        b2c = random(-1000, 1000);
        b2d = random(-1000, 1000);
        w = int(random(0, 20));
        r = int(random(0, 10));
        s = 0.05
    },
    calculate: function(
        a1a, a1b, a1c, a1d,
        b1a, b1b, b1c, b1d,
        a2a, a2b, a2c, a2d,
        b2a, b2b, b2c, b2d) {
        this.x1 = sin(this.n + a1a) * a1b + cos(this.n + a1c) * a1d;
        this.y1 = sin(this.n + b1a) * b1b + cos(this.n + b1c) * b1d;
        this.x2 = sin(this.n + a2a) * a2b + cos(this.n + a2c) * a2d;
        this.y2 = sin(this.n + b2a) * b2b + cos(this.n + b2c) * b2d;
    },
    deploy: function(w, r, s) {
        rotate(this.n / r);
        noFill();
        stroke(0, 0, 0, (this.x1 + this.x2 + this.y1 + this.y2)/16)
        strokeWeight(10);
        // stroke(this.x1, this.x2, this.y1, this.y2 / 8);
        rect(this.x1, this.y1, this.x2, this.y2);
        // stroke(this.y2, this.y1, this.x2, this.x1 / 4);
        ellipse(this.y2, this.y1, this.x2, this.x1);
        this.n += s;
    }
}

function setup() {
    background(44);
    let w = document.body.clientWidth;
    let h = document.body.clientHeight;
    let canvas = createCanvas(w, h, WEBGL);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    mandala.init();
}

function draw() {
    background(44)
    translate(width / 2, height / 2);
    mandala.calculate(
        a1a, a1b, a1c, a1d,
        b1a, b1b, b1c, b1d,
        a2a, a2b, a2c, a2d,
        b2a, b2b, b2c, b2d
    );
    mandala.deploy(w, r, s);
}

function windowResized() {
    resizeCanvas(document.body.clientWidth, document.body.clientlHeight);
}
