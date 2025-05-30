// controllers/notesController.js
const { readNotes, writeNotes } = require("../utils/fileStore");

exports.getNotes = (req, res) => {
  const notes = readNotes();
  res.json(notes);
};

exports.createNote = (req, res) => {
  const notes = readNotes();

  // Find the max existing id or 0 if no notes
  const maxId =
    notes.length > 0 ? Math.max(...notes.map((note) => note.id)) : 0;

  const newNote = {
    id: maxId + 1, // increment id by 1
    text: req.body.text || "",
    createdAt: new Date().toISOString(),
  };

  notes.push(newNote);
  writeNotes(notes);
  res.status(201).json(newNote);
};

exports.updateNote = (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  const notes = readNotes();

  // Note: req.params.id is a string, convert to number for comparison
  const note = notes.find((n) => n.id === Number(id));
  if (!note) return res.status(404).json({ error: "Note not found" });

  note.text = text;
  note.updatedAt = new Date().toISOString();
  writeNotes(notes);
  res.json(note);
};

exports.deleteNote = (req, res) => {
  const { id } = req.params;
  let notes = readNotes();

  // Find the note to delete
  const index = notes.findIndex((n) => n.id === Number(id));
  if (index === -1) {
    return res.status(404).json({ error: "Note not found" });
  }

  const deletedNote = notes.splice(index, 1)[0];

  // Reassign IDs starting from 1
  notes = notes.map((note, idx) => ({
    ...note,
    id: idx + 1,
  }));

  writeNotes(notes);
  res.json({ message: `Note "${deletedNote.text}" removed.` });
};
