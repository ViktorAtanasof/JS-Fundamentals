function leapYear(isLeapYear) {
    if (isLeapYear % 400 === 0 || isLeapYear % 4 === 0 && isLeapYear % 100 !== 0) {
        console.log("yes");
    } else {
        console.log("no");
    }
}

leapYear(1984);
leapYear(2003);
leapYear(4);
leapYear(1900);
