function thePianist(input) {
    let n = Number(input.shift());
    let pianoPieces = {};

    for (let i = 0; i < n; i++) {
        let line = input.shift();
        let formatted = line.split('|');
        let piece = formatted[0];
        let composer = formatted[1];
        let key = formatted[2];

        pianoPieces[piece] = { composer, key };
    }

    while (input[0] != 'Stop') {
        let line = input.shift();
        let formatted = line.split('|');
        let command = formatted[0];
        let piece = formatted[1];
        let p1 = formatted[2];
        let p2 = formatted[3];

        let composerAndKey = pianoPieces[piece];

        if (command == 'Add') {
            if (pianoPieces.hasOwnProperty(piece)) {
                console.log(`${piece} is already in the collection!`);
            } else {
                pianoPieces[piece] = { composer: p1, key: p2 };
                console.log(`${piece} by ${p1} in ${p2} added to the collection!`);
            }
        } else if (command == 'Remove') {
            if (pianoPieces.hasOwnProperty(piece)) {
                delete pianoPieces[piece];
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        } else if (command == 'ChangeKey') {
            if (pianoPieces.hasOwnProperty(piece)) {
                composerAndKey.key = p1;
                console.log(`Changed the key of ${piece} to ${p1}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }
    }

    for (let keys of Object.entries(pianoPieces)) {
        let piece = keys[0];
        let composerAndKey = keys[1];
        console.log(`${piece} -> Composer: ${composerAndKey.composer}, Key: ${composerAndKey.key}`);
    }
}

thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop']);
thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop']);
