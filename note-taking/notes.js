const fs = require('fs');
const utils = require('./utils');

const getNotes = () => {
    return "Your notes...";
}

const addNote = (title, body) => {
     const notes = loadNotes();
     const duplicateNotes = notes.filter(note => note.title === title)
     if(duplicateNotes.length === 0){
        notes.push({
            title,
            body
        });
    }else{
        console.log(utils.red(`The note title, "${title}" is already used.`));
        console.log(utils.red(`Please choose a different note <title className=""></title>`));
    }
     console.log('Adding note!');
     console.log(notes);
     saveNotes(notes);
} 

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () =>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }catch(e){
        return [];
    }
}
const removeNote = (title) => {
    let notes = loadNotes();
    notes = notes.filter( note => {
        note.title !== title
    })
    saveNotes(notes);
}

module.exports = {
    getNotes,
    addNote,
    removeNote
}