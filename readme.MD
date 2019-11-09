AHO ML / AI Workshop
====================

Code and links to relevant course materials for the AHO ML/AI workshop.

For the workshop we recommend using a modern browser, such as [Chrome](https://www.google.com/chrome/), [Safari](https://www.apple.com/safari/) or [Microsoft Edge](https://www.microsoft.com/en-us/windows/microsoft-edge).

For those of you who are interested in editing code locally on your computer, it's possible to use either Notepad (on Windows) or TextEdit (on Mac), but we recommend downloading a more advanced code editor such as [VS Code](https://code.visualstudio.com/) or [Sublime Text](https://www.sublimetext.com/).

If you want to run the code in this repository, you'll need to set up a local webserver. You can do this by either using the Chrome extension [Web Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=en):

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
* Playing oscillator : https://editor.p5js.org/auduno/sketches/28tk2VZNk
* Adding some HTML outside canvas : https://editor.p5js.org/auduno/sketches/qDkMHm2Gd

ML5js examples in p5.js editor:
* Image classification : https://editor.p5js.org/auduno/sketches/ntulQR_Nv
* Audio classification : https://editor.p5js.org/auduno/sketches/QutnV0TJA
* Object detection with YOLO : https://editor.p5js.org/auduno/sketches/TApMHyvtv
* Object detection with Coco-SSD : https://editor.p5js.org/auduno/sketches/5AzA2cGIj
* PoseNet : https://editor.p5js.org/auduno/sketches/2PxQjvRhL

Teachable machine models in p5.js:
* PoseNet : https://editor.p5js.org/auduno/sketches/LA-opq0Pf

Resources:
* [p5.js](https://p5js.org/)
* [ml5js](https://ml5js.org/)
* [Teachable Machine](https://teachablemachine.withgoogle.com)

## Day 2 : (?), Generative ML

### Generative Machine Learning

Generative examples in p5.js:
* Char-RNN : TODO
* SketchRNN : TODO

Generative music/sound (external examples):
* [Performance RNN](https://magenta.tensorflow.org/demos/performance_rnn/index.html)
* [](https://teropa.info/gdgua2018/#/neural-drum-machine)
* [CocoNet](https://magenta.tensorflow.org/coconet)

Generative text (external examples):
* [Talk to transformer](https://talktotransformer.com/)

Resources:

* [Runway ML Beta](https://runwayml.com/)

## Day 3 : GANs, Working with ML

Resources:
* [People + AI Guidebook](https://pair.withgoogle.com/)

More resources : 
* [Teslas Deep Learning at scale](https://towardsdatascience.com/teslas-deep-learning-at-scale-7eed85b235d3)
* [Visualizing sound with t-sne](https://medium.com/@LeonFedden/comparative-audio-analysis-with-wavenet-mfccs-umap-t-sne-and-pca-cb8237bfce2f)
* [Visualizing with ML](https://media.neurips.cc/Conferences/NIPS2018/Slides/Visualization_for_ML.pdf)
