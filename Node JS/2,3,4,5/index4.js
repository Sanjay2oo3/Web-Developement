const fs = require('fs');

fs.appendFile('nodejs_architecture.txt', 'Advantages of Node.js Architecture Node.js Architecture comes with several advantages that give the server-side platform a distinct upper-hand when compared to other server-side languages: Handling multiple concurrent client requests is fast and easy With the use of Event Queue and Thread Pool, the Node.js server enables efficient handling of a large number of incoming requests. No need for creating multiple threads Event Loop handles all requests one-by-one, so there is no need to create multiple threads. Instead, a single thread is sufficient to handle a blocking incoming request. Requires fewer resources and memory Node.js server, most of the time, requires fewer resources and memory due to the way it handles the incoming requests. Since the requests are processed one at a time, the overall process becomes less taxing on the memory. All of these advantages contribute to making the servers developed using Node.js much faster and responsive when compared to those developed using other server development technologies.', function(err){
    if(err){
        console.log("Data not appended")
    }else
    {
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
    }
})