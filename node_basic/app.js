let fs = require('fs');

// За допомогою fs створити папаку students

// fs.mkdir('./students', (err) => {
//     if (err) throw err;
// });

// В кожній з низ створити ще 2 папаки. 1800 та 2000

// fs.mkdir('./students/18.00', (err) => {
//     if (err) throw err;
// });

// fs.mkdir('./students/20.00', (err) => {
//     if (err) throw err;
// });

// У кожній папці мають бути txt файли які х-ють кожного студента.

// function createSt(count){
//     for(let i = 0; i < count; i++){
//         fs.writeFileSync(`./students/1800/ ${Date.now()}`, 'hello');
// }
// };

// createSt(15);

// let arr = {
//     {name: 'igor', lastname: 'gregor', age: 20},
//     {name: 'fibi', lastname: 'daba', age: 10},
//     {name: 'olena', lastname: 'petrova', age: 22},
//     {name: 'oksana', lastname: 'nina', age: 25},
//     {name: 'lina', lastname: 'hidi', age: 33},
//     {name: 'ambrella', lastname: 'matata', age: 16},
// }

// let names = ['Viktor', 'Vova', 'Dima', 'lina', 'fibi', 'olena'];

// let surnames = ['Pupkin', 'Frolov', 'Gagarin', 'hidi', 'matata', 'petrova'];

// let ages = [22 ,44, 66, 33, 15, 24];

// function createSt(count){
//     let one = 0;
//     let interval = setInterval(function() {
//         let ran = Math.floor(Math.random() * 6);
//         // fs.writeFileSync(`./students/1800/${Date.now()}.txt`, JSON.stringify({name: names[ran], lastname: surnames[ran], age: ages[ran]}));
//         one++;
//         fs.writeFileSync(`./students/1800/ ${Date.now()}.txt`, `${names[ran]} ${surnames[ran]} ${ages[ran]}`)
//         if(one >= count){
//             clearInterval(interval);
//         }
//       }, 1000);
// };

// createSt(5);

// function createSt(count){
//     let one = 0;
//     let interval = setInterval(function() {
//         let ran = Math.floor(Math.random() * 6);
//         one++;
//         fs.writeFileSync(`./students/2000/${Date.now()}.txt`, `${names[ran]} ${surnames[ran]} ${ages[ran]}`)
//         if(one >= count){
//             clearInterval(interval);
//         }
//       }, 1000);
// };

// createSt(5);

// Потім за допомогою fs перенести студентів з JS до студентів Java, а студентів Java на місце студентів JS

// const dir = './students/2000';

// fs.readdir(dir, (err, files) => {
//   console.log(files);
// });

// fs.readdir('./students/2000', (err, files) => {
//     if(err) throw err;

//     files.forEach( a => {
//         console.log(a);
//         fs.renameSync(`./students/2000/${a}`, `./students/1800/${a}`)
//     })
// });

// Потім за допомогою стрімів продублювати їх в папці backup

// FROM SCRATCH**************************************

let names = ['Viktor', 'Vova', 'Dima', 'lina', 'fibi', 'olena'];

let surnames = ['Pupkin', 'Frolov', 'Gagarin', 'hidi', 'matata', 'petrova'];

let ages = [22, 44, 66, 33, 15, 24];

// fs.mkdirSync(`./students`);
// fs.mkdirSync(`./students/JS`);
// fs.mkdirSync(`./students/JS/1800`);
// fs.mkdirSync(`./students/JS/2000`);
// fs.mkdirSync(`./students/Java`);
// fs.mkdirSync(`./students/Java/1800`);
// fs.mkdirSync(`./students/Java/2000`);

// function create(num){
//     let interval = setInterval( () => {
//         let ran = Math.floor(Math.random() * 5);
//         let ran1 = Math.floor(Math.random() * 5);
//         fs.writeFileSync(`./students/java/1800/${Date.now()}.txt`, `${names[ran]} ${surnames[ran]} ${ages[ran]}`)
//         fs.writeFileSync(`./students/java/2000/${Date.now()}.txt`, `${names[ran]} ${surnames[ran]} ${ages[ran]}`)
//         fs.writeFileSync(`./students/JS/1800/${Date.now()}.txt`, `${names[ran1]} ${surnames[ran1]} ${ages[ran1]}`)
//         fs.writeFileSync(`./students/JS/2000/${Date.now()}.txt`, `${names[ran1]} ${surnames[ran1]} ${ages[ran1]}`)
//         num--;
//         if(num === 0){
//             clearInterval(interval);
//         }
//     }, 1000)
// }

// create(5);

// Потім за допомогою fs перенести студентів з JS до студентів Java, а студентів Java на місце студентів JS

// let java = fs.readdirSync(`./students/java`);
// let js = fs.readdirSync(`./students/JS`);

// java.forEach(a => {
//     fs.renameSync(`./students/Java/${a}`, `./students/JS/${a}_JAVA`)
// });

// js.forEach(a => {
//     fs.renameSync(`./students/JS/${a}`, `./students/java/${a}_JS`)
// });

// Потім за допомогою стрімів продублювати їх в папці backup
