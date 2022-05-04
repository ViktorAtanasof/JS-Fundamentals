function censoredWords(text, word) {
    while (text.includes(word)) {
        text = text.replace(word, '*'.repeat(word.length));
    }
    console.log(text);
}

censoredWords('A small sentence with some words ', 'small');
censoredWords('A small sentence with some small words ', 'small');
censoredWords('Find the hidden word', 'hidden');
