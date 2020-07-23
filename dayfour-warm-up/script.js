let h = 0;
let s = 60;
let b = 0;
function setup() {
  createCanvas(100, 100);
  colorMode(HSB, 360, 100, 100);
}

function draw() {
  background(h, s, b);
  if (mouseIsPressed){
    h += random(360);
  	h = h%360;
 	b = 100;
  }
}

function mouseReleased(){
  b = 0;
}
