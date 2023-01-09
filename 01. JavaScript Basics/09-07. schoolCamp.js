function schoolCamp(input) {
    let season = input[0];
    let groupType = input[1];
    let studentsNumber = Number(input[2]);
    let nightsNumber = Number(input[3]);

    let sportType;
    let price;

    if(season === "Winter"){
        switch (groupType) {
            case "boys":
            case "girls":
                price = (nightsNumber * 9.60) * studentsNumber;

                if(groupType === "girls") {
                    sportType = "Gymnastics";

                }else if(groupType === "boys") {
                    sportType = "Judo";
                }
                
            break;
        
            case "mixed":
                price = (nightsNumber * 10) * studentsNumber;

                sportType = "Ski";
                
            break;
        }

    }else if(season === "Spring") {

        switch (groupType) {
            case "boys":
            case "girls":
                price = (nightsNumber * 7.20) * studentsNumber;

                if(groupType === "girls") {
                    sportType = "Athletics";

                }else if(groupType === "boys") {
                    sportType = "Tennis";
                }
                
            break;
        
            case "mixed":
                price = (nightsNumber * 9.50) * studentsNumber;

                sportType = "Cycling";
                
            break;
        }
    }else if(season === "Summer") {
        switch (groupType) {
            case "boys":
            case "girls":
                price = (nightsNumber * 15) * studentsNumber;

                if(groupType === "girls") {
                    sportType = "Volleyball";

                }else if(groupType === "boys") {
                    sportType = "Football";
                }
                
            break;
        
            case "mixed":
                price = (nightsNumber * 20) * studentsNumber;
                
                sportType = "Swimming";
            break;
        }

    }

    if(studentsNumber >= 50) {
        price = price - (price * (50/100));
    }else if(studentsNumber >= 20 && studentsNumber < 50) {
        price = price - (price * (15/100));
    }else if(studentsNumber >= 10 && studentsNumber < 20) {
        price = price - (price * (5/100));
    }

    console.log(`${sportType} ${price.toFixed(2)} lv.`);
}

schoolCamp(["Spring", "mixed", "17", "14"]);

// Ученически лагер
// Частно училище организира лагери за учениците по време на ваканциите. В зависимост от вида на ваканцията (пролетна, лятна или зимна) и вида на групата (момчета/момичета или смесена) цената на нощувката в хотела е различна, както и спортът, който ще практикуват учениците.
// 	Зимна ваканция	Пролетна ваканция	Лятна ваканция
// момчета/момичета	9.60	7.20	15
// смесена група	10	9.50	20
// Училището получава отстъпка от крайната цена, в зависимост от броя на настанените в хотела ученици:
// •	Ако броят на учениците е 50 или повече, училището получава 50% отстъпка
// •	Ако броят на учениците е 20 или повече и в същото време по-малък от 50, училището получава 15% отстъпка
// •	Ако броят на учениците е 10 или повече и в същото време по-малък от 20, училището получава 5% отстъпка
// В таблицата по-долу са дадени спортовете, които ще се практикуват в зависимост от вида на ваканцията и групата:
// 	Зимна ваканция	Пролетна ваканция	Лятна ваканция
// момичета	Gymnastics	Athletics	Volleyball
// момчета	Judo	Tennis	Football
// смесена група	Ski	Cycling	Swimming
// Да се напише програма, която пресмята цената, която ще заплати училището за нощувките и принтира спорта, който ще се практикува от учениците.
// Вход
// От конзолата се четат 4 реда:
// 1.	Сезонът – текст - “Winter”, “Spring” или “Summer”;
// 2.	Видът на групата – текст - “boys”, “girls” или “mixed”;
// 3.	Брой на учениците – цяло число в интервала [1 … 10000];
// 4.	Брой на нощувките – цяло число в интервала [1 … 100].
// Изход
// На конзолата се отпечатва 1 ред:
// •	Спортът, който са практикували учениците и цената за нощувките, която е заплатило училището, форматирана до втория знак след десетичната запетая, в следния формат:
// "{спортът} {цената} lv.“
