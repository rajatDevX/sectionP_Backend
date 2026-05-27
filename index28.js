const express=require("express");
// const nodemon = require("nodemon");
const path=require("path");
const app=express();
console.log(__dirname);
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"index3.html"));
    // /Users/rajat/Downloads/sectionP/index3.html
});

app.listen(3000,()=>{
    console.log(`server is running at addres http://localhost:3000`);
});

// npm install -g nodemon
// nodemon file_name

// npm install nodemon
// npx nodemon file_name