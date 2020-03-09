let fs = require('fs');
let http = require('http');

// for(let i = 0; i < 500; i++){
//     fs.appendFile('junk.txt', ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt nemo, saepe odio perferendis eos, vitae suscipit doloribus reiciendis error eligendi eum distinctio molestias dolore. Quae quod optio quaerat laborum corrupti', (err) => {
//         if(err) throw err;
//     })
// }

let rdSt = fs.createReadStream('junk.txt');
let wrSt = fs.createWriteStream('written.txt');

// rdSt.on('data', (chunk) => {
//     wrSt.write(chunk);
// })

rdSt.pipe(wrSt);
