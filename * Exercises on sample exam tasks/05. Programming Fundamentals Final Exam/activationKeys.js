function activationKeys(input) {
    let key = input.shift();

    while (input[0] != "Generate") {
        let line = input.shift().split(">>>");
        let command = line[0];
        let p1 = line[1];
        let p2 = line[2];
        let p3 = line[3];

        if (command == "Contains") {
            if (key.includes(p1)) {
                console.log(`${key} contains ${p1}`);
            } else {
                console.log(`Substring not found!`);
            }
        } else if (command == "Flip") {
            p2 = Number(p2);
            p3 = Number(p3);
            if (p1 == "Upper") {
                let part = key.slice(p2, p3).toUpperCase();
                let first = key.slice(0, p2);
                let second = key.slice(p3);
                key = first + part + second;
                console.log(key);
            } else if (p1 == "Lower") {
                let part = key.slice(p2, p3).toLowerCase();
                let first = key.slice(0, p2);
                let second = key.slice(p3);
                key = first + part + second;
                console.log(key);
            }
        } else if (command == "Slice") {
            p1 = Number(p1);
            p2 = Number(p2);
            let first = key.slice(0, p1);
            let second = key.slice(p2);
            key = first + second;
            console.log(key);
        }
    }

    console.log(`Your activation key is: ${key}`);
}

activationKeys(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"]);
console.log("<--->");
activationKeys(["134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"]);
