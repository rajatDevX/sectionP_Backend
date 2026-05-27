const express = require('express');
const mongoose = require('mongoose');

const shortid = require('shortid');
const app = express();
app.use(express.json());
async function connectDB() {
  try {
    await mongoose.connect('mongodb://localhost:27017/myDB9');
    console.log('DB connected successfully ✅');
  } catch (error) {
    console.log('error :', error);
    process.exit(1);
  }
}
connectDB();
const userSchema=new mongoose.Schema({
  originalUrl:{
   type:String,
   required:true
  },
  shortId:{
   type:String,
   required:true,
   unique:true
  },
  clicks:{
    type:Number,
    default:0

  },
})
const Url=mongoose.model("Url",userSchema);

app.post("/shorten",async(req,res)=>{
    const {originalUrl}=req.body;
    try{
        const shortId=shortid.generate();
        const newUrl=new Url({
            originalUrl,
            shortId
        });
        await newUrl.save();
         res.json({
      shortUrl: `http://localhost:3000/${shortId}`,
    });

    }
    catch(error){
      res.status(500).json({ error: 'Server error' });
    }
});
app.get("/analytics/:shortId", async (req, res) => {
  const url = await Url.findOne({ shortId: req.params.shortId });
  if (!url) {
    return res.status(404).json({ error: "not found" });
  }
  res.json({
    originalUrl: url.originalUrl,
    clicks: url.clicks,
  });
});

app.get("/:shortId",async(req,res)=>{
  try{
    const url=await Url.findOne({shortId:req.params.shortId});
    if(!url){
      return res.status(404).json({error:"url not found"})
    }
    url.clicks++;
    await url.save();
    res.redirect(url.originalUrl);
  }catch(error){
    res.status(500).json({error:"server error"});
  }
})



app.listen(3000);