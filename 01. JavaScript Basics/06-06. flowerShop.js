function flowrShop(input) {
    let magnoliasNumber = Number(input[0]);
    let hyacinthsNumber = Number(input[1]);
    let rosesNumber = Number(input[2]);
    let cactusNumber = Number(input[3]);
    let giftPrice = Number(input[4]);

    let flowerPrice = (magnoliasNumber * 3.25) + (hyacinthsNumber * 4) + (rosesNumber * 3.50) + (cactusNumber * 8);

    let taxes = flowerPrice * (5/100);

    let endPrice = flowerPrice - taxes;

    if(endPrice >= giftPrice) {
        let leftMoney = endPrice - giftPrice
        console.log(`She is left with ${Math.floor(leftMoney)} leva.`);
    }else {
        let neededMoney = giftPrice - endPrice;
        console.log(`She will have to borrow ${Math.ceil(neededMoney)} leva.`);
    }
}

flowrShop([15,7, 5, 10, 100]);

// Мария иска да купи подарък на сина си. Тя работи в магазин за цветя. В магазина идва поръчка за цветя. Напишете програма, която пресмята сумата от поръчката и дали печалбата е достатъчна за подаръка. Цветята имат следните цени:
 
// •	Магнолии – 3.25 лева
// •	Зюмбюли – 4 лева
// •	Рози – 3.50 лева
// •	Кактуси – 8 лева
// От общата сума, Мария трябва да плати 5% данъци.
 
 
// Вход
// Входът се чете от конзолата и се състои от 5 реда:
// •	Брой магнолии – цяло число в интервала [0 … 50]
// •	Брой зюмбюли – цяло число в интервала [0 … 50]
// •	Брой рози – цяло число в интервала [0 … 50]
// •	Брой кактуси – цяло число в интервала [0 … 50]
// •	Цена на подаръка – реално число в интервала [0.00 … 500.00]
// Изход
// На конзолата трябва да се отпечата един ред.
// •	Ако парите СА стигнали: "She is left with {останали} leva." – сумата трябва да е закръглена към по-малко цяло число (пр. 1.90 -> 1).
// •	Ако парите НЕ достигат: "She will have to borrow {останали} leva." – сумата трябва да е закръглена към по-голямо цяло число (пр. 1.10 -> 2).
