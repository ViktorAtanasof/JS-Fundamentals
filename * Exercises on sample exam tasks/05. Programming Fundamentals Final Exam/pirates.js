function pirates(input) {
    let deeds = {};

    while (input[0] != 'Sail') {
        let line = input.shift().split('||');
        let city = line[0];
        let population = Number(line[1]);
        let gold = Number(line[2]);

        if (deeds.hasOwnProperty(city)) {
            deeds[city].population += population;
            deeds[city].gold += gold;
        } else {
            deeds[city] = {
                population,
                gold
            }
        }
    }

    while (input[0] != 'End') {
        let line = input.shift().split('=>');
        let command = line[0];
        let city = line[1];
        let p1 = Number(line[2]);
        let p2 = Number(line[3]);


        let values = deeds[city];
        if (command == 'Plunder') {
            values.population -= p1;
            values.gold -= p2;
            console.log(`${city} plundered! ${p2} gold stolen, ${p1} citizens killed.`);
            if (values.population <= 0 || values.gold <= 0) {
                delete deeds[city];
                console.log(`${city} has been wiped off the map!`);
            }
        } else if (command == 'Prosper') {
            if (p1 < 0) {
                console.log(`Gold added cannot be a negative number!`);
            } else {
                values.gold += p1;
                console.log(`${p1} gold added to the city treasury. ${city} now has ${values.gold} gold.`);
            }
        }
    }

    let objLength = Object.keys(deeds).length;
    if (objLength > 0) {
        console.log(`Ahoy, Captain! There are ${objLength} wealthy settlements to go to:`);
        for (let key of Object.entries(deeds)) {
            let city = key[0];
            let values = key[1];

            console.log(`${city} -> Population: ${values.population} citizens, Gold: ${values.gold} kg`);
        }
    } else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    }
}

pirates(["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"]);
console.log('<--->');
pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"]);
