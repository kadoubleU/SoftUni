function familyTrip(input) {
    let budget = Number(input[0]);
    let overnightsStayNumber = Number(input[1]);
    let overnightsStayPrice = Number(input[2]);
    let additionalCostsPercent = Number(input[3]);

    if(overnightsStayNumber > 7) {
        overnightsStayPrice = overnightsStayPrice - (overnightsStayPrice * (5/100));
    }

    let overnightsStaySum = overnightsStayNumber * overnightsStayPrice;
    let additionalCostsSum = budget * (additionalCostsPercent / 100);

    let sum = overnightsStaySum + additionalCostsSum;

    if(sum <= budget) {
        let leftMoney = budget - sum;
        console.log(`Ivanovi will be left with ${leftMoney.toFixed(2)} leva after vacation.`);
    }else {
        let neededMoney = sum - budget;
        console.log(`${neededMoney.toFixed(2)} leva needed.`);
    }
}

familyTrip(["500","7","66","15"]);

// Семейство Иванови планират семейната си почивка. Вашата задача е да напишете програма, която да изчислява дали предвидения от тях бюджет ще им стигне, като знаете колко нощувки са планирали, каква е цената за нощувка и колко процента от бюджета са предвидили за допълнителни разходи. Трябва да се има предвид, че ако броят на нощувките е по-голям от 7, цената за нощувка се намаля с 5%.
// Вход
// От конзолата се четат 4 реда:
// •	Бюджетът, с който разполагат – реално число в интервала [1.00 … 10000.00]
// •	Брой нощувки – цяло число в интервала [0 … 1000]
// •	Цена за нощувка – реално число в интервала [1.00 … 500.00]
// •	Процент за допълнителни разходи – цяло число в интервала [0 … 100]
// Изход
// Отпечатването на конзолата зависи от резултата:
// •	Ако сумата е достатъчна:
// o	"Ivanovi will be left with {останали пари след почивката} leva after vacation."
// •	Ако НЕ е достигната сумата:
// o	"{парите нужни до достигане на целта} leva needed."
// Сума трябва да се форматира до втората цифра след десетичния знак.
