function fuelTankSec(input) {
    let fuelType = input[0];
    let fuelQuantity = Number(input[1]);
    let clubCard = input[2];

    if(fuelType === "Gas") {
        let fuelPrice = fuelQuantity * 0.93;

        if (clubCard === "Yes") {
            fuelPrice = fuelPrice - (fuelQuantity * 0.08);

            if(fuelQuantity >= 20 && fuelQuantity <= 25) {
                fuelPrice = fuelPrice - (fuelPrice * (8/100));

            } else if (fuelQuantity > 25) {
                fuelPrice = fuelPrice - (fuelPrice * (10/100));
            }
          
            console.log(`${fuelPrice.toFixed(2)} lv.`)
        }else if(clubCard === "No") {
            if(fuelQuantity >= 20 && fuelQuantity <= 25) {
                fuelPrice = fuelPrice - (fuelPrice * (8/100));

            } else if (fuelQuantity > 25) {
                fuelPrice = fuelPrice - (fuelPrice * (10/100));
            }
          
            console.log(`${fuelPrice.toFixed(2)} lv.`)
        }
    }else if(fuelType === "Gasoline") {
        let fuelPrice = fuelQuantity * 2.22;

        if (clubCard === "Yes") {
            fuelPrice = fuelPrice - (fuelQuantity * 0.18);

            if(fuelQuantity >= 20 && fuelQuantity <= 25) {
                fuelPrice = fuelPrice - (fuelPrice * (8/100));

            } else if (fuelQuantity > 25) {
                fuelPrice = fuelPrice - (fuelPrice * (10/100));
            }
          
            console.log(`${fuelPrice.toFixed(2)} lv.`)
        }else if(clubCard === "No") {
            if(fuelQuantity >= 20 && fuelQuantity <= 25) {
                fuelPrice = fuelPrice - (fuelPrice * (8/100));

            } else if (fuelQuantity > 25) {
                fuelPrice = fuelPrice - (fuelPrice * (10/100));
            }
          
            console.log(`${fuelPrice.toFixed(2)} lv.`)
        }
    }else if(fuelType === "Diesel") {
        let fuelPrice = fuelQuantity * 2.33;

        if (clubCard === "Yes") {
            fuelPrice = fuelPrice - (fuelQuantity * 0.12);

            if(fuelQuantity >= 20 && fuelQuantity <= 25) {
                fuelPrice = fuelPrice - (fuelPrice * (8/100));

            } else if (fuelQuantity > 25) {
                fuelPrice = fuelPrice - (fuelPrice * (10/100));
            }
          
            console.log(`${fuelPrice.toFixed(2)} lv.`)
        }else if(clubCard === "No") {
            if(fuelQuantity >= 20 && fuelQuantity <= 25) {
                fuelPrice = fuelPrice - (fuelPrice * (8/100));

            } else if (fuelQuantity > 25) {
                fuelPrice = fuelPrice - (fuelPrice * (10/100));
            }
          
            console.log(`${fuelPrice.toFixed(2)} lv.`)
        }
    }
}

fuelTankSec(["Diesel", 19, "No"]);

// Резервоар за гориво -  част 2
// Напишете програма, която да изчислява, колко ще струва на един шофьор да напълни резервоара на автомобила си, като знаете – какъв тип гориво зарежда, каква е цената за литър гориво и дали разполага с карта за отстъпки. Цените на горивата са както следва: 
// •	Бензин – 2.22 лева за един литър, 
// •	Дизел – 2.33 лева за един литър
// •	Газ – 0.93 лева за литър
// Ако водача има карта за отстъпки,  той се възползва от следните намаления за литър гориво: 18 ст. за литър бензин, 12 ст. за литър дизел и 8 ст. за литър газ. 
// Ако шофьора е заредил между 20 и 25 литра включително, той получава 8 процента отстъпка от крайната цена, при повече от 25 литра гориво, той получава 10 процента отстъпка от крайната цена.
// Вход
// Входът се чете от конзолата и се състои от 3 реда:
// •	Типа на горивото – текст с възможности: "Gas", "Gasoline" или "Diesel"
// •	Количество гориво – реално число в интервала [1.00 … 50.00]
// •	Притежание на клубна карта – текст с възможности: "Yes" или "No"
// Изход
// На конзолата трябва да се отпечата един ред.
// •	"{крайната цена на горивото} lv."
// Цената на горивото да бъде форматираната до втората цифра след десетичния знак.
