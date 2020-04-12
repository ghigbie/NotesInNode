const fs = require('fs');
const utils = require('./utils');

const getNotes = () => {
    return "Your notes...";
}

const addNote = (title, body) => {
     const notes = loadNotes();
     const duplicateNotes = notes.filter((note) => note.title === title)
     if(duplicateNotes.length === 0){
        notes.push({
            title,
            body
        });
        saveNotes(notes);
        console.log(utils.green('New Note Addded!'));
    }else{
        console.log(utils.red(`The note title, "${title}" is already used.`));
        console.log(utils.red(`Please choose a different note`));
    }

} 

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);

    if(notes.length > notesToKeep.length){
        console.log(utils.green(`Note ${title} was removed`))
        saveNotes(notesToKeep);
    }else{
        console.log(utils.red('No note found'));
    }
}

//function not exported
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON);
};

//function not exported
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
    getNotes,
    addNote,
    removeNote
}