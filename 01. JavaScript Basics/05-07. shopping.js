function shopping(input) {
    let peterBudget = Number(input[0]);
    let videoCardsNumbers = Number(input[1]);
    let processorsNumbers = Number(input[2]);
    let ramMemoryNumbers = Number(input[3]);

    let videoCardsPrice = videoCardsNumbers * 250;
    let processorsPrice = processorsNumbers * (videoCardsPrice * (35/100));
    let ramMemoryPrice = ramMemoryNumbers * (videoCardsPrice * (10/100));

    let materialsPrice = videoCardsPrice + processorsPrice + ramMemoryPrice;

    if (videoCardsNumbers > processorsNumbers) {
        materialsPrice = materialsPrice - (materialsPrice * (15/100));
    }

    if (peterBudget >= materialsPrice) {
        let leftMoney = peterBudget - materialsPrice;
        console.log(`You have ${leftMoney.toFixed(2)} leva left!`);

    }else {
        let neeededMoney = materialsPrice - peterBudget;
        console.log(`Not enough money! You need ${neeededMoney.toFixed(2)} leva more!`);
    }
}

shopping(["920.45","3","1","1"]);

// Пазаруване 
// Петър иска да купи N видеокарти, M процесора и P на брой рам памет. Ако броя на видеокартите е по-голям от този на процесорите получава 15% отстъпка от крайната сметка. Важат следните цени:
// •	Видеокарта – 250 лв./бр.
// •	Процесор – 35% от цената на закупените видеокарти/бр.
// •	Рам памет – 10% от цената на закупените видеокарти/бр.
// Да се изчисли нужната сума за закупуване на материалите и да се пресметне дали бюджета ще му стигне.
// Вход
// Входът се състои от четири реда:
// 1.	Бюджетът на Петър - реално число в интервала [0.0…100000.0]
// 2.	Броят видеокарти - цяло число в интервала [0…100]
// 3.	Броят процесори - цяло число в интервала [0…100]
// 4.	Броят рам памет - цяло число в интервала [0…100]
// Изход
// На конзолата се отпечатва 1 ред, който трябва да изглежда по следния начин:
// •	Ако бюджета е достатъчен:
// "You have {остатъчен бюджет} leva left!"
// •	Ако сумата надхвърля бюджета:
// "Not enough money! You need {нужна сума} leva more!"
// Резултатът да се форматира до втория знак след десетичната запетая.
