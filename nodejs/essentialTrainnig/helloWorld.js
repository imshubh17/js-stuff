const http = require('http');

const server = http.createServer((req,res)=>{
    res.end('Hello World!')
});

server.listen(3000, ()=>{
    console.log(`server is running http://127.0.0.1:3000`);
})

