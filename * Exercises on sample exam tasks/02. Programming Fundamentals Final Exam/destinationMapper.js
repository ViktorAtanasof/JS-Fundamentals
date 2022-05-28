function destinationMapper(string) {
    let destinations = string;
    let pattern = /(=|\/)([A-Z]{1}[A-Za-z]{2,})\1/g;

    let match = pattern.exec(destinations);
    let places = [];
    let points = 0;

    while (match != null) {
        points += match[2].length;
        places.push(match[2])
        match = pattern.exec(destinations);
    }
    console.log(`Destinations: ${places.join(', ')}`);
    console.log(`Travel Points: ${points}`);
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=/Russia/");
destinationMapper("ThisIs some InvalidInput");
