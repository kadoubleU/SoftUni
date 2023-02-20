function careOfPuppy(input) {
    let index = 0;
    let buyedFood = Number(input[index]);
    index++;

    let foodInGrams = buyedFood * 1000;

    let eatedFood = 0;

    let totalEatedFood = 0;
    while (input[index] !== "Adopted") {
        eatedFood = Number(input[index]);
        index++;

        totalEatedFood += eatedFood;
    }

    if(totalEatedFood <= foodInGrams) {
        let leftedFood = foodInGrams - totalEatedFood;
        console.log(`Food is enough! Leftovers: ${leftedFood} grams.`);
    }else {
        let neededFood = totalEatedFood - foodInGrams;
        console.log(`Food is not enough. You need ${neededFood} grams more.`);
    }
}

careOfPuppy(["2",
"999",
"456",
"999",
"999",
"123",
"456",
"Adopted"]);

// Ани намира кученце, за което ще се грижи, докато се намери някой да го осинови. То изяжда дневно определено количество храна. Да се напише програма, която проверява дали количеството храна, което е закупено за кученцето, ще е достатъчно докато кученцето бъде осиновено.
// Вход
// От конзолата се прочитат:
// •	Закупеното количество храна за кученцето в килограми – цяло число в интервала [1 …100]
// •	На всеки следващ ред до получаване на команда Adopted ще получавате колко грама изяжда кученцето на всяко хранене - цяло число в интервала [10 …1000]
// Изход
// На конзолата се отпечатва 1 ред:
// •	Ако количеството храна е достатъчно да се отпечата:
//  	"Food is enough! Leftovers: {останала храна} grams." 
// •	Ако количеството храна не е достатъчно да се отпечата:
//  	"Food is not enough. You need {нужно количество храна} grams more." 
