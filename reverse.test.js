const reverseWord = require('./reverse');

test('It should return the length string',function() {
  const result = reverseWord('hello');
  expect(result).toBe('hello')
})