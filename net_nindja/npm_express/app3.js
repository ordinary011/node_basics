let xp = require('express');
let app = xp();

app.get('/', function(req, res){
    res.send('hello this is a home page')
})

app.get('/contact', function(req, res){
    res.send('THIS IS A CONTACT PAGE')
})

app.get('/:sm', function(req, res){
    res.send(`you have requested ${req.params.sm}`)
})





app.listen(3000);




