function sumDigits(num) {
    let numtoString = num.toString();
    let sum = 0;

    for (let i = 0; i < numtoString.length; i++) {
        sum += Number(numtoString[i]);
    }
    console.log(sum);
}

sumDigits(245678);
sumDigits(97561);
sumDigits(543);
