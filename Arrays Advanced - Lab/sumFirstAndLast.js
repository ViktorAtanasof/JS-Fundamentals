function sumFirstAndLast(arr) {
    let arrToNum = arr.map(Number);
    let firstNum = arrToNum.shift();
    let secondNum = arrToNum.pop();
    console.log(firstNum + secondNum);
}

sumFirstAndLast(['20', '30', '40']);
sumFirstAndLast(['5', '10']);
