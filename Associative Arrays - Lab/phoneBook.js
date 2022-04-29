function phoneBook(arrOfStrings) {
    let phoneData = {};

    for (let elements of arrOfStrings) {
        let [name, number] = elements.split(' ');

        phoneData[name] = number;
    }

    for (let key in phoneData) {
        console.log(`${key} -> ${phoneData[key]}`);
    }
}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);
phoneBook(['George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344']);
