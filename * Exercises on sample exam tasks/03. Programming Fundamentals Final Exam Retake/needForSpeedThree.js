function needForSpeedThree(input) {
    let carsCount = Number(input.shift());
    let cars = {};

    for (let i = 0; i < carsCount; i++) {
        let line = input.shift().split('|');
        let car = line[0];
        let mileage = Number(line[1]);
        let fuel = Number(line[2]);

        cars[car] = {
            mileage,
            fuel
        };
    }

    while (input[0] != 'Stop') {
        let line = input.shift().split(' : ');
        let command = line[0];
        let car = line[1];
        let p1 = Number(line[2]);
        let p2 = Number(line[3]);

        let desc = cars[car];
        if (command == 'Drive') {
            if (desc.fuel >= p2) {
                desc.mileage += p1;
                desc.fuel -= p2;
                console.log(`${car} driven for ${p1} kilometers. ${p2} liters of fuel consumed.`);
            } else {
                console.log('Not enough fuel to make that ride');
            }
            if (desc.mileage >= 100000) {
                delete cars[car];
                console.log(`Time to sell the ${car}!`);
            }
        } else if (command == 'Refuel') {
            let refill = Math.min(75 - desc.fuel, p1);
            desc.fuel += refill;
            console.log(`${car} refueled with ${refill} liters`);
        } else if (command == 'Revert') {
            desc.mileage -= p1;
            console.log(`${car} mileage decreased by ${p1} kilometers`);
            if (desc.mileage < 10000) {
                desc.mileage = 10000;
            }
        }
    }

    for (let key of Object.entries(cars)) {
        let car = key[0];
        let desc = key[1];

        console.log(`${car} -> Mileage: ${desc.mileage} kms, Fuel in the tank: ${desc.fuel} lt.`);
    }
}

needForSpeedThree([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop']);
