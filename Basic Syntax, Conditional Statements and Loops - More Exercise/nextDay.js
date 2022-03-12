function nextDay(currentYear, currentMonth, currentDay) {
    let day = new Date(currentYear, currentMonth - 1 /*11 - 1*/, currentDay);
    let nextDay = new Date(day);
    nextDay.setDate(day.getDate() + 1);
    console.log(`${nextDay.getFullYear()}-${nextDay.getMonth() + 1}-${nextDay.getDate()}`);
}

nextDay(2016, 9, 30);
nextDay(2020, 3, 24);
