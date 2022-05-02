function mapOddOccurrencesWithMap(string) {
    let result = new Map();

    let stringToLowerCase = string.toLowerCase();
    let words = stringToLowerCase.split(' ');

    for (let word of words) {
        if (result.has(word)) {
            result.set(word,);
            //  result[word]++;
        } else {
            result.set(word, 1);
            // result[word] = 1;
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

mapOddOccurrencesWithMap('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
mapOddOccurrencesWithMap('Cake IS SWEET is Soft CAKE sweet Food');
