//this is http module from node:
const http = require('http');

const server = http.createServer((req, res)=>{
    res.end("hey guys!");
})

server.listen(3000);

