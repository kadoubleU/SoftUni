function vetParking(input) {
    let dayNumbers = Number(input[0]);
    let hoursNumber = Number(input[1]);

    let price = 0;

    let hoursPrice = 0;

    let totalPrice = 0;

    for(let i = 1; i <= dayNumbers; i++) {
        for(let j = 1; j <= hoursNumber; j++) {
            if(i % 2 === 0 && j % 2 === 1) {
                price =2.50;
            }else if(i % 2 === 1 && j % 2 === 0) {
                price =1.25;
            }else {
                price =1;
            }

            hoursPrice = hoursPrice + price;
            price = 0;
        }

        totalPrice = totalPrice + hoursPrice;
        console.log(`Day: ${i} - ${hoursPrice.toFixed(2)} leva`);
        hoursPrice = 0;
    }

    console.log(`Total: ${totalPrice.toFixed(2)} leva`);
}

vetParking(["5",
"2"]);

// Деси трябва да заведе котката си на ветеринар, но паркингът се заплаща. Напишете програма, която пресмята колко общо трябва да се плати за престоя на колата на Деси на паркинга. Паркингът е различен от останалите и има разнообразен ценоразпис. За всеки четен ден и нечетен час, паркингът таксува 2.50 лева. Във всеки нечетен ден и четен час таксата е 1.25 лева, във всички останали случаи се заплаща 1 лев. Таксуването става на всеки изминал час от деня. Всеки един от изходите трябва да бъде закръглен до втория знак след десетичната запетая.
// Вход
// От конзолата се четaт два реда:
// •	Брой дни – цяло число в интервала [1 … 5]
// •	Брой часове за всеки един от дните - цяло число в интервала [1 … 24]
// Изход:
// Да се отпечата на конзолата:
// •	За всеки изминал ден, общата сума, която трябва да се плати – "Day: {индексът на деня} – 
// {общата сума за деня} leva"
// •	Когато програмата приключи - "Total: {общата сума за всички дни} leva"
