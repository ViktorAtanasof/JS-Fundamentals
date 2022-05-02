function aMinerTask(arrOfStrings) {
    let result = {};

    for (let i = 0; i < arrOfStrings.length; i += 2) {
        let mine = arrOfStrings[i]
        let quantity = arrOfStrings[i + 1]
        quantity = Number(quantity)

        if (result.hasOwnProperty(mine) === false) {
            result[mine] = 0
        }

        result[mine] += quantity
    }

    let resultEntries = Object.entries(result)

    for (let [resource, quantity] of resultEntries) {
        console.log(`${resource} -> ${quantity}`);

    }
}

aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17']);
console.log('---');
aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15']);
