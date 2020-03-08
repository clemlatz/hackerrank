# Counting valleys

Gary is an avid hiker. He tracks his hikes meticulously, paying close attention to small details like topography. During his last hike he took exactly <span style="font-size: 100%; display: inline-block;" class="MathJax_SVG" id="MathJax-Element-1-Frame"></span>steps. For every step he took, he noted if it was an _uphill_, <span style="font-size: 100%; display: inline-block;" class="MathJax_SVG" id="MathJax-Element-2-Frame"></span>, or a _downhill_, <span style="font-size: 100%; display: inline-block;" class="MathJax_SVG" id="MathJax-Element-3-Frame"></span>step. Gary's hikes start and end at sea level and each step up or down represents a <span style="font-size: 100%; display: inline-block;" class="MathJax_SVG" id="MathJax-Element-4-Frame"></span>unit change in altitude. We define the following terms:

- A _mountain_ is a sequence of consecutive steps _above_ sea level, starting with a step _up_ from sea level and ending with a step _down_ to sea level.
- A _valley_ is a sequence of consecutive steps _below_ sea level, starting with a step _down_ from sea level and ending with a step _up_ to sea level.

Given Gary's sequence of _up_ and _down_ steps during his last hike, find and print the number of _valleys_ he walked through.

For example, if Gary's path is <span style="font-size: 100%; display: inline-block;" class="MathJax_SVG" id="MathJax-Element-5-Frame"></span>, he first enters a valley <span style="font-size: 100%; display: inline-block;" class="MathJax_SVG" id="MathJax-Element-6-Frame"></span>units deep. Then he climbs out an up onto a mountain <span style="font-size: 100%; display: inline-block;" class="MathJax_SVG" id="MathJax-Element-7-Frame"></span>units high. Finally, he returns to sea level and ends his hike.

**Function Description**

Complete the _countingValleys_ function in the editor below. It must return an integer that denotes the number of valleys Gary traversed.

countingValleys has the following parameter(s):

- _n_: the number of steps Gary takes
- _s_: a string describing his path

## My answer

```javascript
function countingValleys(stepCount, path) {
  let level = 0;
  let valleys = 0;

  // Split path into steps
  const steps = path.split('');

  // For each steps
  for (let i = 0, direction; i < stepCount; i++) {
    const currentStep = steps[i];

    // Increase or decrese level according to step direction
    direction = currentStep === 'D' ? -1 : 1;
    level = level + direction;

    // If last step was up, we are exiting a valley
    if (level === 0 && direction === 1) {
      valleys++;
    }
  }

  return valleys;
}
```
