function commonElements(stringArr1, stringArr2) {
    for (let i = 0; i < stringArr1.length; i++) {
        for (let a = 0; a < stringArr2.length; a++) {
            if (stringArr1[i] === stringArr2[a]) {
                console.log(stringArr1[i]);
                break;
            }
        }
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']);
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l']);
