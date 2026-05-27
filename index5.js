const fs=require("fs");
fs.appendFile("second.txt","\nI am adding new content in this file again",(err)=>{
    if(err){
        console.log("the error comming in appending this file is ==>>",err.message)
    }
    else{
        console.log("content has been appended successfully");
    }   
})