function godzillaVsKong(input) {
    let movieBudget = Number(input[0]);
    let walkOnNumber = Number(input[1]);
    let clothesPrice = Number(input[2]);

    let movieDecor = movieBudget * (10 / 100);

    if(walkOnNumber > 150) {
        clothesPrice = clothesPrice - (clothesPrice * (10 / 100));
    }

    let totalPriceForClothes = clothesPrice * walkOnNumber;

    let sum = movieDecor + totalPriceForClothes;

    if(movieBudget >= sum) {
        console.log("Action!");

        let leftedMoney = movieBudget - sum;
        console.log(`Wingard starts filming with ${leftedMoney.toFixed(2)} leva left.`);
    }else {
        console.log("Not enough money!");

        let neededMoney = sum - movieBudget;
        console.log(`Wingard needs ${neededMoney.toFixed(2)} leva more.`);
    }
}

godzillaVsKong(["9587.88","222","55.68"]);

// Снимките за дългоочаквания филм "Годзила срещу Конг" започват. Сценаристът Адам Уингард ви моли да напишете програма, която да изчисли, дали предвидените средства са достатъчни за снимането на филма. За снимките  ще бъдат нужни определен брой статисти, облекло за всеки един статист и декор.
// Известно е, че:
// •	Декорът за филма е на стойност 10% от бюджета. 
// •	При повече от 150 статиста,  има отстъпка за облеклото на стойност 10%.
// Вход
// От конзолата се четат 3 реда: 
// Ред 1.	Бюджет за филма – реално число в интервала [1.00 … 1000000.00]
// Ред 2.	Брой на статистите – цяло число в интервала [1 … 500]
// Ред 3.	Цена за облекло на един статист – реално число в интервала [1.00 … 1000.00]
// Изход
// На конзолата трябва да се отпечатат два реда:
// •	Ако  парите за декора и дрехите са повече от бюджета:
// o	"Not enough money!"
// o	"Wingard needs {парите недостигащи за филма} leva more."
// •	Ако парите за декора и дрехите са по малко или равни на бюджета:
// o	"Action!" 
// o	"Wingard starts filming with {останалите пари} leva left."
// Резултатът трябва да е форматиран до втория знак след десетичната запетая.
