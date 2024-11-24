const fs = require("fs");

const loadNotes = (title, body) => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    const data = JSON.parse(dataJson);
    // console.log(data);
    return data;
  } catch (e) {
    console.log("No Data");
    return [];
  }
};

const saveNotes = (notes) => {
  try {
    const notesJson = JSON.stringify(notes);
    fs.writeFileSync("notes.json", notesJson);
  } catch (e) {
    console.log("error while saving");
    // return [];
  }
};

const addNote = (title, body) => {
  // console.log("Adding note");
  try {
    // console.log("Adding note try block");

    const notes = loadNotes();

    // to check duplicate
    const checkDuplicate = notes.find((note) => {
      return note.title === title;
    });
    if (checkDuplicate) {
      return console.log("Already Exists");
    }

    const note = { title, body };
    notes.push(note);
    saveNotes(notes);
  } catch (e) {
    console.log("error while adding new note", e);
    // return [];
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  // console.log('note deleteing ---');
  const filterNotes = notes.filter((note) => {
    return note.title !== title;
  });
  if (notes.length > filterNotes.length) {
    console.log("note deleted");
  } else {
    return console.log("note not found");
  }
  saveNotes(filterNotes);
};

const listAllNotes = () => {
  const notes = loadNotes();
  // console.log('listing');
  notes.forEach((note) => {
    console.log(note.title, "  ", note.body);
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  // console.log('listing');
  const note = notes.find((note) => {
    return note.title === title;
  });
  return note;
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
  // console.log(updatedNotes);
};

module.exports = {
  addNote,
  loadNotes,
  removeNote,
  listAllNotes,
  readNote,
  updateNote,
};

// addNote('add Note 2', 'body of addNote 2');

// loadNotes();
// saveNotes([
//   {
//     title: 'sample save 1',
//     body: 'Body sample save 1',
//   },
// ]);

// [
//   {
//     "title": "Sample Title 1",
//     "body": "Bodyof sample 1"
//   },
//   {
//     "title": "Sample Title 2",
//     "body": "Bodyof sample 2"
//   }
// ]
