let points = [];

function randomPoint() {
  return {
    x: Math.random() * 400,
    y: Math.random() * 400,
    size: Math.random() * 20,
  }
}

function movePoint(point) {
  point.x += Math.random() * 2 - 1;
  point.y += Math.random() * 2 - 1;
  if (point.x > 400) {
    point.x = 400;
  }
  point.size += Math.random() * 2 - 1;
}

function setup() {
  createCanvas(400, 400);
  let count = 500;
  for(let i = 0; i < count; i++) {
     points.push(randomPoint()) ;
  }
}

function draw() {
  backg
let points = [];

function randomPoint() {
  return {
    x: Math.random() * 400,
    y: Math.random() * 400,
    size: Math.random() * 20,
  }
}

function movePoint(point) {
  point.x += Math.random() * 2 - 1;
  point.y += Math.random() * 2 - 1;
  if (point.x > 400) {
    point.x = 400;
  }
  point.size += Math.random() * 2 - 1;
}

function setup() {
  createCanvas(400, 400);
  let count = 500;
  for(let i = 0; i < count; i++) {
     points.push(randomPoint()) ;
  }
}
  
function draw() {
  background(220);
  for (let point of points) {
    movePoint(point);
  }
  for (let point of points) {
    circle(point.x, point.y, point.size);
  }
}