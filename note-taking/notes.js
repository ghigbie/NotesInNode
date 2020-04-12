const fs = require('fs');

const getNotes = () => {
    return "Your notes...";
}

const addNote = (title, body) => {
     const notes = loadNotes();
     notes.push({
         title: title,
         body: body
     });
     console.log('Adding note!');
     console.log(notes);

} 

const saveNotes = (notes) => {
    const dataJSON = JSON.stringifyn(otes)
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

module.exports = {
    getNotes,
    addNote
}