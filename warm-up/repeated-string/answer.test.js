const answer = require('./answer');

it('should return expected result', () => {
  const result = answer('aba', 10);
  expect(result).toBe(7);
});

it('should return expected result', () => {
  const result = answer('a', 1000000000000);
  expect(result).toBe(1000000000000);
});

it('should return expected result', () => {
  const result = answer('aab', 882787);
  expect(result).toBe(588525);
});
