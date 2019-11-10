let classifier;
let video;

// paste your url from teachable machine here
let modelURL = "https://teachablemachine.withgoogle.com/models/EZpWTCmZ/";

function preload() {
  // Load image classifier model before setting up canvas
  classifier = ml5.imageClassifier(modelURL + "model.json");
}

function setup() {
  createCanvas(320, 240);
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();
  div = createDiv("Loading model...");
  
  classifyVideo();
}

function draw() {
  image(video, 0, 0);
}

function classifyVideo() {
  // classify video
  // call gotResult when classification is done
  classifier.classify(video, gotResult);
}

function gotResult(err, results) {
  let string = "<p>Label: " + results[0].label + "</p><p>Confidence: " + results[0].confidence + "</p>";
  // output the results
  div.html(string);
  // start a new classification
  classifyVideo();
}
