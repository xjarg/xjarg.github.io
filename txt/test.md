---
layout: text
title: pruebita
---

# pruebita

test test test

```haskell
d1
$ sometimes (jux rev)
$ s "bd"
# n "0 0 0 1"
```

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title>phyllotaxis</title>

	<script src="../libraries/p5.js"></script>
	<script src="../libraries/p5.dom.js"></script>
	<script src="../libraries/p5.sound.js"></script>
	<script src="sketch.js"></script>

	<style>
		body {
			margin:0;
			padding:0;
			overflow: hidden;
		}
		canvas {
			margin:auto;
		}
	</style>
</head>
<body>
</body>
</html>
```

```js
let b = 137.5;
let c = 10;
let n = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    background(0);
}

function draw() {
    let a = n * b;
    let r = c * sqrt(n);
    let x = r * cos(a) + width / 2;
    let y = r * sin(a) + height / 2;
    noStroke();
    fill((tan(n) * 128), (sin(n) * 128), (atan(n) * 128));
    ellipse(x, y, 20);
    b += 0.005;
    n++;
}
```
