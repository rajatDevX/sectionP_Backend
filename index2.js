const fs=require("fs");
fs.readFile("fil.txt","utf-8",(err,data)=>{
    if(err){
        console.log("the error comming in reading this file is ====>>>",err.message);
        return;
    }
    console.log(data);
})