const reverseString = require('../../functions/reverseString');

test('reverse string function() to exist', () => {
	expect(reverseString).toBeDefined();
});

test('rstring reversese', () => {
	expect(reverseString('hello')).toBe('olleh');
});

test('rstring reversese', () => {
	expect(reverseString('Hello')).toBe('olleh');
});
