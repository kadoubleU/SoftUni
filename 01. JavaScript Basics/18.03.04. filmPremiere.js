function filmPremiere(input) {
    let movie = input[0];
    let packetType = input[1];
    let ticketsNumber = Number(input[2]);

    let price = 0;

    let promotion = 0;

    if(movie === "John Wick") {
        if(packetType === "Drink") {
            price = 12.00;

        }else if(packetType === "Popcorn") {
            price = 15.00;

        }else if(packetType === "Menu") {
            price = 19.00;
        }

    }else if(movie === "Star Wars") {
        if(packetType === "Drink") {
            price = 18.00;

        }else if(packetType === "Popcorn") {
            price = 25.00;

        }else if(packetType === "Menu") {
            price = 30.00;
        }

    }else if(movie === "Jumanji") {
        if(packetType === "Drink") {
            price = 9.00;

        }else if(packetType === "Popcorn") {
            price = 11.00;

        }else if(packetType === "Menu") {
            price = 14.00;
        }

    }

    let sum = ticketsNumber * price;

    if(movie === "Star Wars" && ticketsNumber >= 4) {
        sum = sum - (sum * (30/100));
    }else if(movie === "Jumanji" && ticketsNumber === 2) {
        sum = sum - (sum * (15/100));
    }

    console.log(`Your bill is ${sum.toFixed(2)} leva.`);
}

filmPremiere(["Jumanji",
"Menu",
"2"]);

// За предстояща премиера на три известни продукции, местно кино ви наема да напишете софтуер, който да изчислява цената, която клиентите трябва да заплатят, според филма и пакета, който са избрали.
// 	John Wick	Star Wars	Jumanji
// Напитка	12 лв./бр.	18 лв. /бр.	9 лв. /бр.
// Пуканки	15 лв. /бр.	25 лв. /бр.	11 лв. /бр.
// Меню	19 лв. /бр.	30 лв. /бр.	14 лв. /бр.
// Напишете програма, която изчислява цената, която трябва да се заплати, като имате в предвид следните отстъпки:
// •	При избран филм "Star Wars" и закупени поне четири билета, има 30% семейна отстъпка.
// •	При избран филм "Jumanji" и закупени точно два билета, има 15% отстъпка за двама.
// Вход
// Входът се чете от конзолата и се състои от три реда:
// •	Първи ред - прожекция - текст с възможности"John Wick", "Star Wars" или "Jumanji"
// •	Втори ред - пакет за филм - текст  с възможности "Drink", "Popcorn" или "Menu"
// •	Трети ред - брой билети - цяло число в интервала [1… 30]
// Изход
// На конзолата трябва да се отпечата един ред:
// "Your bill is {крайна цена} leva."
// Цената да бъде закръглена до втората цифра след десетичния знак.
