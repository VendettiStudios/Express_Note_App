import express from "express";

const app = express();
const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
app.use(express.static("public"));

app.get("/notes", (req, res) => {
  res.sendFile("notes.html", {root:"./public"});
});
// Added Notes function
const notes = [{title:"Note1", text:"text text text"}];

app.get("/api/notes", (req, res) => {
    res.send(notes)
})

app.post("/api/notes", (req, res) => {
    console.log(JSON.stringify(req))
    const title = req.body.title;
    const text = req.body.text;
    notes.push({title, text});
    res.send({title, text});
})

// const handleNoteSave = () => {
//     const newNote = {
//       title: noteTitle.value,
//       text: noteText.value,
//     };
// saveNote(newNote).then(() => {
//     getAndRenderNotes();
//     renderActiveNote();
//   });


// const saveNote = (note) =>
//   fetch('/api/notes', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(note),
//   });

// const deleteNote = (id) =>
//   fetch(`/api/notes/${id}`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
