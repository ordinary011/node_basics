let events = require('events');
let util = require('util');

// let boy = new events.EventEmitter();

// boy.on('sm', function(sm){
//     console.log(sm);
// })

// boy.emit('sm', 'hi bro');


let Person = function(name){
    this.name = name;
}

util.inherits(Person, events.EventEmitter)


let harry = new Person('Harry');
let john = new Person('john');
let rohn = new Person('rohn');
let people = [harry, john, rohn];


// harry.on('speak', () => console.log('hello'));

people.forEach( a => a.on('speak', function(ms){
    console.log(`${this.name} said "${ms}"`);
}))


john.emit('speak', 'hey everybody')
rohn.emit('speak', 'jo loozers')
























































