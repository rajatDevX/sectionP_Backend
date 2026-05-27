const express=require("express");
const cookieParser=require("cookie-parser");
const app=express();
app.use(cookieParser("mySecretKey"));
app.get("/setcookie",(req,res)=>{
    res.cookie("name","vikas",{
        maxAge:1000*60*2, // 2 minutes

        httpOnly:true, // JS access block
        signed:true, // signed cookie
    })
    res.send("cookie set successfully");
});
app.get("/getcookie",(req,res)=>{
    res.send(req.signedCookies);
});
app.get("/deletecookie",(req,res)=>{
    res.clearCookie("name");
    res.send("cookies deleted successfully");
})
app.listen(3000);