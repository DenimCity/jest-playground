const axios = require('axios')
module.exports = {
	add: (num1, num2) => num1 + num2,
	createUser: () => {
		const user = { firstName: 'Jean'}
		user['lastName'] = 'Altidor'
		return user
	},
	fetchUser: () => axios.get('http://jsonplaceholder.typicode.com/users/1')
	.then(res => res.data)
	.catch(err => 'err')

}
