function train(arr) {
    let wagons = arr.shift().split(' ').map(Number);
    let maxPassangerCapacity = arr.shift().split(' ').map(Number);

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i].split(' ');

        if (current.includes("Add")) {
            wagons.push(Number(current[1]));
        } else {
            let currentNum = Number(current);

            for (let j = 0; j < wagons.length; j++) {
                if (currentNum + wagons[j] <= maxPassangerCapacity) {
                    wagons[j] += currentNum;
                    break;
                }
            }
        }
    }

    console.log(wagons.join(' '));
}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
);
train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']
);
