function vegetableMarket(input) {
    let vegetablesPrice = Number(input[0]);
    let fruitsPrice = Number(input[1]);
    let vegetablesKgs = Number(input[2]);
    let fruitsKgs = Number(input[3]);

    let vegetablesTotalPrice = vegetablesPrice * vegetablesKgs;
    let fruitsTotalPrice = fruitsPrice * fruitsKgs;

    let bgnToEurSum = (fruitsTotalPrice + vegetablesTotalPrice) / 1.94;

    console.log(bgnToEurSum.toFixed(2));
}

vegetableMarket(["1.5","2.5","10","10"]);

// Градинар продавал реколтата от градината си на зеленчуковата борса. Продава зеленчуци за N лева на килограм и плодове за M лева за килограм. Напишете програма, която да пресмята приходите от реколтата в евро ( ако приемем, че едно евро е равно на 1.94лв).
// Вход
// От конзолата се четат 4 числа, по едно на ред:
// •	Първи ред – Цена за килограм зеленчуци – реално число[0.00… 1000.00]
// •	Втори ред – Цена за килограм плодове – реално число[0.00… 1000.00]
// •	Трети ред – Общо килограми на зеленчуците – цяло число[0… 1000]
// •	Четвърти ред – Общо килограми на плодовете – цяло число[0… 1000]
// Изход
// Да се отпечата на конзолата едно число: приходите от всички плодове и зеленчуци в евро.
// Резултата да се форматира до втория знак след десетичния разделител.
