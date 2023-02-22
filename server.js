import express from "express";
import bodyParser from "body-parser";
import path from "path";

const app = express();
const port = process.env.PORT || 3001;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(path.dirname(new URL(import.meta.url).pathname), "public/index.html"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(path.dirname(new URL(import.meta.url).pathname), "public/notes.html"));
});

const notes = [{ id: 0, title: "Note1", text: "text text text" }];

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.post("/api/notes", (req, res) => {
  const title = req.body.title;
  const text = req.body.text;
  const id = notes.length;
  notes.push({ id, title, text });
  res.json({ id, title, text });
});

app.delete("/api/notes/:id", (req, res) => {
  const id = req.params.id;
  const index = notes.findIndex(note => note.id == id);
  if(index != -1) {
    notes.splice(index, 1);
    res.json({success: true});
  } else {
    res.status(404).json({error: 'Note not found'});
  }
});

app.listen(port, () => {
  console.log(`Notes App listening on port ${port}`);
});
