function stringSubstring(word, text) {
    let wordToLowerCase = word.toLocaleLowerCase();
    let textToLowerCase = text.toLocaleLowerCase().split(' ');

    for (let word of textToLowerCase) {
        if (textToLowerCase.includes(wordToLowerCase)) {
            console.log(wordToLowerCase);
            break;
        } else {
            console.log(`${wordToLowerCase} not found!`);
            break;
        }
    }
}

stringSubstring('javascript',
    'JavaScript is the best programming language');
stringSubstring('python',
    'JavaScript is the best programming language');
