function flowers(input) {
    let chrysanthemumsNumber = Number(input[0]);
    let rosesNumber = Number(input[1]);
    let tulipsNumber = Number(input[2]);
    let seasonType = input[3];
    let isDayHoliday = input[4];

    let flowersPrice;

    switch (seasonType) {
        case "Spring":
        case "Summer":
            flowersPrice = (chrysanthemumsNumber * 2) + (rosesNumber * 4.10) + (tulipsNumber * 2.50);
        break;
    
        case "Autumn":
        case "Winter":
            flowersPrice = (chrysanthemumsNumber * 3.75) + (rosesNumber * 4.50) + (tulipsNumber * 4.15);       
        break;
    }

    let totalFlowersNumber = chrysanthemumsNumber + rosesNumber + tulipsNumber;

    if (seasonType === "Spring" && tulipsNumber > 7) {
        flowersPrice = flowersPrice - (flowersPrice * (5/100));
    } else if (seasonType === "Winter" && rosesNumber >= 10) {
        flowersPrice = flowersPrice - (flowersPrice * (10/100));
    }

    if(totalFlowersNumber > 20) {
        flowersPrice = flowersPrice - (flowersPrice * (20/100));
    }

    if (isDayHoliday === "Y"){
        flowersPrice = flowersPrice + (flowersPrice * (15/100));
    }
        flowersPrice = flowersPrice + 2;
    console.log(flowersPrice.toFixed(2));
}

flowers(["10", "10", "10", "Autumn", "N"]);

// 3.	Магазин за цветя
// Магазин за цветя предлага 3 вида цветя: хризантеми, рози и лалета. Цените зависят от сезона.
// Сезон	Хризантеми	Рози	Лалета
// Пролет / Лято	2.00 лв./бр.	4.10 лв./бр.	2.50 лв./бр.
// Есен / Зима	3.75 лв./бр.	4.50 лв./бр.	4.15 лв./бр.
// В празнични дни цените на всички цветя се увеличават с 15%. Предлагат се следните отстъпки:
// •	За закупени повече от 7 лалета през пролетта – 5% от цената на целият букет.
// •	За закупени 10 или повече рози през зимата – 10% от цената на целият букет.
// •	За закупени повече от 20 цветя общо през всички сезони – 20% от цената на целият букет.
// Отстъпките се правят по така написания ред и могат да се наслагват! Всички отстъпки важат след оскъпяването за празничен ден!
// Цената за аранжиране на букета винаги е 2лв. Напишете програма, която изчислява цената за един букет.
// Вход
// Входът се чете от конзолата и съдържа точно 5 реда:
// •	На първия ред е броят на закупените хризантеми – цяло число в интервала [0 ... 200]
// •	На втория ред е броят на закупените рози – цяло число в интервала [0 ... 200]
// •	На третия ред е броят на закупените лалета – цяло число в интервала [0 ... 200]
// •	На четвъртия ред е посочен сезона – [Spring, Summer, Аutumn, Winter]
// •	На петия ред е посочено дали денят е празник – [Y – да / N - не]
// Изход
// Да се отпечата на конзолата 1 число – цената на цветята, форматирана до вторият знак след десетичната запетая.
