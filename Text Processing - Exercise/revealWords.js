function revealWords(words, templates) {
    let seperatedWords = words.split(', ');

    for (let word of seperatedWords) {
        let wordToAsterisk = word.replace(word, '*'.repeat(word.length));

        if (templates.includes(wordToAsterisk)) {
            templates = templates.replace(wordToAsterisk, word);
        }
    }

    console.log(templates);
}

revealWords('great',
    'softuni is ***** place for learning new programming languages');
revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages');
