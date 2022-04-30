function storage(arrOfStrings) {
    let storage = {};

    for (let elements of arrOfStrings) {
        let [item, quantity] = elements.split(' ');
        quantity = Number(quantity);

        if (storage.hasOwnProperty(item)) {
            storage[item] += quantity;
        } else {
            storage[item] = quantity;
        }
    }

    for (let key in storage) {
        console.log(`${key} -> ${storage[key]}`);
    }
}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);
storage(['apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40']);
