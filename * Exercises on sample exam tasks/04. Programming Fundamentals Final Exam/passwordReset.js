function passwordReset(input) {
    let password = input.shift();

    while (input[0] != "Done") {
        let line = input.shift().split(' ');
        let command = line[0];
        let p1 = line[1];
        let p2 = line[2];

        if (command == "TakeOdd") {
            let concat = "";
            for (let i = 1; i < password.length; i += 2) {
                concat += password[i];
            }
            password = concat;
            console.log(password);
        } else if (command == "Cut") {
            p1 = Number(p1);
            p2 = Number(p2);
            let cut = password.slice(p1, p1 + p2);
            if (password.includes(cut)) {
                password = password.split(cut).join("");
            }
            console.log(password);
        } else if (command == "Substitute") {
            if (password.includes(p1)) {
                password = password.split(p1).join(p2);
                console.log(password);
            } else {
                console.log("Nothing to replace!");
            }
        }
    }

    console.log(`Your password is: ${password}`);
}

passwordReset((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"]));
passwordReset((["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"]));
