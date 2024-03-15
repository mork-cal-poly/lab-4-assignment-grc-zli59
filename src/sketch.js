function setup() {
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}
let rx = 5;
let lx = -5;
let x = 100;
let y = 200;
const stepSize = 50; // Size of each step
let stepsRemaining = 0;

function setup() {
  let myCanvas = createCanvas(400, 400);
}

function draw() {
  background(135, 206, 250);
  drawBird(x, y);
}

function drawBird(x, y) {
  push();
  translate(x, y);
  drawLegs();
  fill(color(255, 100, 20));
  ellipse(0, 10, 30);
  ellipse(0, 0, 50, 30);
  fill(255);
  ellipse(-10, 0, 15);
  ellipse(10, 0, 15);
  fill(0);
  ellipse(-10, 0, 7);
  ellipse(10, 0, 7);
  fill(255, 255, 0);
  triangle(-5, 0, 5, 0, 0, 5);
  pop();
}

function drawLegs() {
  line(-5, 20, lx, 50);
  line(5, 20, rx, 50);
}

function mouseClicked() {
  if (stepsRemaining > 0) {

    x += stepSize; 
    stepsRemaining = 1;
   
    rx += 5;
    lx -= 5;
  } else {
   
    rx = 5;
    lx = -5;
    stepsRemaining+=3; }
}