function setup() {
  createCanvas(400, 400);
  // set color of background
  background(220);
  
  // draw an ellipse to canvas
  ellipse(40, 50, 55, 55);
  
  // set the fill color of any shapes we draw
  fill(255, 204, 0);
  // set the width of the line around any shape we draw
  strokeWeight(4);
  // set the color of the line around any shape we draw
  stroke(0, 204, 255);
  // draw a second ellipse to canvas
  ellipse(300, 60, 30, 55);
  
  // don't draw line around shapes we draw
  noStroke();
  // fill color with label
  fill("green");
  // draw a third ellipse to canvas
  ellipse(200, 210, 100, 120);
}

function draw() {
}