let classifier;
let video;

function preload() {
  // Load image classifier model before setting up canvas
  classifier = ml5.imageClassifier("MobileNet");
}

function setup() {
  //noCanvas();
  createCanvas(320, 240);
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();
  div = createDiv("Loading model...");
  // start classifying
  classifyVideo();
}

function draw() {
  image(video, 0, 0); 
}

function classifyVideo() {
  // classify current video frame
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
