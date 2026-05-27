const express=require("express");

const app=express();

app.get("/home",(req,res)=>{
    res.send("this is a home page");
});
app.get("/about",(req,res)=>{
    res.send("this is a about page");
});

app.get("/contact",(req,res)=>{
    res.send("this is a contact page");
});

app.post("/home",(req,res)=>{
    res.send("this is post request at home page");
});
app.post("/contact",(req,res)=>{
    res.send("this is post request at contact page");
});
app.post("/about",(req,res)=>{
    res.send("this is post request at  about page 1");
});

app.listen(3000);

