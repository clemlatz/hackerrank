'use strict';

module.exports = function(stepCount, path) {
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
};
