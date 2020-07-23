/* global circle, textSize, color, backgroundColor, rectMode, CENTER, mouseX, mouseY, round, text, sqrt, line, rect, createCanvas, colorMode, HSB, background, ellipse, random, width, height */

let found, goal, goalRad, displayedDistance, distance, mousePosition, backgroundColor, goalPosition, yourPosition;

function setup() {
  // Canvas & color settings
  createCanvas(500, 400);
  colorMode(HSB, 360, 100, 100);
  backgroundColor = 95;
  
  // This variable contains a JSON object
  goalPosition = {
    "x": random(width),
    "y": random(height)
  }
  found = false;
  goalRad = 10;
  //goal = new Clickable();
}

function draw() {
  background(backgroundColor);
  //draw goal
  if (found){
    circle(goalPosition.x, goalPosition.y, goalRad*2);
    text('You win!', width/2, height/2);
  }
  //reset mouse position constantly
  yourPosition = {
    "x": mouseX,
    "y": mouseY
  }
  
  distance = round(computeDistance(goalPosition, yourPosition));
  marcoCall();
  
}

function computeDistance(point1, point2){
  let distance = sqrt((point2.x - point1.x)**2+(point2.y - point1.y)**2);
  return distance;
}

function marcoCall(){
  textSize(12);
  text(`You are ${displayedDistance} units away from the goal.`, width - 240, height - 15);
  textSize(30);
  text('Marco!', 10, 30);
  text('Polo!', width - 80, height - 35);
}

function mousePressed(){
  displayedDistance = round(computeDistance(goalPosition, yourPosition));
  if ((yourPosition.x > goalPosition.x - goalRad && yourPosition.x < goalPosition.x + goalRad) && (yourPosition.y > goalPosition.y - goalRad && yourPosition.y < goalPosition.y + goalRad)){
    found = true;
  }
}