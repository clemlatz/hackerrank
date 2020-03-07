module.exports = function(n, ar) {
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
};
