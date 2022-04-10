function palindromeIntegers(arrOfInts) {
    let arrOfNums = arrOfInts;
    let inputL = arrOfNums.length;
    function isPalindrome(num) {
        let startNum = num;
        let reversedNum = Number(num.toString().split("").reverse().join(''));
        if (startNum === reversedNum) {
            return true;
        } else {
            return false;
        }
    }
    for (let i = 0; i < inputL; i++) {
        let currNum = arrOfNums[i];
        console.log(isPalindrome(currNum));
    }
}

palindromeIntegers([123, 323, 421, 121]);
