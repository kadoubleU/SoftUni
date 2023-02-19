function easterParty(input) {
    let guestNumber = Number(input[0]);
    let envelopeMoney = Number(input[1]);
    let budget = Number(input[2]);

    if(guestNumber >= 10 && guestNumber <= 15) {
        envelopeMoney = envelopeMoney - (envelopeMoney * (15 / 100));
    }else if(guestNumber > 15 && guestNumber <= 20) {
        envelopeMoney = envelopeMoney - (envelopeMoney * (20 / 100));
    }else if(guestNumber > 20) {
        envelopeMoney = envelopeMoney - (envelopeMoney * (25 / 100));
    }

    let cakePrice = budget * (10/100);

    let sum = (guestNumber * envelopeMoney) + cakePrice;

    if(sum <= budget) {
        let leftedMoney = budget - sum;
        console.log(`It is party time! ${leftedMoney.toFixed(2)} leva left.`);
    }else {
        let neededMoney = sum - budget;
        console.log(`No party! ${neededMoney.toFixed(2)} leva needed.`);
    }

}

easterParty(["24",
"35",
"550"]);


// Деси има рожден ден на Великден и иска да организира парти за своите приятели. Тя знае какъв е броят гости, които иска да покани и колко е кувертът за всеки гост. От броя гости зависи и каква отстъпка ще получи за куверта за един човек.
// Ако покани:
// •	Между 10 (вкл.) и 15 (вкл.) човека -> 15 % отстъпка от куверта за един човек
// •	Между 15 и 20 (вкл.) човека -> 20 % отстъпка от куверта за един човек
// •	Над 20 човека -> 25 % отстъпка от куверта за един човек
// Деси трябва да предвиди и закупуването на торта за партито. Цената на тортата е 10% от бюджета на Деси.
// Напишете програма, която изчислява дали бюджетът на Деси ще и е достатъчен за партито.
// Вход
// От конзолата се четат 3 реда:
// 1.	Брой гости – цяло число в интервала [1...99] 
// 2.	Цена на куверт за един човек – реално число в интервала [0.00 … 99.00]
// 3.	Бюджетът на Деси  – реално число в интервала [0.00 … 9999.00] 
// Изход
// На конзолата да се отпечата един ред:
// •	Ако бюджетът  е достатъчен:
// o	"It is party time! {останали пари} leva left."
// •	Ако бюджетът не е достатъчен:
// o	"No party! {недостигащи пари} leva needed."
// Резултатът да бъде форматиран до втория знак след десетичната запетая.
