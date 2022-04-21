function empoyees(arr) {
    let employeeName;
    let employeeNumber = 0;

    while (arr.length > 0) {
        employeeName = arr.shift();
        employeeNumber = employeeName.length;
        console.log(`Name: ${employeeName} -- Personal Number: ${employeeNumber}`)
    }

}

empoyees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);
empoyees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]);
