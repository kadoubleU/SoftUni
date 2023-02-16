function worldSnookerChampionship(input) {
    let championshipStage = input[0];
    let ticketType = input[1];
    let ticketNumber = Number(input[2]);
    let trophyPicture = input[3];

    let ticketPrice = 0;

    if(championshipStage === "Quarter final") {
        if(ticketType === "Standard") {
            ticketPrice = 55.50;
        }else if(ticketType === "Premium") {
            ticketPrice = 105.20;
        }else if(ticketType === "VIP") {
            ticketPrice = 118.90;
        }
    }else if(championshipStage === "Semi final") {
        if(ticketType === "Standard") {
            ticketPrice = 75.88;
        }else if(ticketType === "Premium") {
            ticketPrice = 125.22;
        }else if(ticketType === "VIP") {
            ticketPrice = 300.40;
        }
    }else if(championshipStage === "Final") {
        if(ticketType === "Standard") {
            ticketPrice = 110.10;
        }else if(ticketType === "Premium") {
            ticketPrice = 160.66;
        }else if(ticketType === "VIP") {
            ticketPrice = 400;
        }
    }

    let allTicketsPrice = ticketNumber * ticketPrice;

    let trophyPicPrice = 0;

    if(allTicketsPrice > 4000) {
        allTicketsPrice = allTicketsPrice - (allTicketsPrice * (25 / 100));
        trophyPicPrice = 0;
    }else if(allTicketsPrice > 2500) {
        allTicketsPrice = allTicketsPrice - (allTicketsPrice * (10 / 100));
        trophyPicPrice = 40;
    }else {
        trophyPicPrice = 40;
    }

    if(trophyPicture === "Y") {
        allTicketsPrice = allTicketsPrice + (ticketNumber * trophyPicPrice);
    }

    console.log(allTicketsPrice.toFixed(2));

}

worldSnookerChampionship(["Quarter final", "Standard", "11", "N"]);

// С наближаването на световното първенство по снукър в театъра Крусибъл в Шефилд, Англия, феновете нямат търпение да се сдобият с ценните билети. Заради големия наплив от хора, организаторите ви молят да напишете програма за продаване на билети, като се има предвид следния ценоразпис:
// 	Четвъртфинал	Полуфинал	Финал
// Стандартен	55.50 £/бр.	75.88 £/бр.	110.10 £/бр.
// Премиум	105.20 £/бр.	125.22 £/бр.	160.66 £/бр.
// ВИП	118.90 £/бр.	300.40 £/бр.	400 £/бр.
// При закупуване на билет, зрителят може да избере опция, снимка с трофея, на цена 40 лири.
// При достигане на определена сума има отстъпки:
// •	Над 4000 лири има 25% отстъпка и безплатни снимки с трофея (ако  опцията за снимки е избрана, таксата от 40 лири за билет не се включва)
// •	Над 2500 лири има 10% отстъпка
// При избрана опция за снимки с трофея, цената се начислява след изчисляването на отстъпките.
// Вход
// От конзолата се четат 3 реда:
// 1.	Етап на първенството – текст - “Quarter final ”, “Semi final” или “Final”
// 2.	Вид на билета – текст - “Standard”, “Premium” или “VIP”
// 3.	Брой билети – цяло число в интервала [1 … 30]
// 4.	Снимка с трофея – символ – 'Y' (да) или 'N' (не)
// Изход
// На конзолата се отпечатва 1 ред:
// •	"Цената, която трябва да се заплати, форматирана до втората цифра след десетичния знак"
