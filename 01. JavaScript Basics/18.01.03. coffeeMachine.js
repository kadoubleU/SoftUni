function coffeeMachine(input) {
    let drinkName = input[0];
    let sugarType = input[1];
    let drinksNumber = Number(input[2]);

    let drinkPrice = 0;

    if(drinkName === "Espresso") {
        if(sugarType === "Without") {
            drinkPrice = 0.90;
            drinkPrice = drinkPrice - (drinkPrice * (35 / 100));

        }else if(sugarType === "Normal") {
            drinkPrice = 1.00;

        }else if(sugarType === "Extra") {
            drinkPrice = 1.20;

        }

        if(drinksNumber >= 5) {
            drinkPrice = drinkPrice - (drinkPrice * (25 / 100));
        }

    }else if(drinkName === "Cappuccino") {
        if(sugarType === "Without") {
            drinkPrice = 1.00;
            drinkPrice = drinkPrice - (drinkPrice * (35 / 100));

        }else if(sugarType === "Normal") {
            drinkPrice = 1.20;

        }else if(sugarType === "Extra") {
            drinkPrice = 1.60;

        }
    }else if(drinkName === "Tea") {
        if(sugarType === "Without") {
            drinkPrice = 0.50;
            drinkPrice = drinkPrice - (drinkPrice * (35 / 100));

        }else if(sugarType === "Normal") {
            drinkPrice = 0.60;

        }else if(sugarType === "Extra") {
            drinkPrice = 0.70;

        }
    }

    let sum = drinksNumber * drinkPrice;

    if(sum > 15) {
        sum = sum - (sum * (20 / 100));
    }

    console.log(`You bought ${drinksNumber} cups of ${drinkName} for ${sum.toFixed(2)} lv.`);
}

coffeeMachine(["Espresso", "Without", "10"]);
coffeeMachine(["Cappuccino","Normal","13"]);
coffeeMachine(["Tea","Extra","3"]);




// Напишете софтуер, който да пресмята сметката на клиент, закупил определен брой от дадена напитка от кафемашина.
// 	Без захар	Нормално	Допълнително захар
// Еспресо	0.90 лв./бр.	1 лв. /бр.	1.20 лв. /бр.
// Капучино	1.00 лв. /бр.	1.20 лв. /бр.	1.60 лв. /бр.
// Чай	0.50 лв. /бр.	0.60 лв. /бр.	0.70 лв. /бр.
// Трябва да имате предвид следните отстъпки:
// •	При избрана напитка без захар има 35% отстъпка.
// •	При избрана напитка "Espresso" и закупени поне 5 броя, има 25% отстъпка.
// •	При сума надвишава 15 лева, 20% отстъпка от крайната цена,  
// Отстъпките се прилагат в реда на тяхното описване.
// Вход
// Входът се чете от конзолата и се състои от три реда:
// •	Първи ред - напитка - текст с възможности"Espresso", "Cappuccino" или "Tea"
// •	Втори ред - захар - текст  с възможности "Without", "Normal" или "Extra"
// •	Трети ред - брой напитки - цяло число в интервала [1… 50]
// Изход
// На конзолата трябва да се отпечата един ред:
// "You bought {брой напитки} cups of {напитка} for {крайна цена} lv."
// Цената да бъде форматирана до втората цифра след десетичния знак.

