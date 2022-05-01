const nameTwo = require("./utils");
const sum = require("./utils-one");
const validator = require("validator");
const chalk = require("chalk");

const nameOne = "Jerald";

const sumResult = sum(4, 2);
const isEmail = validator.isEmail("jerald@gmail.com");

console.log(nameOne, nameTwo, sumResult, isEmail);

console.log(chalk.green.bold("Hello Jerald!"));
console.log(chalk.green.inverse("Hello Jerald!"));
