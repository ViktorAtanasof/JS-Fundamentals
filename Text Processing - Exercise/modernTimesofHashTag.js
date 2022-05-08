function modernTimesofHashTag(string) {
    let words = string.split(' ');
    let filteredWords = words.filter((x) => x.startsWith('#'));

    for (let word of filteredWords) {
        let isValid = true;
        let sliced = word.slice(1);
        for (let char of sliced) {
            if (char.charCodeAt() < 65 || char.charCodeAt() > 90 && char.charCodeAt() < 97 || char.charCodeAt() > 122) {
                isValid = false;
                break;
            }
        }
        if (isValid == true && sliced != '') {
            console.log(sliced);
        }

    }
}

modernTimesofHashTag('Nowadays everyone #732 uses # to tag a #special word in #socialMedia');
modernTimesofHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');
