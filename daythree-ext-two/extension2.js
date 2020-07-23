
/* global HSB mouseX text ellipse mouseY frameCount width height frameRate color lerpColor createCanvas background ellipse noFill line strokeWeight stroke beginShape TWO_PI sin cos vertex endShape push pop rect translate colorMode RGB point noStroke fill*/

// We'll use variables for most of our colors in this code-along.
let backgroundColor, mouseColor, color1, color2, color3, color4, globalS, globalB;

function setup() {
  // Canvas & color settings
  createCanvas(500, 600);
  colorMode(HSB, 360, 100, 100);
  noStroke();
  globalS = 80;
  globalB = 90

  //set canvas color and cursor color
  backgroundColor = color(95);
  mouseColor = color(20);
  
  //set paint colors
  color1 = color(0, globalS, globalB);
  color2 = color(200, globalS, globalB);
  color3 = color(60, globalS, globalB);
  color4 = color(130, globalS, globalB);
  
  background(backgroundColor);
}

function draw() {

  // draw paint colors
  fill(color1);
  rect(0, 0, 50, 50);
  fill(color2);
  rect(width-50, 0, width, 50);
  fill(color3);
  rect(0, height-50, 50, 50);
  fill(color4);
  rect(width-50, height-50, width, height);

  //draw paintbrush 
  if (mouseIsPressed){
    strokeWeight(4);
    stroke(mouseColor);
    line(pmouseX, pmouseY, mouseX, mouseY)
  }
  
  //change paint colors
  if (mouseX < 50 && mouseY < 50 && mouseIsPressed){
    mouseColor = color1;
  } else if (mouseX < 50 && mouseY > height - 50 && mouseIsPressed){
    mouseColor = color3;
  } else if (mouseX > width - 50 && mouseY < 50 && mouseIsPressed){
    mouseColor = color2;
  } else if (mouseX > width - 50 && mouseY > height - 50 && mouseIsPressed){
    mouseColor = color4;
  }
  
}