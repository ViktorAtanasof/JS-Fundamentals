function secretChat(arr) {
    let concealed = arr.shift();

    while (arr[0] != 'Reveal') {
        let line = arr.shift();
        let tokens = line.split(':|:');
        let command = tokens[0];

        if (command === 'InsertSpace') {
            let index = Number(tokens[1]);
            let firstPart = concealed.slice(0, index);
            let secondPart = concealed.slice(index);
            concealed = firstPart + ' ' + secondPart;
            console.log(concealed);
        } else if (command === 'Reverse') {
            let substring = tokens[1];
            if (concealed.includes(substring)) {
                let splitted = concealed.split(substring).join('');
                substring = substring.split('').reverse().join('');
                concealed = splitted + substring;
                console.log(concealed);
            } else {
                console.log(`error`);
            }
        } else if (command === 'ChangeAll') {
            let substring = tokens[1];
            let replacement = tokens[2];
            concealed = concealed.split(substring);
            concealed = concealed.join(replacement);
            console.log(concealed);
        }
    }
    console.log(`You have a new text message: ${concealed}`);
}

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal']);

secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal']);
