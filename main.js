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

function readFile(callback) {

    fs.readFile('./words.txt', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        }

        const lines = parseIntoLines(data);
        const words = removeTabSpacing(lines);

        callback(words);
    });

}

function generateRandomNum(array) {
    return Math.floor(Math.random() * array.length);
}
function createInspirationalMessage(wordsArray) {
    
    const index1 = generateRandomNum(wordsArray);
    const index2 = generateRandomNum(wordsArray);
    const index3 = generateRandomNum(wordsArray);

    const word1 = wordsArray[index1];
    const word2 = wordsArray[index2];
    const word3 = wordsArray[index3];

    console.log(word1, word2, word3);
}

readFile(createInspirationalMessage);
