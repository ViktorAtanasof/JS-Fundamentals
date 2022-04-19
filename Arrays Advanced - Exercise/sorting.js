function sorting(numbers) {
    let big = numbers.sort((a, b) => b - a).slice(0, numbers.length / 2)
    let small = numbers.slice(numbers.length / 2).reverse()

    let result = [];

    for (let i = 0; i < numbers.length / 2; i++) {
        let currBig = big.shift();
        let currSmall = small.shift();
        if (currBig != undefined) {

            result.push(currBig, currSmall)
        } else {
            result.push(currSmall)
        }

    }
    console.log(result.join(' '));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94, 11]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
