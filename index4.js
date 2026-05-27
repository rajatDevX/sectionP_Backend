const fs=require('fs');
fs.writeFile("second.txt","I am learning fs module",(err)=>{
    if(err){
        console.log("the error in writting file is==>",err.message);
    }
    else{
        console.log("file has been written successfully");
    }
})