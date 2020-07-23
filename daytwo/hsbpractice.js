let ball,
  x,
  y,
  xVelocity,
  yVelocity,
  imageWidth,
  imageHeight,
  masterVelocity,
  colors,
  colorChange,
  hue;

function setup() {
  createCanvas(800, 600);
  // We only want to load the logo once.
  ball = loadImage(
    "https://cdn.glitch.com/eaea72a4-ac6d-4777-b76e-f37d75959aa5%2Fdvd.jpeg?1515761833387"
  );
  x = 50;
  y = 50;
  masterVelocity = 3;
  xVelocity = masterVelocity;
  yVelocity = masterVelocity;
  imageWidth = 200;
  imageHeight = 150;

  //colors = ['red', 'orange', 'yellow', 'purple', 'green', 'blue'];
  //colorChange = 0;
  hue = 0;
  colorMode(HSB, 360, 100, 100);
}

function draw() {
  background(220);

  //update colorChange
  /**
  if (colorChange < colors.length-1){
    colorChange++;
  } else if (colorChange = colors.length-1){
    colorChange = 0;
  }
  **/

  //check if x is in bounds
  if (x > width - imageWidth) {
    xVelocity = -1 * masterVelocity;
    //tint(colors[colorChange]);
    tint(hue, 70, 100);
    //console.log(colors[colorChange]); //for debugging purposes
  } else if (x < 0) {
    xVelocity = masterVelocity;
    //tint(colors[colorChange]);
    tint(hue, 70, 100);
  }
  //check if y is in bounds
  if (y > height - imageHeight) {
    yVelocity = -1 * masterVelocity;
    //tint(colors[colorChange]);
    tint(hue, 70, 100);
  } else if (y < 0) {
    yVelocity = masterVelocity;
    //tint(colors[colorChange]);
    tint(hue, 70, 100);
  }

  //update position of image
  x += xVelocity;
  y += yVelocity;
  hue += random(360);
  hue = hue % 360;

  // Draw the logo at the new position.
  image(ball, x, y, imageWidth, imageHeight);
}
