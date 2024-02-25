const fs = require('fs');

fs.readFile('nodejs_architecture.txt', function(err, data){
    if(err){
        console.log("File doesn't read successfully")
        return err;
    }else
    {
        console.log(data.toString())
        return data;
    }
})