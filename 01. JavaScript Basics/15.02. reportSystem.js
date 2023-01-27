function reportSystem(input) {
    index = 0;
    let neededMoney = Number(input[index]);
    index++;

    let itemPrice = 0;
    let soldItemsMoneyCash = 0;
    let soldItemsMoneyCard = 0;
    let totalItemsMoney = 0;

    let cashMoney = 0;
    let cardMoney = 0;

    let cashTransactions = 0;
    let cardTransactions = 0;

    let averageCash = 0;
    let averageCard = 0;

    while(totalItemsMoney !== neededMoney || input[index] !== "End") {
        itemPrice = Number(input[index]);

        if(index % 2 !== 0) {
            cashMoney = Number(input[index]);
        }
        
        if(index % 2 === 0) {
            cardMoney = Number(input[index]);
        }

            if(totalItemsMoney >= neededMoney) {
                averageCash = soldItemsMoneyCash / cashTransactions;
                console.log(`Average CS: ${averageCash.toFixed(2)}`);

                averageCard = soldItemsMoneyCard / cardTransactions;
                console.log(`Average CC: ${averageCard.toFixed(2)}`);
                break;
            }else if(input[index] === "End") {
                console.log("Failed to collect required money for charity.");
                break;
            }

        if(cashMoney <= 100 && (index % 2 !== 0)) {
            console.log("Product sold!");
            soldItemsMoneyCash = soldItemsMoneyCash + itemPrice;
            totalItemsMoney = totalItemsMoney + itemPrice;
            cashTransactions++;
        }else if(cashMoney > 100 && (index % 2 !== 0)){
            console.log("Error in transaction!");
        }else if(cardMoney >= 10) {
            console.log("Product sold!");
            soldItemsMoneyCard = soldItemsMoneyCard + itemPrice;
            totalItemsMoney = totalItemsMoney + itemPrice;
            cardTransactions++;
        }else if(cardMoney < 10) {
            console.log("Error in transaction!");
        }

        index++;
    }
}

reportSystem(["600"
            ,"86"
            ,"150"
            ,"98"
            ,"227"
            ,"End"
            ]);

// Система за отчет 
// На благотворително събитие плащанията за закупените продукти винаги се редуват: плащане в брой и плащане с карта. Установени са следните правила за заплащане:
// •	Ако продуктът надвишава 100лв., за него не може да се плати в брой
// •	Ако продуктът е на цена под 10лв., за него не може да се плати с кредитна карта
// Програмата приключва или след като получим команда "End" или след като средствата бъдат събрани.
// Вход
// От конзолата се четат:
// •	Сумата, която се очаква да бъде събрана от продажбите - цяло число в интервала [1 ... 10000]
// На всеки следващ ред, до получаване на командата "End" или докато не се съберат нужните средства: цените на предметите, които ще бъдат закупени - цяло число в интервала [1 ... 500]
// Изход
// На конзолата да се отпечата:
// •	При успешна транзакция: "Product sold!"
// •	При неуспешна транзакция: "Error in transaction!"
// •	Ако сумата на всички закупени продукти надвиши или достигне очакваната сума, програмата трябва да приключи и на конзолата да се изпишат два реда:
// o	"Average CS: {средно плащане в кеш на човек}"
// o	"Average CC: {средно плащане с карта на човек}" 
//               Плащанията трябва да бъдат форматирани до втората цифра след десетичния знак.
// •	При получаване на команда "End", да се изпише един ред:
// o	"Failed to collect required money for charity."
