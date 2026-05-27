const express=require('express');
const app=express();
const port=3000;
const users=require("./MOCK_DATA.json");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//explain
// app.get("/users",(req,res)=>{
//     const html =`
//         <ul>
//             ${users.map(user => `<li>${user.first_name} ${user.last_name}</li>`).join('')}
//         </ul>
//     `;
//     res.send(html);
// })

app.get('/api/users',(req,res)=>{
   return res.json(users);
});
// app.get('/api/users/:id',(req,res)=>{
//     const userId = parseInt(req.params.id);
//     const user = users.find(u => u.id === userId);
//     if(user){
//         return res.json(user);
//     }else{
//         return res.status(404).json({message:"User not found"});
//     }
// });
app.route("/api/users/:id").get((req,res)=>{
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    if(user){
        return res.json(user);
    }else{
        return res.status(404).json({message:"User not found"});
    }
}).post((req,res)=>{
    const body=req.body;
    if(!body || Object.keys(body).length === 0){
        return res.status(400).json({message:"Request body is required"});
    }
    console.log(body);
    return res.status(201).json({
        message:"Body received",
        userId:Number(req.params.id),
        data:body
    });
})

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
});
