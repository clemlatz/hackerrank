const answer = require('./answer');

it('should return expected result', () => {
  const result = answer('0 0 1 0 0 1 0'.split(' ').map(x => +x));
  expect(result).toBe(4);
});

it('should return expected result', () => {
  const result = answer('0 0 0 0 1 0'.split(' ').map(x => +x));
  expect(result).toBe(3);
});

it('should return expected result', () => {
  const result = answer('0 0 1 0 0 0 0 1 0 0'.split(' ').map(x => +x));
  expect(result).toBe(6);
});
