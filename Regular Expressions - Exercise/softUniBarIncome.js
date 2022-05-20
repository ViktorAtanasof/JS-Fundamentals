function softUniBarIncome(arr) {
    let pattern = /%(?<customer>[A-Z][a-z]*)%.*?<(?<product>\w+)>.*?\|(?<count>\d+)\|.*?(?<price>\d+(?:\.?\d+)?)\$/g;
    let income = 0;

    while (arr[0] != 'end of shift') {
        let line = arr.shift();

        let match = pattern.exec(line);

        if (match != null) {
            let [_, name, product, count, price] = match;
            /*   let name = match.groups['customer'];
              let product = match.groups['product'];
              let count = match.groups['count'];
              let price = match.groups['price']; */

            let totalPrice = Number(count) * Number(price);
            income += totalPrice;

            console.log(`${name}: ${product} - ${totalPrice.toFixed(2)}`);
        }

        match = pattern.exec(line);
    }

    console.log(`Total income: ${income.toFixed(2)}`);
}

softUniBarIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']);
console.log('<---->');
softUniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift']);
