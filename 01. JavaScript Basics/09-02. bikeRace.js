function bikeRace(input) {
    let youngBicycleNumber = Number(input[0]);
    let oldBicycleNumber = Number(input[1]);
    let trackType = input[2];

    let juniors;
    let seniors;

    let totalSum;

    switch (trackType) {
        case "trail":
            juniors = youngBicycleNumber * 5.50;
            seniors = oldBicycleNumber * 7;

            totalSum = (juniors + seniors) - ((juniors + seniors) * (5/100));
        break;

        case "cross-country":
            juniors = youngBicycleNumber * 8;
            seniors = oldBicycleNumber * 9.50;

            let totalParticipants = youngBicycleNumber + oldBicycleNumber;

            if(totalParticipants >= 50) {
                totalSum = (juniors + seniors) - ((juniors + seniors) * (25/100));
                totalSum = totalSum - (totalSum * (5/100));
            }else{
                totalSum = (juniors + seniors) - ((juniors + seniors) * (5/100));
            }
        break;

        case "downhill":
            juniors = youngBicycleNumber * 12.25;
            seniors = oldBicycleNumber * 13.75;

            totalSum = (juniors + seniors) - ((juniors + seniors) * (5/100));
        break;

        case "road":
            juniors = youngBicycleNumber * 20;
            seniors = oldBicycleNumber * 21.50;

            totalSum = (juniors + seniors) - ((juniors + seniors) * (5/100));
        break;
    }

    console.log(totalSum.toFixed(2));
}

bikeRace(["3", "40", "road"]);

// 2.	Вело състезание
// Предстои Вело състезание за благотворителност в което участниците са разпределени в младша("juniors") и старша("seniors") група. Парите се набавят от таксата за участие на велосипедистите. Според възрастовата група и вида на трасето на което ще се провежда състезанието, таксата е различна.
// Група	trail	cross-country	downhill	road
// juniors	5.50	8	12.25	20
// seniors	7	9.50	13.75	21.50
// Ако в "cross-country" състезанието се съберат 50 или повече участника(общо младши и старши), таксата  намалява с 25%. Организаторите отделят 5% процента от събраната сума за разходи.
// Вход
// От конзолата се четат 2 числа и един стринг, всяко на отделен ред:
// •	Първият ред – броят младши велосипедисти. Цяло число в интервала [1…100]
// •	Вторият ред – броят старши велосипедисти. Цяло число в интервала [1… 100]
// •	Третият ред – вид трасе – "trail", "cross-country", "downhill" или "road"
// Изход
// Да се отпечата на конзолата едно число:
// "{дарената сума}" - форматирана с точност до 2 знака след десетичната запетая.
