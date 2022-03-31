function repeatString(string, repeatCountNum) {
    function result(str, repeatNum) {
        let stringConcatenate = str;
        for (let i = 1; i < repeatNum; i++) {
            stringConcatenate += str;
        }
        return stringConcatenate;
    }
    console.log(result(string, repeatCountNum));
}

repeatString("abc", 3);
repeatString("String", 2);
