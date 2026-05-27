const express=require("express");
const app=express();
// http://localhost:3000/dashboard?age=21
function logger(req,res,next){
    const age=req.query.age;
    if(age>18){
        next();
    }
    else{
        res.send(`you can not vote ❌`);
    }
}

app.get("/",(req,res)=>{
    res.send("this is my home page");
})

app.get("/dashboard",logger,(req,res)=>{
    res.send("yes you can vote ✅");
})

app.listen(3000);