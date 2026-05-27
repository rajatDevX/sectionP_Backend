const fs=require('fs');
fs.unlink("second.txt",(err)=>{
    if(err){
        console.log("the error comming in deleting this file is:",err.message);
        return ;
    }
    else{
        console.log("file has been deleted successfully");
    }
})