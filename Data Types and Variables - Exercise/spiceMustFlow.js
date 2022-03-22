function spiceMustFlow(start) {
    let totalSpice = 0;
    let days = 0;

    for (let i = start; i >= 100; i++) {
        days++;
        totalSpice += start;
        totalSpice -= 26;
        start -= 10;
        if (start < 100) {
            totalSpice -= 26;
            break;
        }
    }
    console.log(days);
    console.log(totalSpice);
}

spiceMustFlow(111);
spiceMustFlow(450);
