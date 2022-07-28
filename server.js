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
const notes = [{ title: "Note1", text: "text text text" }];

app.get("/api/notes", (req, res) => {
  res.send(notes);
});

app.post("/api/notes", (req, res) => {
  const title = req.body.title;
  const text = req.body.text;
  notes.push({ title, text });
  res.send({ title, text });
});

app.delete("/api/notes/:id", (req, res) => {
  const id = req.params.id;
  const index = notes.findIndex(note => note.id = id)
});

// const deleteNote = (id) =>
//   fetch(`/api/notes/${id}`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
