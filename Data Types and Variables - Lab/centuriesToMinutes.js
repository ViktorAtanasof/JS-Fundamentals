function centuriesToMinutes(centuries) {
    let centuryToYears = centuries * 100;
    let yearsToDays = Math.trunc(centuryToYears * 365.2422);
    let daysToHours = yearsToDays * 24;
    let hoursToMinutes = daysToHours * 60;
    console.log(`${centuries} centuries = ${centuryToYears} years = ${yearsToDays} days = ${daysToHours} hours = ${hoursToMinutes} minutes`);
}

centuriesToMinutes(1);
centuriesToMinutes(5);
