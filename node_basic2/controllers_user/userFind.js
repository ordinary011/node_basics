const Users = require('../db/models/userModel.js.js.js');

module.exports = async function(req, res) {
	let found = await Users.find();
	filtered = await found.filter(
		u => u.name.includes(req.body.name) && u.login !== req.session.user.login
	);
	if (filtered.length > 0) return res.render('users.pug', { found: filtered });
	found = await found.filter(u => u.login !== req.session.user.login);
	return res.render('users.pug', { found });
};
