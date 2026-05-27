function step1() {
  return new Promise((resolve, reject) => {
    let success1 = true;
    setTimeout(() => {
      if (success1) {
        resolve("task 1 done ");
      } else {
        reject("error in taks 1");
      }
    }, 1500);
  });
}
function step2(message) {
  return new Promise((resolve, reject) => {
    let success2 = false;
    setTimeout(() => {
      if (success2) {
        resolve(message + "=>task 2 done ");
      } else {
        reject("error in taks 2");
      }
    }, 1500);
  });
}
function step3(message) {
  return new Promise((resolve, reject) => {
    let success3 = true;
    setTimeout(() => {
      if (success3) {
        resolve(message + "=>task 3 done ");
      } else {
        reject("error in taks 3");
      }
    }, 1500);
  });
}
step1()
  .then((message) => step2(message))
  .then((message) => step3(message))
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
