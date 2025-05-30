const express = require("express");
const app = express();
const notesRouter = require("./routes/notes");

app.use(express.json()); // JSON parsing middleware
app.use("/notes", notesRouter); // Use notes route

// Test route
app.get("/", (req, res) => {
  res.json({ message: "notes app test" });
});

// Start server
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
