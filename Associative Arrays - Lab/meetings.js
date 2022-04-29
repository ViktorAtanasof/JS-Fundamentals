function meetings(arrOfStrings) {
    let appointments = {};

    for (let elements of arrOfStrings) {
        let [day, name] = elements.split(' ');

        if (appointments.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            console.log(`Scheduled for ${day}`);
            appointments[day] = name;
        }
    }

    for (let key in appointments) {
        console.log(`${key} -> ${appointments[key]}`);
    }
}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);
meetings(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George']);
