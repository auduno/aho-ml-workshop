Examples of results from ml5.js models:
============

## Image classifier result:
```
result = [
    {label: "banana", confidence: 0.9408700466156006},
    {label: "orange", confidence: 0.0037055329885333776},
    {label: "butternut squash", confidence: 0.002862975699827075}
]
```

## Audio classifier result:
Note that the audio classifier will only return a result if any of the labels (except "\_background_noise_" or "\_unknown_") have higher confidence than the probability threshold you set when starting the classifier (0.7 by default).
```
result = [
    {label: "two", confidence: 0.9652336239814758},
    {label: "right", confidence: 0.012278997339308262},
    {label: "eight", confidence: 0.007477325387299061},
    {label: "three", confidence: 0.005381677765399218},
    {label: "left", confidence: 0.0046602217480540276},
    {label: "_background_noise_", confidence: 0.002328356495127082},
    {label: "up", confidence: 0.0013509689597412944},
    {label: "six", confidence: 0.0010154704796150327},
    {label: "stop", confidence: 0.0002539092383813113},
    {label: "_unknown_", confidence: 0.000018171727788285352},
    {label: "one", confidence: 8.660801427140541e-7},
    {label: "seven", confidence: 8.0033771610033e-7},
    {label: "zero", confidence: 3.0943805739980235e-8},
    {label: "no", confidence: 1.2718917474785485e-8},
    {label: "nine", confidence: 1.1511775532824231e-8},
    {label: "five", confidence: 1.0603103284267945e-8},
    {label: "go", confidence: 5.979272632572474e-9},
    {label: "four", confidence: 2.6519395568413984e-9},
    {label: "yes", confidence: 2.5818804871846623e-9},
    {label: "down", confidence: 1.420037143429198e-10}
]
```

## YOLO return results:
Returns a list of detected objects. Note that the bounding box coordinates here need to be multiplied by the width or height of the image to get the proper coordinates.
```
result = [
    {
        label: "person",
        confidence: 0.5389571189880371,
        x: 0.11388227572807899,
        y: 0,
        w: 0.7754682485873883,
        h: 1
    }
]
```

## Coco-SSD result:
Returns a list of detected objects. Note that unlike YOLO result, bounding box coordinates does not need to be multiplied by width or height of the image.
```
result = [
    {
        class: "cup",
        score: 0.9717256426811218,
        bbox: [137.12531089782715, 263.08570861816406, 217.56497383117676, 206.2405014038086]
    },
    {
        class: "person",
        score: 0.7789918780326843,
        bbox: [103.04500579833984, 95.0709342956543, 513.7735748291016, 387.60669708251953]
    }
]
```

## PoseNet result:
For a list of all the keypoints returned, see [this list](https://github.com/tensorflow/tfjs-models/tree/master/posenet#keypoints), and for an image showing the keypoints, see [this image](https://miro.medium.com/max/3074/1*7qDyLpIT-3s4ylULsrnz8A.png).

For some more info about this model, see [this blogpost](https://medium.com/tensorflow/real-time-human-pose-estimation-in-the-browser-with-tensorflow-js-7dd0bc881cd5).
```
result = [
    {
        pose: {
            score: 0.42985695206067,
            keypoints: [
                {
                    part: "nose",
                    position: {x: 358.36894275152196, y: 88.1549316168296},
                    score: 0.999695360660553
                },
                {
                    part: "leftEye",
                    position: {...},
                    score: 0.9998501539230347
                },
                ...
                {
                    part: "rightAnkle",
                    position: {...},
                    score: 0.008431949652731419
                },
            ]
        },
        skeleton: [
            [
                {
                    part: "leftShoulder",
                    position: {x: 433.34296808372926, y: 221.0002250745747},
                    score: 0.9834973812103271
                },
                {
                    part: "rightShoulder",
                    position: {x: ..., y: ...},
                    score: 0.9434804916381836
                )}
            ]
        ]
    }
]
```

## Teachable Machine PoseNet

Model output:
```
prediction = [
    {className: "Your class 1", probability: 0.9998360872268677},
    {className: "Your class 2", probability: 1}
]
```

Pose output:

Note that the teachable machine posenet model does not return skeleton positions.
```
pose = [
    {
        part: "nose",
        position: {
            x: 365.34666484432,
            y: 172.95466441588644
        }
        score: 1.276969996411026e-8
    },
    ...
    {
        part: "leftEye",
        position: {
            x: 378.96127069970515,
            y: 159.97312746159298
        }
        score: 0.9990791082382202
    }
]
```