const fs = require('fs');

fs.readdir('.', (err, files) => {
    files.forEach(file => {
        console.log(file);
        if(file = 'notes.txt'){
            fs.appendFileSync('notes.txt', `You found this file!!!`)
        }else{
            fs.writeFileSync('notes.txt', 'This file was created by Node.JS for fun!')
            fs.appendFileSync('notes.txt', `It took a bit, but you found this file!!!`)
        }
    });
    if(err){
        console.log('There was an error', err)
    }
});