const express=require("express");
const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const app=express();
app.use(express.json());
const SECRET="mysecretkey"
async function connectDB(){
    await mongoose.connect("mongodb://localhost:27017/myDB5");
    console.log("DB connected");
}
connectDB();
const userSchema=new mongoose.Schema({
    name:String,
    email:{type:String,unique:true},
    password:String
});
const User=mongoose.model("Student",userSchema);
app.post("/signup",async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        const exist=await User.findOne({email});
        if(exist) return res.send("user already exist");
        const hashedPassword=await bcrypt(password,10);
        const user=new User({name,email,password:hashedPassword});
        await user.save();
        res.send("signup success");


    }
    catch(error){
        
    }res.send(error);
});

app.listen(3000);

