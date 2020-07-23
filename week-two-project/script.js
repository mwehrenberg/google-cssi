/*global background, textColor, textFont, text, color, keyCode, UP_ARROW, DOWN_ARROW , LEFT_ARROW, RIGHT_ARROW, random, height image, createCanvas, colorMode, background, HSB , loadImage, rect , width, circle, fill , collideRectCircle*/

let playerImages, coinCount, playerWidth, playerHeight, backgroundColor, playerOneImg , playerTwoImg;
let coins = [];
let players = [];

let w = 87;
let a = 65;
let s = 83;
let d = 68;

function setUp(){
  // Canvas & color settings
  createCanvas(500, 500);
  colorMode(HSB, 360, 100, 100);
  backgroundColor = 95;
  textColor = color(100, 0, 0);
  textFont('Georgia');
  //backgroundColor = color(50, 100, 100);
  //backgroundColor = 95;
  
  playerWidth = 20;
  playerHeight = 30;
  
  //images of player one and two
  playerOneImg = loadImage('https://cdn.glitch.com/316f8875-51bc-427b-95d7-681f21b33500%2Fplayer%20one.png?v=1595010737762', playerWidth, playerHeight); // Load the image
  playerTwoImg = loadImage('https://cdn.glitch.com/316f8875-51bc-427b-95d7-681f21b33500%2Fplayer%20two.png?v=1595010738815', playerWidth, playerHeight)
  playerImages = [playerOneImg, playerTwoImg];
//   image(playerOneImg , 0 , 0);
//   image(playerTwoImg, 0, 0);
  
  
  //sets player one and two into a players array
  for (let i = 0; i < 2; i++){
    players.push(new Player(width/2, height/2, playerImages[i]));
  }
  
  //ground rectangle:
  //rect(0, 100, width, 50);
  
  //creates coins and puts them in the coins array
  coinCount = 0;
  for (let i = 0; i < 3; i++){
    coins.push(new Coin());
  }
}

function draw(){
  background(backgroundColor);
  //background(0, 100, 100);
  
  //draws coins if not already collected
  for (let coin of coins){
    if (!coin.collected){
        coin.show();
    }
  }
  //shows the players
  for(let player of players){
    player.show();
  }

}


class Player
  {
    constructor(xPosition, yPosition, playerImage)
    {
      this.x = xPosition;
      this.y = yPosition;
      this.hitBoxWitdh = playerWidth;
      this.hitBoxHeight = playerHeight;
      this.playerImage = playerImage;
      
    }
    show(){
      image(this.playerImage, this.hitBoxWidth, this.hitBoxHeight);
      //image(this.playerImage);
    }
    
  }

//when keyIsPressed, player moves
function keyPressed(){
  
  //Up,down, right, left move player 1
      if(keyCode === LEFT_ARROW){
        players[0].x --;
      }
      if(keyCode === DOWN_ARROW){
        players[0].y ++;
      }
      if(keyCode === RIGHT_ARROW){
        players[0].x++;
      }
      if(keyCode === UP_ARROW){
        players[0].y--;
      }
  
    //w,a,s,d move player 2
      if(keyCode == w){
        players[1].y--; 
      }
      if(keyCode == d){
        players[1].x++;
      }
      if(keyCode == s){
        players[1].y++;
      }
      if(keyCode == a){
        players[1].x--;
      }
}


class Coin{
  constructor(){
    this.x = random(width);
    this.y = height - 15;
    this.collected = false;
  }
  
  //displays coins
  show(){
    fill(60, 50, 100);
    circle(this.x, this.y, 10);
  }
  
  //checks to see if player hit coin
  checkCollection(){
    for (let player of players){
        this.collected = collideRectCircle(player.x, player.x, playerWidth, playerHeight, this.x, this.y, 10);
        if (this.collected){
          coinCount++;
        }
    }
  }
}

function drawScores(){
  text('Coins: ${coinCount}', 15, 15);
}
    

