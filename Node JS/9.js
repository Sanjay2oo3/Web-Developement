const eventEmitter = require('events'); 
const myEvent = new eventEmitter();

function channel(arg1) {
    console.log(`Thanks for Subscribing to ${arg1}`);
}

myEvent.on('Subscribe', channel);


myEvent.emit("Subscribe", "College Wallah");

myEvent.removeListener('Subscribe', channel);

myEvent.emit("Subscribe", "College Wallah");
