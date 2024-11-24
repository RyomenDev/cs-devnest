// run `node index.js` in the terminal

// console.log(`Hello Node.js v${process.versions.node}!`);

// const command = process.argv[2];

// if (command=='addTemp')
//   console.log("it is addTemp")
// else
//   console.log("not addTemp");

const yargs = require("yargs");
const {
  addNote,
  loadNotes,
  removeNote,
  listAllNotes,
  readNote,
  updateNote,
} = require("./app.js");

yargs.version("1.1.1");

// command to add
yargs.command({
  command: "add",
  describe: "just a test yarn command to add new note",
  builder: {
    title: {
      describe: "just a title",
      type: "string",
      demandOption: true,
    },
    body: {
      describe: "Note Body",
      type: "string",
      demandOption: true,
    },
  },
  // handler: function (argv) {
  //   // // console.log('checking / adding whatever addTemp');
  //   console.log(`Title: ${argv.title}`);
  //   console.log(`Body: ${argv.body}`);
  // },
  handler: function ({ title, body }) {
    addNote(title, body);
  },
});

// command to delete
yargs.command({
  command: "delete",
  describe: "just a test delete yarn command",
  builder: {
    title: {
      describe: "remove a title",
      type: "string",
      demandOption: true,
    },
  },
  handler: function ({ title }) {
    // console.log(`removed whatever addTemp ${title}`);
    removeNote(title);
  },
});

// console.log(yargs.argv);

// command to List
yargs.command({
  command: "listNotes",
  describe: "just a test Listing yarn command",
  handler: function () {
    // console.log('listing all nodes');
    // const notes = loadNotes();
    // console.log(notes);
    listAllNotes();
  },
});

// command to read single note
yargs.command({
  command: "readNote",
  describe: "just a test read single note yarn command",
  builder: {
    title: {
      describe: "read a note title",
      type: "string",
      demandOption: true,
    },
  },
  handler: ({ title }) => {
    // console.log(`read particular note ${title}`);
    const note = readNote(title);
    if (!note) {
      return console.log("Note not found");
    }
    console.log(note.title, " ", note.body);
  },
});

yargs.command({
  command: "updateNote",
  describe: "update a note command",
  builder: {
    title: {
      describe: "read a note title",
      type: "string",
      demandOption: true,
    },
    body: {
      describe: "Note Body",
      type: "string",
      demandOption: true,
    },
  },
  handler: ({ title, body }) => {
    updateNote(title, body);
  },
});

// console.log(yargs.argv);
yargs.parse();

// commands
/*
node index.js addTemp
node index.js addTemp --help
node index.js addTemp  --title="MY NOTE" --body="my first note"

node index.js deleteTemp
node index.js addTemp --help
node index.js addTemp  --title="MY NOTE"

*/
