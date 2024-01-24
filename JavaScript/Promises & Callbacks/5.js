function greeting (name){
    return new Promise(function(resolve){
          resolve(`Hello, ${name}!`)
    });
}

greeting("Sanjay").then(function(resolve){
       console.log(resolve)
})

