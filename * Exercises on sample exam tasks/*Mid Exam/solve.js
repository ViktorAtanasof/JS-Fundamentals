function solve(arr) {
    let daysOfAdventure = Number(arr[0]);
    let numsOfPlayers = Number(arr[1]);
    let groupEnergy = Number(arr[2]);
    let waterPerDayForOnePerson = Number(arr[3]);
    let foodPerDayForOnePerson = Number(arr[4]);
    let totalWater = daysOfAdventure * numsOfPlayers * waterPerDayForOnePerson;
    let totalFood = daysOfAdventure * numsOfPlayers * foodPerDayForOnePerson;
    let days = 1;

    for (let i = 5; i < daysOfAdventure + 5; i++, days++) {
        let lostEnergy = Number(arr[i]);
        arr[i] = Number(arr[i]);
        groupEnergy -= lostEnergy;
        if (groupEnergy <= 0) {
            console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
            break;
        }
        if (days % 3 === 0) {
            let currFood = totalFood / numsOfPlayers;
            totalFood -= currFood;
            groupEnergy += groupEnergy * 0.10;
        }
        if (days % 2 === 0) {
            groupEnergy += groupEnergy * 0.05;
            let water = totalWater * 0.30;
            totalWater -= water;
        }
    }
    if (groupEnergy > 0) {
        console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`);
    }
}

solve(["10",
    "7",
    "5035.5",
    "11.3",
    "7.2",
    "942.3",
    "500.57",
    "520.68",
    "540.87",
    "505.99",
    "630.3",
    "784.20",
    "321.21",
    "456.8",
    "330"]);
