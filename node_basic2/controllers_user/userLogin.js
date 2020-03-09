const Users = require('../db/models/userModel.js.js.js');

module.exports = async function(req, res) {
	let { login, password } = req.body;
	let found = await Users.findOne({ login, password });
	if (found) {
		req.session.user = found;
		return res.redirect('/userHome');
	} else {
		return res.end('login or password is incorrect');
	}
};
