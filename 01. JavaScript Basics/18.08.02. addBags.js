function addBags(input) {
    let baggage20KgPrice = Number(input[0]);
    let baggageKgs = Number(input[1]);
    let daysToTravel = Number(input[2]);
    let baggagesNumber = Number(input[3]);

    let baggageTax = 0;

    if(baggageKgs < 10) {
        baggageTax = baggage20KgPrice * (20 / 100);
    }else if(baggageKgs >= 10 && baggageKgs <= 20) {
        baggageTax = baggage20KgPrice * (50 / 100);
    }else if (baggageKgs > 20) {
        baggageTax = baggage20KgPrice;
    }

    if(daysToTravel > 30) {
        baggageTax = baggageTax + (baggageTax * (10 / 100));
    }else if(daysToTravel >= 7 && daysToTravel <= 30) {
        baggageTax = baggageTax + (baggageTax * (15 / 100));
    }else if(daysToTravel < 7) {
        baggageTax = baggageTax + (baggageTax * (40 / 100));
    }

    let sum = baggagesNumber * baggageTax;

    console.log(`The total price of bags is: ${sum.toFixed(2)} lv.`);
}

addBags(["63.80",
"23",
"3",
"1"]);


// Мими има закупени самолетни билети, но в последствие решава да си добави багаж към тях.
// Таксите за багаж се изчисляват въз основа на теглото на чекирания багаж:
// •	до 10кг – 20% от цената на багаж над 20кг
// •	между 10кг и 20кг вкл. – 50% от цената на багаж над 20кг.
// •	над 20кг – таксата се чете от конзолата
// В зависимост от броя на дните, които остават до пътуването, цената се оскъпява:
// •	повече от 30 дни - цената на багажа се оскъпява с 10%
// •	между 7 и 30 дни вкл. - цената на багажа се оскъпява с 15%
// •	по-малко от 7 дни - цената на багажа се оскъпява с 40%
// Напишете програма, която пресмята колко ще трябва да заплати Мими, спрямо горните условия.
// Вход:
// От конзолата се четат 4 реда:
// 1.	Цената на багаж над 20кг - реално число в диапазона [10.0…80.0]
// 2.	Килограми на багажа – реално число в диапазона [1.0…32.0]
// 3.	Дни до пътуването – цяло число в диапазона [1…60]
// 4.	Брой багажи – цяло число в диапазона [1…10]
// Изход
// Да се отпечата на конзолата сумата, която ще трябва да заплати Мими за багажите, в следния формат:
// •	" The total price of bags is: {цената на багажите} lv. "
// Сумата да бъде форматирана до втората цифра след десетичния знак.
