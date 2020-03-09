let express = require('express');
let bodyParser = require('body-parser');


let app = express();
let urlencodedParser = bodyParser.urlencoded({ extended: false });


app.set('view engine', 'ejs');
app.use('/assets', express.static('stuff'));



// app.use('/assets', (req, res, next) => {
//     console.log(req.url);
//     next();
// })


app.get('/', (req, res) => res.render('home.ejs'));

// app.get('/contact', (req, res) => {
//     res.render('contact.ejs', {qs: req.query})
// });

app.get('/contact', (req, res) => {
    res.render('contact.ejs', {qs: req.query})
});

// app.post('/contact', urlencodedParser, (req, res) => {
//     console.log(req.body);
//     res.render('contact.ejs', {qs: req.query})
// });


// app.post('/contact', urlencodedParser, (req, res) => {
//     res.render('contact-success.ejs', {data: req.body})
// });

app.post('/contact', urlencodedParser, (req, res) => {
    res.render('contact-success.ejs', {data: req.body})
});

app.get('/profile/:name', (req,res) => {
    let data = {age: 20, job: 'ninja', hobbies: ['swimming', 'running', 'talking']}
    res.render('profile.ejs', {person: req.params.name, data})
});



app.listen(3000);















