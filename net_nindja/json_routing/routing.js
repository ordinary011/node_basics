let http = require('http');
let fs = require('fs')

// let server = http.createServer(function(req, res){
//     console.log('request was made on:' + req.url);
//     res.writeHead(200, {'Content-Type': 'application/json'});
//     let obj = {
//         name: 'bibi',
//         job: 'mimi',
//         age: 22
//     };
//     res.end(JSON.stringify(obj));
// });


// server.listen(3000, '127.0.0.1')


let server = http.createServer(function(req, res){
    console.log('request was made on ' + req.url);
    if(req.url === '/' || req.url === '/home'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        fs.createReadStream('./home.html').pipe(res)
    }else if(req.url === '/contact'){
        res.writeHead(200, {'Content-Type': 'text/html'})
        fs.createReadStream('./contact.html').pipe(res);
    }else if(req.url === '/app'){
        let obj1 = [{name: 'didi', age: 20}, {name: 'john', age: 20}]
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(obj1));
    }else{
        res.writeHead(404, {'Content-Type': 'text/html'})
        fs.createReadStream('./error.html').pipe(res);
    }
})

server.listen(3000, '127.0.0.1')
console.log('yes the server is running on port 3000');

































































































































































