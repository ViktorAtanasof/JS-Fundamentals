function distincArray(arrOfNums) {
    let filteredArray = arrOfNums.filter((number, index) => {
        return arrOfNums.indexOf(number) === index
    })
    console.log(filteredArray.join(' '));
}

distincArray([1, 2, 3, 4]);
distincArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distincArray([20, 8, 12, 13, 4, 4, 8, 5]);
