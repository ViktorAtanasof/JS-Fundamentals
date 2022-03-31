function orders(product, quanity) {
    function calculatePrice(product, quanity) {
        let totalPrice = 0;
        switch (product) {
            case "coffee":
                totalPrice = quanity * 1.50;
                break;
            case "water":
                totalPrice = quanity * 1.00;
                break;
            case "coke":
                totalPrice = quanity * 1.40;
                break;
            case "snacks":
                totalPrice = quanity * 2.00;
                break;
        }
        return totalPrice.toFixed(2);
    }

    console.log(calculatePrice(product, quanity));
}

orders("water", 5);
orders("coffee", 2);
