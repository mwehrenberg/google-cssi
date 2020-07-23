let dvdImage, x, y, xVelocity, yVelocity, imageWidth, imageHeight, masterVelocity;

function setup(){
  createCanvas(600, 600);
  // We only want to load the logo once.
  dvdImage = loadImage("https://cdn.glitch.com/eaea72a4-ac6d-4777-b76e-f37d75959aa5%2Fdvd.jpeg?1515761833387");
  x = 50;
  y = 50;
  masterVelocity = 3;
  xVelocity = masterVelocity;
  yVelocity = masterVelocity;
  imageWidth = 200;
  imageHeight = 150;
  
  console.log(frameRate());
}

function draw(){
  background(220);
  
  //check if x is in bounds
  if (x > width - imageWidth){
    xVelocity = -1 * masterVelocity;
  } else if (x < 0){
    xVelocity = masterVelocity;
  }
  //check if y is in bounds
  if (y > height - imageHeight){
    yVelocity = -1 * masterVelocity;
  } else if (y < 0){
    yVelocity = masterVelocity;
  }
  //update position of image
  x += xVelocity;
  y += yVelocity;
  
  // Draw the logo at the new position.
  image(dvdImage, x, y, imageWidth, imageHeight);
}
