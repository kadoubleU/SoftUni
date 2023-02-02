function travelAgency(input) {
    let townName = input[0];
    let packType = input[1];
    let vipDiscount = input[2];
    let stayDays = Number(input[3]);

    let priceForDay = 0;

    if (townName === "Bansko") {
        if (packType === "withEquipment") {
            priceForDay = 100.00;

            if (vipDiscount === "yes") {
                priceForDay = priceForDay - (priceForDay * (10 / 100));
            }
        } else if (packType === "noEquipment") {
            priceForDay = 80.00;

            if (vipDiscount === "yes") {
                priceForDay = priceForDay - (priceForDay * (5 / 100));
            }
        }
    } else if (townName === "Borovets") {
        if (packType === "withEquipment") {
            priceForDay = 100.00;

            if (vipDiscount === "yes") {
                priceForDay = priceForDay - (priceForDay * (10 / 100));
            }
        } else if (packType === "noEquipment") {
            priceForDay = 80.00;

            if (vipDiscount === "yes") {
                priceForDay = priceForDay - (priceForDay * (5 / 100));
            }
        }
    } else if (townName === "Varna") {
        if (packType === "withBreakfast") {
            priceForDay = 130.00;

            if (vipDiscount === "yes") {
                priceForDay = priceForDay - (priceForDay * (12 / 100));
            }
        } else if (packType === "noBreakfast") {
            priceForDay = 100.00;

            if (vipDiscount === "yes") {
                priceForDay = priceForDay - (priceForDay * (7 / 100));
            }
        } 
    } else if (townName === "Burgas") {
        if (packType === "withBreakfast") {
            priceForDay = 130.00;

            if (vipDiscount === "yes") {
                priceForDay = priceForDay - (priceForDay * (12 / 100));
            }
        } else if (packType === "noBreakfast") {
            priceForDay = 100.00;

            if (vipDiscount === "yes") {
                priceForDay = priceForDay - (priceForDay * (7 / 100));
            }
        } 
    } 

    let sum = stayDays * priceForDay;

if (stayDays > 7) {
    sum = sum - priceForDay;
}

if (townName !== "Bansko" && townName !== "Borovets" && townName !== "Varna" && townName !== "Burgas") {
    console.log("Invalid input!");

} else if (packType !== "noEquipment" && packType !== "withEquipment" && packType !== "noBreakfast" && packType !== "withBreakfast") {
    console.log("Invalid input!");

}else if (stayDays < 1) {
    console.log(`Days must be positive number!`);
} else {
    console.log(`The price is ${sum.toFixed(2)}lv! Have a nice time!`);
}
    
}

travelAgency(["Burgas","noBreakfast","no","4"]);


;

// Туристическа агенция има нужда от система за изчисляване на дължимата сума при резервация. В зависимост от различните дестинации и различните пакети, цената е различна.
// Цените за ден са следните:
// Цена за ден	Банско/Боровец	Варна/Бургас
// 	с екипировка	без екипировка	със закуска	без закуска
// 	100лв.	80лв	130лв.	100лв.
// VIP отстъпка	10%	5%	12%	7%
// Ако клиентът е заявил престой повече от 7 дни, получава единия ден безплатно.
// Вход
// От конзолата се четат 4 реда:
// 1.	Име на града - текст с възможности ("Bansko",  "Borovets", "Varna" или "Burgas")
// 2.	Вид на пакета - текст с възможности ("noEquipment",  "withEquipment", "noBreakfast" или "withBreakfast")
// 3.	Притежание на VIP отстъпка - текст с възможности  "yes" или "no"
// 4.	Дни за престой - цяло число в интервала [-10000 … 10000]
// Изход
// На конзолата се отпечатва 1 ред:
// •	Когато потребителят е въвел всички данни правилно, отпечатваме:
// "The price is {цената, форматирана до втория знак}lv! Have a nice time!"
// •	Ако потребителят е въвел по-малко от 1 ден за престой, отпечатваме:
// "Days must be positive number!"
// •	Когато при въвеждането на града или вида на пакета се въведат невалидни данни, отпечатваме: "Invalid input!"
