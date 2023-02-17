function tennisRanklist(input) {
    let index = 0;
    let tournamentsNumber = Number(input[index]);
    index++;
    let startPointsInRanglist = Number(input[index]);
    index++;

    let reachedStage = "";

    let points = 0;
    let wins = 0;

    let middlePoints = 0;

    while(index < input.length) {
        reachedStage = input[index];
        index++;

        if(reachedStage === "W") {
            points = 2000;
            wins++;

        }else if(reachedStage === "F") {
            points = 1200;

        }else if(reachedStage === "SF") {
            points = 720;
        }

        middlePoints += points;
    }

    let totalPoints = startPointsInRanglist + middlePoints;
    let averageScore = middlePoints / tournamentsNumber;
    let percentWins = (wins / tournamentsNumber) * 100;

    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${Math.floor(averageScore)}`);
    console.log(`${percentWins.toFixed(2)}%`);

}

tennisRanklist(["4",
"750",
"SF",
"W",
"SF",
"W"]);

// Григор Димитров е тенисист, чиято следваща цел е изкачването в световната ранглиста по тенис за мъже. 
// През годината Гришо участва в определен брой турнири, като за всеки турнир получава точки, които зависят от позицията, на която е завършил в турнира. Има три варианта за завършване на турнир:
// 	W - ако е победител получава 2000 точки
// 	F - ако е финалист получава 1200 точки
// 	SF - ако е полуфиналист получава 720 точки
// Напишете програма, която изчислява колко ще са точките на Григор след изиграване на всички турнири, като знаете с колко точки стартира сезона. Също изчислете колко точки средно печели от всички изиграни турнири и колко процента от турнирите е спечелил. 
// Вход
// От конзолата първо се четат два реда:
// •	Брой турнири, в които е участвал – цяло число в интервала [1…20] 
// •	Начален брой точки в ранглистата - цяло число в интервала [1...4000]
// За всеки турнир се прочита отделен ред:
// •	Достигнат етап от турнира – текст – "W", "F" или "SF"
// Изход
// Отпечатват се три реда в следния формат:
// •	"Final points: {брой точки след изиграните турнири}"
// •	"Average points: {средно колко точки печели за турнир}"
// •	"{процент спечелени турнири}%"
// Средните точки да бъдат закръглени към най-близкото цяло число надолу, а процентът да се форматира до втората цифра след десетичния знак.
