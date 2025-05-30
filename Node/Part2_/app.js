const express = require("express");
const fs = require("fs");
const app = express();

const filePath = "notes.json";
app.use(express.json());

// Load notes
function loadNotes() {
  if (!fs.existsSync(filePath)) return [];
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

// Save notes
function saveNotes(notes) {
  fs.writeFileSync(filePath, JSON.stringify(notes, null, 2));
}

// Add a note
function addNote(text) {
  const notes = loadNotes();
  const newNote = {
    id: notes.length + 1,
    text,
    createdAt: new Date().toISOString(),
  };
  notes.push(newNote);
  saveNotes(notes);
  return newNote;
}
//  Remove a note
function removeNote(id) {
  let notes = loadNotes();
  const index = notes.findIndex((n) => n.id === id);
  if (index === -1) return null;

  const deleted = notes.splice(index, 1)[0];

  // Reassign IDs but keep original note properties
  notes = notes.map((note, i) => ({ ...note, id: i + 1 }));

  saveNotes(notes);
  return deleted;
}

// Edit a note
function editNote(id, newText) {
  const notes = loadNotes();
  const note = notes.find((n) => n.id === id);
  if (!note) return null;

  const oldText = note.text;
  note.text = newText;
  note.updatedAt = new Date().toISOString();
  saveNotes(notes);
  return { oldText, newText };
}

app.get("/", (req, res) => {
  res.json({ message: "notes app test" });
});

// List notes
app.get("/notes", (req, res) => {
  res.json(loadNotes());
});

// Add note
app.post("/notes", (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: "Text is required" });

  const note = addNote(text);
  res.status(201).json(note);
});

//Remove note
app.delete("/notes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const deleted = removeNote(id);
  if (!deleted) return res.status(404).json({ error: "Note not found" });

  res.json({ message: `Note "${deleted.text}" removed.` });
});

// Edit note
app.put("/notes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: "Text is required" });

  const result = editNote(id, text);
  if (!result) return res.status(404).json({ error: "Note not found" });

  res.json({
    message: `Note "${result.oldText}" updated to "${result.newText}".`,
  });
});

module.exports = app;
