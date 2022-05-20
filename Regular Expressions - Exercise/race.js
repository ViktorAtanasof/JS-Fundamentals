function race(arr) {
    let patternChars = /[A-Za-z]/g;
    let patternDigits = /\d/g;

    let racerInfo = {};

    let checkList = arr.shift().split(', ');

    while (arr[0] != 'end of race') {
        let line = arr.shift();

        let letters = line.match(patternChars);
        let nums = line.match(patternDigits);

        let name = letters.join('');
        let distances = nums.map(Number);

        let totalDistance = 0;
        for (let x of distances) {
            totalDistance += x;
        }

        if (checkList.includes(name)) {
            if (racerInfo.hasOwnProperty(name)) {
                racerInfo[name] += totalDistance;
            } else {
                racerInfo[name] = totalDistance;
            }
        }
    }

    let result = Object.entries(racerInfo).sort((a, b) => b[1] - a[1]);

    if (result[0]) {
        console.log(`1st place: ${result[0][0]}`);
    }
    if (result[1]) {
        console.log(`2nd place: ${result[1][0]}`);
    }
    if (result[2]) {
        console.log(`3rd place: ${result[2][0]}`);
    }
}

race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']);
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race']);
