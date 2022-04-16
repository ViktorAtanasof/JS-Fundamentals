function negativeOrPositiveNumbers(arr) {
    let newArr = [];
    let arrToNum = arr.map(Number)
    for (let i = 0; i < arrToNum.length; i++) {
        if (arrToNum[i] >= 0) {
            newArr.push(arrToNum[i]);
        } else {
            newArr.unshift(arrToNum[i]);
        }
    }

    console.log(newArr.join('\n'));
}

negativeOrPositiveNumbers(['7', '-2', '8', '9']);
negativeOrPositiveNumbers(['3', '-2', '0', '-1']);
