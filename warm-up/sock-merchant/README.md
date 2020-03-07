# Sock merchant

John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

For example, there are socks with colors . There is one pair of color and one of color . There are three odd socks left, one of each color. The number of pairs is .

**Function Description**

Complete the _sockMerchant_ function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.

sockMerchant has the following parameter(s):

- _n_: the number of socks in the pile
- _ar_: the colors of each sock

## My answer

```javascript
function sockMerchant(n, ar) {
  // Count occurences of each color
  const colors = [];
  for (let i = 0; i < n; i++) {
    const color = ar[i];
    const currentCount = colors[color] || 0;
    colors[color] = currentCount + 1;
  }

  // Count pairs for each colors
  const colorPairs = colors.map(count => Math.floor(count / 2));

  // Sum pairs for all colors
  const pairs = colorPairs.reduce((total, current) => total + current, 0);
  return pairs;
}
```
