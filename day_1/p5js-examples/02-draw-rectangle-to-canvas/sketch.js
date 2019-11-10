function setup() {
  createCanvas(400, 400);
  // set color of background
  background(220);
  
  // draw a rectangle to canvas
  rect(30, 20, 55, 55);
  
  // set the fill color of any shapes we draw
  fill(255, 204, 0);
  // draw a second rectangle
  rect(300, 20, 30, 55);
  
  // don't draw line around shapes we draw
  noStroke();
  // fill color with label
  fill("green");
  // draw a second rectangle to canvas
  rect(200, 210, 100, 120);
}

function draw() {
}