const Users = require('../db/models/userModel.js.js.js');

module.exports = async function(req, res) {
	let { name, lastName, login, password, email } = req.body;
	let counted = await Users.countDocuments({ login });
	if (counted > 0) return res.end('sorry bro this login already exists try another one');
	await Users.create({ name, lastName, login, password, email, friends : [] });
	res.redirect('/');
};
