const express=require("express");
const app=express();
const jwt=require("jsonwebtoken");
app.use(express.json());
app.post("/login",(req,res)=>{
    const newUser={
        id:1,
        username:"nitin"
    }
    const token=jwt.sign(newUser,"secretkey");
    res.json({token});
})
function auth(req,res,next){
    const token=req.headers.authorization;
    if(!token){
        res.status(401).send("token missing");
    }
    try{
        const decoded=jwt.verify(token,"secretkey");
        req.user=decoded;
        next();
    }
    catch{
        res.status(401).send("invalid token");
    }
}
app.get("/dashboard",auth,(req,res)=>{
    res.send(`welcome to website ${req.user.username}`);
});
app.listen(3000);