function club(input) {
    index = 0;
    let wantedProfit = Number(input[index]);
    index++;

    let coctailName = input[index];
    index++;

    let profit = 0;
    let sum = 0;

    let coctailNumber = 0;

    let coctailPrice;

    let neededMoney = 0;

    while(coctailName !== "Party!") {
        
        coctailNumber = Number(input[index]);
        index++;
        coctailPrice = coctailName.length;

        sum = coctailNumber * Number(coctailPrice);

        if(sum % 2 !== 0) {
            sum = sum - (sum * (25 / 100));
        }

        profit = profit + sum;

        if(profit >= wantedProfit) {
            break;
        }
       
        coctailName = input[index];
        index++;

    }

    if(coctailName === "Party!") {
        neededMoney = wantedProfit - profit;
        console.log(`We need ${neededMoney.toFixed(2)} leva more.`);
        console.log(`Club income - ${profit.toFixed(2)} leva.`);
    }else if(profit >= wantedProfit) {
        console.log("Target acquired.");
        console.log(`Club income - ${profit.toFixed(2)} leva.`);
    }

}

club(["100",
"Sidecar",
"7",
"Mojito",
"5",
"White Russian",
"10"])
;

// Времето се затопля и клубовете пускат обещаващи промоции. Напише програма, която да изчислява приходите на един клуб за вечерта и дали е достигната желаната печалба, като знаете следните условия: цената на един коктейл е дължината неговото име. Ако цената на една поръчка е нечетно число, има 25% отстъпка от цената на поръчката. 
// Вход
// От конзолата се четат:
// •	На първия ред – желаната печалба на клуба - реално число в интервала [1.00... 15000.00]
// Поредица от два реда до получаване на командата "Party!" или до достигане на желаната печалба:
// o	Име на коктейла – текст
// o	Брой на коктейлите за поръчката – цяло число в интервала [1… 50]
// Изход
// На конзолата първо да се отпечата един ред:
// •	При получена команда "Party!":
//  "We need {недостигаща сума} leva more."
// •	При достигане на желаната печалба:
// 	"Target acquired."
// След това да се отпечата:
// 	"Club income - {приходи от клуба} leva."
// Парите да бъдат форматирани до втората цифра след десетичния знак.

