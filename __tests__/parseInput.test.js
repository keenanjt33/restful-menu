const parseInput = require('../helper');

it('Basic test', () => {
  const basic = 'Breakfast 1,2,3';
  const parsed = parseInput(basic);
  expect(parsed.mealType).toEqual('BREAKFAST');
  expect(parsed.dishIDs).toEqual([1, 2, 3]);
});

it('No dishes', () => {
  const basic = 'Breakfast ';
  const parsed = parseInput(basic);
  expect(parsed.mealType).toEqual('BREAKFAST');
  expect(parsed.dishIDs).toEqual([]);
});

it('Alphabetical characters in dish IDS', () => {
  const basic = 'Breakfast 1,2,3,abc';
  const parsed = parseInput(basic);
  expect(parsed.mealType).toEqual('BREAKFAST');
  expect(parsed.dishIDs).toEqual([]);
});

it('Only alphabetical characters in dish IDs', () => {
  const basic = 'Breakfast ab';
  const parsed = parseInput(basic);
  expect(parsed.mealType).toEqual('BREAKFASTAB');
  expect(parsed.dishIDs).toEqual([]);
});

it('No meal type', () => {
  const basic = '5,2,1';
  const parsed = parseInput(basic);
  expect(parsed.mealType).toEqual('');
  expect(parsed.dishIDs).toEqual([5, 2, 1]);
});

it('Whitespace in dish IDs', () => {
  const basic = '5,2, 1, 3 1';
  const parsed = parseInput(basic);
  expect(parsed.mealType).toEqual('');
  expect(parsed.dishIDs).toEqual([5, 2, 1, 31]);
});
