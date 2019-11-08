let classifier;
let status;

function setup() {
  //createCanvas(400, 400);
  let options = { probabilityThreshold: 0.7 };
  classifier = ml5.soundClassifier('speechCommands18w', options, modelReady);
  status = select('#status');
}

function draw() {
  //background(220);
}

function modelReady() {
  classifier.classify(gotResult);
}

function gotResult(error, results) {
  status.html('Label : '+results[0].label+', Confidence : '+results[0].confidence);
}