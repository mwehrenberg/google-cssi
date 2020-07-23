/* global color, image, loadImage, collidePointTriangle, rectMode, CENTER, triangle, loop, noLoop, collideRectRect, fill, random, text, createCanvas, colorMode, HSB, frameRate, background, width, height, 
stroke, noFill, rect, noStroke, console, UP_ARROW, DOWN_ARROW, RIGHT_ARROW, LEFT_ARROW,
keyCode */

let hue, fRate, backgroundColor, playerSnake, currentApple, score, obstacle, spike, obstacles

function setup() {
  // Canvas & color settings
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  backgroundColor = 95;
  fRate = 12;
  playerSnake = new Snake();
  currentApple = new Apple();
  //spike = loadImage('assets/spike.png');
  spike = loadImage('https://cdn.glitch.com/448191db-a154-4a2d-a1aa-a618113e7f69%2Fspike.png?v=1595360242242');
  obstacle = new Obstacle();
  obstacles = [obstacle];
  score = 0;
  hue = 240;
}

function draw() {
  background(backgroundColor);
  frameRate(fRate);
  // The snake performs the following four methods:
  playerSnake.moveSelf();
  playerSnake.showSelf();
  playerSnake.checkCollisions();
  playerSnake.checkApples();
  // The apple needs fewer methods to show up on screen.
  currentApple.showSelf();
  //display current obstacle
  for (let obstacle of obstacles){
    obstacle.show();
  }
  // We put the score in its own function for readability.
  displayScore();
}

function displayScore() {
  fill(0);
  text(`Score: ${score}`, 10, 20);
}

class Snake {
  constructor() {
    this.size = 10;
    this.x = width/2;
    this.y = height - 10;
    this.direction = 'N';
    this.speed = 12;
    this.tail = [new TailSegment(this.x, this.y)];
  }

  moveSelf() {
    if (this.direction === "N") {
      this.y -= this.speed;
    } else if (this.direction === "S") {
      this.y += this.speed;
    } else if (this.direction === "E") {
      this.x += this.speed;
    } else if (this.direction === "W") {
      this.x -= this.speed;
    } else {
      console.log("Error: invalid direction");
    }
    
    //add to front the current x,y position
    this.tail.unshift(new TailSegment(this.x, this.y));
    //remove old segment from end of array
    this.tail.pop();
  }

  showSelf() {
    noFill();
    noStroke();
    for (let tailSegment of this.tail) {
      fill(hue, 100, 100);
      tailSegment.showSelf();
      hue = (hue+20)%360;
    }
    fill(0);
  }

  checkApples() {
    let collected = collideRectRect(currentApple.x, currentApple.y, currentApple.size, currentApple.size, 
                                    this.x, this.y, this.size, this.size);
    if (collected){
      score++;
      currentApple = new Apple();
      this.extendTail();
    }
  }

  checkCollisions() {
    for (let i = 1; i < this.tail.length; i++){
      if (this.x == this.tail[i].x && this.y == this.tail[i].y){
        gameOver();
      } 
    }
    for (let tailSegment of this.tail){
      if (this.x < 0 || this.x > width || this.y < 0 || this.y > height){
        gameOver();
      }
      if (collideRectRect(this.x, this.y, this.size, this.size, obstacle.x, obstacle.y, obstacle.size, obstacle.size)){
        gameOver();
      }
    }
  }

  extendTail() {
    //get last tail segment
    let lastTailSegment = this.tail[this.tail.length-1]
    this.tail.push(new TailSegment(lastTailSegment.x, lastTailSegment.y));
    fRate++;
    if (this.tail.length%2 == 1){
      obstacles.push(new Obstacle());
    }
  }
}

class TailSegment {
  constructor(prevX, prevY){
    this.x = prevX;
    this.y = prevY;
    this.size = 10;
  }
  
  showSelf(){
    rect(this.x, this.y, this.size, this.size);
  }
}

class Apple {
  constructor() {
    this.x = random(10, width- 10);
    this.y = random(10, height - 10);
    this.size = 10;
  }

  showSelf() {
    fill(0, 80, 80);
    rect(this.x, this.y, this.size, this.size);
  }
}

class Obstacle {
  constructor(){
    this.x = random(width);
    this.y = random(height);
    this.size = 15;
  }
  
  show(){
    image(spike, this.x, this.y, this.size, this.size);
    noFill();
    rect(this.x, this.y, this.size, this.size);
  }
}

function keyPressed() {
  console.log("key pressed: ", keyCode)
  if (keyCode === UP_ARROW && playerSnake.direction != 'S') {
    playerSnake.direction = "N";
  } else if (keyCode === DOWN_ARROW && playerSnake.direction != 'N') {
    playerSnake.direction = "S";
  } else if (keyCode === RIGHT_ARROW && playerSnake.direction != 'W') {
    playerSnake.direction = "E";
  } else if (keyCode === LEFT_ARROW && playerSnake.direction != 'E') {
    playerSnake.direction = "W";
  } else if (keyCode == 32){
    restartGame();
  } else {
    console.log("wrong key");
  }
}

function restartGame() {
  score = 0;
  playerSnake = new Snake();
  currentApple = new Apple();
  obstacle = new Obstacle();
  obstacles = [obstacle];
  loop();
}

function gameOver() {
  text('GAME OVER', 10, 40);
  noLoop();
}