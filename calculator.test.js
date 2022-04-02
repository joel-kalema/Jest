const calculater = require('./calculator')

describe('my beverage', () => {
  test('it should return a addition of a and b', () => {
    const result = calculater.add(3,2)
    expect(result).toBe(5);
  });
});

describe('my beverage', () => {
  test('it should return a substruction of a and b', () => {
    const result = calculater.sub(3,2)
    expect(result).toBe(1);
  });
});
