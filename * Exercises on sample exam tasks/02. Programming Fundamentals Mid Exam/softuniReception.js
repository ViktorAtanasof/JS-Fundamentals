function softuniReception(staff) {
    let staffOne = Number(staff[0]);
    let staffTwo = Number(staff[1]);
    let staffThree = Number(staff[2]);
    let answeredPerHour = staffOne + staffTwo + staffThree;
    let students = Number(staff[3]);
    let hour = 0;

    while (students > 0) {
        hour++;
        if (hour % 4 !== 0) {
            students -= answeredPerHour;
        }
    }
    console.log(`Time needed: ${hour}h.`);

}

softuniReception(['5', '6', '4', '20']);
softuniReception(['1', '2', '3', '45']);
softuniReception(['3', '2', '5', '40']);
