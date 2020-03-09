let express = require('express');
let path = require('path');

let app = express();

app.use(express.static(path.join(__dirname, 'static')));

app.use(express.urlencoded({extended: true}));
app.use(express.json());


// app.use( function(req, res, next){
//     console.log('1');
//     next();
// })

// app.use( function(req, res, next){
//     console.log('2');
//     next();
// })

// app.use( function(req, res, next){
//     console.log('3');
//     next();
// })




// app.use( function(req, res, next){
//     console.log('before all');
//     next();
// })


// app.use('/about', function(req, res, next){
//     console.log('before about');
//     next();
// })





// app.get('/', 
//     function(req, res, next){
//         console.log('hello')
//         next();
//     },
//     function(req, res){
//         res.sendFile(path.join(__dirname, 'public', 'welcome.html'))
//     }
// )

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'welcome.html'))
})


app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'))
})

app.get('/about/first', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'))
})

app.get('/about/second', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'))
})


// app.get('/sendForm', (req, res) => {
//     console.log(req.url);
//     console.log(req.query);
//     res.end('lalala')
// })


// app.post('/sendForm', (req, res) => {
//     console.log(req.url);
//     console.log(req.body);
//     res.end('lalala')
// })


app.post('/sendForm', (req, res) => {
    
    res.end(JSON.stringify(req.body)); 
})



app.listen(3000, () => console.log('Running...............................................'))


















