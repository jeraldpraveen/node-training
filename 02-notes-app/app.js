const getNotes = require("./notes");
const chalk = require("chalk");

const msg = getNotes();
console.log(chalk.blue.inverse(msg));

// [ GET INPUT FROM TERMINAL ]---> node app.js Jerald
console.log(process.argv);
