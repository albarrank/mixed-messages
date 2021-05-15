const fs = require('fs');

function parseIntoLines(arr) {
    return arr.split('\n')
}

function removeTabSpacing(lines) {       
    let words = lines.map((line) => line.split('\t'));
        
    words = [].concat.apply([], words);
    words = words.filter(word => word !== '');

    return words;
}

const readFile = ()=> {

    fs.readFile('./words.txt', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }

        const lines = parseIntoLines(data);
        const words = removeTabSpacing(lines);

        console.log(words);


    })
}

readFile();