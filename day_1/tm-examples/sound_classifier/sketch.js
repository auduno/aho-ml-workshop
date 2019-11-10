let classifier;
let status;

let modelURL = "https://teachablemachine.withgoogle.com/models/i48gtl5-/";

function setup() {
  //createCanvas(400, 400);
  let options = { probabilityThreshold: 0.7 };
  classifier = ml5.soundClassifier(modelURL + "model.json", options, modelReady);
  status = select("#status");
}

function draw() {
  //background(220);
}

function modelReady() {
  status.html("Model ready, listening...");
  classifier.classify(gotResult);
}

function gotResult(error, results) {
  status.html("Label : "+results[0].label+", Confidence : "+results[0].confidence);
}