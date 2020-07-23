/* global createCanvas, myImg, x, y, color, loadImage, random, width, fill, noStroke, ellipse, height, image
frameRate, mouseX, mouseY, input, createInput, rect, triangle, keyCode, DOWN_ARROW, center, position, strokeRect, strokeWeight
UP_ARROW, RIGHT_ARROW*/

let myImg, x, y, color, shape, canvas, shapeSize;
let imgType = prompt("Owl, giraffe, or dog?");

let imgURL = [
  "https://cdn.glitch.com/464327bc-f5c4-4ed1-b8d7-4d87d0c5d493%2Fowl.jpg?v=1594405480401",
  "https://cdn.glitch.com/4f24244f-b181-4078-aa0f-a96fb61b319e%2Fgiraffe.jpg?v=1594421625537",
  "https://cdn.glitch.com/464327bc-f5c4-4ed1-b8d7-4d87d0c5d493%2Fdog.jpeg?v=1594406772115"
];

function preload() {
    if (imgType == "owl") {
    myImg = loadImage(imgURL[0]);
  } else if (imgType == 'giraffe') {
    myImg = loadImage(imgURL[1]);
  } else if (imgType == 'dog') {
    myImg = loadImage(imgURL[2])
  }
}

function setup() { // code runs once
  shapeSize = 0;
  createCanvas(800, 600);
  shape = 'circle';
  myImg.resize(myImg.width / 2, myImg.height / 2);
  createCanvas(myImg.width, myImg.height);
  strokeWeight(10);
  rect(5, 5, myImg.width-10, myImg.height-10);
  frameRate(544);
}

function draw() {
  // gets image color at mouse location
  color = myImg.get(mouseX, mouseY);
  fill(color);
  noStroke();

  //draws shape where user drags mouse
  if (shape == 'circle') {
    ellipse(mouseX, mouseY, 10+shapeSize, 10+shapeSize);
  } else if (shape == 'rect') {
    rect(mouseX, mouseY, 10+shapeSize, 10+shapeSize);
  } else if (shape == 'tri'){
    triangle(mouseX, mouseY, mouseX-shapeSize-5, mouseY+shapeSize+10, mouseX+shapeSize+5, mouseY+shapeSize+10);
  }
}

function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    if (shape == "circle") {
      shape = 'rect';
    } else if (shape == 'rect') {
      shape = 'tri';
    } else if (shape == 'tri') {
      shape = 'circle';
    }
  }
  if(keyCode == UP_ARROW) {
    shapeSize++;
  }
  if(keyCode == DOWN_ARROW) {
    shapeSize--;
  }
}
