const answer = require('./answer');

it('should return expected result', () => {
  const result = answer(8, 'UDDDUDUU');
  expect(result).toBe(1);
});

it('should return expected result', () => {
  const result = answer(12, 'DDUUDDUDUUUD');
  expect(result).toBe(2);
});
