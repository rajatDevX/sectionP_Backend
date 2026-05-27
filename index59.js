const express=require("express");

const app=express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.json({messsage:"Hello world"});
});

app.get("/user/:id",(req,res)=>{
    const id=req.params.id;
    res.json({userid:id});
})

app.get("/search",(req,res)=>{
    const name=req.query.name;
    res.json({result:`search for ${name}`})
})
app.post("/user",(req,res)=>{
    const data=req.body;
    res.json({message:"user created",data});
});

app.put("/user/:id",(req,res)=>{
    const id=req.params.id;
    const data=req.body;
    res.json({
        message:`User with ${id} updated`,
        data
    });
});

app.listen(3000);