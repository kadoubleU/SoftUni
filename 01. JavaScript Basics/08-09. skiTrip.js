function skiTrip(input) {
    let stayDays = Number(input[0]);
    let roomType = input[1];
    let rating = input[2];

    let hotelPriceForStaying = 0;

    switch (roomType) {
        case "room for one person":

        hotelPriceForStaying = (stayDays - 1) * 18.00;
            
        break;
    
        case "apartment":

        hotelPriceForStaying = (stayDays - 1) * 25.00;
        
            if(stayDays < 10) {
                hotelPriceForStaying = hotelPriceForStaying - (hotelPriceForStaying * (30/100));
            }else if(stayDays == 10 || stayDays < 15) {
                hotelPriceForStaying = hotelPriceForStaying - (hotelPriceForStaying * (35/100));
            }else if(stayDays > 15) {
                hotelPriceForStaying = hotelPriceForStaying - (hotelPriceForStaying * (50/100));
            }
        break;

        case "president apartment":
            hotelPriceForStaying = (stayDays - 1) * 35.00;
            if(stayDays < 10) {
                hotelPriceForStaying = hotelPriceForStaying - (hotelPriceForStaying * (10/100));
            }else if(stayDays == 10 || stayDays < 15) {
                hotelPriceForStaying = hotelPriceForStaying - (hotelPriceForStaying * (15/100));
            }else if(stayDays > 15) {
                hotelPriceForStaying = hotelPriceForStaying - (hotelPriceForStaying * (20/100));
            }
        break;
    }

    if(rating === "positive") {
        hotelPriceForStaying = hotelPriceForStaying + (hotelPriceForStaying * (25/100));
    }else if(rating === "negative") {
        hotelPriceForStaying = hotelPriceForStaying - (hotelPriceForStaying * (10/100));
    }

    console.log(hotelPriceForStaying.toFixed(2));
}

skiTrip(["2","apartment","positive"]);

// Атанас решава да прекара отпуската си в Банско и да кара ски. Преди да отиде обаче, трябва да резервира хотел и да изчисли колко ще му струва престоя. Налични са следните видове помещения, със следните цени за престой:
// 	"room for one person" – 18.00 лв за нощувка
// 	"apartment" – 25.00 лв за нощувка 
// 	"president apartment" – 35.00 лв за нощувка
// Според броят на дните, в които ще остане в хотела (пример: 11 дни = 10 нощувки) и видът на помещението, което ще избере, той може да ползва различно намаление. 
// Намаленията са както следва:
// вид помещение	по-малко от 10 дни	между 10 и 15 дни	повече от 15 дни
// room for one person	не ползва намаление	не ползва намаление	не ползва намаление
// apartment	30% от крайната цена	35% от крайната цена	50% от крайната цена
// president apartment	10% от крайната цена	15% от крайната цена	20% от крайната цена
// След престоя, оценката на Атанас за услугите на хотела може да е позитивна (positive) или негативна (negative) . Ако оценката му е позитивна, към цената с вече приспаднатото намаление Атанас добавя 25% от нея. Ако оценката му е негативна приспада от цената 10%.
// Вход
// Входът се чете от конзолата и се състои от три реда:
// •	Първи ред - дни за престой - цяло число в интервала [0...365]
// •	Втори ред - вид помещение - "room for one person", "apartment" или "president apartment"
// •	Трети ред - оценка - "positive"  или "negative"
// Изход
// На конзолата трябва да се отпечата един ред:
// •	Цената за престоят му в хотела, форматирана до втория знак след десетичната запетая.
