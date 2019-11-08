let input;
let img;
let classifier;
let div;

function setup() {
  title = createDiv('<h1>Image classification example</h1>');
  createCanvas(400, 400);
  input = createFileInput(handleFile);
  div = createDiv('Loading model...');
  classifier = ml5.imageClassifier('MobileNet', modelReady);
}

function modelReady() {
  div.html('Model ready!');
}

function draw() {
  background(220);
  if (img) {
    image(img, 0, 0, width, height);
  }
}

function handleFile(file) {
  // load image
  if (file.type === 'image') {
    if (img) {
      // remove previous image
      img.remove();
    }
    img = createImg(file.data, '');
    img.hide();
    classifier.classify(img, classifyDone);
  } else {
    img = null;
  }
}

function classifyDone(error, results) {
  // get results
  let string = "";
  string += '<div>Label: ' + results[0].label + ', Confidence: ' + results[0].confidence + '</div>';
  string += '<div>Label: ' + results[1].label + ', Confidence: ' + results[1].confidence + '</div>';
  string += '<div>Label: ' + results[2].label + ', Confidence: ' + results[2].confidence + '</div>';
  // write the result to the screen
  div.html(string);
}