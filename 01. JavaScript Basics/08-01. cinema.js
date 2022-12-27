function cinema(input) {
    let projectionType = input[0];
    let rowsNumber = Number(input[1]);
    let columnsNumber = Number(input[2]);

    let totalProfit;
    let totalPlaces = rowsNumber * columnsNumber;

    switch(projectionType) {
        case "Premiere":
            totalProfit = totalPlaces * 12.00;
        break;

        case "Normal":
            totalProfit = totalPlaces * 7.50;
        break;

        case "Discount":
            totalProfit = totalPlaces * 5.00;
        break;
    }

    console.log(`${totalProfit.toFixed(2)} leva`);
}

cinema(["Discount","12","30"]);

// 1.	Кино
// В една кинозала столовете са наредени в правоъгълна форма в r реда и c колони. Има три вида прожекции с билети на различни цени:
// •	Premiere – премиерна прожекция, на цена 12.00 лева.
// •	Normal – стандартна прожекция, на цена 7.50 лева.
// •	Discount – прожекция за деца, ученици и студенти на намалена цена от 5.00 лева.
// Напишете функция, която приема тип прожекция (стринг), брой редове и брой колони в залата (цели числа) и изчислява общите приходи от билети при пълна зала. Резултатът да се отпечата във формат като в примерите по-долу, с 2 знака след десетичната точка. 
