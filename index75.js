const express = require("express");
const shortid = require("shortid");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
async function connectDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/myDB13");
    console.log("DB connected successfully✅");
  } catch (error) {
    console.log("error:", error);
    process.exit(1);
  }
}
connectDB();
const userSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: true,
  },
  shortId: {
    type: String,
    unique: true,
  },
  clicks: {
    type: Number,
    default: 0,
  },
});
const Url = mongoose.model("Url", userSchema);

app.post("/shorten", async (req, res) => {
  try {
    const { originalUrl } = req.body;
    try {
      new URL(originalUrl);
    } catch (error) {
      return res.status(400).json({ error: "invalid URL" });
    }
    const shortId = shortid.generate();
    const url = new Url({ originalUrl, shortId });
    await url.save();
    res.json({
      shortUrl: `http://localhost:3000/${shortId}`,
    });
  } catch (error) {
    return res.status(500).json({error:"internal server error"});
  }
});
app.get("/:shortid",async(req,res)=>{
    try{
        const url=await Url.findOne({shortId:req.params.shortid});
        if(!url){
            return res.status(404).json({error:"url not found"});
        }
        url.clicks++;
        await url.save();
        res.redirect(url.originalUrl);


    }
    catch(error){
        res.status(500).json({error:"internal server error"});

    } 
})
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});


