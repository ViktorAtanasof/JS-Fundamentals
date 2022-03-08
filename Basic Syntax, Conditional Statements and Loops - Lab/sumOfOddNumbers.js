function sumOfOddNumbers(n) {
    let sum = 0;
    let add = 0;

    for (let i = 1; i <= 100; i += 2) {

        console.log(i);
        add++;
        sum += i;

        if (add == n) {
            console.log(`Sum: ${sum}`);
            break;
        }
    }
}

sumOfOddNumbers(5);
