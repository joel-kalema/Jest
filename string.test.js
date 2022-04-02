const string = require('./testStr');

test('It should return the length string',function() {
  const result = string('hello');
  expect(result).toBe('5hello')
})