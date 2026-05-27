const myPromise=new Promise((resolve,reject)=>{
    let success=false;
    setTimeout(()=>{
       if(success){
        resolve("it will run after 3 seconds ✅");
       }
       else{
        reject("there is some error in this code ❌");
       }
    },3000);
});

myPromise.then(message=>console.log(message)).catch(error=>console.log(error));