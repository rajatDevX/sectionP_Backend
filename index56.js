const express=require("express");

const app=express();

app.get("/search",(req,res)=>{
   const query=req.query.q;
   res.send("search results for: "+query);
});


app.listen(3000, () => {
   console.log("server is running at http://localhost:3000/search?q=laptop");
});
