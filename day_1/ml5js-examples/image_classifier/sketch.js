let input;
let img;
let classifier;
let div;

function setup() {
  title = createDiv("<h1>Image classification example</h1>");
  createCanvas(400, 400);
  input = createFileInput(handleFile);
  div = createDiv("Loading model...");
  classifier = ml5.imageClassifier("MobileNet", {topk : 3}, modelReady);
}

function modelReady() {
  div.html("Model ready!");
}

function draw() {
  background(220);
  if (img) {
    image(img, 0, 0, width, height);
  }
}

function handleFile(file) {
  // load image
  if (file.type === "image") {
    img = createImg(file.data, "");
    img.hide();
    classifier.classify(img, classifyDone);
  } else {
    img = null;
  }
}

function classifyDone(error, results) {
  // get results
  let string = "";
  for (let i = 0;i < results.length;i++) {
    string += "<div>Label: " + results[i].label + ", Confidence: " + results[i].confidence + "</div>";
  }
  // write the result to the screen
  div.html(string);
}