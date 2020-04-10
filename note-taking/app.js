const utils = require('./utils');
const getNotes = require('./notes');

const sum = utils.add(4, 5);

console.log(`Message: ${utils.message}, Sum: ${sum}`);
console.log(getNotes());