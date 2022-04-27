function storeProvision(stockProducts, orderedProducts) {
    let obj = {};

    for (let i = 0; i < stockProducts.length; i += 2) {
        let currProduct = stockProducts[i];
        obj[currProduct] = Number(stockProducts[i + 1]);
    }

    for (let i = 0; i < orderedProducts.length; i += 2) {
        let currProduct = orderedProducts[i];
        if (!obj.hasOwnProperty(currProduct)) {
            obj[currProduct] = 0;
        }
        obj[currProduct] += Number(orderedProducts[i + 1]);
    }
    let keys = Object.keys(obj);
    for (let key of keys) {
        console.log(`${key} -> ${obj[key]}`);
    }
}

storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);
storeProvision(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
    ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']);
