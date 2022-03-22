function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let expenses = 0;
    for (let currentFight = 1; currentFight <= lostFights; currentFight++) {
        if (currentFight % 2 === 0) {
            expenses = expenses + helmetPrice;
        }
        if (currentFight % 3 === 0) {
            expenses = expenses + swordPrice;
        }
        if (currentFight % 6 === 0) {
            expenses = expenses + shieldPrice;
        }
        if (currentFight % 12 === 0) {
            expenses = expenses + armorPrice;

        }
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);
gladiatorExpenses(23, 12.50, 21.50, 40, 200);
