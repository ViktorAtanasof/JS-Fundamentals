function factorialDivision(int1, int2) {
    console.log((factorial(int1) / factorial(int2)).toFixed(2));

    function factorial(num) {
        let factorial = 1;
        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }
        return factorial;
    }
}

factorialDivision(5, 2);
factorialDivision(6, 2);
