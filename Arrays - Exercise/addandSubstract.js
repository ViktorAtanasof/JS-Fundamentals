function addandSubstract(arr) {
    let sumArr = 0;
    let modSumArr = 0;
    let modArr = [];
    let index = 0;

    for (let i = 0; i < arr.length; i++) {
        sumArr += arr[i];
        arr[i] = Number(arr[i]);
        if (arr[i] % 2 === 0) {
            arr[i] += index;
            modArr.push(arr[i]);
            modSumArr += arr[i];
        } else {
            arr[i] -= index;
            modArr.push(arr[i]);
            modSumArr += arr[i];
        }
        index++;
    }
    console.log(modArr);
    console.log(sumArr);
    console.log(modSumArr);

}

addandSubstract([5, 15, 23, 56, 35]);
addandSubstract([-5, 11, 3, 0, 2]);
...
