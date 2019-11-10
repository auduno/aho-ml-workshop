let div;

function setup() {
  createCanvas(100, 100);
  background(220);
  div = createDiv("This is some text");
  let button = createButton("modify");
  button.mouseClicked(modifyHTML);
}

function draw() {
}

function modifyHTML() {
  // modify canvas
  div.html("<p>Some new paragraph.</p><p>A second paragraph.</p>");
}