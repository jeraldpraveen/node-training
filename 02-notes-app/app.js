const getNotes = require("./notes");
const chalk = require("chalk");

const msg = getNotes();
console.log(chalk.blue.inverse(msg));
