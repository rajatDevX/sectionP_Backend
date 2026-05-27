const express=require("express");
const app=express();
const fs=require("fs");
app.use(express.json());
const users=require("./MOCK_DATA.json");
app.get("/users",(req,res)=>{
    const html=`
    <ul>
        ${users.map(user=>`<li>${user.first_name} ${user.last_name}</li>`).join("")}
    </ul>
    `;
    return res.send(html);
});
//read
app.get("/api/users",(req,res)=>{
    return res.json(users);
});
//read with specific id
app.get("/api/users/:id",(req,res)=>{
    const id=req.params.id;
    const user=users.find(user=>user.id==id);
    if(!user){
        res.status(404).json({message:"users not found"})
    }
    else{
        return res.json(user);

    }

});

app.post("/api/users",(req,res)=>{
    const newUser={
        id:users.length+1,
        ...req.body
    }
    users.push(newUser);
    fs.writeFile("MOCK_DATA.json",JSON.stringify(users),(err)=>{
        if(err){
        return res.json({message:"can not be updated"});
    }
    else{
        return res.json({message:"user added successfully"});
    }

    });
});
app.patch("/api/users/:id",(req,res)=>{
  const id=req.params.id;
  const userIndex=users.findIndex(user=>user.id==id);
  if(userIndex==-1){
    return res.status(404).json({message:"users not found"});
  }
  users[userIndex]={
    ...users[userIndex],...req.body
  };
  fs.writeFile("MOCK_DATA.json",JSON.stringify(users),(err)=>{
    if(err){
        return res.status(500).json({message:"user cant be updated"})
    }
    return res.json({message:"users updated successfully"});
  })
  

});
app.delete("/api/users/:id",(req,res)=>{
   const id=req.params.id;
   const userIndex=users.findIndex(user=>user.id==id);
   if(userIndex==-1){
    return res.status(404).json({message:"users not found"})
   }
   users.splice(userIndex,1);
   fs.writeFile("MOCK_DATA.json",JSON.stringify(users),(err)=>{
    if(err){
        return res.status(500).json({message:"user cant be deleted"})
    }
    return res.json(users);
    
   })
})

app.listen(3000);



