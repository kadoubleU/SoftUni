function nextDay(year, month, day) {

    let newDay = new Date(year, month - 1, day + 1);

    let getYear = newDay.getFullYear();
    let getMonth = newDay.getMonth() + 1;
    let getDay = newDay.getDate();

    console.log(`${getYear}-${getMonth}-${getDay}`);
}

nextDay(2016, 9, 30);
nextDay(2020, 3, 24 );