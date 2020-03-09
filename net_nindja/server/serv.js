let http = require('http');

let server = http.createServer(function(req, resp){
    console.log('request was made ' + req.url);
    resp.writeHead(200, {'Content-Type': 'text/plain'});
    resp.end('Hey ninjas');
});


server.listen(3000, '127.0.0.1')

console.log('yup it is litening to the port 3000');

































