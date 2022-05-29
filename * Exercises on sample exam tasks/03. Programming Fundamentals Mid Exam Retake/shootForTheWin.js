function shootForTheWin(arr) {
    let darts = arr[0].split(' ').map(Number);
    let commands = arr.slice(1);
    let shotCount = 0;

    for (let index of commands) {
        if (index === 'End') {
            return `Shot targets: ${shotCount} -> ${darts.join(' ')}`;

        } else {

            index = Number(index);

            if (darts.length > index) {
                darts = darts.map(
                    e => {
                        if (e > darts[index]) {
                            return e -= darts[index];

                        } else {

                            if (e != -1) {
                                return e += darts[index];
                            }

                            return e;
                        }
                    }
                );

                darts[index] = -1;
                shotCount++;
            }
        }
    }
}

shootForTheWin(["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"]);
shootForTheWin(["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"]);
