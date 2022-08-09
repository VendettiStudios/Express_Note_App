import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(port, () => {
  console.log(`Notes App listening on port ${port}`);
});
app.use(express.static("public"));
app.use(bodyParser());
app.get("/notes", (req, res) => {
  res.sendFile("notes.html", { root: "./public" });
});
// Added Notes function
const notes = [{ id: 0, title: "Note1", text: "text text text" }];

app.get("/api/notes", (req, res) => {
  res.send(notes);
});

app.post("/api/notes", (req, res) => {
  const title = req.body.title;
  const text = req.body.text;
  const id = notes.length;
  notes.push({ id, title, text });
  res.send({ id, title, text });
});

app.delete("/api/notes/:id", (req, res) => {
  const id = req.params.id;
  const index = notes.findIndex(note => note.id = id)
  if(index != -1)
    notes.splice(index, 1)
    res.send({})
});
