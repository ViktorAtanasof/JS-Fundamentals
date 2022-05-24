function theImitationGame(input) {
    let message = input.shift();

    while (input[0] != 'Decode') {
        let line = input.shift();
        let formatted = line.split('|');
        let command = formatted[0];
        let p1 = formatted[1];
        let p2 = formatted[2];

        if (command == 'Move') {
            let firstPart = message.slice(0, p1);
            let secondPart = message.slice(p1);
            message = secondPart + firstPart;
        } else if (command == 'Insert') {
            let firstPart = message.slice(0, p1);
            let secondPart = message.slice(p1);
            message = firstPart + p2 + secondPart;
        } else if (command == 'ChangeAll') {
            message = message.split(p1).join(p2);
        }
    }

    console.log(`The decrypted message is: ${message}`);
}

theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode']);
theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode']);
