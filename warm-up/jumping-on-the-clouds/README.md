# Jumping on the clouds

Emma is playing a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. She can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus or . She must avoid the thunderheads. Determine the minimum number of jumps it will take Emma to jump from her starting postion to the last cloud. It is always possible to win the game.

For each game, Emma will get an array of clouds numbered if they are safe or if they must be avoided. For example, indexed from . The number on each cloud is its index in the list so she must avoid the clouds at indexes and . She could follow the following two paths: or . The first path takes jumps while the second takes .

**Function Description**

Complete the _jumpingOnClouds_ function in the editor below. It should return the minimum number of jumps required, as an integer.

jumpingOnClouds has the following parameter(s):

- _c_: an array of binary integers

**Input Format**

The first line contains an integer c, the total number of clouds. The second line contains space-separated binary integers describing clouds where .

**Constraints**

**Output Format**

Print the minimum number of jumps needed to win the game.

**Sample Input 0**

    7
    0 0 1 0 0 1 0

**Sample Output 0**

    4

**Explanation 0:**  
Emma must avoid and . She can win the game with a minimum of jumps:

![](https://s3.amazonaws.com/hr-challenge-images/20832/1461134731-c258160d15-jump2.png 'jump(2).png')

**Sample Input 1**

    6
    0 0 0 0 1 0

**Sample Output 1**

    3

**Explanation 1:**  
The only thundercloud to avoid is . Emma can win the game in jumps:

![](https://s3.amazonaws.com/hr-challenge-images/20832/1461136358-764298d363-jump5.png 'jump(5).png')

## My answer

```javascript
function jumpingOnClouds(clouds) {
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
}
```
