function transportPrice(input) {
    let kilometersNum = Number(input[0]);
    let dayNight = input[1];

    if (dayNight.toLowerCase() === "day") {

        if (kilometersNum < 20) {
            let totalTaxiPrice = 0.70 + (kilometersNum * 0.79);
            console.log(totalTaxiPrice.toFixed(2));

        } else if (kilometersNum >= 20 && kilometersNum < 100){
           let totalBusPrice = kilometersNum * 0.09;
           console.log(totalBusPrice.toFixed(2));

        } else if (kilometersNum >= 100) {
           let totalTrainPrice = kilometersNum * 0.06;
           console.log(totalTrainPrice.toFixed(2));
        }

    }else if (dayNight.toLowerCase() === "night") {
        if (kilometersNum < 20) {
            let totalTaxiPrice = 0.70 + (kilometersNum * 0.90);
            console.log(totalTaxiPrice.toFixed(2));

        } else if (kilometersNum >= 20 && kilometersNum < 100){
           let totalBusPrice = kilometersNum * 0.09;
           console.log(totalBusPrice.toFixed(2));

        } else if (kilometersNum >= 100) {
           let totalTrainPrice = kilometersNum * 0.06;
           console.log(totalTrainPrice.toFixed(2));
        }
    }
}

transportPrice(["180", "night"]);

// Студент трябва да пропътува n километра. Той има избор измежду три вида транспорт:
// •	Такси. Начална такса: 0.70 лв. Дневна тарифа: 0.79 лв. / км. Нощна тарифа: 0.90 лв. / км.
// •	Автобус. Дневна / нощна тарифа: 0.09 лв. / км. Може да се използва за разстояния минимум 20 км.
// •	Влак. Дневна / нощна тарифа: 0.06 лв. / км. Може да се използва за разстояния минимум 100 км.
// Напишете програма, която въвежда броя километри n и период от деня (ден или нощ) и изчислява цената на най-евтиния транспорт.
// Вход
// От конзолата се четат два реда:
// •	Първият ред съдържа числото n – брой километри – цяло число в интервала [1…5000]
// •	Вторият ред съдържа дума “day” или “night” – пътуване през деня или през нощта
// Изход
// Да се отпечата на конзолата най-ниската цена за посочения брой километри, форматирана до втория знак след десетичния разделител.
