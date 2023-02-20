function trekkingMania(input) {
    let numberOfGroups = Number(input[0]);

    let peopleInGroupNumber = 0;
    let totalPeople = 0;

    let target = "";

    let musalaPeople = 0;
    let monblanPeople = 0;
    let kilimandjaroPeople = 0;
    let k2People = 0;
    let everestPeople = 0;

    for(let i = 1; i <= numberOfGroups; i++) {
        peopleInGroupNumber = Number(input[i]);

        totalPeople += peopleInGroupNumber;

        if(peopleInGroupNumber <= 5) {
            target = "Musala";
            musalaPeople += peopleInGroupNumber;

        }else if(peopleInGroupNumber >= 6 && peopleInGroupNumber <= 12) {
            target = "Monblan";
            monblanPeople += peopleInGroupNumber;

        }else if(peopleInGroupNumber >= 13 && peopleInGroupNumber <= 25) {
            target = "Kilimandjaro";
            kilimandjaroPeople += peopleInGroupNumber;

        }else if(peopleInGroupNumber >= 26 && peopleInGroupNumber <= 40) {
            target = "K2";
            k2People += peopleInGroupNumber;

        }else if(peopleInGroupNumber >= 41) {
            target = "Everest";
            everestPeople += peopleInGroupNumber;
        }
    }

    let musalaPercent = (musalaPeople / totalPeople) * 100;
    console.log(`${musalaPercent.toFixed(2)}%`);

    let monblanPercent = (monblanPeople / totalPeople) * 100;
    console.log(`${monblanPercent.toFixed(2)}%`);

    let kilimandjaroPercent = (kilimandjaroPeople / totalPeople) * 100;
    console.log(`${kilimandjaroPercent.toFixed(2)}%`);

    let k2Percent = (k2People / totalPeople) * 100;
    console.log(`${k2Percent.toFixed(2)}%`);

    let everestPercent = (everestPeople / totalPeople) * 100;
    console.log(`${everestPercent.toFixed(2)}%`);
}

trekkingMania(["5",
"25",
"41",
"31",
"250",
"6"]);

// Катерачи от цяла България се събират на групи и набелязват следващите върхове за изкачване. Според размера на групата, катерачите ще изкачват различни върхове.
// •	Група до 5 човека– Мусала
// •	Група от 6 до 12 – Монблан
// •	Група от 13 до 25 – Килиманджаро
// •	Група от 26 до 40 – К2
// •	Група от 41 или повече – Еверест
// Да се напише програма, която изчислява процента на катерачите изкачващи всеки връх.
// Вход
// От конзолата се четат поредица от числа, всяко на отделен ред:
// •	На първия ред – броя на групите от катерачи – цяло число в интервала [1...1000]
// •	За всяка една група на отделен ред – броя на хората в групата – цяло число в интервала [1...1000]
// Изход
// Да се отпечатат на конзолата 5 реда, всеки от които съдържа процент между 0.00% и 100.00% с точност до втората цифра след десетичната запетая.
// •	Първи ред - процентът изкачващи Мусала
// •	Втори ред – процентът изкачващи Монблан
// •	Трети ред – процентът изкачващи Килиманджаро
// •	Четвърти ред – процентът изкачващи К2
// •	Пети ред – процентът изкачващи Еверест
