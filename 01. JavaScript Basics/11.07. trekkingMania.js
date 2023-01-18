function trekkingMania(input) {
    let climbersGroupsNumber = Number(input[0]);
    
    let peopleNumberInGroup;
    let target;
    let totalPeople = 0;

    let musalaPeople = 0;
    let monblanPeople = 0;
    let kilimandjaroPeople = 0;
    let k2People = 0;
    let everestPeople = 0;

    for(let i = 1; i < input.length; i++) {
        peopleNumberInGroup = Number(input[i]);
        totalPeople += peopleNumberInGroup;



        if(peopleNumberInGroup <= 5) {
            target = "Musala";
            musalaPeople += peopleNumberInGroup;
         
        } else if(peopleNumberInGroup >= 6 && peopleNumberInGroup <= 12) {
            target = "Monblan";
            monblanPeople += peopleNumberInGroup;

        } else if(peopleNumberInGroup >= 13 && peopleNumberInGroup <= 25) {
            target = "Kilimandjaro";
            kilimandjaroPeople += peopleNumberInGroup;
        }else if(peopleNumberInGroup >= 26 && peopleNumberInGroup <= 40) {
            target = "K2";
            k2People += peopleNumberInGroup;
        }else if(peopleNumberInGroup >= 41) {
            target = "Everest";
            everestPeople += peopleNumberInGroup;
        }

        
    }

    console.log(`${(musalaPeople / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(monblanPeople / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(kilimandjaroPeople / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(k2People / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(everestPeople / totalPeople * 100).toFixed(2)}%`);
    
}

trekkingMania(["5",
"25",
"41",
"31",
"250",
"6"])

;

// Катерачи от цяла България се събират на групи и набелязват следващите върхове за изкачване. Според размера на групата, катерачите ще изкачват различни върхове.
// •	Група до 5 човека – изкачват Мусала
// •	Група от 6 до 12 човека – изкачват Монблан
// •	Група от 13 до 25 човека – изкачват Килиманджаро
// •	Група от 26 до 40 човека –  изкачват К2
// •	Група от 41 или повече човека – изкачват Еверест
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
