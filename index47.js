console.log(process.argv[0]);
console.log(process.argv[1]);

const userName=process.argv[2];
const city=process.argv[3];
const branch=process.argv[4];
console.log(`Hello ${userName}`);
console.log(`You are from ${city}`);
console.log(`Your branch is ${branch}`);