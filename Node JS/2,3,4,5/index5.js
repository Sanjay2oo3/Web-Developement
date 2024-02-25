const fs = require('fs');

fs.unlink('nodejs_architecture.txt', function(err){
    if(err){
        console.log("File not deleted")
    }else
    {
        console.log("File deleted Succussfully")
    }
})