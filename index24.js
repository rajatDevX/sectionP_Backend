const express=require("express");

const app=express();

app.get("/user/:id",(req,res)=>{
    // console.log(req);
   res.send(`the user has id ${req.params.id}`);
    
});
app.get("/search",(req,res)=>{   
    res.send(`you searched for ${req.query.name} and branch is ${req.query.branch} `);
});

app.listen(3000,()=>{
    console.log(`server is running at address http://localhost:3000/user/21`);
});