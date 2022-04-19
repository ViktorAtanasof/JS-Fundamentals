function searchForANumber(arr1, arr2) {
    let takenElements = arr1.splice(0, arr2[0]);
    takenElements = takenElements.splice(arr2[1]);
    let count = 0;

    for (let i = 0; i < takenElements.length; i++) {
        if (takenElements[i] === arr2[2]) {
            count++;
        }
    }
    console.log(`Number ${arr2[2]} occurs ${count} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]);
searchForANumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5]);
