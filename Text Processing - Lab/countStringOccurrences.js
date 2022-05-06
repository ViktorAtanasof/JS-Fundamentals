function countStringOccurrences(text, searchWord) {
    let words = text.split(' ');
    let count = 0;

    for (let word of words) {
        if (word === searchWord) {
            count++;
        }
    }

    console.log(count);
}

countStringOccurrences('This is a word and it also is a sentence',
    'is');
countStringOccurrences('softuni is great place for learning new programming languages',
    'softuni');
