function oscars(input) {
    index = 0;
    let actorName = input[index];
    index++;

    let academyPoints = Number(input[index]);
    index++;

    let numberOfJudges = Number(input[index]);
    index++;

    let totalPoints = academyPoints;

    for(index; index < input.length; index++) {
        let judgeName = input[index];
        index++;

        let points = Number(input[index]);

        let judgePoints = (Number(judgeName.length) * points) / 2;

        totalPoints += judgePoints;

        if(totalPoints >= 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
            break;
        }

    }

    if(totalPoints < 1250.5) {
        let neededPoints = 1250.5 - totalPoints;
        console.log(`Sorry, ${actorName} you need ${neededPoints.toFixed(1)} more!`);
    }

}

oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"]);


// Поканени сте от академията да напишете софтуер, който да пресмята точките за актьор/актриса. Академията ще ви даде първоначални точки за актьора. След това всеки оценяващ ще дава своята оценка. Точките, които актьора получава се формират от: дължината на името на оценяващия умножено по точките, които дава делено на две. 
// Ако резултатът в някой момент надхвърли 1250.5 програмата трябва да прекъсне и да се отпечата, че дадения актьор е получил номинация.
// Вход
// •	Име на актьора – текст
// •	Точки от академията - реално число в интервала [2.0... 450.5]
// •	Брой оценяващи n – цяло число в интервала[1… 20]
// На следващите n-на брой реда:
// o	Име на оценяващия – текст
// o	Точки от оценяващия – реално число в интервала [1.0... 50.0]
// Изход
// Да се отпечата на конзолата един ред:
// •	Ако точките са над 1250.5:
// "Congratulations, {име на актьора} got a nominee for leading role with {точки}!"
// •	Ако точките не са достатъчни:
// 	"Sorry, {име на актьора} you need {нужни точки} more!"
// Резултатът да се форматирана до първата цифра след десетичния знак!

