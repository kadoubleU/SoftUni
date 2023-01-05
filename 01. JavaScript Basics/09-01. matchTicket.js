function matchTicket(input) {
    let budget = Number(input[0]);
    let category = input[1];
    let peopleNumber = Number(input[2]);

    let leftBudget = 0;
    let neededBudget = 0;

    if (peopleNumber >= 1 && peopleNumber <= 4) {
        leftBudget = budget - (budget * (75/100));
    }else if(peopleNumber >= 5 && peopleNumber <= 9) {
        leftBudget = budget - (budget * (60/100));
    }else if(peopleNumber >= 10 && peopleNumber <= 24) {
        leftBudget = budget - (budget * (50/100));
    }else if(peopleNumber >= 25 && peopleNumber <= 49) {
        leftBudget = budget - (budget * (40/100));
    }
    else if(peopleNumber >= 50) {
        leftBudget = budget - (budget * (25/100));
    }

    if (category === "VIP") {
        neededBudget = peopleNumber * 499.99;
    }else if(category === "Normal") {
        neededBudget = peopleNumber * 249.99;
    }

    if(leftBudget >= neededBudget) {
        let leftMoney = leftBudget - neededBudget;
        console.log(`Yes! You have ${leftMoney.toFixed(2)} leva left.`);
    }else {
        let neededMoney = neededBudget - leftBudget;
        console.log(`Not enough money! You need ${neededMoney.toFixed(2)} leva.`);
    }
}

matchTicket(["30000", "VIP", "49"]);

// 1.	Билети за мач
// Когато пуснали билетите за Евро 2016, група запалянковци решили да си закупят. Билетите имат две категории с различни цени:
// •	IP – 499.99 лева.
// •	Normal – 249.99 лева.
// Запалянковците имат определен бюджет, а броят на хората в групата определя какъв процент от бюджета трябва да се задели за транспоОт 1 до 4 – 75% от бюджета.
// •	От 5 до 9 – 60% от бюджета.
// •	От 10 до 24 – 50% от бюджета.
// •	От 25 до 49 – 40% от бюджета.
// •	50 или повече – 25% от бюджета.
// Напишете програма, която да пресмята дали с останалите пари от бюджета могат да си купят билети за избраната категория. И колко пари ще им останат или ще са им нужни.
// Вход
// Входът се чете от конзолата и съдържа точно 3 реда:
// •	На първия ред е бюджетът – реално число в интервала [1 000.00 ... 1 000 000.00]
// •	На втория ред е категорията – "VIP" или "Normal"
// •	На третия ред е броят на хората в групата – цяло число в интервала [1 ... 200]
// Изход
// Да се отпечата на конзолата един ред:
// •	Ако бюджетът е достатъчен:
// o	"Yes! You have {останалите пари на групата} leva left."
// •	Ако бюджетът НЕ Е достатъчен:
// o	"Not enough money! You need {сумата, която не достига} leva."
// Сумите трябва да са форматирани с точност до два знака след десетичната запетая.
