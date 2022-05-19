function matchPhoneNumber(numbers) {
    let numberValidator = /\+359( |-)2\1\d{3}\1\d{4}/g;

    let match = numberValidator.exec(numbers);
    let result = [];

    while (match != null) {
        result.push(match[0]);
        match = numberValidator.exec(numbers);
    }

    console.log(result.join(', '));
}

matchPhoneNumber('359-2-222-2222, +359/2/222/2222, +359-2 222 2222, +359 2-222-2222, +359 2 222 2222, +359-2-222-22222');
