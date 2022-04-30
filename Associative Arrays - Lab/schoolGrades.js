function schoolGrades(arrOfStrings) {
    let listGrades = {};

    for (let elements of arrOfStrings) {
        let tokens = elements.split(' ');
        let name = tokens.shift();

        if (listGrades.hasOwnProperty(name)) {
            listGrades[name] = listGrades[name].concat(tokens);
        } else {
            listGrades[name] = tokens;
        }
    }

    let arrListGrades = Object.entries(listGrades);
    let sortedArr = arrListGrades.sort((a, b) => a[0].localeCompare(b[0]));

    for (let ele of sortedArr) {
        let countGrades = ele[1].length;
        let test = ele[1].map(Number);
        let sum = 0;
        for (let num of test) {
            sum += num;
        }
        let averageGrade = sum / countGrades;
        console.log(`${ele[0]}: ${averageGrade.toFixed(2)}`);
    }
}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);
schoolGrades(['Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3']);
