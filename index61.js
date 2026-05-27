const express=require("express");

const app=express();

app.use(express.json());

const users = [
  {
    id: 1,
    name: "Abhay",
    Math_marks: 92,
    Branch: "CSE",
  },
  {
    id: 2,
    name: "Ashish",
    Math_marks: 91,
    Branch: "ECE",
  },
];
// abhay-CSE

app.get("/users",(req,res)=>{
    const html=
    `
    <ul>
        ${users.map(user=>`<li>${user.name} - ${user.Branch}</li>`).join("")}
    </ul>
    `
    res.send(html);
});
app.get("/marks", (req, res) => {
  const html = `
    <ul>
       ${users.map(user=>`<li>${user.name} - ${user.Math_marks}</li>`).join("")}
    </ul>
    `;
  res.send(html);
});

app.get("/api/users",(req,res)=>{
    return res.json(users);
})
app.get("/api/users/:id",(req,res)=>{
    const id=req.params.id;
    const user=users.find(user=>user.id==id);
    if(!user){
        return res.status(404).json({message:"users not found"})
    };
    res.json(user);
});
app.post("/api/users",(req,res)=>{
  const newUser={
    id:users.length+1,
    ...req.body
  }
  users.push(newUser);
  return res.json(users);
});

app.patch("/api/users/:id",(req,res)=>{
  const id=req.params.id;
  const user=users.find(user=>user.id==id);
  if(!user){
    return res.status(404).json({message:"users not found"});
  }
  Object.assign(user,req.body);
  return res.json(users);
});
app.delete("/api/users/:id",(req,res)=>{
  const id=req.params.id;
  const index=users.findIndex(user=>user.id==id);
  if(index==-1){
    return res.status(404).json({message:"user not found"})
  };
  users.splice(index,1);
  return res.json(users);
})





app.listen(3000);