/* global createCanvas, colorMode, strokeWeight, background, rect, stroke, fill,
HSB, mouseX, mouseY, mouseIsPressed, prevX, prevY, line, weight */

let brushHue, prevX, prevY, weight;

function setup() {
  // Canvas & color settings
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  brushHue = 0;
  weight = 5;
  strokeWeight(weight);
}

function draw() {
  //background(95);
  
  chooseColors();
  chooseStrokeWeight();
  if (mouseIsPressed){
    //rect(mouseX, mouseY, 15, 15);
    //line(pmouseX, pmouseY, mouseX, mouseY);
    line(prevX, prevY, mouseX, mouseY);
  }
  prevX = mouseX;
  prevY = mouseY;
}

function chooseStrokeWeight(){
  weight += 1;
  if (weight > 15){
    weight = 5;
  }
  strokeWeight(weight);
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