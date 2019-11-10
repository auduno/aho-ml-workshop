let video;
let status;
let maxPredictions;
let tmModel;
let singlePose;

// paste the url of the model you trained in teachablemachine here
let URL = "https://teachablemachine.withgoogle.com/models/X_S4Bwai/";
let modelURL = URL + "model.json";
let metadataURL = URL + "metadata.json";

async function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
  status = select("#status");

  tmModel = await tmPose.load(modelURL, metadataURL);
  maxPredictions = tmModel.getTotalClasses();
  
  status.html("Model Loaded");
  predictPose();
}

function draw() {
  // does nothing
}

async function predictPose() {
  await predict();
  
  image(video, 0, 0, width, height);
  drawKeypoints();
  
  window.requestAnimationFrame(predictPose);
}

// A function to draw ellipses over the detected keypoints
function drawKeypoints() {
  for (let i = 0; i < singlePose.keypoints.length; i++) {
    // A keypoint is an object describing a body part (like rightArm or leftShoulder)
    let keypoint = singlePose.keypoints[i];
    // Only draw an ellipse if the score is bigger than 0.2
    if (keypoint.score > 0.2) {
      fill(0, 255, 0);
      noStroke();
      ellipse(keypoint.position.x, keypoint.position.y, 10, 10);
    }
  }
}

async function predict() {
  // First estimate the pose
  let { pose, posenetOutput } = await tmModel.estimatePose(video.elt);
  // Then get predictions from the model you trained in teachable machine
  let prediction = await tmModel.predict(posenetOutput);

  let string = "";
  for (let i = 0; i < maxPredictions; i++) {
    string += "<p>" + prediction[i].className + ": " +  prediction[i].probability.toFixed(2) + "</p>";
  }
  status.html(string);

  singlePose = pose;
}
