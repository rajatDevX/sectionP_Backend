const express=require("express");

const mongoose=require("mongoose");

const app=express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/youtube-app-1").then(()=>console.log("mongodb connected")).catch(err=>console.log("mongo error",err));


const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    age:Number,
    email:{
        type:String,
        unique:true

    }
});

const User=mongoose.model("User",userSchema);


app.post("/users",async (req,res)=>{
    try{
        const user=new User(req.body);
        await user.save();
        res.status(201).json(user);

    }
    catch(err){
     res.status(400).json({error:err.message});
    }
});


app.get("/users",async (req,res)=>{
    const users=await User.find();
    res.json(users);
});




app.put("/users/:id",async (req,res)=>{
    const updatedUser=await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.json(updatedUser);
});


app.delete("/users/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


app.listen(3000,()=>{
    console.log(`server is running on port 3000`);
});
