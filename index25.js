const express=require("express");
const path=require("path");
const app=express();

// middleware
// app.use(express.urlencoded({extended:true}));
app.use(express.json());

// /user/coding/sectionP/index25.js
// \user\coding\sectionP\index25.js

app.get("/",(req,res)=>{
//    res.sendFile(path.join(__dirname,"index2.html"));
});

app.post("/submit",(req,res)=>{
   console.log(req.body);
   res.send(`student with name ${req.body.name} and age ${req.body.age} has email ID ${req.body.email}`);
});

app.listen(3000,()=>{
    console.log(`server is running at address http://localhost:3000`);
});