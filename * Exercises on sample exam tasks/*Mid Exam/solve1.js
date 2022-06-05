function solve1(arr) {
    let route = arr.shift().split('||');
    let fuel = Number(arr[0]);
    let ammos = Number(arr[1]);
    let cmds;
    let isFail = false;

    while (route != 'Titan') {
        cmds = route.shift().split(` `);
        if (isFail == false) {
            switch (cmds[0]) {
                case 'Travel':
                    if (fuel >= cmds[1]) {
                        console.log(`The spaceship travelled ${cmds[1]} light-years.`)
                        fuel -= cmds[1];
                    }
                    else {
                        console.log(`Mission failed.`)
                        isFail = true;
                    }
                    break;
                case 'Enemy':
                    if (ammos >= cmds[1]) {
                        console.log(`An enemy with ${cmds[1]} armour is defeated.`)
                        ammos -= cmds[1];
                    }
                    else {
                        if (fuel >= cmds[1]) {
                            console.log(`An enemy with ${cmds[1]} armour is outmaneuvered.`)
                            fuel -= cmds[1];
                        }
                        else {
                            console.log(`Mission failed.`)
                            isFail = true;
                        }
                    }
                    break;
                case `Repair`:
                    fuel += Number(cmds[1]);
                    ammos -= Number(cmds[1]) * 2;
                    console.log(`Ammunitions added: ${cmds[1] * 2}.`)
                    console.log(`Fuel added: ${cmds[1]}.`)
                    break;

            }
        }
    }
    if (route == `Titan` && isFail == false) {
        console.log(`You have reached Titan, all passengers are safe.`)
    }
}

solve1(['Travel 10||Enemy 30||Repair 15||Titan',
    '50',
    '80']);
solve1(['Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan',
    '60',
    '100']);
