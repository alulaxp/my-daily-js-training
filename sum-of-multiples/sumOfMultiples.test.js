const sumOfMultiples = require('./sumOfMultiples');

test('sum all the multiples above the number', () => {
  expect(sumOfMultiples(10)).toBe(23);
  expect(sumOfMultiples(42)).toBe(408);
});