// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error("Error fetching users:", error));


//   "name": "index42",
// /name/index42.js 

async function fetchData(){
    try{
        const res=await fetch("https://jsonplaceholder.typicode.com/users")
        const data=await res.json();
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}
fetchData();