const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/notes.json");

function readNotes() {
  if (!fs.existsSync(filePath)) return [];
  try {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data || "[]");
  } catch (err) {
    return [];
  }
}

function writeNotes(notes) {
  fs.writeFileSync(filePath, JSON.stringify(notes, null, 2));
}

module.exports = { readNotes, writeNotes };
