'use strict';

function countA(total, current) {
  if (current === 'a') {
    return total + 1;
  }

  return total;
}

module.exports = function repeatedString(text, number) {
  const length = text.length;

  // Count a's occurences in one text string
  const textACount = text.split('').reduce(countA, 0);

  // Multiply by number of time text can be repeated
  const repeat = Math.floor(number / length);
  const repeatsACount = textACount * repeat

  // Count a's occurences in remainder substring
  const remainder = number % length;
  const remainderString = text.substr(0, remainder);
  const remainderACount = remainderString.split('').reduce(countA, 0)

  return repeatsACount + remainderACount;
};
