const express=require("express");

const app=express();

app.get("/user/:name",(req,res)=>{
    res.send("hello "+req.params.name);
});

app.listen(3000,()=>{
    console.log(`server is running at address http://localhost:3000/user/kanak`);
});