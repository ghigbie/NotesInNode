const chalk = require('chalk')

const message = "Yo! NodeJS is awesome!!!";
const add = (a, b) => a+b;

const green = chalk.green.bold.bgBlue;
const red = chalk.red.bold;
const blue = chalk.blue.bold;
const yellow = chalk.yellow.bold;

module.exports = {
    message,
    add, 
    green,
    red,
    blue,
    yellow
}