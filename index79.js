const express=require("express");
const mongoose=require("mongoose");
const app=express();
app.use(express.json());
async function connectDB(){
    try{
        await mongoose.connect("mongodb://localhost:27017/myDB16");
        console.log("DB connected successfully");
    }
    catch(error){
        console.log("error:",error);
        process.exit(1);
    }
}
connectDB();
const noteSchema=new mongoose.Schema({
    title:String,
    content:String,
    tags:[String],
    likes:{
        type:Number,
        default:0
    }
});

const Note=mongoose.model("Note",noteSchema);
app.post("/notes",async(req,res)=>{
    try{
        const note=await Note.create(req.body);
        res.send(note);
    }
    catch(error){
        res.status(500).res.json({error:"internal server error"});
    }
});

app.listen(3000);