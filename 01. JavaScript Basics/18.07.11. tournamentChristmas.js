function tournamentChristmas(input) {
    let index = 0;
    let tournamentDaysNumber = Number(input[index]);
    index++;

    let gameName = "";
    let result = "";

    let money = 0;
    let wins = 0;
    let loses = 0;

    let dayWins = 0;
    let dayLoses = 0;
    let moneyForDay = 0;

    let bonus = 0;

    for(let i = 1; i <= tournamentDaysNumber; i++) {
        while(input[index] !== "Finish") {
            gameName = input[index];
            index++;

            result = input[index];
            index++;

            if(result === "win") {
                money += 20;
                wins++;
            }else {
                loses++;
            }
        }

        dayWins += wins;
        dayLoses += loses;
        moneyForDay += money;

        if(wins > loses) {
            bonus = money * (10 / 100);
        }

        moneyForDay += bonus;

        wins = 0;
        loses = 0;
        money = 0;
        bonus = 0;
        index++;
    }

    if(dayWins > dayLoses) {
        moneyForDay = moneyForDay + (moneyForDay * (20 / 100));
        console.log(`You won the tournament! Total raised money: ${moneyForDay.toFixed(2)}`);
    }else {
        console.log(`You lost the tournament! Total raised money: ${moneyForDay.toFixed(2)}`);
    }

}

tournamentChristmas(["3",
"darts",
"lose",
"handball",
"lose",
"judo",
"win",
"Finish",
"snooker",
"lose",
"swimming",
"lose",
"squash",
"lose",
"table tennis",
"win",
"Finish",
"volleyball",
"win",
"basketball",
"win",
"Finish"]);

// Напишете програма, която проследява представянето на вашия отбор на благотворителен коледен турнир.  Всеки ден получавате имена на игри до команда "Finish". Със спечелването на всяка една игра печелите по 20лв. за благотворителност. Трябва да изчислите колко пари сте спечелили на края на деня. Ако имате повече спечелени игри, отколкото загубени – вие сте победители този ден и увеличавате парите от него с 10%. При приключване на турнира ако през повечето дни сте били победители печелите турнира и увеличавате всичките спечелени пари с 20%.
// Никога няма да имате равен брой спечелени и загубени игри.
// Вход
// Първоначално от конзолата се прочита броя дни на турнира – цяло число в интервала [1… 20]
// До получаване на командата "Finish" се чете:
// •	Спорт  – текст
// За всеки спорт се прочита:
// o	Резултат  – текст с възможности: "win" или "lose"
// Изход
// Накрая се отпечатва един ред:
// •	Ако сте спечелили турнира:
//      	"You won the tournament! Total raised money: {спечелените пари}"
// •	Ако сте загубили на турнира:
// "You lost the tournament! Total raised money: {спечелените пари}"
// Парите да бъдат форматирани до втората цифра след десетичния знак.
