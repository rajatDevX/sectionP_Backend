
const express=require("express");
const app=express();
app.use(express.json());

app.use((req,res,next)=>{
    console.log("middleware got executed");
    next();
})

let users=[];

app.get("/",(req,res)=>{
    res.send("Hello world 2");
});
// node --watch index60.js
app.get("/hello",(req,res)=>{
    res.json({"message":"hello world 2"});
});

app.get("/user/:id",(req,res)=>{
    const id=req.params.id;
    res.json({"userId":id});
});
app.get("/search",(req,res)=>{
    const name=req.query.name;
    res.json({"your name":name});
});

app.post("/user",(req,res)=>{
    const data=req.body;
    res.json({
        message:"user created",
        data
    });
})

app.put("/user/:id",(req,res)=>{
    const id=req.params.id;
    const data=req.body;
    res.json({
        message:`user with ${id} got updated`,
        data
    })
});
app.post("/users",(req,res)=>{
    users.push(req.body);
    res.json(users);
})
app.get("/users",(req,res)=>{
    res.json(users);
})


app.listen(3000);

