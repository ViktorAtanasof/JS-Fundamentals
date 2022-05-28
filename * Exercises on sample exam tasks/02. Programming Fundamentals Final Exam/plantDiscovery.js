function plantDiscovery(input) {
    let n = Number(input.shift());
    let plants = {};

    for (let i = 0; i < n; i++) {
        let line = input.shift();
        let formatted = line.split("<->");
        let plant = formatted[0];
        let rarity = Number(formatted[1]);
        let rating = [];

        plants[plant] = {
            rarity,
            rating,
            avgRating: 0
        };
    }

    while (input[0] != "Exhibition") {
        let line = input.shift();
        let formatted = line.split(": ");
        let command = formatted[0];
        let finalFormat = formatted[1].split(" - ");
        let plant = finalFormat[0];
        let num = Number(finalFormat[1]);

        let exhibition = plants[plant];

        if (command == "Rate") {
            if (plants.hasOwnProperty(plant)) {
                exhibition.rating.push(num);
            } else {
                console.log(`error`);
            }
        } else if (command == "Update") {
            if (plants.hasOwnProperty(plant)) {
                exhibition.rarity = num;
            } else {
                console.log(`error`);
            }
        } else if (command == "Reset") {
            if (plants.hasOwnProperty(plant)) {
                exhibition.rating = 0;
            } else {
                console.log(`error`);
            }
        }
    }

    console.log(`Plants for the exhibition:`);
    for (let keys of Object.entries(plants)) {
        let name = keys[0];
        let exhibition = keys[1];
        if (exhibition.rating.length > 0) {
            let current = exhibition.rating.reduce((a, b) => a + b, 0) / exhibition.rating.length
            exhibition.avgRating = current
            console.log(`- ${name}; Rarity: ${exhibition.rarity}; Rating: ${exhibition.avgRating.toFixed(2)}`)

        } else {
            console.log(`- ${name}; Rarity: ${exhibition.rarity}; Rating: ${exhibition.avgRating.toFixed(2)}`)
        }
    }
}

plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"]);
/* plantDiscovery(["2",
"Candelabra<->10",
"Oahu<->10",
"Rate: Oahu - 7",
"Rate: Candelabra - 6",
"Exhibition"]); */
