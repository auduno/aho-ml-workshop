let mySound;

function preload() {
  // set the global sound formats
  soundFormats("mp3", "ogg");
  // load sound before doing something with it
  // note that this file has been uploaded (see sketch files to left)
  mySound = loadSound("doorbell.mp3");
}

function setup() {
  mySound.setVolume(0.5);
  mySound.play();
}

function draw() {
}
