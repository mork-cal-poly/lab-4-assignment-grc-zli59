function setup() {
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}
let rx = 5;
let lx = -5;
let x = 100;
let y = 200;
const initialStepSize = 3;
let stepSize = initialStepSize;
let stepsRemaining = 0;
let stepCount = 0;
let legsOpen = true;
let s = 1

function draw() {
  background(135, 206, 250);
  drawBird(x, y, s);

  if (x > width) {
    x = 0;
    s+=2
    stepSize = initialStepSize * s;
  }
  
  if (stepsRemaining > 0) {
    if (stepCount < 3) {
      x += stepSize;
      stepCount++;
    } else {
      stepCount = 0;
      stepsRemaining--;

      legsOpen = !legsOpen;

      if (legsOpen) {
        rx -= 10;
        lx += 10;
      } else {
        rx += 10;
        lx -= 10;
      }
    }
  }
}

function drawBird(x, y, s) {
  push();
  translate(x, y);
  scale(s)
  drawLegs();
  fill(color(255, 100, 20));
  ellipse(0, 10, 30);
  ellipse(0, 0, 50, 30);
  fill(255);
  ellipse(-10, 0, 15);
  ellipse(10, 0, 15);
  fill(0);


  if (stepsRemaining==0) {
    ellipse(-10, 0, 7);
    ellipse(10, 0, 7);
  } else {
    // Legs are closed
    ellipse(-10, 0, 3);
    ellipse(10, 0, 3);
  }
  fill(255, 255, 0);
  triangle(-5, 0, 5, 0, 0, 5);
  pop();
}

function drawLegs() {
  line(-5, 20, lx, 50);
  line(5, 20, rx, 50);
}

function mouseClicked() {
  stepsRemaining = 6;
  stepCount = 0;
}