function basketballEquipment(input) {
    let yearlyTax = Number(input[0]);

    let basketballSneakers = yearlyTax - (yearlyTax * (40 / 100));
    let basketballOutfit = basketballSneakers - (basketballSneakers * (20 / 100));
    let basketballBall = basketballOutfit * (1/4);
    let basketballAccessoaries = basketballBall * (1/5);

    let sum = yearlyTax + basketballSneakers + basketballOutfit + basketballBall + basketballAccessoaries;

    console.log(sum.toFixed(2));

}

basketballEquipment(["230"]);

// Джеси решава, че иска да се занимава с баскетбол, но за да тренира е нужна екипировка. Напишете програма, която изчислява какви разходи ще има Джеси, ако започне да тренира, като знаете колко е таксата за тренировки по баскетбол за период от 1 година. Нужна екипировка: 
// •	Баскетболни кецове – цената им е 40% по-малка от таксата за една година
// •	Баскетболен екип – цената му е 20% по-евтина от тази на кецовете
// •	Баскетболна топка – цената ѝ е 1 / 4 от цената на баскетболния екип
// •	Баскетболни аксесоари – цената им е 1 / 5 от цената на баскетболната топка
// Вход
// От конзолата се четe 1 ред:
// •	Годишната такса за тренировки по баскетбол – цяло число в интервала [0… 9999]
// Изход
// Да се отпечата на конзолата колко ще са разходите на Джеси, ако започне да спортува баскетбол. Сумата да бъде форматирана до втория знак след десетичния знак.
