function firstAndLastKNumbers(arr) {
    let kElement = arr.shift();
    let firstKElements = arr.slice(0, kElement);
    let lastKElements = arr.slice(-kElement);
    console.log(firstKElements.join(' '));
    console.log(lastKElements.join(' '));
}

firstAndLastKNumbers([2,
    7, 8, 9]);
firstAndLastKNumbers([3,
    6, 7, 8, 9]);
