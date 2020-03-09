// console.log(__dirname);
// console.log(__filename);
// console.log(process);

// let events = require('events');
// let EventEmitter = events.EventEmitter;

// let person = new EventEmitter();

// person.on('speak', function(){
//     console.log('one');
// })

// person.once('speak', function(){
//     console.log('two');
// })

// person.emit('speak');
// person.emit('speak');

// let events = require('events');
// let EventEmitter = events.EventEmitter;

// let person = new EventEmitter();

// let any = (a) => console.log(a + ' first');
// let any1 = (b) => console.log(b + ' second');
// let any2 = (b) => console.log(b + ' third');

// person.on('speak', any)
// person.on('speak', any1)
// person.on('cry', any2)

// person.emit('speak', 4);

// person.removeListener('speak', any)
// person.removeAllListeners('speak');
// person.removeAllListeners();

// person.emit('speak', 8);
// person.emit('cry', 8);

// let events = require('events');
// let EventEmitter = events.EventEmitter;

// let person = new EventEmitter();

// let any1 = (b) => console.log(b + ' second');
// let any2 = (b) => console.log(b + ' third');

// person.on('speak', function any(a){
//     console.log(a + ' first');
// })
// person.on('speak', any1)
// person.on('cry', any2)

// person.emit('speak', 4);

// // person.removeListener('speak', any)
// person.removeAllListeners('speak');
// // person.removeAllListeners();

// person.emit('speak', 8);
// // person.emit('cry', 8);

let p = require('path');

let f = p.join(__dirname, '/xxx', '/fff');

console.log(f);
