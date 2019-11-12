AHO ML / AI Workshop
====================

Code and links to relevant course materials for the AHO ML/AI workshop.

For the workshop we recommend using a modern browser, such as [Chrome](https://www.google.com/chrome/), [Firefox](https://www.mozilla.org/en-US/firefox/new/) or [Safari](https://www.apple.com/safari/).

Most of the exercises can be done in the [p5.js editor](https://editor.p5js.org/), but it's also possible to download the code in this repository, edit and run the code examples locally on your computer.

For those of you who are interested in editing code locally on your computer, it's possible to use either Notepad (on Windows) or TextEdit (on Mac), but we recommend downloading a more advanced code editor such as [VS Code](https://code.visualstudio.com/) or [Sublime Text](https://www.sublimetext.com/).

If you want to run the code examples in this repository, you'll need to set up a local webserver. You can do this by either using the Chrome extension [Web Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=en):

* install the Chrome extension [Web Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=en)
* Start the extension
* Click `choose folder` and point to the folder with these files.

or using [Python](https://www.python.org/) (which should be installed by default on Mac) :

* Open `Terminal` app
* Browse to the folder with these files via `cd` command
* run `python -m SimpleHTTPServer 8887`

After this, you should be able to go to `http://localhost:8887` in your browser, and browse the files in this folder.

## Day 1 : Intro to Machine Learning / classification

Intro to p5.js:
* p5.js editor : https://editor.p5js.org/
* get started with p5.js : https://p5js.org/get-started/
* p5.js reference : https://p5js.org/reference/

Basic p5.js examples:
* Changing color of background : https://editor.p5js.org/auduno/sketches/fYK2ZOjsx
* Drawing a rectangle to canvas : https://editor.p5js.org/auduno/sketches/6ZeqDkhZN
* Drawing a circle to canvas : https://editor.p5js.org/auduno/sketches/kWQO81200
* Drawing text to canvas : https://editor.p5js.org/auduno/sketches/nkT4nnjzT
* Drawing an image to canvas : https://editor.p5js.org/auduno/sketches/YxpWijbcA
* Setting up a webcam : https://editor.p5js.org/auduno/sketches/23ZwMLAV9
* Playing sound : https://editor.p5js.org/auduno/sketches/hd-dHQjl5
* Adding buttons (to for instance play and stop music) : https://editor.p5js.org/auduno/sketches/O8aflsB5M
* Generating sound with p5 oscillator : https://editor.p5js.org/auduno/sketches/28tk2VZNk
* Generating speech with p5 speech : https://editor.p5js.org/auduno/sketches/7GNUSmq5F
* Adding some HTML outside canvas : https://editor.p5js.org/auduno/sketches/qDkMHm2Gd

ML5js examples in p5.js editor:
* Image classification : https://editor.p5js.org/auduno/sketches/ntulQR_Nv
* Image classification (with webcam) : https://editor.p5js.org/auduno/sketches/eu2HQhI-b
* Audio classification : https://editor.p5js.org/auduno/sketches/QutnV0TJA
* Object detection with YOLO : https://editor.p5js.org/auduno/sketches/TApMHyvtv
* Object detection with Coco-SSD : https://editor.p5js.org/auduno/sketches/5AzA2cGIj
* PoseNet : https://editor.p5js.org/auduno/sketches/2PxQjvRhL

Teachable machine models in p5.js:
* Image classification (with webcam) : https://editor.p5js.org/auduno/sketches/dG8rkr8Cd
* Audio classification : https://editor.p5js.org/auduno/sketches/azPsAtRlC
* PoseNet : https://editor.p5js.org/auduno/sketches/LA-opq0Pf

Resources:
* [p5.js](https://p5js.org/)
* [ml5js](https://ml5js.org/)
* [Some more details on PoseNet](https://medium.com/tensorflow/real-time-human-pose-estimation-in-the-browser-with-tensorflow-js-7dd0bc881cd5)
* [Teachable Machine](https://teachablemachine.withgoogle.com)

## Day 2 : Workshop, similarity and search, Generative ML

### Similarity maps

* http://vy.nasjonalmuseet.no
* http://fontmap.ideo.com/
* https://experiments.withgoogle.com/ai/drum-machine/view/
* https://cs.stanford.edu/people/karpathy/cnnembed/
* https://projector.tensorflow.org/
* some links on t-SNE and umap:
    * https://distill.pub/2016/misread-tsne/
    * https://pair-code.github.io/understanding-umap/
