const fs = require('fs');

function parseIntoLines(arr) {
    // splits lines from text file by the enter spaces at the end of each line
    return arr.split('\n')
}

function removeTabSpacing(lines) {
    // create a 2D array by splitting each word in each line by the tab spaces       
    let words = lines.map((line) => line.split('\t'));
        
    // flatten the array in order to create a 1D array to loop trough each element
    words = [].concat.apply([], words);

    // filter out any word that is not an empty space created by the lines.map();
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

        // used callback for retaining value due to asynchronous calling
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

    displayMessage([word1, word2, word3]);
}

function displayMessage(messageArr) {
    console.log("Here is your Inpiriational Quote for the day!!");
    console.log("===============================================")
    console.log(messageArr[0]);
    console.log(messageArr[1]);
    console.log(messageArr[2]);
}

readFile(createInspirationalMessage);
