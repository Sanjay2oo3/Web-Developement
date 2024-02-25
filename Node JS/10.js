const eventEmitter = require('node:events')
const myEvent = new eventEmitter()

console.log("The default maximum number of event listners are: "+myEvent.getMaxListeners())

myEvent.setMaxListeners(5);

console.log("The updated maximum number of event listners are: "+myEvent.getMaxListeners())
