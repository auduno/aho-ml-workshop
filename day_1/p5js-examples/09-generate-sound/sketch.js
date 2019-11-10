let osc;
let playing = false;

function setup() {
  createCanvas(200,200)
  background(255,0,255);
  text("Press play", 20, 80);
  text("and hover mouse over canvas!", 20, 100);

  osc = new p5.Oscillator();
  osc.setType("sine");
  osc.freq(240);
  osc.amp(0);
  osc.start();
  
  let startButton = createButton("play");
  let stopButton = createButton("stop");
  startButton.mousePressed(playSound);
  stopButton.mousePressed(stopSound);
}

function draw() {
  if (mouseX > 0 && mouseX < width && mouseY < height && mouseY > 0) {
    osc.freq(440 - mouseY);
    osc.pan(-1 + 2*(mouseX/width));
  }
}

function playSound() {
  osc.amp(0.3, 0.05);
}

function stopSound() {
  osc.amp(0, 0.5);
}
