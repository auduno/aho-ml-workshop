let yolo;
let video;
let objects = [];
let status;

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(640, 480);
  
  let options = {filterBoxesThreshold: 0.01, IOUThreshold: 0.4, classProbThreshold: 0.4};
  yolo = ml5.YOLO(video, options, modelReady);
  
  video.hide();
  status = select("#status");
}

function draw() {
  image(video, 0, 0, width, height);
  for (let i = 0; i < objects.length; i++) {
    let objectLabel = objects[i].label;
    let objectX = objects[i].x;
    let objectY = objects[i].y;
    let objectW = objects[i].w;
    let objectH = objects[i].h;
    noStroke();
    fill(0, 255, 0);
    text(objectLabel, objectX * width, objectY * height - 5);
    noFill();
    strokeWeight(2);
    stroke(0, 255, 0);
    rect(objectX * width, objectY * height, objectW * width, objectH * height);
  }
}

function modelReady() {
  status.html("Model ready");
  detectVideo();
}

function detectVideo() {
  yolo.detect(function(err, results) {
    objects = results;
    window.requestAnimationFrame(detectVideo);
  });
}