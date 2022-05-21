function theLift(arr) {
    let people = Number(arr.splice(0, 1));
    let splittedArr = arr.toString().split(' ');
    for (let i = 0; i < splittedArr.length; i++) {
        splittedArr[i] = Number(splittedArr[i]);
        for (let a = 1; a <= 4; a++) {
            if (splittedArr[i] < 4 && people > 0) {
                splittedArr[i] += 1;
                people--;
            }
        }
    }
    if (splittedArr[splittedArr.length - 1] === 4 && people === 0) {
        console.log(splittedArr.join(' '));
    } else if (people === 0) {
        console.log(`The lift has empty spots!
        ${splittedArr.join(' ')}`);
    } else {
        console.log(`There isn't enough space! ${people} people in a queue!
        ${splittedArr.join(' ')}`);
    }
}

theLift(["15", "0 0 0 0 0"]);
theLift(["20", "0 2 0"]);
theLift(["12", "0 0 0"]);
