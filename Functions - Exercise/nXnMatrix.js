function nXnMatrix(n) {
    let res = "";

    for (let i = 1; i <= n; i++) {
        res += n + " ";
    }

    for (let i = 1; i <= n; i++) {
        console.log(`${res}`);
    }
}

nXnMatrix(3);
nXnMatrix(7);
nXnMatrix(2);
