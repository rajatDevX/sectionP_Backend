const express=require("express");
const app=express();
app.use(express.json());

// Logging middleware

app.use((req,res,next)=>{
    console.log(req.method);
    console.log(req.url);
    next();
});

//Authentication middleware
function authMiddleware(req,res,next){

    const token=req.headers.authorization;
    if(token==="secret345"){
        next();
    }
    else{
        res.send("can not access");
    }
}

app.get("/",(req,res)=>{
    res.send("I am learning log middleware");
});

app.get("/dashboard",authMiddleware,(req,res)=>{
    res.send("welcome to Dashboard");
})

app.get("/error",(req,res)=>{
    throw new Error("This is a test error");
})

app.use((err,req,res,next)=>{
    console.error(err.message);
    res.status(500).send("Something broke!");
    next();
});


app.listen(3000);