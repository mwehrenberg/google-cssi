let ball, x, y, xVelocity, yVelocity, imageWidth, imageHeight, masterVelocity, colors, colorChange;

function setup(){
  createCanvas(800, 600);
  // We only want to load the logo once.
  ball = loadImage("https://cdn.glitch.com/eaea72a4-ac6d-4777-b76e-f37d75959aa5%2Fdvd.jpeg?1515761833387");
  x = 50;
  y = 50;
  masterVelocity = 3;
  xVelocity = masterVelocity;
  yVelocity = masterVelocity;
  imageWidth = 200;
  imageHeight = 150;
  
  colors = ['red', 'orange', 'yellow', 'purple', 'green', 'blue'];
  colorChange = 0;
}

function draw(){
  background(220);
  
  //update colorChange
  if (colorChange < colors.length-1){
    colorChange++;
  } else if (colorChange = colors.length-1){
    colorChange = 0;
  }
  
  //check if x is in bounds
  if (x > width - imageWidth){
    xVelocity = -1 * masterVelocity;
    tint(colors[colorChange]);
    console.log(colors[colorChange]); //for debugging purposes
  } else if (x < 0){
    xVelocity = masterVelocity;
    tint(colors[colorChange]);
  }
  //check if y is in bounds
  if (y > height - imageHeight){
    yVelocity = -1 * masterVelocity;
    tint(colors[colorChange]);
  } else if (y < 0){
    yVelocity = masterVelocity;
    tint(colors[colorChange]);
  }

  //update position of image
  x += xVelocity;
  y += yVelocity;
  
  // Draw the logo at the new position.
  image(ball, x, y, imageWidth, imageHeight);
  
}
