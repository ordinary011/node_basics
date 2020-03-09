let fs = require('fs');

// let readMe = fs.readFileSync('readMe.txt', 'utf8');

// fs.writeFileSync('written.txt', 'this file was written manually' + '\n' + readMe)


// fs.writeFileSync('written.txt', `this file was written manually and
// ${readMe}`)



// fs.readFile('readMe.txt', 'utf8', function(err, data){
//     fs.writeFile('written.txt', data + ' ! ! ! !', function() {});
// });

// console.log('gi gi');


// console.log(global.Object.keys(global));
// console.log(fs);


// fs.unlink('written.txt', function(){});

// fs.mkdirSync('stuff');

// fs.rmdirSync('stuff');

// fs.mkdir('stuff', function(){
//     fs.readFile('readMe.txt', 'utf8', function(err, data){
//         fs.writeFile('./stuff/written.txt', data + 'hello', () => {})
//     })
// })


// fs.unlink('./stuff/written.txt', () => {})
// fs.rmdir('stuff', () => {})



fs.unlink('./stuff/written.txt', () => {
    fs.rmdir('stuff', () => {})
})






















































































































