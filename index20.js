const express=require("express");

const app=express();
// if(req.url==="/" && req.method==="GET"){
//         res.end(`This is a home page`);
//     }

app.get("/",(req,res)=>{
    res.send("Hello world");
});


app.listen(3000,()=>{
    console.log(`server is running at address http://localhost:3000`);
});