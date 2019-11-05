const chunkArray = require('../../functions/chunk');

test('reverse string function() to exist', () => {
	expect(chunkArray).toBeDefined();
});
test('chunk an arrya of ten values with length of 2', () => {
	const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
	const len = 2;
	const chunkedArr = chunkArray(numbers, len);
	expect(chunkedArr).toEqual([ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 10 ] ]);
});
