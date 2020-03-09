let xp = require('express');
let app = xp();
app.set('view engine', 'ejs')


app.get('/', function(req, res){
    res.render('home.ejs')
})

app.get('/contact', function(req, res){
    res.render('contact.ejs')
})

// app.get('/profile/:name', function(req, res){
//     res.send(`this is the profile with the name of ${req.params.name}`)
// })

// app.get('/profile/:name', function(req, res){
//     res.render('profile.ejs', {person: req.params.name})
// })


app.get('/profile/:name', function(req, res){
    let data = {age: 20, job: 'ninja', hobbies: ['swimming', 'riding', 'running']}
    res.render('profile.ejs', {person: req.params.name, data})
})


app.listen(3000);

































