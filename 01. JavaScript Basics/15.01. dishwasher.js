function dishwasher(input) {
    let index = 0;

    let dishDetergent = Number(input[index]);
    index++;

    let quantityDishes = 0;

    let totalDetergent = dishDetergent * 750;

    let numberClearPlates = 0;
    let numberClearSaucepan = 0;
    while(input[index] !== "End" || index < input.length) {
        quantityDishes = Number(input[index]);
        if(input[index] === "End" || totalDetergent < 0) {
            break;
        }
        if(index % 3 === 0) {
            totalDetergent = totalDetergent - (quantityDishes * 15);
            numberClearSaucepan = numberClearSaucepan + quantityDishes;

        } else {
            totalDetergent = totalDetergent - (quantityDishes * 5);
            numberClearPlates = numberClearPlates + quantityDishes;
        }

        index++;
    }

    if(totalDetergent >= 0){
        console.log("Detergent was enough!");
        console.log(`${numberClearPlates} dishes and ${numberClearSaucepan} pots were washed.`);
        console.log(`Leftover detergent ${totalDetergent} ml.`);
        
    }else {
        console.log(`Not enough detergent, ${Math.abs(totalDetergent)} ml. more necessary!`);
    }
}

dishwasher(["1"
,"10"
,"15"
,"10"
,"12"
,"13"
,"30"]);

// 1.	Съдомиялна
// Гошо работи в ресторант и отговаря за зареждането на съдомиялната накрая на деня.
// Вашата задача е да напишете програма, която изчислява, дали дадено закупено количество бутилки от препарат за съдомиялна е достатъчно, за да измие определено количество съдове. Знае се, че всяка бутилка съдържа 750 мл. препарат, за 1 чиния са нужни 5 мл., а за тенджера 15 мл.  Приемете, че на всяко трето зареждане със съдове, съдомиялната се пълни само с тенджери, а останалите пъти с чинии. Докато не получите команда "End" ще продължите да получавате бройка съдове, които трябва да бъдат измити.
// Вход
// От конзолата се четат:
// •	Брой бутилки от препарат, който ще бъде използван за миенето на чинии - цяло число в интервала [1…10] 
// На всеки следващ ред, до получаване на командата "End" или докато количеството препарат не се изчерпи, брой съдове, които трябва да бъдат измити - цяло число в интервала [1…100]
// Изход
// В случай, че количеството препарат е било достатъчно за измиването на съдовете:
// "Detergent was enough!"
// "{брой чисти чинии} dishes and {брой чисти тенджери} pots were washed."
// "Leftover detergent {количество останал препарат} ml."
// В случай, че количеството препарат не е било достатъчно за измиването на съдовете:
// "Not enough detergent, {количество не достигнал препарат} ml. more necessary!"
