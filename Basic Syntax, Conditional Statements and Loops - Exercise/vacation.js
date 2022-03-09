function vacation(groupOfPeople, groupType, dayOfTheWeek) {
    let price = 0;
    let discount = 0;

    switch (dayOfTheWeek) {
        case "Friday":
            if (groupOfPeople >= 30 && groupType === "Students") {
                price = groupOfPeople * 8.45;
                discount = price * 0.85;
                console.log(`Total price: ${discount.toFixed(2)}`);
            } else if (groupType === "Students") {
                price = groupOfPeople * 8.45;
                console.log(`Total price: ${price.toFixed(2)}`);
            }
            if (groupOfPeople >= 100 && groupType === "Business") {
                groupOfPeople -= 10;
                price = groupOfPeople * 10.90;
                console.log(`Total price: ${price.toFixed(2)}`);
            } else if (groupType === "Business") {
                price = groupOfPeople * 10.90;
                console.log(`Total price: ${price.toFixed(2)}`);
            }
            if (groupOfPeople >= 10 && groupOfPeople <= 20 && groupType === "Regular") {
                price = groupOfPeople * 15;
                discount = price * 0.95;
                console.log(`Total price: ${discount.toFixed(2)}`);
            } else if (groupType === "Regular") {
                price = groupOfPeople * 15;
                console.log(`Total price: ${price.toFixed(2)}`);
            }
            break;
        case "Saturday":
            if (groupOfPeople >= 30 && groupType === "Students") {
                price = groupOfPeople * 9.80;
                discount = price * 0.85;
                console.log(`Total price: ${discount.toFixed(2)}`);
            } else if (groupType === "Students") {
                price = groupOfPeople * 9.80;
                console.log(`Total price: ${price.toFixed(2)}`);
            }
            if (groupOfPeople >= 100 && groupType === "Business") {
                groupOfPeople -= 10;
                price = groupOfPeople * 15.60;
                console.log(`Total price: ${price.toFixed(2)}`);
            } else if (groupType === "Business") {
                price = groupOfPeople * 15.60;
                console.log(`Total price: ${price.toFixed(2)}`);
            }
            if (groupOfPeople >= 10 && groupOfPeople <= 20 && groupType === "Regular") {
                price = groupOfPeople * 20;
                discount = price * 0.95;
                console.log(`Total price: ${discount.toFixed(2)}`);
            } else if (groupType === "Regular") {
                price = groupOfPeople * 20;
                console.log(`Total price: ${price.toFixed(2)}`);
            }
            break;
        case "Sunday":
            if (groupOfPeople >= 30 && groupType === "Students") {
                price = groupOfPeople * 10.46;
                discount = price * 0.85;
                console.log(`Total price: ${discount.toFixed(2)}`);
            } else if (groupType === "Students") {
                price = groupOfPeople * 10.46;
                console.log(`Total price: ${price.toFixed(2)}`);
            }
            if (groupOfPeople >= 100 && groupType === "Business") {
                groupOfPeople -= 10;
                price = groupOfPeople * 16;
                console.log(`Total price: ${price.toFixed(2)}`);
            } else if (groupType === "Business") {
                price = groupOfPeople * 16;
                console.log(`Total price: ${price.toFixed(2)}`);
            }
            if (groupOfPeople >= 10 && groupOfPeople <= 20 && groupType === "Regular") {
                price = groupOfPeople * 22.50;
                discount = price * 0.95;
                console.log(`Total price: ${discount.toFixed(2)}`);
            } else if (groupType === "Regular") {
                price = groupOfPeople * 22.50;
                console.log(`Total price: ${price.toFixed(2)}`);
            }
            break;
    }
}

vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");
vacation(100, "Business", "Friday");
