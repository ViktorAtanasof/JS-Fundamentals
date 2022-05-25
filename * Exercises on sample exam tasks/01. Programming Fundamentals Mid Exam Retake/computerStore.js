function computerStore(arr) {
    let total = 0;
    let index = 0;
    let tax = 0;
    let totalBeforeTax = 0;

    while (arr[index] != 'special' && arr[index] != 'regular') {
        if (Number(arr[index]) >= 0) {
            total += Number(arr[index]);
        } else {
            console.log('Invalid price!');
        }
        index++;
    }
    if (total > 0) {
        totalBeforeTax = total;
        tax = total * 0.2;
        total += tax;
        if (arr[index] == 'special') {
            total = total * 0.90;
        }
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${(totalBeforeTax).toFixed(2)}$`);
        console.log(`Taxes: ${tax.toFixed(2)}$`);
        console.log('-----------');
        console.log(`Total price: ${total.toFixed(2)}$`);
    } else {
        console.log('Invalid order!');
    }
}

computerStore(['1050', '200', '450', '2', '18.50', '16.86', 'special']);
computerStore(['1023', '15', '-20', '-5.50', '450', '20', '17.66', '19.30', 'regular']);
computerStore(['regular']);
