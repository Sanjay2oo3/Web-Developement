const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url == '/'){
        res.write(`<h1>I am Happy to Learn Full Stack Web Development From PW Skills</h1>`)
    }else
    {
        res.end();
    }
})

server.listen(5010)
console.log("Server Started on port 5010")