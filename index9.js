const fs=require("fs");
fs.readdir("./",(err,files)=>{
    if(err){
        console.log(err);
    }

    console.log(files);
})