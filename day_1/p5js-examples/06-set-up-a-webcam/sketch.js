let video;

function setup() {
  createCanvas(640, 480);
  // set up webcamera
  video = createCapture(VIDEO);
  // resize webcamera
  video.size(640, 480);
  // hide video element, since we'll draw the video to the canvas
  video.hide();
}

function draw() {
  // draw video to canvas
  image(video, 0, 0, width, height);
}