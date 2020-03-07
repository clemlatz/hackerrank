const answer = require('./answer');

it('should return expected result', () => {
  const result = answer(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
  expect(result).toBe(3);
});
