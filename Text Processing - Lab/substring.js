function substring(str, num1, num2) {
    let substring = str.substring(num1, num2 + num1);
    console.log(substring);
}

substring('ASentence', 1, 8);
substring('SkipWord', 4, 7);
