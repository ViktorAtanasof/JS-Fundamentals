function degustationParty(input) {
    let obj = {};
    let count = 0;

    while (input[0] != 'Stop') {
        let line = input.shift().split('-');
        let command = line[0];
        let guest = line[1];
        let meal = line[2];

        let food = [];

        if (command == 'Like') {
            if (!obj.hasOwnProperty(guest)) {
                obj[guest] = { food };
                obj[guest].food.push(meal);
            } else {
                if (!obj[guest].food.includes(meal)) {
                    obj[guest].food.push(meal);
                }
            }
        } else if (command == 'Dislike') {
            if (obj.hasOwnProperty(guest)) {
                if (obj[guest].food.includes(meal)) {
                    let index = obj[guest].food.indexOf(meal);
                    obj[guest].food.splice(index, 1);
                    count++;
                    console.log(`${guest} doesn't like the ${meal}.`);
                } else {
                    console.log(`${guest} doesn't have the ${meal} in his/her collection.`);
                }
            } else {
                console.log(`${guest} is not at the party.`);
            }
        }
    }

    for (let key of Object.entries(obj)) {
        let guest = key[0];
        let objmeal = key[1];
        console.log(`${guest}: ${objmeal.food.join(', ')}`);
    }
    console.log(`Unliked meals: ${count}`);
}

degustationParty(["Like-Krisi-shrimps",
    "Like-Krisi-soup",
    "Like-Penelope-dessert",
    "Like-Misho-salad",
    "Stop"]);
degustationParty(["Like-Krisi-shrimps",
    "Dislike-Vili-carp",
    "Dislike-Krisi-salad",
    "Stop"]);
degustationParty(["Like-Katy-fish",
    "Dislike-Katy-fish",
    "Stop"])
