const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');

const userReg = require('./controllers_user/userReg.js.js.js.js.js');
const userLogin = require('./controllers_user/userLogin.js.js.js.js.js');
const userFind = require('./controllers_user/userFind.js.js.js.js.js');
const userHome = require('./controllers_user/userHome.js.js.js.js.js');
const userAddFriend = require('./controllers_user/userAddFriend.js.js.js.js.js');
const userChat = require('./controllers_user/userChat.js.js.js.js.js');

const app = express();
mongoose.connect('mongodb://localhost:27017/socialMedia', { useNewUrlParser: true });

app.use(express.urlencoded({ extended: true }));
app.use(express.static(`./static`));
app.use(
	session({
		secret: 'qwertyuiop123',
		resave: false,
		saveUninitialized: false
	})
);

app.set('views', './public');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/reg.html');
});

app.post('/userReg', userReg);
app.post('/userLogin', userLogin);
app.get('/userHome', userHome);
app.post('/userFind', userFind);
app.post('/addFriend/:id', userAddFriend);
app.get('/userChat/:id', userChat);

app.listen(3000, () => {
	console.log('Running.............');
});
