function summerOutfit(input) {
    let degrees = Number(input[0]);
    let dayTime = input[1];

    let outfit;
    let shoes;

    switch(dayTime) {
        case "Morning":
            if(degrees >= 10 && degrees <= 18) {
                outfit = "Sweatshirt";
                shoes = "Sneakers";
            }else if(degrees > 18 && degrees <= 24) {
                outfit = "Shirt";
                shoes = "Moccasins";
            }else if (degrees >= 25) {
                outfit = "T-Shirt";
                shoes = "Sandals";
            }
        break;

        case "Afternoon":
            if(degrees >= 10 && degrees <= 18) {
                outfit = "Shirt";
                shoes = "Moccasins";
            }else if(degrees > 18 && degrees <= 24) {
                outfit = "T-Shirt";
                shoes = "Sandals";
            }else if (degrees >= 25) {
                outfit = "Swim Suit";
                shoes = "Barefoot";
            }
        break;

        case "Evening":
            outfit = "Shirt";
            shoes = "Moccasins";
        break;
    }

    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
}

summerOutfit(["28","Evening"]);

// Лятно облекло
// Лято е с много променливо време и Виктор има нужда от вашата помощ. Напишете функция,  която спрямо времето от денонощието и градусите да препоръча на Виктор какви дрехи да си облече. Вашия приятел има различни планове за всеки етап от деня, които изискват и различен външен вид, тях може да видите от таблицата.
// Функцията получава два аргумента:
// •	Градусите - цяло число в интервала [10…42]
// •	Текст, време от денонощието - с възможности - "Morning", "Afternoon", "Evening"
// Време от денонощието / градуси	
// Morning	
// Afternoon	
// Evening
// 10 <= градуси <= 18	Outfit = Sweatshirt
// Shoes = Sneakers	Outfit = Shirt
// Shoes = Moccasins	Outfit = Shirt
// Shoes = Moccasins
// 18 < градуси <= 24	Outfit = Shirt
// Shoes = Moccasins	Outfit = T-Shirt
// Shoes = Sandals	Outfit = Shirt
// Shoes = Moccasins
// градуси >= 25	Outfit = T-Shirt
// Shoes = Sandals	Outfit = Swim Suit
// Shoes = Barefoot	Outfit = Shirt
// Shoes = Moccasins


// Да се отпечата на конзолата на един ред: "It's {градуси} degrees, get your {облекло} and {обувки}."
