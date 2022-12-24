function pets(input) {
    let daysNumber = Number(input[0]);
    let leftFoodInKg = Number(input[1]);
    let dogFoodAtDayInKg = Number(input[2]);
    let catFoodAtDayInKg = Number(input[3]);
    let turtleFoodAtDayInGrams = Number(input[4]);

    let turtleFoodInKg = turtleFoodAtDayInGrams / 1000;

    let totalFoodNeeded = (daysNumber * dogFoodAtDayInKg) + (daysNumber * catFoodAtDayInKg) + (daysNumber * turtleFoodInKg);

    if (leftFoodInKg >= totalFoodNeeded) {

        let leftFood = leftFoodInKg - totalFoodNeeded;
        console.log(`${Math.floor(leftFood)} kilos of food left.`);
    }else {

        let neededFood = totalFoodNeeded - leftFoodInKg;
        console.log(`${Math.ceil(neededFood)} more kilos of food are needed.`);
    }

}

pets([5, 10, 2.1, 0.8, 321]);

// Домашни любимци
// Марина обича да пътува. Тя има 3 домашни любимеца (куче, котка и костенурка). Когато заминава на пътешествие трябва да съобрази колко храна да им остави, за да не останат гладни. Напишете програма, която пресмята колко килограма храна ще изядат всички за времето, в което Марина отсъства и дали оставената храна от нея ще им е достатъчна. Всяко животно изяжда определено количество храна на ден.
// Вход
// От конзолата се четат пет реда:
// •	Първи ред – брой дни – цяло число в интервал [1…5000]
// •	Втори ред – оставена храна в килограми – цяло число в интервал [0…100000]
// •	Трети ред – храна на ден за кучето в килограми – реално число в интервал [0.00…100.00]
// •	Четвърти ред – храна на ден за котката в килограми– реално число в интервал [0.00…100.00]
// •	Пети ред – храна на ден за костенурката в грамове – реално число в интервал [0.00…10000.00]
// Изход
// На конзолата трябва да се отпечата на един ред:
// •	Ако оставената храна Е достатъчна:
// o	"{килограма остатък} kilos of food left."
// 	Резултатът трябва да е закръглен към по-ниското цяло число
// •	Ако оставената храна НЕ Е достатъчна:
// o	“{килограма недостигат} more kilos of food are needed.”
// 	Резултатът трябва да е закръглен към по-високото цяло число
