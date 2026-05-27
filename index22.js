const express=require("express");

const app=express();


app.use(express.json());

let users=[{id:1,name:"rajat",age:21},{id:2,name:"rohit",age:22},{id:3,name:"aman",age:23}];

app.get("/users",(req,res)=>{
    res.json(users);
});

app.get("/users/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const user=users.find(u=>u.id===id);
    if(!user){
        return res.status(404).json({message:"user not found"});

    }
    res.json(user);
});

app.post("/users",(req,res)=>{
    const newUser={
        id:users.length+1,
        name:req.body.name,
        age:req.body.age
    }
    users.push(newUser);
    res.status(201).json(newUser);
});

app.patch("/users/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const user=users.find(u=>u.id===id);
    if(!user){
        return res.status(404).json("user not found");
    }
    if(req.body.name){
        user.name=req.body.name;
    }
    if(req.body.age){
        user.age=req.body.age;
    }
    res.json({message:"users details has been updated successfully"});
});

app.delete("/users/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    users=users.filter(u=>u.id!==id);
    res.json({message:"user has been deleted successfully"});
})

app.listen(3000,()=>{console.log(`server is running at port 3000`)});