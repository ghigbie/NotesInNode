const utils = require('./utils');
const getNotes = require('./notes');
const validator = require('validator');
const chalk = require('chalk');



const command = process.argv[2];

if (command === 'add'){
    console.log(utils.green('Adding note'));
}else if(command === 'remove'){
    console.log(utils.red('Removing note'));
}


console.log(process.argv);