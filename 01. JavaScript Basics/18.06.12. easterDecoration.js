function easterDecoration(input) {
    let numberOfClients = Number(input[0]);
    
    let index = 1;

    let productType = "";
    let price = 0;

    count = 0;

    let sum = 0;

    for(let i = 1; i <= numberOfClients; i++) {
        price = 0;
        count = 0;

        while(input[index] !== "Finish") {
            productType = input[index];
            index++;

            if(productType === "basket") {
                price += 1.50;
            }else if(productType === "wreath") {
                price += 3.80;
            }else if(productType === "chocolate bunny") {
                price += 7.00;
            }

            count++;
        }

        if(count % 2 === 0) {
            price = price - (price * (20 /100));
        }

        console.log(`You purchased ${count} items for ${price.toFixed(2)} leva.`);
        index++;
        sum += price;

    }

    let averageBill = sum / numberOfClients;
    console.log(`Average bill per client is: ${averageBill.toFixed(2)} leva.`);
}

easterDecoration(["1",
"basket",
"wreath",
"chocolate bunny",
"wreath",
"basket",
"chocolate bunny",
"Finish"]);

// За великденските празници, магазин започва да продава три вида великденска украса – кошнички за яйца (basket), великденски венци (wreath) и шоколадови зайци (chocolate bunny). Вашата задача е да напишете програма, която да изчислява каква сметка трябва да плати всеки един клиент на магазина, като се има в предвид, че всеки клиент закупил четен брой продукти, ще получи 20% отстъпка от крайната цена. След като всички клиенти приключат с покупките, трябва да се отпечата средно по колко пари е похарчил всеки човек.
// Цените на продуктите са:
// •	кошничка за яйца (basket) – 1.50 лв.
// •	великденски венец (wreath) – 3.80 лв.
// •	шоколадов заек (chocolate bunny) – 7 лв.
// Вход
// От конзолата първоначално се чете един ред:
// •	Брои на клиентите в магазина – цяло число [1… 100]
// •	След това за всеки един клиент на нов ред до получаване на командата "Finish" се чете:
// o	Покупката която клиента е избрал – текст ("basket", "wreath" или "chocolate bunny")
// Изход
// •	При получаване на командата "Finish" да се отпечата един ред:
// o	"You purchased {броя на покупките} items for {крайната цена} leva."
// •	Накрая, след като всички клиенти приключат с покупките, да се отпечата на един ред
// o	"Average bill per client is: {средно аритметично на парите които е похарчил всеки един клиент} leva."
// Всички пари трябва да бъдат форматирани до втората цифра след десетичния знак.
