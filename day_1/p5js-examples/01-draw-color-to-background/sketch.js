
function setup() {
  createCanvas(400, 400);
  // generate random numbers between 0 and 255 for each color channel
  let randomColorRed = random(255);
  let randomColorGreen = random(255);
  let randomColorBlue = random(255);
  // set the color of the background
  background(randomColorRed, randomColorGreen, randomColorBlue);
}

function draw() {
}