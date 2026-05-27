const express=require("express");
const mongoose=require("mongoose");
const app=express();
app.use(express.json());

async function connectDB(){
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/DB3");
        console.log("DB connected successfully ✅");
        
    }
    catch(error){
        console.log("connection error:",error);
        process.exit(1);
    }
}
connectDB();

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
       
    },
    age:{
        type:Number,
        required:true,
         
    },
    email:{
        type:String,
        required:[true,"please enter email id"],
        trim:true,
        unique:true,
        
    }
});
const User=mongoose.model("User",userSchema);

app.post("/user",async(req,res)=>{
    const user=await User.create(req.body);
    res.json(user);
})
app.get("/users",async(req,res)=>{
    const users=await User.find();
    res.json(users);
})

app.get("/user/:id",async(req,res)=>{
    const user=await User.findById(req.params.id);
    res.json(user);
})

app.put("/user/:id",async(req,res)=>{
    const user=await User.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.json(user);
})

app.delete("/user/:id",async(req,res)=>{
    await User.findByIdAndDelete(req.params.id);
    res.json({message:"users has been deleted successfully"})
})
app.get("/filter",async(req,res)=>{
   const users=await User.find({age:{$gt:23}});
   res.json(users);
})

app.listen(3000);