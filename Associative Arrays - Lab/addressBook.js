function addressBook(arrOfStrings) {
    let addressData = {};

    for (let elements of arrOfStrings) {
        let [name, address] = elements.split(':');

        addressData[name] = address;
    }

    let entry = Object.entries(addressData);
    let sortedEntry = entry.sort((a, b) => a[0].localeCompare(b[0]));

    for (let entry of sortedEntry) {
        console.log(`${entry[0]} -> ${entry[1]}`);
    }
}

addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);
addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']);
