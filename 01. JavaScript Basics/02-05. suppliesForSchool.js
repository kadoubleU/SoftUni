function suppliesForSchool(input) {
    let penNum = Number(input[0]);
    let markerNum = Number(input[1]);
    let preparationLiters = Number(input[2]);
    let discount = Number(input[3]);

    let penPrice = penNum * 5.80;
    let markerPrice = markerNum * 7.20;
    let preparationPrice = preparationLiters * 1.20;
    let discountConvert = discount / 100;

    let totalSum = penPrice + markerPrice + preparationPrice;
    let endDiscount = totalSum * discountConvert;

    let endPrice = totalSum - endDiscount;

    console.log(endPrice);
}

suppliesForSchool(["4","2","5","13"]);

// Учебни материали
// Учебната година вече е започнала и отговорничката на 10Б клас - Ани трябва да купи определен брой пакетчета с химикали, пакетчета с маркери, както и препарат за почистване на дъска. Тя е редовна клиентка на една книжарница, затова има намаление за нея, което представлява някакъв процент от общата сума. Напишете програма, която изчислява колко пари ще трябва да събере Ани, за да плати сметката, като имате предвид следния ценоразпис: 
// •	Пакет химикали - 5.80 лв. 
// •	Пакет маркери - 7.20 лв. 
// •	Препарат - 1.20 лв (за литър)
// Вход
// От конзолата се четат 4 числа:
// •	Брой пакети химикали - цяло число в интервала [0...100]
// •	Брой пакети маркери - цяло число в интервала [0...100]
// •	Литри препарат за почистване на дъска - цяло число в интервала [0…50]
// •	Процент намаление - цяло число в интервала [0...100]
// Изход
// Да се отпечата на конзолата колко пари ще са нужни на Ани, за да си плати сметката.
