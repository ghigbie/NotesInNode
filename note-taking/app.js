const fs = require('fs');
const yargs = require('yargs');
const chalk = require('chalk');
const validator = require('validator');

const utils = require('./utils');
const notes = require('./notes');

//customize yargs version
yargs.version('1.1.0');

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        console.log('Adding note');
        console.log(`Title: ${argv.title}`);
        console.log(`Note body: ${argv.body}`);        
        notes.addNote(argv.title, argv.body);
    }
});

yargs.command({
    command: 'remove',
    describe: 'Rmove a note',
    builder: {
        title: {
            describe: "Note title",
            demandOption:  true,
            type: 'string'
        }
    },
    handler: () => console.log(`Removing a note: ${argv.title}`)
});

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: () => console.log('Reading a note')
})


yargs.command({
    command: "list",
    describe: "Lists all notes by title",
    handler: () => console.log("Listing all notes"),
});
