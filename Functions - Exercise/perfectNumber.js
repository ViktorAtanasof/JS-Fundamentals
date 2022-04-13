function perfectNumber(num) {
    let arr = [];
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            arr.push(i);
        }
    }
    let sum = 0;
    for (let a of arr) {
        sum += a;
    }
    if (sum === num) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}

perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);
