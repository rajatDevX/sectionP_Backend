const fs=require("fs");
fs.mkdir("Backend",(err)=>{
   if(err){
    console.log(err);
   }
   console.log("New directory has been made");
})