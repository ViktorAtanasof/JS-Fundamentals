function companyUsers(arrOfStrings) {
    let listOfCompanies = {};

    for (let item of arrOfStrings) {
        let [company, number] = item.split(' -> ');

        if (!listOfCompanies.hasOwnProperty(company)) {
            listOfCompanies[company] = [];
        }

        if (!listOfCompanies[company].includes(number)) {
            listOfCompanies[company].push(number);
        }
    }

    let sorted = Object.keys(listOfCompanies);
    sorted.sort((a, b) => a.localeCompare(b));

    for (let item of sorted) {
        console.log(item);
        for (let subItem of listOfCompanies[item]) {
            console.log(`-- ${subItem}`);
        }
    }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345']);
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111']);
