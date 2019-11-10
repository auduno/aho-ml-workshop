let img;

function preload() {
  // load image before we start setup
  // note that this image has been uploaded (see sketch files to left)
  img = loadImage("basketball.png");
}

function setup() {
  createCanvas(400, 400);
  background(220);
  
  // draw image with original shape
  image(img, 0, 0);
  
  // draw image with smaller size
  image(img, 300, 250, 50, 50);
  
  // draw image third time
  image(img, 50, 330, 150, 50);
}

function draw() {
}