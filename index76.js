const express = require("express");
const mongoose = require("mongoose");


const app = express();
app.use(express.json());


// DB connect
mongoose
  .connect("mongodb://localhost:27017/notesDB")
  .then(() => console.log("DB Connected ✅"))
  .catch((err) => console.log(err));

// Schema
const noteSchema = new mongoose.Schema({
  title: String,
  content: String,
  tags: [String],
  likes: {
    type: Number,
    default: 0,
  },
});

const Note = mongoose.model("Note", noteSchema);

// ➤ Create Note
app.post("/notes", async (req, res) => {
  try {
    const note = await Note.create(req.body);
    res.json(note);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ➤ Get All Notes
app.get("/notes", async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

// ➤ Search Notes (title/content)
app.get("/notes/search", async (req, res) => {
  const { q } = req.query;

  const notes = await Note.find({
    $or: [
      { title: { $regex: q, $options: "i" } },
      { content: { $regex: q, $options: "i" } },
    ],
  });

  res.json(notes);
});

// ➤ Filter by Tag
app.get("/notes/tag/:tag", async (req, res) => {
  const notes = await Note.find({
    tags: req.params.tag,
  });

  res.json(notes);
});

// ➤ Like Note
app.post("/notes/:id/like", async (req, res) => {
  const note = await Note.findByIdAndUpdate(
    req.params.id,
    { $inc: { likes: 1 } },
    { new: true },
  );

  res.json(note);
});

// ➤ Delete Note
app.delete("/notes/:id", async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted ✅" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000 🚀");
});
