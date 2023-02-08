function movieDestination(input) {
    let movieBudget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let daysNumber = Number(input[3]);

    let dayPrice = 0;

    if(destination === "Dubai") {
        if(season === "Winter") {
            dayPrice = 45000;

        }else if(season === "Summer") {
            dayPrice = 40000;
        }   

    }else if(destination === "Sofia") {
        if(season === "Winter") {
            dayPrice = 17000;

        }else if(season === "Summer") {
            dayPrice = 12500;
        }
            
    }else if(destination === "London") {
        if(season === "Winter") {
            dayPrice = 24000;

        }else if(season === "Summer") {
            dayPrice = 20250;   
        } 
    }

    let sum = daysNumber * dayPrice;

    if(destination === "Dubai") {
        sum = sum - (sum * (30/100));

    }else if(destination === "Sofia") {
        sum = sum + (sum * (25/100));
    }

    if(movieBudget >= sum) {
        let leftMoney = movieBudget - sum;
        console.log(`The budget for the movie is enough! We have ${leftMoney.toFixed(2)} leva left!`);
    }else {
        let neededMoney = sum - movieBudget;
        console.log(`The director needs ${neededMoney.toFixed(2)} leva more!`);
    }
}

movieDestination(["200000",
"London",
"Summer",
"7"]);


// Режисьорът на голяма кино продукция иска да разбере дали бюджетът, който са му отпуснали ще стигне за заснемане на филма. Помогнете му, като напишете програма, която изчислява колко ще му струва да заснеме филма, като знаете колко излиза един снимачен ден. Цената за един ден се определя от сезона и дестинацията:
// Дестинация
// Сезон	Dubai	Sofia	London
// Winter	45 000 lv.	17 000 lv.	24 000 lv.
// Summer	40 000 lv.	12 500 lv.	20 250 lv.
// Съществуват следните данъчни облекчения/облагания:
// •	Ако дестинацията е Дубай – 30% отстъпка от крайната цена
// •	Ако дестинацията е София – цената се оскъпява с 25%
// Вход
// От конзолата се четат 4 реда:
// 1.	Бюджет на филма – реално число в диапазона [100 000.0… 2 000 000.0]
// 2.	Дестинация – текст, с възможности "Dubai", "Sofia" и "London"
// 3.	Сезон – текст, с възможности "Summer" и "Winter"
// 4.	Брой дни  – цяло число в диапазона [1… 40]
// Изход
// На конзолата да се отпечата един ред:
// •	Ако бюджета е достатъчен: 
//      "The budget for the movie is enough! We have {остатък от бюджета} leva left!"
// •	  Ако бюджета НЕ е достатъчен:
//      "The director needs {нужна сума} leva more!"
// Резултатът да се закръгли до втората цифра след десетичния знак.
