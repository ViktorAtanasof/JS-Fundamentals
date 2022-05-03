function arenaTier(arr) {
    let gladiatorPool = {};
    let totalSkill = 0;

    while (arr[0] != 'Ave Cesar') {
        let currEle = arr.shift();
        if (currEle.includes('->')) {
            let [gladiator, technique, skill] = currEle.split(' -> ');
            let skillToNum = Number(skill);
            if (!gladiatorPool.hasOwnProperty(gladiator)) {
                gladiatorPool[gladiator] = [technique, skillToNum];
            } else {
                gladiatorPool[gladiator].push(technique);
                let sliced = gladiatorPool[gladiator];
                for (let check of sliced) {
                    let toNum = Number(check);
                    if (isNaN(toNum) == false) {
                        totalSkill += toNum;
                        if (toNum <= skillToNum) {
                            gladiatorPool[gladiator].push(skillToNum);
                            sliced.push(skillToNum);
                            break;
                        } else if (toNum > skillToNum) {
                            gladiatorPool[gladiator].push(0);
                            sliced.push(0);
                            break;
                        }
                    }
                }
            }
        } else {
            let gladiator = currEle.split(' vs ');
            if (gladiatorPool.hasOwnProperty(gladiator[0]) && gladiatorPool.hasOwnProperty(gladiator[1])) {
                for (let item of gladiatorPool[gladiator[1]]) {
                    if (gladiatorPool[gladiator[0]].includes(item)) {
                        console.log(item);
                    }
                }
            }
        }
    }
    console.log(totalSkill);

    console.log(gladiatorPool);
}

arenaTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar']); 
arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar']);
