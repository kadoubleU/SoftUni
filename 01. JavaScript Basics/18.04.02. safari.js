function safari(input) {
    let budget = Number(input[0]);
    let fuelLiters = Number(input[1]);
    let dayOfWeek = input[2];

    let price = (fuelLiters * 2.10) + 100;

    if(dayOfWeek === "Saturday") {

        price = price - (price * (10 / 100));

    }else if(dayOfWeek === "Sunday") {
        price = price - (price * (20 / 100));
    }

    if(budget >= price) {
        let leftedMoney = budget - price;
        console.log(`Safari time! Money left: ${leftedMoney.toFixed(2)} lv.`);
    }else {
        let neededMoney = price - budget;
        console.log(`Not enough money! Money needed: ${neededMoney.toFixed(2)} lv.`);
    }
}

safari(["105.20",
"15",
"Sunday"]);

// Симона и Светлин ще ходят на почивка в Африка и искат да отидат на сафари. Понеже за делничните дни вече имат планове, решават, че ще отидат събота или неделя. Напишете програма, която изчислява колко ще им струва ходенето на сафари и дали бюджетът им ще им стигне да отидат, като имате предвид следното:
// •	Цената на един литър гориво е 2.10 лв.
// •	Цената за екскурзовод е 100лв.
// •	В зависимост от деня има отстъпки от общата цена - за събота 10%, а за неделя 20%
// Вход
// От конзолата се четат 3 реда:
// •	Бюджет – реално число в интервала [0.00… 10000.00]
// •	Колко литра гориво ще са им нужни – реално число в интервала [1.00… 50.00]
// •	Ден от седмицата – текст с възможности "Saturday" и "Sunday" 
// Изход
// Да се отпечата на конзолата един ред:  
// •	Ако бюджетът е достатъчен:
// "Safari time! Money left: {колко пари са им останали} lv. "
// •	Ако бюджетът не е достатъчен:
// "Not enough money! Money needed: {колко пари не им достигат} lv."
// Сумите трябва да са форматирани до втория знак след десетичната запетая.
