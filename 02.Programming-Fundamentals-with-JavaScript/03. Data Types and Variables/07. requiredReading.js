function requiredReading(currentBookPagesNum, pagesPerHour, days) {

    let neededReadingHours = currentBookPagesNum / pagesPerHour;
    let readingPerDay = neededReadingHours / days;

    console.log(readingPerDay);
}

requiredReading(212, 20, 2);
console.log('-------------------');
requiredReading(432, 15, 4);