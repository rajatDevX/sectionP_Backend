function myOrder(){
    return new Promise((resolve,reject)=>{
        let resturantOpen=false;
        setTimeout(()=>{
            if(resturantOpen){
                resolve("your food will be ready  in  3 seconds 🍕");
            }
            else{
                reject("sorry we can not serve food today 😞");
            }
        });
    });
}
myOrder().then(message=>console.log(message)).catch(error=>console.log(error));


