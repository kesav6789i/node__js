const express = require("express");
const app = express();

app.listen(7777,()=>{
console.log('server is running.......');
});

// app.get("/user1",(req,res)=>{
//     throw new Error("Im mad bcoz of bug");
// })

app.get("/user1",(req,res,next)=>{
    try{
        throw new Error("Im mad bcoz of bug");
    }
    catch(err){
        next(err);
    }
});

app.use("/",(err,req,res,next)=>{
    console.log('hi in error page');
    // console.error(err.stack);
    res.status(500).send(err.message); 
});


  