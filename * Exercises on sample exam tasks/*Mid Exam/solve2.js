function solve2(arr) {
    let phonesList = arr.shift().split(", ")
    let command;
    let i = 0;
    let indexOfCurrPhone = 0;
    let bonusPhone;
    let lastCmd;

    while (arr[i] !== "End") {
        command = arr[i].split(" - ");
        switch (command[0]) {
            case "Add":
                if (phonesList.includes(command[1]) != true) {
                    phonesList.push(command[1]);
                }
                break;
            case "Remove":
                if (phonesList.includes(command[1]) == true) {
                    indexOfCurrPhone = phonesList.indexOf(command[1]);
                    phonesList.splice(indexOfCurrPhone, 1);
                }
                break;
            case "Bonus phone":
                bonusPhone = command[1].split(":");
                if (phonesList.includes(bonusPhone[0]) == true) {
                    indexOfCurrPhone = phonesList.indexOf(bonusPhone[0]);
                    indexOfCurrPhone += 1;
                    phonesList.splice(indexOfCurrPhone, 0, bonusPhone[1]);
                }
                break;
            case "Last":
                if (phonesList.includes(command[1]) == true) {
                    indexOfCurrPhone = phonesList.indexOf(command[1]);
                    lastCmd = phonesList.splice(indexOfCurrPhone, 1);
                    phonesList.push(lastCmd);
                }
                break;

        }
        i++;
    }

    console.log(phonesList.join(", "));
}

solve2(["SamsungA50, MotorolaG5, IphoneSE",
    "Add - Iphone10",
    "Remove - IphoneSE",
    "End"]);
solve2(["HuaweiP20, XiaomiNote",
    "Remove - Samsung",
    "Bonus phone - XiaomiNote:Iphone5",
    "End"]);
solve2(["SamsungA50, MotorolaG5, HuaweiP10",
    "Last - SamsungA50",
    "Add - MotorolaG5",
    "End"]);
