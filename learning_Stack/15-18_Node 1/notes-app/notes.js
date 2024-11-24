const fs = require("fs");

// To load the array of notes already added
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    const notes = JSON.parse(dataJson);
    return notes;
  } catch (error) {
    return [];
  }
};

// To save the array of notes in notes.json
const saveNotes = (notes) => {
  const notesJson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", notesJson);
};

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNote = notes.find((note) => {
    return note.title === title;
  });
  if (duplicateNote) return console.log("Note title taken !");

  const note = { title, body };
  notes.push(note);
  console.log(notes);
  saveNotes(notes);
};

const removeNote = (title) => {
  const notes = loadNotes();

  const filteredNotes = notes.filter((note) => {
    return note.title !== title;
  });

  if (notes.length > filteredNotes.length) {
    console.log("Note Removed !");
  } else {
    return console.log("Note not found !");
  }

  saveNotes(filteredNotes);
};

const listNotes = () => {
  const notes = loadNotes();

  console.log("Your Notes: ");

  notes.forEach((note) => {
    console.log(note.title);
  });
};

const readNote = (title) => {
  const notes = loadNotes();

  const note = notes.find((note) => {
    return note.title === title;
  });

  if (!note) return console.log("Note not found !");

  console.log(note.title);
  console.log("==============");
  console.log(note.body);
};

const updateNote = (title, updatedBody) => {
  const notes = loadNotes();

  const updatedNotes = notes.map((note) => {
    if (note.title === title) {
      return { ...note, body: updatedBody };
    }
    return note;
  });

  saveNotes(updatedNotes);
};

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote,
  updateNote,
};
