const { add, isNull, createUser, fetchUser } = require('../../functions/methods');

//IF you want it do after every test
// beforeEach(() => initDatabae());
// afterEach(() => closeDatabae());

// Invokes before the tests then after all the tests are executed
// beforeAll(() => initDatabae());
// afterAll(() => closeDatabae());

const nameCheck = () => console.log('Checking name......');
describe('Checking names', () => {
	beforeEach(() => nameCheck());
	test('user is Jeff', () => {
		const user = 'Jeff';
		expect(user).toBe('Jeff');
	});
	test('user is Karen', () => {
		const user = 'karen';
		expect(user).toBe('karen');
	});
});

const initDatabae = () => console.log('Database Initialized');
const closeDatabae = () => console.log('Database Closed');

test('should add two numbers together', () => {
	expect(add(2, 2)).toBe(4);
});

test('should return a user object Jean Altidor', () => {
	expect(createUser()).toEqual({ firstName: 'Jean', lastName: 'Altidor' });
});
test('should be under 1600', () => {
	const load1 = 800;
	const load2 = 800;
	expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// Regex
test('Ther should be no I in team', () => {
	expect('Team').not.toMatch(/I/i);
});

// Arrays
test('Admin should be in username', () => {
	usernames = [ 'john', 'karen', 'admin' ];
	expect(usernames).toContain('admin');
});

// working with async data
test('should return a user name ', () => {
	return fetchUser().then((data) => {
		expect(data.name).toEqual('Leanne Graham');
	});
});

test('should return a user name ', async () => {
	const data = await fetchUser();
	expect(data.name).toEqual('Leanne Graham');
});
