function cinemaVoucher(input) {
     index = 0;
     let voucherValue = Number(input[index]);
     index++;

     let movieTicketNumber = 0;
     let otherPurchasesNumber = 0;

     while(voucherValue >= 0 && input[index] !== "End") {
        let purchaseType = input[index];    
        
        let purchaseValue = 0;
        let movieValue = 0;

        if(purchaseType.length > 8) {
            //movie Ticket
           let movieChar1 = Number(purchaseType.charCodeAt(0));
           let movieChar2 = Number(purchaseType.charCodeAt(1));
            
           movieValue = movieChar1 + movieChar2;

           if(voucherValue < movieValue) {
            
            break;
        }

        voucherValue = voucherValue - movieValue;
        movieTicketNumber++;

        }else if(purchaseType.length <= 8) {
            purchaseValue = purchaseType.charCodeAt(0);
            
            if(voucherValue < purchaseValue) {
            
                break;
            }
            voucherValue = voucherValue - purchaseValue;
            otherPurchasesNumber++;
        }

        index++;
     }

     console.log(movieTicketNumber);
     console.log(otherPurchasesNumber);
}

cinemaVoucher(["300",
"Captain Marvel",
"popcorn",
"Pepsi"])


;

// Любо е голям почитател на киното и редовно ходи на прожекции и участва в томболи, от които често печели ваучери за кино. Вашата задача е да напишете програма, която да изчислява колко покупки от киното може да си купи Любо със спечеленият ваучер. Ако името на покупката съдържа повече от 8 символа, то тя е билет за филм, а нейната цена представлява сумата на ASCII символите от първите ѝ два символа. Ако името на покупката съдържа 8 или по-малко символа, нейната цена е равна на стойността на първия ASCII символ в името. Любо въвежда името на покупките, които желае, докато не въведе "End" или не въведе покупка, чиято стойност е по-голяма от останалата сума на ваучера. 
// Вход 
// Първоначално се чете един ред:
// •	Стойността на ваучера – цяло число в интервала [1…100000]
// След това до получаване на команда "End" или до изчерпването на ваучера, се чете по един ред:
// o	Покупката, която Любо е избрал – текст
// Изход
// Програмата приключва при въвеждане на команда "End" или при покупка чиято стойност е по-голяма от останалите пари от ваучера. На конзолата трябва да се напечатат три реда:
// •	"{брои закупени билети}"
// •	"{брой закупени други покупки}"
