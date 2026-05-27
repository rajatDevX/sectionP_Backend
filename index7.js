const fs=require("fs");
fs.rename("file1.txt","second.txt",(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("file name has been change successfully");
})