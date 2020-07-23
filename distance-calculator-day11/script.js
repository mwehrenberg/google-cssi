/* global color, backgroundColor, rectMode, CENTER, mouseX, mouseY, round, text, sqrt, line, rect, createCanvas, colorMode, HSB, background, ellipse, random, width, height */

let category, distance1, distance2, distance3, mousePosition, backgroundColor, spherePosition, rectPosition;

function setup() {
  // Canvas & color settings
  createCanvas(500, 400);
  colorMode(HSB, 360, 100, 100);
  rectMode(CENTER);
  backgroundColor = 95;
  // This variable contains a JSON object
  spherePosition = {
    "x": 100,
    "y": 100
  }
  rectPosition = {
    "x": 130,
    "y": 140
  }
}

function draw() {
  background(backgroundColor);
  ellipse(spherePosition.x, spherePosition.y, 20, 20);
  rect(rectPosition.x, rectPosition.y, 20, 20);
  line(spherePosition.x, spherePosition.y, rectPosition.x, rectPosition.y);
  
  //reset mouse position constantly
  let mousePosition = {
    "x": mouseX,
    "y": mouseY
  }
  
  //set up distances
  distance1 = round(computeDistance(spherePosition, rectPosition));
  distance2 = round(computeDistance(spherePosition, mousePosition));
  distance3 = round(computeDistance(rectPosition, mousePosition));
  
  //set up hot/warm/cold
  category = computeCategoryofDistance(spherePosition, mousePosition);
  
  text(`The sphere and the rectangle are ${distance1} units apart`, 20, 20);
  text(`The sphere and your mouse are ${distance2} units apart. You are ${category}`, 20, 40);
  //text(`The rectangle and your mouse are ${round(distance3)} units apart`, 20, 60);
  
}

function computeCategoryofDistance(point1, point2){
  let scale = width/240;
  let distance = computeDistance(point1, point2);
  backgroundColor = color(distance/scale % 240, 50, 100);
  if (distance > 200){
    //backgroundColor = color(240, 10, 100);
    return "cold.";
  } else if (distance > 50 && distance < 200){
    //backgroundColor = color(120, 10, 100);
    return "warm.";
  } else {
    //backgroundColor = color(0, 10, 100);
    return "hot.";
  }
}

function computeDistance(point1, point2){
  let distance = sqrt((point2.x - point1.x)**2+(point2.y - point1.y)**2);
  return distance;
}

function mousePressed() {
  spherePosition.x = random(width);
  spherePosition.y = random(height);
}