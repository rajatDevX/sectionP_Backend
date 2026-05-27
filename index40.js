function fetchUser(){
    return new Promise((resolve,_)=>{
        setTimeout(()=>{
            resolve({id:1,name:"kunal"});
        });
    });
}
async function getUser(){
    try{
        const data=await fetchUser()
        console.log(data);

    }
    catch(error){
        console.log(error);
    }
}
getUser();