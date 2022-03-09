function printAndSum(startnum, endnum) {
    let sum = 0;
    let newLine = "";

    for (let i = startnum; i <= endnum; i++) {
        sum += i;
        newLine += i + " ";
    }
    console.log(newLine);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);
