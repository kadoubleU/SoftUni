function carToGo(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let carClass;
    let carType;
    let carPrice;

    switch (season) {
        case "Summer":
            if(budget <= 100) {
                carClass = "Economy class";
                carType = "Cabrio"
                carPrice = budget * (35/100);

            }else if(budget  > 100 && budget <= 500) {
                carClass = "Compact class";
                carType = "Cabrio"
                carPrice = budget * (45/100);

            }else if(budget > 500) {
                carClass = "Luxury class";
                carType = "Jeep";
                carPrice = budget * (90/100);
            }           
        break;
    
        case "Winter":
            if(budget <= 100) {
                carClass = "Economy class";
                carType = "Jeep"
                carPrice = budget * (65/100);

            }else if(budget  > 100 && budget <= 500) {
                carClass = "Compact class";
                carType = "Jeep"
                carPrice = budget * (80/100);

            }else if(budget > 500) {
                carClass = "Luxury class";
                carType = "Jeep";
                carPrice = budget * (90/100);
            }
        break;
    }

    console.log(carClass);
    console.log(`${carType} - ${carPrice.toFixed(2)}`);

}

carToGo(["99.99", "Summer"]);

// 4.	Кола под наем
// Напишете програма, която спрямо даден бюджет и сезон да пресмята цената, типа и класа на кола под наем.
// Сезоните са лято и зима – "Summer" и "Winter". Типа коли са кабрио и джип – "Cabrio" и "Jeep". 
// •	При бюджет по-малък или равен от 100лв.:
// o	Класът ще е - "Economy class"
// o	Според сезона колата и цената ще са:
// 	Лято – Кабрио – 35% от бюджета
// 	Зима – Джип – 65% от бюджета
// •	При бюджет по-голям от 100лв. и по-малък или равен от 500лв.:
// o	Класът ще е - "Compact class"
// o	Според сезона колата и цената ще са:
// 	Лято – Кабрио – 45% от бюджета
// 	Зима – Джип – 80% от бюджета
// •	При бюджет по-голям от 500лв.:
// o	Класът ще е – "Luxury class"
// o	За всеки сезон колата ще е джип и цената ще е:
// 	90% от бюджета
// Вход
// Входът се чете от конзолата и се състои от два реда:
// •	Първи ред – Бюджет – реално число в интервала [10.00...10000.00]
// •	Втори ред –  Сезон – текст "Summer" или "Winter"
// Изход
// На конзолата трябва да се отпечатат два реда.
// •	Първи ред – "{Вид на класа}"
// o	"Economy class", "Compact class" или "Luxury class"
// •	Втори ред – "{Вид на колата} - {цена на колата}"
// o	Видът на колата – "Cabrio" или "Jeep"
// o	Цената трябва да е форматирана до втория знак след запетаята
