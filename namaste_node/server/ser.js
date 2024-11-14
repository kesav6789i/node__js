const http = require("node:http");
//createServer
const server = http.createServer((req,res)=>{

    if(req.url === '/jaanu')
    {
        res.end(" iam jaanu iam waste fellow");
    }
    res.end(" iam server");
});
server.listen("3007");

