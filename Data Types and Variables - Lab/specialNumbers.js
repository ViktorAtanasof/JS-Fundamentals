function specialNumbers(n) {
    for (let i = 1; i <= n; i++) {
        if (i < 10) {
            if (i === 5 || i === 7) {
                console.log(`${i} -> True`)
            } else {
                console.log(`${i} -> False`)
            }
        } else {
            let sum = 0;
            let value = i;
            while (value) {
                sum += value % 10;
                value = Math.floor(value / 10);
            }

            if (sum === 5 || sum === 7 || sum === 11) {
                console.log(`${i} -> True`)
            } else {
                console.log(`${i} -> False`)
            }
        }
    }
}

specialNumbers(15);
specialNumbers(20);
