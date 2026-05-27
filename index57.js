// const express=require("express");
// const app=express();

// app.use((req,res,next)=>{
//   console.log("middleware executed");
//   next();
// });

// app.get("/",(req,res)=>{
//     res.send("hello world");
// })

// app.listen(3000, () => {
//    console.log("server is running at http://localhost:3000");
// });


const express=require('express');

const app=express();

app.get("/api/user",(req,res)=>{
    res.json({
        name:"rahul",
        age:22
    });
});

app.listen(3000);