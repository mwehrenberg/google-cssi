/* global resetMatrix, translate, line, stroke, strokeWeight, rotate, PI, triangle, createCanvas, colorMode, HSB, random, width, height, background, noStroke, fill, ellipse */

let droplets = [];
let dropCount, grassBlades, flowers;

function setup() {
  createCanvas(500, 500);
  colorMode(HSB, 100, 100);
  dropCount = 0;
  
  for (var i=0; i<5; i++){
    droplets.push(new RainDrop());
  }
  grassBlades = [];
  flowers = [];
}

function draw() {
  background(0, 0, 95);
  
  for (let drop of droplets){
    drop.drip();
    drop.show();
  }
  dropCount++;
  
  if (dropCount%30 == 0 && dropCount != 0){
    grassBlades.push(new GrassBlade());
  } else if (dropCount%80 == 0 && dropCount != 0){
    flowers.push(new Flower());
  } /*else if (dropCount%100 == 0 && dropCount != 0){
    console.log(random()*flowers.length);
    flowers[random()*flowers.length].bloom();
  }*/
  
  for (let blade of grassBlades){
    blade.grow();
    blade.show();
  }
  for (let flower of flowers){
    flower.grow();
    flower.show();
    flower.bloom();
  }
}

class RainDrop{
  constructor(){
    this.x = random(width);
    this.y = random(height);
    this.d = random(5,11);
    this.fallSpeed = random(8,20);
  }
  
  show(){
    noStroke();
    fill(210, 100, 100);
    triangle(this.x-this.d/2, this.y, this.x, this.y-10, this.x+this.d/2, this.y);
    ellipse(this.x, this.y, this.d);
  }
  
  drip(){
    this.y += this.fallSpeed;
    if (this.y > height) {
      // ...reset it...
      this.y = 0;
      // ...and move it somewhere random.
      this.x = random(width);
    }
  }
}

class GrassBlade{
  constructor(){
    this.x = random(width);
    this.h = random(10,21);
    this.y = height + this.h;
  }
  
  grow(){
    if (this.y > height){
        this.y--;
    }
  }
  
  show(){
    fill(120, 80, 80);
    triangle(this.x, this.y, this.x+4, this.y-this.h, this.x+8, this.y);
  }
}

class Flower{
  constructor(){
    this.x = random(width);
    this.h = random(15,26);
    this.y = height + this.h;
  }
  
  grow(){
    if (this.y > height-this.h){
        this.y--;
    }
  }
  
  show(){
    stroke(120, 80, 60);
    strokeWeight(3);
    line(this.x, this.y, this.x, height);
    noStroke();
    fill(20, 50, 100);
    ellipse(this.x, this.y, 5, 20);
  }
  
  bloom(){
    noStroke();
    fill(20, 50, 100);
    translate(this.x, this.y);
    for (var i = 0; i < 8; i ++) {
      ellipse(0, 0, 5, 20);
      rotate(PI/5);
    }
    resetMatrix();
  }
}