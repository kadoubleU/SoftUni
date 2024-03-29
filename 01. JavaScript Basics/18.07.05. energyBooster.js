function energyBooster(input) {
    let fruitType = input[0];
    let setSize = input[1];
    let setsNumber = Number(input[2]);

    let price = 0;

    if(setSize === "small") {
        if(fruitType === "Watermelon") {
            price = 2 * 56;
        }else if(fruitType === "Mango") {
            price = 2 * 36.66;
        }else if(fruitType === "Pineapple") {
            price = 2 * 42.10;
        }else if(fruitType === "Raspberry") {
            price = 2 * 20;
        }
    }else if(setSize === "big") {
        if(fruitType === "Watermelon") {
            price = 5 * 28.70;
        }else if(fruitType === "Mango") {
            price = 5 * 19.60;
        }else if(fruitType === "Pineapple") {
            price = 5 * 24.80;
        }else if(fruitType === "Raspberry") {
            price = 5 * 15.20;
        }
    }

    let sum = setsNumber * price;

    if(sum >= 400 && sum <= 1000) {
        sum = sum - (sum * (15 / 100));
    }else if(sum > 1000) {
        sum = sum - (sum * (50 / 100));
    }

    console.log(`${sum.toFixed(2)} lv.`);
}

energyBooster(["Mango",
"big",
"8"]);

// Сезона за изкачване на алпийски върхове започва и всички алпинисти, се запасяват с енергийни гелове за изкачването. Фирма предлага малки и големи разфасовки с по 2 бр. и 5 бр. енергийни гела, като цената на един гел зависи от плодовете, от които е направен. В зависимост от размера на разфасовката, цената за брой енергиен гел е различна. От конзолата се четат плодовете, размерът на опаковката ((малка) 2 бр. или (голяма) 5 бр.), както и колко разфасовки са поръчани. Да се напише програма, която изчислява сумата, която трябва да се плати за поръчката. 
// 	Диня 	Манго	Ананас	Малина
// 2 броя (small)	56 лв./бр.	36.66 лв./бр.	42.10 лв./бр.	20 лв./бр.
// 5 броя (big)	28.70 лв./бр.	19.60 лв./бр.	24.80 лв./бр.	15.20 лв./бр.
// При поръчки:
// •	от 400 лв. до 1000 лв. включително има 15% отстъпка
// •	над 1000 лв. има 50% отстъпка
// Вход
// От конзолата се четат 3 реда:
// 1.	Плод - текст с възможности: "Watermelon", "Mango", "Pineapple" или "Raspberry"
// 2.	Размерът на сета - текст с възможности: "small" или "big"
// 3.	Брой на поръчаните сетове - цяло число в интервала [1 … 10000]
// Изход
// На конзолата се отпечатва 1 ред:
// •	Цената, която трябва да се заплати, форматирана до втория знак след десетичната запетая, 
// в следния формат:
// "{цената} lv."


