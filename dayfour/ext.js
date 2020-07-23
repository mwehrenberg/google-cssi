/* global createCanvas, colorMode, strokeWeight, background, rect, stroke, fill,
HSB, mouseX, mouseY, mouseIsPressed, prevX, prevY, line, s, b, rect, slider */

let brushHue, prevX, prevY, rectSizeX, rectSizeY, globalS, globalB, slider;

function setup() {
  // Canvas & color settings
  createCanvas(600, 400);
  colorMode(HSB, 360, 100, 100);
  brushHue = 0;
  strokeWeight(5);
  globalS = 50;
  globalB = 100;
  
  /**
  slider = createSlider(5, 15, 5, 1);
  slider.position(width - 100, 20);
  slider.style('width', '80px');
  **/
}

function draw() {
  //background(95);

  // Draw 360 rectangles for the color "wheel"
  noStroke();
  for (var i = 0; i < height; i++) {
    drawRect(i);
  }
  
  //draw stroke size bar

  // Pick the color from the wheel
  if (mouseIsPressed && mouseX < 50) {
    chooseColors();
  }

  //paint
  if (mouseIsPressed) {
    if (mouseX < 100) {
      chooseColors();
    } else {
      strokeWeight(5);
      stroke(brushHue, globalS, globalB);
      fill(brushHue, globalS, globalB);
      line(prevX, prevY, mouseX, mouseY);
    }
  }

  prevX = mouseX;
  prevY = mouseY;
}

function chooseColors() {
  brushHue = mouseY / (height / 360);
  brushHue %= 360;
  console.log(brushHue);
}

function keyPressed() {
  background(95);
}

function drawRect(h) {
  fill(h, globalS, globalB);
  rect(0, (height / 360) * h, 100, height / 360);
}
