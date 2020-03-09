const Users = require('../db/models/userModel.js.js.js');

module.exports = async (req, res) => {
	let id = req.params.id;
	if(req.session.user.friends.includes(id)) return res.end('sorry bro this user and u are friends already')
	req.session.user = await Users.findByIdAndUpdate(
		req.session.user._id,
		{ $push: { friends: id } },
		{ useFindAndModify: false, new: true }
	);
	res.redirect('/userHome');
};
