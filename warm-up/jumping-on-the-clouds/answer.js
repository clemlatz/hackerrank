'use strict';

module.exports = function jumpingOnClouds(clouds) {
  // Total number of clouds
  const cloudsCount = clouds.length;

  // Number of clouds we can skip
  let skips = 0;

  // For each clouds
  for (let i = 0; i < cloudsCount; i++) {
    // Select the cloud we would land on if we jumped
    const destCloud = clouds[i + 2];

    // If there is no more cloud, exit loop
    if (typeof destCloud === 'undefined') {
      break;
    }

    // If we can jump to dest cloud, let's dot it
    if (destCloud === 0) {
      skips++;
      i++;
    }
  }

  // Number of clouds - 1 = number of jumps
  // Number of jumps - skips = minimal path
  return cloudsCount - 1 - skips;
};
