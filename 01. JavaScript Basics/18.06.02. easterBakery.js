function easterBakery(input) {
    let flourPrice = Number(input[0]);
    let flourKgs = Number(input[1]);
    let sugarKgs = Number(input[2]);
    let eggShellsNumber = Number(input[3]);
    let yeastPacketsNumber = Number(input[4]);

    let flourTotalPrice = flourPrice * flourKgs;
    let sugarPrice = flourPrice - (flourPrice * (25 / 100));
    let sugarTotalPrice = sugarKgs * sugarPrice;
    let eggsTotalPrice = eggShellsNumber * (flourPrice + (flourPrice * (10 / 100)));
    let yeastPacketsTotalPrice = yeastPacketsNumber * (sugarPrice - (sugarPrice * (80/100)));

    let sum = flourTotalPrice + sugarTotalPrice + eggsTotalPrice + yeastPacketsTotalPrice;

    console.log(sum.toFixed(2));
}

easterBakery(["63.44",
"3.57",
"6.35",
"8",
"2"]);

// Великденските празници наближават и местната пекарна започва да набавя продуктите, които ще са ѝ нужни за изработка на великденските сладкиши. Вашата задача е да напишете програма, която да изчислява нужната сума за закупуване на продуктите. Нужните продукти са: брашно, захар, яйца и мая. От конзолата се въвежда цената на брашното за килограм, нужните килограми брашно, килограмите захар, броя на корите с яйца и пакетите мая.
// •	цената на килограм захар е с 25% по-ниска от тази на килограм брашно
// •	цената на една кора с яйца е с 10% по-висока от цената на килограм брашно
// •	цената на един пакет мая е с 80% по-ниска от цената на килограм захар
// Вход
// От конзолата се четат 5 реда:
// 1.	Цена на брашното за един килограм – реално число в интервала [0.00 … 10000.00]
// 2.	Килограми на брашното – реално число в интервала [0.00 … 10000.00]
// 3.	Килограми на захарта – реално число в интервала [0.00 … 10000.00]
// 4.	Брой кори с яйца – цяло число в интервала [0 … 10000]
// 5.	Пакети мая  – цяло число в интервала [0 … 10000]
// Изход
// Да се отпечата на конзолата едно число:
// •	Сумата, която ще им е необходима, форматирана до втория знак след десетичната запетая
