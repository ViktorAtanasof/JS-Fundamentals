function triangleOfNums(n) {
    for (let i = 1; i <= n; i++) {
        let line = '';
        for (let a = 1; a <= i; a++) {
            line += i + " ";
        }
        console.log(line);
    }
}

triangleOfNums(5);
