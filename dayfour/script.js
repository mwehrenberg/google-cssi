/* global createCanvas, colorMode, strokeWeight, background, rect, stroke, fill,
HSB, mouseX, mouseY, mouseIsPressed, prevX, prevY, line */

let brushHue, prevX, prevY, weight;

function setup() {
  // Canvas & color settings
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  brushHue = 0;
  strokeWeight(5);
}

function draw() {
  //background(95);
  
  chooseColors();
  if (mouseIsPressed){
    //rect(mouseX, mouseY, 15, 15);
    //line(pmouseX, pmouseY, mouseX, mouseY);
    line(prevX, prevY, mouseX, mouseY);
  }
  prevX = mouseX;
  prevY = mouseY;
}

function chooseColors() {
  brushHue += 1;
  brushHue %= 360;
  stroke(brushHue, 50, 80);
  fill(brushHue, 50, 80);
}

function mousePressed(){
  //ellipse(random(width), random(height), 30, 30);
}

function keyPressed(){
  background(95);
}