function payment(){
    return new Promise((resolve,reject)=>{
      let balance=300;
      setTimeout(()=>{
        if(balance>200){
            resolve("your payment is successful ✅");
        }
        else{
            reject("your payment was unsuccessful ❌");
        }
      },1500);
    });
}

async function payment1(){
    try{
        const message=await payment();
        console.log(message);

    }
    catch(error){
        console.log(error);

    }
}
payment1();