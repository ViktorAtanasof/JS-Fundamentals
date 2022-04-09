function addAndSubstract(int1, int2, int3) {
    function sumOfFirstTwoInts(firstInt, secondInt) {
        return firstInt + secondInt;
    }
    let sum = sumOfFirstTwoInts(int1, int2);
    function substractResultOfTheSum(sum, thirdInt) {
        return sum - thirdInt;
    }
    let finalResult = substractResultOfTheSum(sum, int3);
    console.log(finalResult);

}

addAndSubstract(23, 6, 10);
