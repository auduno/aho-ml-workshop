function setup() {
  createCanvas(400, 400);
  // speech synthesis object
  // note that this needs p5.speech library imported in index.html
  let foo = new p5.Speech(); 
  // say something
  foo.speak('Cool stuff!');
}

function draw() {
  background(220);
}