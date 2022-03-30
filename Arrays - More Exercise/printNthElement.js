function printNthElement(arr) {
    let last = Number(arr.pop());
    let modifiedArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % last == 0) {
            modifiedArr.push(arr[i]);
        }
    }
    console.log(modifiedArr.join(' '));
}

printNthElement(['5', '20', '31', '4', '20', '2']);
printNthElement(['dsa', 'asd', 'test', 'test', '2']);
printNthElement(['1', '2', '3', '4', '5', '6']);
