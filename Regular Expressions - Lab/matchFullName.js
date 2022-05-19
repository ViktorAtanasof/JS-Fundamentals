function matchFullName(text) {
    let nameValidator = /\b([A-Z]{1}[a-z]+) [A-Z]{1}[a-z]+\b/g;

    let match = nameValidator.exec(text);
    let result = [];

    while (match !== null) {
        result.push(match[0]);
        match = nameValidator.exec(text);
    }

    console.log(result.join(' '));

}

matchFullName('Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov, Petar Petrov');
