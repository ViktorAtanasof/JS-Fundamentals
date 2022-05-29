function movingTarget(arr) {
    let darts = arr[0].split(' ').map(Number);
    let commands = arr.slice(1);

    for (let i = 0; i < commands.length; i++) {
        if (commands[i] == "End") {
            console.log(darts.join('|'));

        } else if (commands[i].includes("Shoot")) {

            let [index, power] = commands[i].split(' ').splice(1).map(Number);

            if (index < darts.length) {
                darts[index] -= power;

                if (darts[index] <= 0) {
                    darts.splice(index, 1);
                }
            }

        } else if (commands[i].includes('Add')) {

            let [index, value] = commands[i].split(' ').splice(1).map(Number);
            if (index < darts.length && index >= 0) {

                darts.splice(index, 0, value);
            } else {
                console.log('Invalid placement!');
            }


        } else if (commands[i].includes('Strike')) {

            let [index, radius] = commands[i].split(' ').splice(1).map(Number);

            if (index - radius >= 0 && index + radius < darts.length) {
                let range = 1 + radius * 2;
                let startIndex = index - radius;
                darts.splice(startIndex, range);

            } else {
                console.log('Strike missed!');
            }
        }
    }
}

movingTarget(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"]);
movingTarget(["1 2 3 4 5",
    "Strike 0 1",
    "End"]);
