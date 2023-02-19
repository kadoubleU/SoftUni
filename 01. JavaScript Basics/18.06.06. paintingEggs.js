function paintingEggs(input) {
    let eggsSize = input[0];
    let eggsColor = input[1];
    let lotsNumber = Number(input[2]);

    let lotPrice = 0;

    if(eggsSize === "Large") {
        if(eggsColor === "Red") {
            lotPrice = 16;
        }else if(eggsColor === "Green") {
            lotPrice = 12;
        }else if(eggsColor === "Yellow") {
            lotPrice = 9;
        }

    }else if(eggsSize === "Medium") {
        if(eggsColor === "Red") {
            lotPrice = 13;
        }else if(eggsColor === "Green") {
            lotPrice = 9;
        }else if(eggsColor === "Yellow") {
            lotPrice = 7;
        }

    }else if(eggsSize === "Small") {
        if(eggsColor === "Red") {
            lotPrice = 9;
        }else if(eggsColor === "Green") {
            lotPrice = 8;
        }else if(eggsColor === "Yellow") {
            lotPrice = 5;
        }

    }

    let totalLotsPrice = lotsNumber * lotPrice;
    let productionCosts = totalLotsPrice * (35 / 100);

    let sum = totalLotsPrice - productionCosts;

    console.log(`${sum.toFixed(2)} leva.`);
}

paintingEggs(["Small",
"Yellow",
"3"]);

// С наближаването на Великденските празници, цех за боядисване на яйца, започва да боядисва различни размери яйца, които след това продава на партиди. В таблицата са показани размерите на яйцата, различните бои и каква е цената за продажба на една партида яйца, зависеща от размерите и цвета боя. 
// 	Червено (Red)	Зелено (Green)	Жълто (Yellow)
// Големи (Large)	16 лв.	12 лв.	9 лв.
// Средни (Medium)	13 лв.	9 лв.	7 лв.
// Малки (Small)	9 лв.	8 лв.	5 лв.
// Напишете програма, която изчислява какви ще са приходите на цеха от продажбите, като знаете размера на яйцата и техният цвят. С 35% от крайната цена ще бъдат покрити производствени разходи.
// Вход
// Входът се чете от конзолата и се състои от три реда:
// •	Първи ред – размер на яйцата – текст с възможности "Large", "Medium" или "Small"
// •	Втори ред – цвят на яйцата – текст  с възможности "Red", "Green" или "Yellow"
// •	Трети ред – брой партиди – цяло число в интервала [1… 350]
// Изход
// На конзолата трябва да се отпечата един ред:
// "{крайната цена} leva."
// Резултатът да се форматира до втората цифра след десетичния знак.
