function dungeonestDark(arr) {
    let health = 100;
    let differenceHealth = 0;
    let coins = 0;
    let room = 0;
    let winGame = true;
    let firstPart = '';
    let secondPart = '';
    let doSplitnat = [];
    let splitArray = arr.toString().split('|');
    for (i = 0; i < splitArray.length; i++) {
        doSplitnat = splitArray[i].split(' ');
        firstPart = doSplitnat[0];
        secondPart = doSplitnat[1];
        switch (firstPart) {
            case 'potion':
                room++;
                differenceHealth = health;
                health += Number(secondPart);
                if (health > 100) {
                    secondPart = 100 - differenceHealth;
                    health = 100;
                }
                console.log(`You healed for ${secondPart} hp.`);
                console.log(`Current health: ${health} hp.`);

                break;
            case 'chest':
                room++;
                coins += Number(secondPart);
                console.log(`You found ${secondPart} coins.`);
                break;
            default:
                room++;
                health -= Number(secondPart);
                if (health <= 0) {
                    winGame = false;
                    console.log(`You died! Killed by ${firstPart}.`);
                    console.log(`Best room: ${room}`);
                } else {
                    console.log(`You slayed ${firstPart}.`);
                }
                break;
        }
        if (winGame == false) {
            break;
        }
    }
    if (winGame) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);

    }
}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);
