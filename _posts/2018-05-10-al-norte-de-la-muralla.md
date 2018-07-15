---

layout: default
title: al norte de la muralla
date: 2018-05-10
location: saltillo
language: en
category: blog
tags: sabinas travel border blog

---

tomorrow i'll travel to the north, all along the carretera federal 57, a scar on coahuila's face that connects piedras negras, a city across the río bravo (or río grande) from eagle pass, tx, with cdmx. i think about the impression those huge valleys had on the people exploring them thousands of years ago, even before the arrival of the spanish: their dreams, ambitions, dismay and agony. there's a natural wall dividing coahuila horizontally: la muralla. the south was long ago conquered territories of saltillo, parras and torreón. the north is recently conquered territory. these two parts of coahuila are so different they could be thousands of miles apart. most cities from the northern part of coahuila are just over a hundred years old. compared to saltillo's more than four hundred years of history that's fairly new. that is, in fact, mexico's frontier, the place where mexico stops being mexico and slowly, kind of painfully, starts it's transformation into usa. the border, the frontier, la frontera, is not a line: it's a gradient.

i want to test the code rendering in my blog, so i'll leave this [p5.js](https://p5js.org/) thing here

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

and this tidalcycles thing here

```haskell
cps (145/60/4)

hush

t1 clutch
$ stack [
sometimes (jux (iter 4)) $ sometimes (stut 4 0.25 0.5) $ rarely (|-| crush (irand 4)) $ sometimes (jux rev) $ s "emu(5,16)"
# legato (scale 0.25 1.5 $ slow 4 tri) # speed (scale 1 1.5 $ slow 3 sine) # crush 7 # cutoff 4500 # gain 1.5,
rarely (# legato 1) $ s "superhat(7,16)" # legato 0.25 # gain 1.25,
s "supersnare(0,4,2)" # cutoff 4500 # speed 3 # gain 1.35
]

d1 silence

t2 clutch
$ sometimes (# speed 2)
$ sometimes (# speed 0.5)
$ sometimes (jux (# speed 4))
$ sometimes (jux rev)
$ every 4 (jux (gap 2))
$ rarely (jux (stut 4 0.25 0.25))
$ s "[glitch:5(<5 7>,16,<3 4 2>)], glitch:0(3,16,2)"
# speed (scale 0.5 2 $ rand)
# crush (scale 3 8 $ sine)
# cutoff (scale 2500 5500 $ slow 7 sine)
# pan rand
# orbit 1
# rvb' 0.1 0.1

d2 silence

t3 clutch
$ chop 4 $ slow 8 $ jux rev $ stut 3 0.5 1.25 $ striate 2 $ s "print(0,16)"
# n (irand 16)
# cutoff (scale 500 2500 $ slow 8 sine)

d3 silence

d3 $
slow 4 $ jux rev $ n "[<[g3(3,8)] a2> d2(5,8), c4(7,16)]"
# s "[supersaw, supersquare]" # legato 1 # slow 6 (legato (scale 5 10 $ slow 10 sine)) # slow 8 (crush (scale 2 5 $ sine)) # slow 4 (lpf' (scale 5 150 $ slow 7 sine) 0) # gain 0.75

d3 silence

d4
$ jux rev
$ n "~ ~ ~ ~ e2 ~ ~ [g3 d4]"
# s "<supersquare supersaw>"
# legato "~ [1 0.35]"
# vowel "~ [<e o> <i a> <i u e>]"
# crush (scale 3 8 $ rand)
# cutoff (scale 2550 5502 $ slow 5 sine)
# gain 1
# orbit 1
# room 0.05
# delay 0.25
# delaytime "1/3"
# delayfeedback 0.5

d4 silence

d5 $ stack [
slow 2 $ striate 2 $ sometimes (jux (|+| n (irand (5*8)))) $ stut 4 0.5 1.05 $ n "{<5 0> 5 <5 ~> <~ 2 5> <5 0 ~ 3> <5 ~> <~ 2 3> <5 3> <~ 1> <5 0 ~> <5 ~>   <3 ~ 4 1 ~>}%8" # s "arpy" # legato 1 # slow 2 (cutoff (scale 50 500 sine)),
striate 2 $ n "5 2 0 1" # s "numbers" # vowel "i o e" # cutoff 1
]

d5 silence
```

and this processing thing here

```java
import processing.pdf.*;

int scale = 8;

// patternstudy02
// by @jarxg

void setup() {
  beginRecord(PDF, "patternstudy02.pdf");
  size(640, 640);
  background(0);
  for (int j = 0; j <= height; j+= 8) {
    for (int i = 0; i <= width; i+= 8) {
      stroke(255);
      strokeWeight(i/128);
      line(j, i, i, j);
    }
  }
  for (int j = 0; j <= height; j += 16) {
    for (int i = 0; i <= width; i += 16) {
      stroke(0);
      strokeWeight(j/64);
      line(i, j, i, j);
    }
  }
  for (int j = 0; j <= height; j += 32) {
    for (int i = 0; i <= width; i+= 32) {
      stroke(0);
      strokeWeight(i/32);
      line(i, j, i, j);
    }
  }
  endRecord();
}

void draw() {
}
```

it seems to be working fine.