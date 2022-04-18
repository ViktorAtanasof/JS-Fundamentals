function listOfProducts(arr) {
    let orderByName = arr.sort();
    for (let i = 0; i < orderByName.length; i++) {
        console.log(`${i + 1}.${orderByName[i]}`);
    }
}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
listOfProducts(['Watermelon', 'Banana', 'Apples']);
