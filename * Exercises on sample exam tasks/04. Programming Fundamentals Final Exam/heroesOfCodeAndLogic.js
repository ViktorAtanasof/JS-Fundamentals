function heroesOfCodeAndLogic(input) {
    let heroesCount = input.shift();
    let heroes = {};

    for (let i = 0; i < heroesCount; i++) {
        let line = input.shift();
        let formatted = line.split(' ');
        let name = formatted[0];
        let hp = Number(formatted[1]);
        let mp = Number(formatted[2]);

        heroes[name] = { hp, mp };
    }

    while (input[0] != 'End') {
        let line = input.shift();
        let formatted = line.split(' - ');
        let command = formatted[0];
        let name = formatted[1];
        let num = Number(formatted[2]);
        let string = formatted[3];

        let hero = heroes[name];

        if (command == 'CastSpell') {
            if (hero.mp >= num) {
                hero.mp -= num;
                console.log(`${name} has successfully cast ${string} and now has ${hero.mp} MP!`);
            } else {
                console.log(`${name} does not have enough MP to cast ${string}!`);
            }
        } else if (command == 'TakeDamage') {
            hero.hp -= num;
            if (hero.hp > 0) {
                console.log(`${name} was hit for ${num} HP by ${string} and now has ${hero.hp} HP left!`);
            } else {
                delete heroes[name];
                console.log(`${name} has been killed by ${string}!`);
            }
        } else if (command == 'Recharge') {
            let amount = Math.min(200 - hero.mp, num);
            hero.mp += amount;
            console.log(`${name} recharged for ${amount} MP!`);
        } else if (command == 'Heal') {
            let amount = Math.min(100 - hero.hp, num);
            hero.hp += amount;
            console.log(`${name} healed for ${amount} HP!`);
        }
    }

    for (let keys of Object.entries(heroes)) {
        let name = keys[0];
        let hero = keys[1];
        console.log(name);
        console.log(`  HP: ${hero.hp}`);
        console.log(`  MP: ${hero.mp}`);
    }
}

heroesOfCodeAndLogic(['2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End']);
heroesOfCodeAndLogic(['4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End',]);
