let fs = require('fs');
let http = require('http');

// 37min errors till 45min (bonus for creating errors)

// fs.writeFile('./text.txt', 'Hello there', {flag: 'a'}, (err, data) => {
//     console.log('callback');
//     console.log(err);
// });

// console.log('end');

// ****************************************************

// fs.readFile('./text.txt', (err, data) => {
//     if(err) console.log(err);
//     console.log(data.toString());
// });

// ****************************************************

// fs.stat('./text.tx', (err, data) => {
//     if(err)
//         console.log(err);
//     else
//         console.log(data);
//         console.log('hello');
// })

// fs.stat('./text.tx', (err, data) => {
//     err? console.log('here', err) : console.log(data);
// });

// fs.stat('./text.txt', (err, data) => {
//     console.log(data);
// });

// fs.stat('./text.txt', (err, data) => {
//     console.log(data);
//     console.log(data.isFile());
//     console.log(data.isDirectory());
// });

// ****************************************************

// fs.appendFile('./text.txt', ' end', (err) => {if(err) console.log(err)});

// fs.appendFile('./text.bbb', ' end', (err) => {if(err) console.log(err)});

// ****************************************************

// fs.unlink('./text.bbb', (err) => {
//     if(err) console.log(err);
// })

// ****************************************************

// fs.mkdir('./test', (err) => {
//     if(err) throw err;
// });

// ****************************************************

// fs.rename('./text.txt', './bibi.txt', (err) => {

// });

// fs.rename('./bibi.txt', './test/bibi.txt', (err) => {
//     if(err) throw err;
// });

// fs.rename('./test/bibi.txt', './text.txt', (err) => {
//     if(err) throw err;
// });

// ****************************************************

// fs.writeFile('./test/test.txt', 'bla bla 3', (err) => {
//     if(err) throw err;
// });

// fs.unlink('./test/test.txt', (err) => {
//     if(err) throw err;
// })

// fs.rmdir('./test', (err) => {
//     if(err) throw err;
// });

// ****************************************************

// let writableStream = fs.createWriteStream('./big.txt')

// for(let i = 0; i < 10000; i++){
//     writableStream.write('Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, sequi. Consectetur, deserunt! Fugit officia reprehenderit sed animi dolorem dolore nihil illum natus adipisci! Itaque, quos eius. Velit, ea. Suscipit, sed! ');
// }

// fs.stat('./big.txt', (err, data) => {
//     err? console.log('here', err) : console.log(data);
// });

// ****************************************************

// let readStream = fs.createReadStream('./big.txt');

// readStream.read();

// readStream.on('data', (chunk) => console.log(chunk));

// ****************************************************

// let serv = http.createServer();

// serv.on('request', (req, res) => {
//    console.log('request')
// });

// let server = http.createServer( (req, res) => {
//     // console.log(req.url, req.method)

//     res.writeHead(200, {'Content-Type' : 'text/html'})
//     // res.write('hello ');
//     // res.write('bye bye ');
//     // res.write('<i>HTML</i>');
//     fs.readFile('./any.html', (err, data) => {
//         // res.write(data.toString());
//         // console.log(data.toString());
//         res.write(data);
//         res.end();
//     })
// });

// server.listen(3000);

// HOMEWORK*******************************************

// ASYNC ATTEMPT ********************************

// створити функцію яка буду приймати count всередині потрібно створити таку кількість файлів як count і записуватиме всередину рандомні числа

// function create(count){
//     while(count > 0){
//         let ran = Math.floor(Math.random() * 1500);
//         fs.writeFile(`./onlyHM/file${count}.txt`, `${ran}`, (err) => {
//             if(err) throw err;
//         })
//         count--;
//     }
// }

// create(10);

// видалити ті файли в яких всередині число менше 500
// перейменувати ті в яких число всередині менше 1000
// до всіх файлів які залишились дописати всередині фразу The end...

// fs.readdir('./onlyHM', (err, files) => {
//     if(err) throw err;
//     files.forEach( a => {
//         fs.readFile(`./onlyHM/${a}`, (err, data) => {
//             if(err) throw err;

//             if(data.toString() < 500){
//                 fs.unlink(`./onlyHM/${a}`, (err) => {
//                     if(err) throw err;
//                 })
//             }
//             if(data.toString() < 1000){
//                 fs.rename(`./onlyHM/${a}`, `./onlyHM/renamed_${a}`, (err) => {
//                      if(err) throw err;
//                 })
//             }

//         })
//     })
// })

// fs.appendFile(`./onlyHM/${a}`, ` The end...`, (err) => {
//     if(err) throw err;
// })

// SYNC *****************************************

// створити функцію  яка буду приймати count всередині потрібно створити таку кількість файлів як count і записуватиме всередину рандомні числа

function create(count) {
	while (count > 0) {
		let ran = Math.floor(Math.random() * 1500);
		fs.writeFileSync(`./onlyHM/file${count}.txt`, ran);
		count--;
	}
}

create(10);

// видалити ті файли в яких всередині число менше 500

let arr1 = fs.readdirSync(`./onlyHM`);
arr1.forEach(a => {
	let f = fs.readFileSync(`./onlyHM/${a}`);
	if (f.toString() < 500) {
		fs.unlinkSync(`./onlyHM/${a}`);
	}
});

// перейменувати ті в яких число всередині менше 1000

let arr2 = fs.readdirSync(`./onlyHM`);
arr2.forEach(a => {
	let f = fs.readFileSync(`./onlyHM/${a}`);
	if (f.toString() < 1000) {
		fs.renameSync(`./onlyHM/${a}`, `./onlyHM/NEW${a}`);
	}
});

// до всіх файлів які залишились дописати всередині фразу The end...

let arr3 = fs.readdirSync(`./onlyHM`);
arr3.forEach(a => {
	fs.appendFileSync(`./onlyHM/${a}`, ` The end...`);
});
