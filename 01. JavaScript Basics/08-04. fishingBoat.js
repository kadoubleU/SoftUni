function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermensNumber = Number(input[2]);

    let rentPrice;

    switch (season) {
        case "Spring":
            rentPrice = 3000;
        break;
    
        case "Summer":
        case "Autumn":
            rentPrice = 4200;
        break;

        case "Winter":
            rentPrice = 2600;
        break;
    }

    if(fishermensNumber <= 6) {
        rentPrice = rentPrice - (rentPrice * (10/100));
    }else if (fishermensNumber >= 7 && fishermensNumber <= 11) {
        rentPrice = rentPrice - (rentPrice * (15/100));
    }else if (fishermensNumber >= 12) {
        rentPrice = rentPrice - (rentPrice * (25/100));
    }

    if (fishermensNumber % 2 === 0 && season !== "Autumn") {
        rentPrice = rentPrice - (rentPrice * (5/100));
    }

    if (budget >= rentPrice) {
        let leftMoney = budget - rentPrice;

        console.log(`Yes! You have ${leftMoney.toFixed(2)} leva left.`);
    }else {
        let neededMoney = rentPrice - budget;

        console.log(`Not enough money! You need ${neededMoney.toFixed(2)} leva.`);
    }
}

fishingBoat(["2000","Winter","13"]);

// Тони и приятели много обичали да ходят за риба, те са толкова запалени по риболова, че решават да отидат на риболов с кораб. Цената за наемане на кораба зависи от сезона и броя рибари.
// Цената зависи от сезона:
// •	Цената за наем на кораба през пролетта е  3000 лв.
// •	Цената за наем на кораба през лятото и есента е  4200 лв.
// •	Цената за наем на кораба през зимата е  2600 лв.
// В зависимост от броя си групата ползва отстъпка:
// •	Ако групата е до 6 човека включително  –  отстъпка от 10%.
// •	Ако групата е от 7 до 11 човека включително  –  отстъпка от 15%.
// •	Ако групата е от 12 нагоре  –  отстъпка от 25%. 
// Рибарите ползват допълнително 5% отстъпка ако са четен брой освен ако не е есен - тогава нямат допълнителна отстъпка. 
// Напишете функция, която да пресмята дали рибарите ще съберат достатъчно пари. 
// Вход
// Приемат се 3 аргумента:
// •	Бюджет на групата – цяло число в интервала [1…8000]
// •	Сезон –  текст : "Spring", "Summer", "Autumn", "Winter"
// •	Брой рибари – цяло число в интервала [4…18]
// Изход
// Да се отпечата на конзолата един ред:
// •	Ако бюджетът е достатъчен:
// "Yes! You have {останалите пари} leva left."
// •	Ако бюджетът НЕ Е достатъчен:
// "Not enough money! You need {сумата, която не достига} leva."
// Сумите трябва да са форматирани с точност до два знака след десетичната запетая.
