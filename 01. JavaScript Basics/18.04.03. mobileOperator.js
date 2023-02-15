function mobileOperator(input) {
    let contractPeriod = input[0];
    let contractType = input[1];
    let addonInternet  = input[2];
    let monthsNumber = Number(input[3]);

    let planPrice = 0;

    if(contractPeriod === "one") {
        if(contractType === "Small") {
            planPrice += 9.98;
        }else if(contractType === "Middle") {
            planPrice += 18.99;
        }else if(contractType === "Large") {
            planPrice += 25.98;
        }else if(contractType === "ExtraLarge") {
            planPrice += 35.99;
        }

    }else if(contractPeriod === "two") {
        if(contractType === "Small") {
            planPrice += 8.58;
        }else if(contractType === "Middle") {
            planPrice += 17.09;
        }else if(contractType === "Large") {
            planPrice += 23.59;
        }else if(contractType === "ExtraLarge") {
            planPrice += 31.79;
        }
    }
    let totalPrice = 0;

    if (addonInternet === "yes" && contractPeriod === "one") {

        if (planPrice <= 10.00) {
            planPrice += 5.50;
        } else if (planPrice <= 30.00) {
            planPrice += 4.35;
        } else if (planPrice > 30.00) {
            planPrice += 3.85;
        }

        totalPrice = monthsNumber * planPrice;

    } else if(addonInternet === "no" && contractPeriod === "one") {
        totalPrice = monthsNumber * planPrice;

    }else if (addonInternet === "yes" && contractPeriod === "two") {
        if (planPrice <= 10.00) {
            planPrice += 5.50;
        } else if (planPrice <= 30.00) {
            planPrice += 4.35;
        } else if (planPrice > 30.00) {
            planPrice += 3.85;
        }
        totalPrice = monthsNumber * planPrice;
        totalPrice = totalPrice - (totalPrice * (3.75 / 100));

    }else if (addonInternet === "no" && contractPeriod === "two") {
    totalPrice = monthsNumber * planPrice;
    totalPrice = totalPrice - (totalPrice * (3.75 / 100));
    }

    console.log(`${totalPrice.toFixed(2)} lv.`); 
}

mobileOperator(["two",
"Small",
"yes",
"20"]);

// Мобилен оператор предлага договори с различна месечна такса в зависимост от срока - 1 или 2 години.  Да се напише програма, която изчислява дължимата сума, която трябва да се плати за определен брой месеци.
// срок / тип	Small	Middle	Large	ExtraLarge
// 1 година(one)	9.98 лв.	18.99 лв.	25.98 лв.	35.99 лв.
// 2 години(two)	8.58 лв.	17.09 лв.	23.59 лв.	31.79 лв.
// Условия:
// •	при добавен мобилен интернет, към таксата за един месец се добавя:
// o	при такса по-малка или равна на 10.00 лв.  5.50 лв.
// o	при такса по-малка или равна на 30.00 лв.  4.35 лв.
// o	при такса по-голяма от 30.00 лв.  3.85 лв.
// •	ако договорът e за две години, общата сума се намалява с 3.75%
// Вход
// От конзолата се четат 3 реда:
// 1.	Срок на договор – текст – "one", или "two"
// 2.	Тип на договор – текст – "Small",  "Middle", "Large"или "ExtraLarge"
// 3.	Добавен мобилен интернет – текст – "yes" или "no"
// 4.	Брой месеци за плащане - цяло число в интервала [1 … 24]
// Изход
// На конзолата се отпечатва 1 ред:
// •	Цената, която заплаща клиентът, форматирана до втория знак след десетичната запетая, в следния формат:  "{цената} lv."
