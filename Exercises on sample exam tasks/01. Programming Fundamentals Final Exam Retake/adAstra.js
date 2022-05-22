function adAstra(input) {
    let string = input[0];
    let pattern = /(\||#)([A-Za-z\s]+)\1(\d{2}\/\d{2}\/\d{2})\1(\d+)\1/g;

    let match = pattern.exec(string);
    let totalKcal = 0;
    let days = 0;

    while (match != null) {
        let kcal = Number(match[4]);
        totalKcal += kcal;
        match = pattern.exec(string);
    }

    for (let i = totalKcal; totalKcal >= 2000; i++) {
        days++;
        totalKcal -= 2000;
    }
    console.log(`You have food to last you for: ${days} days!`);
    match = pattern.exec(string);
    while (match != null) {
        let product = match[2];
        let date = match[3];
        let kcal = Number(match[4]);
        console.log(`Item: ${product}, Best before: ${date}, Nutrition: ${kcal}`);
        match = pattern.exec(string);
    }
}

adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);
adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@']);
