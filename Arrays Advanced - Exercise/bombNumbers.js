function bombNumbers(arr, specialBombNumber) {
    let [trigger, range] = specialBombNumber;
    let triggersCount = arr.filter((e) => e == trigger).length;

    for (let i = 0; i < triggersCount; i++) {
        if (arr.includes(trigger)) {

            if (arr.indexOf(trigger) - range < 0) {
                let plus = arr.slice(0, arr.indexOf(trigger))
                arr.splice(0, plus.length + 1 + range);

            } else {
                arr.splice(arr.indexOf(trigger) - range, 1 + range * 2);

            }
        }

    }
    console.log(arr.reduce((a, b) => a + b, 0));
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]);
bombNumbers([1, 4, 4, 2, 8, 9, 1],
    [9, 3]);
bombNumbers([1, 7, 7, 1, 2, 3],
    [7, 1]);
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]);
