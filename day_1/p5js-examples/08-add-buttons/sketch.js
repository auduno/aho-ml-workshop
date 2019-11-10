let mySound;

function preload() {
  soundFormats("mp3", "ogg");
  mySound = loadSound("Chopin_Prelude.ogg");
}

function setup() {
  createCanvas(100,100);
  // set up buttons with text "play" and "stop"
  let startButton = createButton("play");
  let stopButton = createButton("stop");
  // set up what functions are when each button is clicked
  startButton.mousePressed(startMusic);
  stopButton.mousePressed(stopMusic);
}

function startMusic() {
  mySound.play(); 
}

function stopMusic() {
  mySound.stop(); 
}

function draw() {
}
