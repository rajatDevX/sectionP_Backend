const express=require("express");

const app=express();

app.get("/",(req,res)=>{
    // res.setHeader("content-type","text/json");
    //  res.writeHead(200,{"content-type":"text/json"});
    res.json([{
        name:"Ujjawal",
        Branch:"Mechanical"
    },
    {
    name:"Mradul",
    Branch:"cse"
    }])
})

app.listen(3000,()=>{
    console.log(`server is running at address http://localhost:3000`);
});