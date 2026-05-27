const express=require("express");
const app=express();

app.use(express.json());

const users=[{id:1,name:"kanak",age:20},{id:2,name:"vijay",age:23},{id:3,name:"vaibhav",age:21}];


app.get("/users",(req,res)=>{
    return res.json(users);
})

app.get("/users/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const user=users.find(u=>u.id===id);
    if(!user){
        return res.status(404).json({message:"user not found"});
    }
    return res.json(user);
})
app.patch("users/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const user=users.find(u=>u.id===id);
     if (!user) {
       return res.status(404).json({ message: "user not found" });
     }
     if(req.body)
})
