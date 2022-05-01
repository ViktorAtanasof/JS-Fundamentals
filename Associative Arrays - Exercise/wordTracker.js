function wordTracker(arrOfStrings) {
    let sentence = arrOfStrings.shift().split(' ');
    let result = {};

    for (let word of sentence) {
        result[word] = 0;
    }

    for (let elements of arrOfStrings) {
        if (result.hasOwnProperty(elements)) {
            result[elements]++;
        }
    }

    let resultToArr = Object.entries(result);
    let sortedResult = resultToArr.sort((a, b) => b[1] - a[1]);

    for (let ele of sortedResult) {
        console.log(`${ele[0]} - ${ele[1]}`);
    }
}

wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and',
    'sentence', 'because', 'this', 'is', 'your', 'task']);
wordTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);
