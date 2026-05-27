const express=require("express");
const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");
const app=express();
app.use(express.json());
async function connectDB(){
    try{
        await mongoose.connect("mongodb://localhost:27017/myDB6");
        console.log("DB connected successfully ✅");
    }
    catch(error){
        console.log("error :",error);
        process.exit(1);
    }
}
connectDB();
const userSchema=new mongoose.Schema({
    name:String,
    password:String,
    email:{
        type:String,
        unique:true
        
    }
});
const User= mongoose.model("Student",userSchema);

app.post("/signup",async(req,res)=>{
  const {name,email,password}=req.body;//object destructuring
  const exist=await User.findOne({email});
  if(exist){
   return res.send("user already exist");
  }
  const hashedPassword=await bcrypt.hash(password,10);
  const user=new User({name,email,password:hashedPassword});
  await user.save();
  res.send("User signup sucessfully✅");

})
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.send("user not found");
    }

  
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.send("invalid password");
    }

    const token = jwt.sign({ id: user._id }, "mySecretKey", {
      expiresIn: "1h",
    });

    res.json({
      message: "login successful ✅",
      token,
    });
  } catch (error) {
    res.send(error);
  }
});
function authMiddleware(req,res,next){
    try{
        const token=req.headers.authorization;
        if(!token){
            return res.send("no token found ❌");
        }
        const decoded=jwt.verify(token,"mySecretKey");
        req.userId=decoded.id;
        next();
    }catch(error){
        res.send(error)
    }
   
    
}

app.get("/profile",authMiddleware,async(req,res)=>{
    const user=await User.findById(req.userId);
    res.json(user);

});



app.listen(3000, () => {
  console.log("Server is running on port 3000");
});