function hotelRoom(input) {
    let month = input[0];
    let nightsNumber = Number(input[1]);

    let studioTotalPrice;
    let apartmentTotalPrice;

    let studioPrice;
    let apartmentPrice;

    if(month === "May" || month === "October") {
        studioPrice = 50;
        apartmentPrice = 65;

        studioTotalPrice = studioPrice * nightsNumber;
        apartmentTotalPrice = apartmentPrice * nightsNumber;

        if(nightsNumber > 7 && nightsNumber <= 14) {
            studioPrice = studioPrice - (studioPrice * (5/100));
            studioTotalPrice = studioPrice * nightsNumber;
        } else if(nightsNumber > 14) {
            studioPrice = studioPrice - (studioPrice * (30/100));
            studioTotalPrice = studioPrice * nightsNumber;
            apartmentPrice = apartmentPrice - (apartmentPrice * (10/100));
            apartmentTotalPrice = apartmentPrice * nightsNumber;
        }

    }else if(month === "June" || month === "September") {
        studioPrice = 75.20;
        apartmentPrice = 68.70;

        studioTotalPrice = studioPrice * nightsNumber;
        apartmentTotalPrice = apartmentPrice * nightsNumber;
    
        if(nightsNumber > 14) {
            studioPrice = studioPrice - (studioPrice * (20/100));
            studioTotalPrice = studioPrice * nightsNumber;
            apartmentPrice = apartmentPrice - (apartmentPrice * (10/100));
            apartmentTotalPrice = apartmentPrice * nightsNumber;
        }
    } else if(month === "July" || month === "August") {
        studioPrice = 76;
        apartmentPrice = 77;

        studioTotalPrice = studioPrice * nightsNumber;
        apartmentTotalPrice = apartmentPrice * nightsNumber;
    
        if(nightsNumber > 14) {
            apartmentPrice = apartmentPrice - (apartmentPrice * (10/100));
            apartmentTotalPrice = apartmentPrice * nightsNumber;
        }

    } else if (month === "January" || month === "February" || month === "Marth" || month === "April" || month === "November" || month === "December") {
        if(nightsNumber > 14) {
            apartmentPrice = apartmentPrice - (apartmentPrice * (10/100));
            apartmentTotalPrice = apartmentPrice * nightsNumber;
        }
    }
    console.log(`Apartment: ${apartmentTotalPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioTotalPrice.toFixed(2)} lv.`);
}

hotelRoom(["August",
"20"])


;

// Хотел предлага 2 вида стаи: студио и апартамент. Напишете функция, която изчислява цената за целия престой за студио и апартамент. Цените зависят от месеца на престоя:
// Май и октомври	Юни и септември	Юли и август
// Студио – 50 лв./нощувка	Студио – 75.20 лв./нощувка	Студио – 76 лв./нощувка
// Апартамент – 65 лв./нощувка	Апартамент – 68.70 лв./нощувка	Апартамент – 77 лв./нощувка
// Предлагат се и следните отстъпки:
// •	За студио, при повече от 7 нощувки през май и октомври : 5% намаление.
// •	За студио, при повече от 14 нощувки през май и октомври : 30% намаление.
// •	За студио, при повече от 14 нощувки през юни и септември: 20% намаление.
// •	За апартамент, при повече от 14 нощувки, без значение от месеца : 10% намаление.
// Вход
// Получават се 2 аргумента:
// •	 месецът – May, June, July, August, September или October
// •	броят на нощувките – цяло число в интервала [0 … 200]
// Изход
// Да се отпечатат на конзолата 2 реда:
// •	На първия ред: “Apartment: {цена за целият престой} lv.”
// •	На втория ред: “Studio: {цена за целият престой} lv.”
// Цената за целия престой форматирана с точност до два знака след десетичната запетая.
