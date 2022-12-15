function foodDelivery(input) {
    let chickenMenuNum = Number(input[0]);
    let fishMenuNum = Number(input[1]);
    let vegetarianMenuNum = Number(input[2]);

    let chickenMenuPrice = chickenMenuNum * 10.35;
    let fishMenuPrice = fishMenuNum * 12.40;
    let vegetarianMenuPrice = vegetarianMenuNum * 8.15;

    let orderPrice = chickenMenuPrice + fishMenuPrice + vegetarianMenuPrice;

    let dessertPrice = orderPrice * (20/100);

    let totalPrice = orderPrice + dessertPrice + 2.50;

    console.log(totalPrice);
}

foodDelivery(["9","2","6"]);

// Доставка на храна
// Ресторант отваря врати и предлага няколко менюта на преференциални цени: 
// •	Пилешко меню –  10.35 лв. 
// •	Меню с риба – 12.40 лв. 
// •	Вегетарианско меню  – 8.15 лв. 
// Напишете програма, която изчислява колко ще струва на група хора да си поръчат храна за вкъщи.
// Групата ще си поръча и десерт, чиято цена е равна на 20% от общата сметка (без доставката). 
// Цената на доставка е 2.50 лв и се начислява най-накрая.  
// Вход
// От конзолата се четат 3 реда:
// •	Брой пилешки менюта – цяло число в интервала [0 … 99]
// •	Брой менюта с риба – цяло число в интервала [0 … 99]
// •	Брой вегетариански менюта – цяло число в интервала [0 … 99]
// Изход
// Да се отпечата на конзолата един ред:  "{цена на поръчката}"
