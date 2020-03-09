let fs = require('fs');
let http = require('http')


let server = http.createServer(function(req, res){
    console.log('request was made ' + req.url );
    res.writeHead(200, {'Content-Type': 'text/html'});
    let myReadStream1 = fs.createReadStream('./test.html')
    myReadStream1.pipe(res) 
    // let myReadStream = fs.createReadStream('./readMe.txt');
    // myReadStream.pipe(res)    
})

server.listen(3000, '127.0.0.1');
console.log('yes it was port of 3000');



// let myReadStream = fs.createReadStream('./readMe.txt');
// let myWriteStream = fs.createWriteStream('./writeMe.txt')


// myReadStream.on('data', function(chunk){
//     console.log('new chunk has been received');
//     console.log(chunk);
//     myWriteStream.write(chunk);
// });


// myReadStream.pipe(myWriteStream)










































































































































