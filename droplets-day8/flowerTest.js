function setUp(){
  createCanvas(200,200);
  colorMode(HSB, 100);
}

function draw(){
  noStroke();
  fill(20, 50, 100);
  translate(50, 30);
  for (var i = 0; i < 8; i ++) {
    ellipse(0, 0, 5, 20);
    rotate(PI/5);
  }
  //translate(50, 30);
}