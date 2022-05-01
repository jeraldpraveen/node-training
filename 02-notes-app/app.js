const getNotes = require("./notes");
const chalk = require("chalk");

const msg = getNotes();
console.log(chalk.blue.inverse(msg));

// [ GET INPUT FROM TERMINAL ]---> node app.js add
// [ GET INPUT FROM TERMINAL ]---> node app.js remove
const command = process.argv[2];

if (command === "add") {
  console.log("Adding Note");
}

// [ GET INPUT FROM TERMINAL ]---> node app.js add --title='New Title'
console.log(process.argv);
