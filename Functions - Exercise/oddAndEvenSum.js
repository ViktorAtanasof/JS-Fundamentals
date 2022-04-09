function oddAndEvenSum(number) {
    let numberAsString = number.toString();
    function evenSum(num) {
        let evenSum = 0;
        for (let i = 0; i < num.length; i++) {
            let currNum = Number(num[i]);
            if (currNum % 2 === 0) {
                evenSum += currNum;
            }
        }
        return evenSum;
    }
    function oddSum(num) {
        let oddSum = 0;
        for (let i = 0; i < num.length; i++) {
            let currNum = Number(num[i]);
            if (currNum % 2 !== 0) {
                oddSum += currNum;
            }
        }
        return oddSum;
    }
    console.log(`Odd sum = ${oddSum(numberAsString)}, Even sum = ${evenSum(numberAsString)}`)
}

oddAndEvenSum(1000435);
oddAndEvenSum(3495892137259234);
