function oscarCeremony(input) {
    let salonPrice = Number(input[0]);

    let statuettesPrice = salonPrice - (salonPrice * (30 / 100));
    let cateringPrice = statuettesPrice - (statuettesPrice * (15 / 100));
    let soundingPrice = cateringPrice / 2;

    let totalSum = statuettesPrice + cateringPrice + soundingPrice + salonPrice;

    console.log(totalSum.toFixed(2));

}

oscarCeremony(["5555"]);

// Филмовата академия на САЩ от 1929г. ежегодно раздава награди Оскар на грандиозна церемония. Организаторите искат да разберат колко са разходите по организирането на една такава церемония. Напишете програма, която изчислява какви разходи ще има академията по организацията на събитието, като знаете колко е наемът на залата, в която ще се проведе. 
// •	Статуетки  – цената им е 30% по-малка от наема на залата
// •	Кетъринг – цената му е 15% по-малка от тази на статуетките
// •	Озвучаване – цената му е 1 / 2 от цената за кетъринг
// Вход
// От конзолата се четe 1 ред:
// •	Наем за залата – цяло число в интервала [0 … 999]
// Изход
// Да се отпечата на конзолата колко ще са разходите по организирането на церемонията. Сумата да бъде форматирана до втория знак след десетичния знак.