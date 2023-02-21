function aluminumJoinery(input) {
    let joineryNumber = Number(input[0]);
    let size = input[1];
    let deliveryOption = input[2];

    let price = 0;

    if(joineryNumber < 10) {
        console.log(`Invalid order`);
    }else {
        if(size === "90X130") {
            price = 110;

            if(joineryNumber > 30 && joineryNumber < 60) {
                price = price - (price * (5 / 100));
            }else if(joineryNumber > 60) {
                price = price - (price * (8 / 100));
            }

        }else if(size === "100X150") {
            price = 140;

            if(joineryNumber > 40 && joineryNumber < 80) {
                price = price - (price * (6 / 100));
            }else if(joineryNumber > 80) {
                price = price - (price * (10 / 100));
            }

        }else if(size === "130X180") {
            price = 190;

            if(joineryNumber > 20 && joineryNumber < 50) {
                price = price - (price * (7 / 100));
            }else if(joineryNumber > 50) {
                price = price - (price * (12 / 100));
            }

        }else if(size === "200X300") {
            price = 250;

            if(joineryNumber > 25 && joineryNumber < 50) {
                price = price - (price * (9 / 100));
            }else if(joineryNumber > 50) {
                price = price - (price * (14 / 100));
            }

        }

        let sum = joineryNumber * price;

    if(deliveryOption === "With delivery") {
        sum = sum + 60;
    }

    if(joineryNumber > 99) {
        sum = sum - (sum * (4 / 100));
    }

    console.log(`${sum.toFixed(2)} BGN`);
    }
}

aluminumJoinery(["40", 
"90X130",
"Without delivery"]);

// Фирма-производител на алуминиева дограма приема поръчки за изработката и монтаж със следния ценоразпис за един брой. Фирмата приема само поръчки на едро (над 10 бр.). В зависимост от поръчания брой дограми, фирмата прави различна отстъпка на своите клиенти.
// Фирмата предлага също и доставка на поръчките си срещу 60 лв.
// Размер	Единична цена	Отстъпка от цената
// 90X130	110 лв.	 Над 30 броя – 5%
//  Над 60 броя – 8%
// 100X150	140 лв.	 Над 40 броя – 6%
//    Над 80 броя – 10%
// 130X180	190 лв.	 Над 20 броя – 7% 
//    Над 50 броя – 12%
// 200X300	250 лв.	 Над 25 броя – 9%
//    Над 50 броя – 14%
// Ако поръчката надвишава 99 броя  – върху крайната цена се начисляват допълнителни 4% отстъпка (след като се начисли цената за доставка, ако има такава).
// При поръчка под 10 бр. на конзолата да бъде изписано "Invalid order"
// Вход:
// Потребителят въвежда 3 реда:
// 1.	Брой дограми – цяло число в интервала [0..1000];
// 2.	Вид на дограмите – текст "90X130" или "100X150" или "130X180" или "200X300";
// 3.	Начин на получаване – текст
// •	С доставка - "With delivery" 
// •	Без доставка - "Without delivery"
// Изход:
// Извежда се едно число – стойността на поръчката, в следния формат:
// o	"{Обща стойност на поръчката} BGN"
// Резултатът да се форматира до втори знак след десетичната запетая.
