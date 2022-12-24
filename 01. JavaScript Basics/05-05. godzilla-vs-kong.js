function godzillaVsKong(input) {
    let movieBudget = Number(input[0]);
    let walkingGentlemansNum = Number(input[1]);
    let clothesPrice = Number(input[2]);

    let movieDecorPrice = movieBudget * (10/100);
    let totalClothesPrice = clothesPrice * walkingGentlemansNum;

    if (walkingGentlemansNum > 150) {
        totalClothesPrice = totalClothesPrice - (totalClothesPrice * (10/100));
    }

    let totalExpenses = movieDecorPrice + totalClothesPrice;

    if(totalExpenses > movieBudget) {
        console.log("Not enough money!");

        let missingMoney = totalExpenses - movieBudget;
        console.log(`Wingard needs ${missingMoney.toFixed(2)} leva more.`);
    }else {
        console.log("Action!");

        let leftMoney = movieBudget - totalExpenses;

        console.log(`Wingard starts filming with ${leftMoney.toFixed(2)} leva left.`);
    }
}

godzillaVsKong(["9587.88","222","55.68"]);

// Снимките за дългоочаквания филм "Годзила срещу Конг" започват. Сценаристът Адам Уингард ви моли да напишете функция, която да изчисли, дали предвидените средства са достатъчни за снимането на филма. За снимките  ще бъдат нужни определен брой статисти, облекло за всеки един статист и декор.
// Известно е, че:
// •	Декорът за филма е на стойност 10% от бюджета. 
// •	При повече от 150 статиста,  има отстъпка за облеклото на стойност 10%.
// Вход
// Функцията получава 3 аргумента:
// 1.	Бюджет за филма – реално число в интервала [1.00 … 1000000.00]
// 2.	Брой на статистите – цяло число в интервала [1 … 500]
// 3.	Цена за облекло на един статист – реално число в интервала [1.00 … 1000.00]
// Изход
// На конзолата трябва да се отпечатат два реда:
// •	Ако  парите за декора и дрехите са повече от бюджета:
// o	"Not enough money!"
// o	"Wingard needs {парите недостигащи за филма} leva more."
// •	Ако парите за декора и дрехите са по малко или равни на бюджета:
// o	"Action!" 
// o	"Wingard starts filming with {останалите пари} leva left."
// Резултатът трябва да е форматиран до втория знак след десетичната запетая.
