let http = require('http');
let fs = require('fs');
let path = require('path');
let url1 = require('url');
let qs = require('querystring');

let server = http.createServer();

// function render(page, res){
//     let pathToPage = path.join(__dirname, 'public', page);
//     fs.readFile(pathToPage, (err, data) => {
//         if(err) throw err;
//         res.end(data);
//     })
// }

function render(page, res) {
	let pathToPage = path.join(__dirname, 'public', page);
	fs.createReadStream(pathToPage).pipe(res);
}

server.on('request', (req, res) => {
	// console.log(req.url);
	let parsedURL = url1.parse(req.url);
	// console.log(parsedURL);
	// console.log(parsedURL.query)

	// let qsInObj = qs.parse(parsedURL.query)
	// console.log(qsInObj);

	req.on('data', buf => {
		console.log(buf.toString());
		let parsedBuffer = qs.parse(buf.toString());
		console.log(parsedBuffer);
	});

	switch (parsedURL.pathname) {
		case '/': {
			render('welcome.html', res);
			break;
		}
		case '/about': {
			render('about.html', res);
			break;
		}
		case '/contacts': {
			res.end('contacts page');
			break;
		}
		case '/post': {
			render('post.html', res);
			break;
		}
		default: {
			render('404.html', res);
		}
	}
});

server.listen(3000, () => console.log('Running........'));
