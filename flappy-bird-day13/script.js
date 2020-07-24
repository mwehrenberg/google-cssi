/* global round, rotate, PI, translate, resetMatrix, textColor, color, image, loadImage, triangle, loop, noLoop, collideRectRect, fill, random, text, createCanvas, colorMode, HSB, frameRate, background, width, height, 
stroke, noFill, rect, noStroke, console, UP_ARROW, DOWN_ARROW, RIGHT_ARROW, LEFT_ARROW,
keyCode */

let gameStart,
  pip,
  score,
  bird,
  birdImage,
  pipeImage,
  backdrop,
  backgroundColor;

function setup() {
  // Canvas & color settings
  createCanvas(400, 600);
  colorMode(HSB, 360, 100, 100);
  noStroke();
  textColor = color(20);

  //graphics setup
  backgroundColor = color(95);
  backdrop = loadImage("https://tr.rbxcdn.com/b89c466ea748df99af93d578d3a1a2c7/420/420/Decal/Png");
  birdImage = loadImage("https://art.pixilart.com/6b06b73db6b55aa.png");
  pipeImage = loadImage("https://3.bp.blogspot.com/-UY9eCkrsFc4/UwPrpXV3e1I/AAAAAAAAAIc/WA4153j4do0/s1600/pipe.png");

  score = 0;
  gameStart = false;
  pip = new Pipe();

  //create JSON object for bird
  bird = {
    'x': 50,
    'y': height / 2,
    'size': 70,
    'gravity': 0.4,
    'lift': -10,
    'velocity': 0
  };
}

function draw() {
  background(backdrop);
  displayScore();

  //bird
  image(birdImage, bird.x, bird.y, bird.size, bird.size);
  pip.show();
  if (gameStart) {
    bird.velocity += bird.gravity;
    bird.y += bird.velocity;
    checkBird();
    pip.move();
    pip.checkCollision();
  }
}

class Pipe {
  constructor() {
    this.w = 70;
    this.h = 400;
    this.x = width - this.w;
    this.gap = 200;
    this.topY = random(150, 250);
    this.bottomY = this.topY+this.gap;
    this.speed = 5;
  }

  show() {
    translate(this.x + this.w, this.topY);
    rotate(PI);
    image(pipeImage, 0, 0, this.w, this.h);
    console.log('hi');
    resetMatrix();
    image(pipeImage, this.x, this.bottomY, this.w, this.h);
  }

  move() {
    if (this.x > -this.w) {
      this.x -= this.speed;
      console.log('hey');
    } else {
      this.x = width;
      this.topY = random(100, this.h);
      this.bottomY = this.topY + this.gap;
      this.gap = random(100, 200);
    }
    if (this.x+this.w < bird.x){
      score++;
    }
  }
  
  checkCollision(){
    let hit1 = collideRectRect(this.x, this.topY-this.h, this.w, this.h, bird.x+20, bird.y+20, 30, 30);
    let hit2 = collideRectRect(this.x, this.bottomY, this.w, this.h, bird.x+20, bird.y+20, 30, 30);
    if (hit1 || hit2){
      gameOver();
    }
  }
}      

function displayScore() {
  text(`Score: ${round(score/10)}`, 10, 20);
}

function keyPressed() {
  gameStart = true;
  if (keyCode == 32) {
    bird.velocity += bird.lift;
  } else if (keyCode == 13){
    //reset bird
    bird.x = 50;
    bird.y = height/2;
    //reset pipes
    pip.x = width - pip.w;
    pip.topY = random(150, 250);
    pip.bottomY = pip.topY+pip.gap;
    loop();
  }
}

function checkBird(){
  if (bird.y > height){
    gameOver();
  } else if (bird.y < -bird.size/2){
    bird.y = -bird.size/2;
  }
}

function gameOver(){
  text("Game Over", width/2, height/2);
  noLoop();
}
