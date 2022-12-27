function newHouse(input) {
    let flowerType = input[0];
    let flowersNumber = Number(input[1]);
    let budget = Number(input[2]);

    let flowerPrice;
    let flowersSum;

    switch (flowerType) {
        case "Roses":
            flowerPrice = 5.00;
            flowersSum = flowerPrice * flowersNumber;

            if (flowersNumber > 80) {
                flowersSum = flowersSum - (flowersSum * (10/100));
            }           
        break;
    
        case "Dahlias":
            flowerPrice = 3.80;
            flowersSum = flowerPrice * flowersNumber;

            if (flowersNumber > 90) {
                flowersSum = flowersSum - (flowersSum * (15/100));
            }
        break;

        case "Tulips":
            flowerPrice = 2.80;
            flowersSum = flowerPrice * flowersNumber;

            if (flowersNumber > 80) {
                flowersSum = flowersSum - (flowersSum * (15/100));
            }
        break;

        case "Narcissus":
            flowerPrice = 3.00;
            flowersSum = flowerPrice * flowersNumber;

            if (flowersNumber < 120) {
                flowersSum = flowersSum + (flowersSum * (15/100));
            }
        break;

        case "Gladiolus":
            flowerPrice = 2.50;
            flowersSum = flowerPrice * flowersNumber;

            if (flowersNumber < 80) {
                flowersSum = flowersSum + (flowersSum * (20/100));
            }
        break;
    }

    if (budget >= flowersSum) {
        let leftMoney = budget - flowersSum;
        console.log(`Hey, you have a great garden with ${flowersNumber} ${flowerType} and ${leftMoney.toFixed(2)} leva left.`);
    }else {
        let neededMoney = flowersSum - budget;
        console.log(`Not enough money, you need ${neededMoney.toFixed(2)} leva more.`);
    }
}

newHouse(["Narcissus","119","360"]);

// Марин и Нели си купуват къща не далеч от София. Нели толкова много обича цветята, че Ви убеждава да напишете функция, която да изчисли колко  ще им струва, да си засадят определен брой цветя и дали наличния бюджет ще им е достатъчен. Различните цветя са с различни цени. 
// цвете	Роза	Далия	Лале	Нарцис	Гладиола
// Цена на брой в лева	5	3.80	2.80	3	2.50
// Съществуват следните отстъпки:
// •	Ако Нели купи повече от 80 Рози - 10% отстъпка от крайната цена
// •	Ако Нели купи повече от 90  Далии - 15% отстъпка от крайната цена
// •	Ако Нели купи повече от 80 Лалета - 15% отстъпка от крайната цена
// •	Ако Нели купи по-малко от 120 Нарциса - цената се оскъпява с 15%
// •	Ако Нели Купи по-малко от 80 Гладиоли - цената се оскъпява с 20%
// Функцията получава 3 аргумента:
// •	Вид цветя - текст с възможности - "Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus"
// •	Брой цветя - цяло число в интервала [10…1000]
// •	Бюджет - цяло число в интервала [50…2500]
// Да се отпечата на конзолата на един ред:
// •	Ако бюджета им е достатъчен - "Hey, you have a great garden with {броя цвета} {вид цветя} and {останалата сума} leva left."
// •	Ако бюджета им е НЕ достатъчен - "Not enough money, you need {нужната сума} leva more."
// Сумата да бъде форматирана до втория знак след десетичната запетая.
