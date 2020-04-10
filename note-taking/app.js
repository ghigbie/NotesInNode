const utils = require('./utils');
const getNotes = require('./notes');
const validator = require('validator');
const chalk = require('chalk');

const sum = utils.add(4, 5);
const blue = chalk.bold.bgBlue;
const red = chalk.bold.bgRed;
const yellow = chalk.yellow;
const green = chalk.bold.bgGreen;

console.log(blue(`Message: ${utils.message}, Sum: ${sum}`));
console.log(yellow(`Validator: ${validator.isURL('ww.amazon.com')}`))
console.log(red(getNotes()));
console.log(green('Success!!!'))