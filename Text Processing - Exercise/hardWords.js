function hardWords(arr) {
    let wordsStorage = arr[1].splice(0, 2);

    for (let search of arr[1]) {
        let underlined = search.replace(search, '_'.repeat(search.length));
        if (arr[0].includes(underlined)) {
            arr[0] = arr[0].replace(underlined, search);
        }
    }

    for (let search of wordsStorage) {
        let underlined = search.replace(search, '_'.repeat(search.length));
        if (arr[0].includes(underlined)) {
            arr[0] = arr[0].replace(underlined, search);
        }
    }

    console.log(arr[0]);
}

hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);
