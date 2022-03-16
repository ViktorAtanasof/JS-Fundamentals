function requiredReading(pages, pagesPerHours, timeToRead) {
    let readingABook = pages / pagesPerHours;
    let dailyTimeToRead = readingABook / timeToRead;
    console.log(dailyTimeToRead);
}

requiredReading(212, 20, 2);
requiredReading(432, 15, 4);
