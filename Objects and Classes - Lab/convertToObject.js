function convertToObject(stringInJSON) {
    let toObject = JSON.parse(stringInJSON);
    let obj = Object.keys(toObject);

    for (let key of obj) {
        console.log(`${key}: ${toObject[key]}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');
