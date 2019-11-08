let video;
let status;
let detectionModel;
let objects = [];
let trigger = true;
let videoPromise;
let modelPromise;

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.elt.addEventListener('loadedmetadata', loadCocoModel);
  /*videoPromise = new Promise(resolve => {
            video.elt.onloadedmetadata = () => {
              resolve();
            };
          });*/

  // Load CocoSSD model
  /*modelPromise = cocoSsd.load({
    'base': 'mobilenet_v2'
  });*/
  
  /*Promise.all([modelPromise, videoPromise])
        .then(values => {
          detectionModel = values[0];
          //this.detectFromVideoFrame(values[0], this.videoRef.current);
          detect();
        });*/
    
  cocoSsd.load({
    'base': 'mobilenet_v2'
  }).then(modelReady);

  // Hide the original video
  video.hide();
  status = select('#status');
}

function loadCocoModel() {
  // Load CocoSSD model
  if (trigger) { 
    trigger = false;
    cocoSsd.load({
      'base': 'mobilenet_v2'
    }).then(modelReady);
  }
}

function draw() {
  image(video, 0, 0, width, height);
  for (let i = 0; i < objects.length; i++) {
    noStroke();
    fill(0, 255, 0);
    text(objects[i].class, objects[i].bbox[0], objects[i].bbox[1]);
    noFill();
    strokeWeight(4);
    stroke(0, 255, 0);
    rect(objects[i].bbox[0], objects[i].bbox[1], objects[i].bbox[2], objects[i].bbox[3]);
  }
}

function modelReady(model) {
  detectionModel = model;
  startDetecting();
}

function startDetecting() {
  status.html('Model loaded!');
  detect();
}

function detect() {
  detectionModel.detect(video.elt).then(results => {
    objects = results;
    window.requestAnimationFrame(detect);
  });
}