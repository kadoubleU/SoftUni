function oscarWeekInCinema(input) {
    let movieName = input[0];
    let salonType = input[1];
    let buyedTicketsNumber = Number(input[2]);

    let sum = 0;

    if(movieName === "A Star Is Born") {
        if(salonType === "normal") {
            sum = buyedTicketsNumber * 7.50;
        }else if(salonType === "luxury") {
            sum = buyedTicketsNumber * 10.50;
        }else if(salonType === "ultra luxury") {
            sum = buyedTicketsNumber * 13.50;
        }

    }else if(movieName === "Bohemian Rhapsody") {
        if(salonType === "normal") {
            sum = buyedTicketsNumber * 7.35;
        }else if(salonType === "luxury") {
            sum = buyedTicketsNumber * 9.45;
        }else if(salonType === "ultra luxury") {
            sum = buyedTicketsNumber * 12.75;
        }
    }else if(movieName === "Green Book") {
        if(salonType === "normal") {
            sum = buyedTicketsNumber * 8.15;
        }else if(salonType === "luxury") {
            sum = buyedTicketsNumber * 10.25;
        }else if(salonType === "ultra luxury") {
            sum = buyedTicketsNumber * 13.25;
        }
    }else if(movieName === "The Favourite") {
        if(salonType === "normal") {
            sum = buyedTicketsNumber * 8.75;
        }else if(salonType === "luxury") {
            sum = buyedTicketsNumber * 11.55;
        }else if(salonType === "ultra luxury") {
            sum = buyedTicketsNumber * 13.95;
        }
    }

    console.log(`${movieName} -> ${sum.toFixed(2)} lv.`);
}

oscarWeekInCinema(["A Star Is Born", "luxury", "42"]);

// По време на седмицата на Оскарите, градското кино пуска прожекции на някои от филмите, които са номинирани в категорията за "Най-добър филм". В таблицата са показани кои са филмите и каква е цената за прожекция спрямо залата, в която се прожектира филмът. 
// Филм	normal	luxury	ultra luxury
// A Star Is Born	7.50 лв.	10.50 лв.	13.50 лв.
// Bohemian Rhapsody	7.35 лв.	9.45 лв.	12.75 лв.
// Green Book	8.15 лв.	10.25 лв.	13.25 лв.
// The Favourite	8.75 лв.	11.55 лв.	13.95 лв.
// Напишете програма, която изчислява какъв е приходът от даден филм, като знаете в какъв тип зала се прожектира и колко човека са си купили билет за прожекцията.
// Вход
// Входът се чете от конзолата и се състои от три реда:
// •	Първи ред – име на филм – текст ("A Star Is Born", "Bohemian Rhapsody","Green Book" или "The Favourite")
// •	Втори ред– вид на залата – текст ("normal", "luxury" или "ultra luxury")
// •	Трети ред – брой на закупените билети – цяло число в интервала [1…100]
// Изход
// На конзолата трябва да се отпечата един ред:
// "{име на филма} -> {приходи от прожекцията на филма} lv."
// Приходите да бъдат закръглени до втория знак след десетичната запетая.
