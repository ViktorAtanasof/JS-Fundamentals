function piccolo(arrOfStrings) {
    let parking = new Set();

    for (let line of arrOfStrings) {
        let [command, carNum] = line.split(', ');

        if (command == "IN") {
            parking.add(carNum)
        } else {
            parking.delete(carNum);
        }
    }

    let result = Array.from(parking);
    result.sort();

    if (parking.size === 0) {
        console.log('Parking Lot is Empty');
    } else {
        for (let nums of result) {
            console.log(nums);
        }
    }
}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']);

