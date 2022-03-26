function condenseArrayToNumber(arr) {
    for (let i = arr.length; i > 1; i--) {
        let sum = [arr.length - 1];
        for (let a = 0; a < arr.length - 1; a++) {
            sum[a] = Number(arr[a]) + Number(arr[a + 1]);
        }
        arr = sum;
    }
    console.log(Number(arr));
}

condenseArrayToNumber(['2', '10', '3']);
condenseArrayToNumber(['5', '0', '4', '1', '2']);
condenseArrayToNumber(['1']);
