function mergeArrays(arr1, arr2) {
    let index = 0;
    let sum = 0;
    let arr3 = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let a = i; a < arr2.length; a++) {
            if (index % 2 === 0) {
                arr1[i] = Number(arr1[i]);
                arr2[a] = Number(arr2[i]);
                sum = arr1[i] + arr2[a];
                arr3.push(sum);
            } else {
                sum = arr1[i] + arr2[a];
                arr3.push(sum);
            }
            break;
        }
        index++;
    }
    console.log(arr3.join(' - '));
}

mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']);
mergeArrays(['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44']);
