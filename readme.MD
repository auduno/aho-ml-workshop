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
* PoseNet : https://editor.p5js.org/auduno/sketches/7hDcPUU0o

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

### Generative Machine Learning

Generative drawing:
* [SketchRNN](https://magenta.tensorflow.org/assets/sketch_rnn_demo/index.html)
    * [Some more info on the sketch dataset](https://www.blog.google/technology/ai/quick-draw-one-billion-drawings-around-world/)
* [SketchRNN in p5js](https://editor.p5js.org/ml5/sketches/SketchRNN_basic)
* [SketchRNN interactive in p5js](https://editor.p5js.org/ml5/sketches/SketchRNN_interactive)
* [Generative handwriting](https://distill.pub/2016/handwriting/)

Generative text:
* [Talk to transformer](https://talktotransformer.com/)
* [CharRNN in ml5js](https://ml5js.org/reference/api-charRNN/)
    * [Training your own char-rnn](https://github.com/ml5js/training-charRNN)

Generative music/sound:
* [Performance RNN](https://magenta.tensorflow.org/demos/performance_rnn/index.html)
* [Folk-RNN](https://folkrnn.org/)
* [Google Bach Doodle RNN](https://www.google.com/doodles/celebrating-johann-sebastian-bach) - more info [here](https://magenta.tensorflow.org/coconet)
* [Musenet](https://openai.com/blog/musenet/)
* [Music transformer](https://magenta.tensorflow.org/music-transformer)

## Day 3 : Generative Machine Learning, Considerations working with ML

### Generative Adversarial Networks

GAN examples:
* BigGAN class visualization : https://www.youtube.com/watch?v=YY6LrQSxIbc&feature=youtu.be
* StyleGAN presentation : https://www.youtube.com/watch?v=kSLJriaOumA&feature=youtu.be&t=25s
* StyleGAN faces : https://thispersondoesnotexist.com/
* StyleGAN cars interpolation : https://youtu.be/OLZ3-ZJwSu4
* StyleGAN trained on photobooth photos : https://www.reddit.com/r/Damnthatsinteresting/comments/9udese/plugging_50000_portraits_into_facial/?utm_source=share&utm_medium=web2x
* StyleGAN trained on Garfield : https://twitter.com/calamardh/status/1148655219032690692
* A bit technical article on training stylegan models yourself : https://www.gwern.net/Faces

Conditional GANs / Image translation:
* [Pix2Pix Demo](https://affinelayer.com/pixsrv/)
* [Edges2Pikachu](https://yining1023.github.io/pix2pix_tensorflowjs_lite/)
* [Celebrity Pix2Pix](https://zaidalyafeai.github.io/pix2pix/celeb.html)
* [GauGAN/SPADE online](https://nvlabs.github.io/SPADE/demo.html)
* [Pix2pix applied to video](https://vimeo.com/260612034)

Hands-on:
* [Artbreeder](https://artbreeder.com/)
* [Runway ML](https://runwayml.com/)

### Considerations when working with Machine Learning in the real world

Design resources:
* [People + AI Guidebook](https://pair.withgoogle.com/)

Ethics and AI:
* [Digital dystopia : how algorithms punish the poor](https://www.theguardian.com/technology/2019/oct/14/automating-poverty-algorithms-punish-poor)
* [Machine Bias : bias in criminal system software](https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing)
* [Amazon scraps secret AI recruiting tool that showed bias against women](https://www.reuters.com/article/us-amazon-com-jobs-automation-insight/amazon-scraps-secret-ai-recruiting-tool-that-showed-bias-against-women-idUSKCN1MK08G)
* [Can you make AI fairer than a judge?](https://www.technologyreview.com/s/613508/ai-fairer-than-judge-criminal-risk-assessment-algorithm/)
* [Racial Bias Found in Algorithms That Determine Health Care for Millions of Patients](https://spectrum.ieee.org/the-human-os/biomedical/ethics/racial-bias-found-in-algorithms-that-determine-health-care-for-millions-of-patients)
* [The making of a youtube radical](https://www.nytimes.com/interactive/2019/06/08/technology/youtube-radical.html)
* [Excavating AI : The Politics of Images in Machine Learning Training Sets](https://www.excavating.ai/)
* [Survival of the best fit](https://www.survivalofthebestfit.com/)

Visualizing and understanding convolutional neural networks:
* https://github.com/tensorflow/lucid