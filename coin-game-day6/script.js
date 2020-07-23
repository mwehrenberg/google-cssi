/* global sound, brushHue, backgroundColor, 
coinHue, coinX, coinY, score, time, gameIsOver, hit, points */


let highScore, brushHue, backgroundColor, coinHue, coinX, coinY, score, time, gameIsOver, hit, sound;
let points = [];

function preLoad(){
  soundFormats('mp3');
  sound = loadSound('assets/coins.mp3');
}

function setup() {
  // Canvas & color settings
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  textFont('Georgia');
  brushHue = 0;
  backgroundColor = 95;
  coinHue = random(360);
  coinX = random(width);
  coinY = random(height);
  time = 1000;
  gameIsOver = false;
  score = 0;
  highScore = 0;
  
  for(let i = 0; i < 3; i++) {
     points.push(randomPoint());
  }
}

function draw() {
  //draw background and player
  background(backgroundColor);
  fill(0, 0, 0);
  ellipse(mouseX, mouseY, 15);
  
  //draw three random coins
  for (let point of points) {
    fill(point.coinHue, 50, 100);
    circle(point.x, point.y, point.size);
    checkForCollision(point);
  }
  
  //update score, high score, and time
  fill(0, 0, 0);
  textSize(11);
  text(`Score: ${score}`, 20, 20);
  text(`High score: ${highScore}`, 20, 40);
  text(`Time remaining: ${time}`, 20, 60);
  handleTime();
  
  // //event handler for collecting coins
  // hit = collideCircleCircle(mouseX, mouseY, 20, coinX, coinY, 20);
  // if (hit){
  //   handleCollision();
  //   //sound.play();
  // }
  
}

function checkForCollision(point){
  //event handler for collecting coins
  hit = collideCircleCircle(mouseX, mouseY, 15, point.x, point.y, point.size);
  if (hit){
    handleCollision(point);
    //sound.play();
  }
}

//sets random point coordinates and size
function randomPoint() {
  return {
    coinHue : random(360),
    x: random(width),
    y: random(height),
    size: random(5,15),
  }
}

//reset handler when game over
function keyPressed(){
  if (keyCode === ENTER && gameIsOver){
    reset();
  }
}

function handleCollision(point) {
  if (!gameIsOver){
    points.splice(points.indexOf(point), 1);
    points.push(randomPoint());
    score++;
  }
}

function handleTime() {
  if (time > 0){
    time--;
  } else {
    gameIsOver = true;
    updateHighScore();
    textSize(16);
    text('Game over. Press Enter to replay.', width/2-120, height/2);
  }
}

function updateHighScore(){
  if (score > highScore){
    highScore = score;
  }
}

function reset(){
  gameIsOver = false;
  time = 1000;
  score = 0;
}