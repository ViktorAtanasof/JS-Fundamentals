function oddOccurrences(string) {
    let result = {};

    let stringToLowerCase = string.toLowerCase();
    let words = stringToLowerCase.split(' ');

    for (let word of words) {
        if (result.hasOwnProperty(word)) {
            result[word]++;
        } else {
            result[word] = 1;
        }
    }

    let resultToArr = Object.entries(result);
    let finalResult = [];

    for (let [key, value] of resultToArr) {
        if (value % 2 !== 0) {
            finalResult.push(key);
        }
    }

    console.log(finalResult.join(' '));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');
