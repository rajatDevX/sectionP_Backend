const express=require("express");

const app=express();

app.set("view engine","ejs");
app.set("views",__dirname);
// if dont want to set views then it will automatically look for views folder in the current directory and if we have index.ejs file in that folder then it will render that file when we hit the route.


app.get("/",(req,res)=>{
  res.render("index",{
    name:"krish",
    course:"DSA",
    skills:["html","css","javaScript","react","nodejs"],
    teammates:["karthik","preksha","abhishek","vivek"]
    
  });
});

app.listen(3000);