const yargs = require("yargs");
const {
  addNote,
  removeNote,
  listNotes,
  readNote,
  updateNote,
} = require("./notes.js");

// console.log(process.argv);
// const command = process.argv[2];

// if (command === "add") console.log("Adding a note!");
// else console.log("Invalid command");

// Assign a version to our command line tool
yargs.version("1.1.0");

// Command to add a note
yargs.command({
  command: "add",
  describe: "Add a new note !!",
  builder: {
    title: {
      describe: "Note Title",
      type: "string",
      demandOption: true,
    },
    body: {
      describe: "Note Body",
      type: "string",
      demandOption: true,
    },
  },
  handler: function ({ title, body }) {
    addNote(title, body);
  },
});

// Command to remove a note
yargs.command({
  command: "remove",
  describe: "Remove a Note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function ({ title }) {
    removeNote(title);
  },
});

// Command to list all the notes
yargs.command({
  command: "list",
  description: "List all notes",
  handler: () => {
    listNotes();
  },
});

// Command to read a single note
yargs.command({
  command: "read",
  description: "Read a note",
  builder: {
    title: {
      descripton: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler: ({ title }) => {
    readNote(title);
  },
});

// Command to update a single note
yargs.command({
  command: "update",
  description: "Update a Note",
  builder: {
    title: {
      description: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      description: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler: ({ title, body }) => {
    updateNote(title, body);
  },
});

// To Tell yargs to handle the options/commands passed
yargs.parse();
