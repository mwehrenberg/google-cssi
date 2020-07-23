// Content behind double slashes is a comment. Use it for plain English notes,
// or for code that you want to temporarily disable.

// Extra practice: https://cdn.glitch.com/20b95798-6f01-45c6-8fc7-a706c95d44a9%2Flogos.jpg?v=1512863797321

function setup() {
  // Code here runs only once
  createCanvas(800, 600);
}

function draw() {
  // Code here runs continuously
  background(225);
  
  //Olympic rings logo
  strokeWeight(7);
  noFill();
  stroke(51, 102, 255);
  ellipse(100, 100, 100);
  stroke("yellow");
  ellipse(155, 170, 100, 100);
  stroke("black");
  ellipse(210, 100, 100);
  stroke(0, 204, 102);
  ellipse(265, 170, 100, 100);
  stroke("red");
  ellipse(320, 100, 100);
  
  //Delta logo
  strokeWeight(1);
  fill('red');
  stroke('red');
  triangle(100,300,50,380,100,360);
  triangle(100,385,50,385,100,368);
  fill(153, 0, 0);
  stroke(153, 0, 0);
  triangle(100,300,150,380,100,360);
  triangle(100,385,150,385,100,368);
  
  //Mastercard logo
  /**
  stroke('orange');
  strokeWeight(5);
  line(230,316,310,316);
  line(230,326,310,326);
  line(230,336,310,336);
  line(230,346,310,346);
  line(230,356,310,356);
  line(230,366,310,366);
  line(230,376,310,376);
  stroke('red');
  strokeWeight(5);
  line(230,321,310,321);
  line(230,331,310,331);
  line(230,341,310,341);
  line(230,351,310,351);
  line(230,361,310,361);
  line(230,371,310,371);
  line(230,381,310,381);
  **/
  fill('red');
  stroke('red');
  circle(230,350,50);
  fill('orange');
  stroke('orange');
  circle(300,350,50);
  x=316;
  for (i=0; i<18; i++){
    if (i%2==0){
      stroke('orange');
      strokeWeight(4);
    } else {
      stroke('red');
      strokeWeight(4);
    }
    line(230,x,310,x);
    x=x+4;
  }
  //arc covers
  strokeWeight(5);
  stroke('red');
  noFill();
  arc(300, 350, 100, 100, PI*0.77, PI*1.23);
  stroke('orange');
  noFill();
  arc(230, 350, 100, 100, PI*1.77, PI*2.23);
  //mask orange side
  fill('orange');
  triangle(310,390,270,316,310,316);
  triangle(310,310,270,386,310,388);
  strokeWeight(8);
  line(283,320,283,380);
  //mask red side
  strokeWeight(5);
  stroke('red');
  fill('red');
  triangle(230,386,260,316,230,316);
  triangle(230,316,260,386,230,388);

}
