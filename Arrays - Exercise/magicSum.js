function magicSum(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        for (let a = i + 1; a < arr.length; a++) {
            if (Number(arr[i] + Number(arr[a])) == num) {
                console.log(`${arr[i]} ${arr[a]}`);
            }
        }
    }
}

magicSum([1, 7, 6, 2, 19, 23], 8);
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
magicSum([1, 2, 3, 4, 5, 6], 6);
