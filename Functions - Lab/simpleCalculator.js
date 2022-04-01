function simpleCalculator(numOne, numTwo, operator) {
    let multiply = (multiply1, multiply2) => multiply1 * multiply2;
    let divide = (divide1, divide2) => divide1 / divide2;
    let add = (add1, add2) => add1 + add2;
    let subtract = (substract1, substract2) => substract1 - substract2;

    switch (operator) {
        case "multiply":
            console.log(multiply(numOne, numTwo));
            break;
        case "divide":
            console.log(divide(numOne, numTwo));
            break;
        case "add":
            console.log(add(numOne, numTwo));
            break;
        case "subtract":
            console.log(subtract(numOne, numTwo));
            break;
    }

}

simpleCalculator(5, 5, 'multiply');
simpleCalculator(40, 8, 'divide');
simpleCalculator(12, 19, 'add');
simpleCalculator(50, 13, 'subtract');
