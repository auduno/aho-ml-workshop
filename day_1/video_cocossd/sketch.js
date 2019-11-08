let video;
let status;
let detectionModel;
let objects = [];

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.elt.addEventListener('loadedmetadata', loadCocoModel);
  video.hide();
  status = select('#status');
}

function draw() {
  image(video, 0, 0, width, height);
  for (let i = 0; i < objects.length; i++) {
    let objectX = objects[i].bbox[0];
    let objectY = objects[i].bbox[1];
    let objectWidth = objects[i].bbox[2];
    let objectHeight = objects[i].bbox[3];
    let objectClass = objects[i].class;
    let objectScore = objects[i].score;
    noStroke();
    fill(0, 0, 0);
    text(objectClass, objectX, objectY - 5);
    noFill();
    strokeWeight(2);
    stroke(0, 255, 0);
    rect(objectX, objectY, objectWidth, objectHeight);
  }
}

function loadCocoModel() {
  cocoSsd.load({
    'base': 'mobilenet_v2'
  }).then(modelReady);
}

function modelReady(model) {
  detectionModel = model;
  status.html('Model loaded!');
  detect();
}

function detect() {
  detectionModel.detect(video.elt).then(results => {
    objects = results;
    window.requestAnimationFrame(detect);
  });
}