module.exports = async function(req, res) {
	let person = req.session.user;
	if (person) res.render('userHome.pug', { user: JSON.stringify(person) });
	res.end('sorry you need to Log In first');
};
