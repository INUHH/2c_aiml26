const EventEmitter = require('events');
const event=new EventEmitter();
event.on('greet', (name) => {
    console.log('Hello, ' + name + '!');
});
event.on('exit',() =>{
    console.log('Exit event triggered.');
});
event.emit('greet','Student');
event.emit('exit');

