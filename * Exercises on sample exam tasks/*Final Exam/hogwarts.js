function hogwarts(input) {
    let spell = input.shift();

    while (input[0] != 'Abracadabra') {
        let line = input.shift().split(' ');
        let command = line[0];
        let p1 = line[1];
        let p2 = line[2];

        if (command == 'Abjuration') {
            for (let char of spell) {
                let num = Number(char);
                if (isNaN(num)) {
                    spell = spell.toUpperCase(char);
                }
            }
            console.log(spell);
        } else if (command == 'Necromancy') {
            for (let char of spell) {
                let num = Number(char);
                if (isNaN(num)) {
                    spell = spell.toLowerCase(char);
                }
            }
            console.log(spell);
        } else if (command == 'Illusion') {
            p1 = Number(p1);
            if (p1 >= 0 && p1 < spell.length) {
                let search = spell[p1];
                spell = spell.replace(search, p2);
                console.log('Done!');
            } else {
                console.log('The spell was too weak.');
            }
        } else if (command == 'Divination') {
            if (spell.includes(p1)) {
                spell = spell.split(p1).join(p2);
                console.log(spell);
            }
        } else if (command == 'Alteration') {
            if (spell.includes(p1)) {
                let whereStart = spell.indexOf(p1);
                let first = spell.slice(0, whereStart);
                let second = spell.slice((whereStart + 1) + (p1.length - 1));
                spell = first + second;
                console.log(spell);
            }
        } else {
            console.log('The spell did not work!');
        }
    }
}

hogwarts(["A7ci0",
    "Illusion 1 c",
    "Illusion 4 o",
    "Abjuration",
    "Abracadabra"]);
hogwarts(["TR1GG3R",
    "Necromancy",
    "Illusion 8 m",
    "Illusion 9 n",
    "Abracadabra"]);
hogwarts(["SwordMasterTheNinja",
    "Target Target Target",
    "Abjuration",
    "Necromancy",
    "Alteration master",
    "Abracadabra"])
