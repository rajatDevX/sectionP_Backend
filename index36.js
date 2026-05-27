const myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    setTimeout(() => {resolve("this will run after 2 seconds ")}, 2000);
  }
  else{
    reject("this will not run due to some error");
  }
});
myPromise.then(message=>{console.log(message);}).catch(error=>{console.log(error)});
