const eventEmitter = require('node:events')
const myEvent = new eventEmitter()

myEvent.on('Subscirbe', function channel(arg1){
    console.log(`Thanks for Subscribing to ${arg1}`)
});

myEvent.emit("Subscirbe" ,"College Wallah")
