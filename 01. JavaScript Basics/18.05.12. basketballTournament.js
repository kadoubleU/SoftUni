function basketballTournament(input) {
    let index = 0;
    let tournamentName = input[index];
    index++;

    let wins = 0;
    let totalGames = 0;

    while(tournamentName !== "End of tournaments") {
        let tournamentNumber = Number(input[index]);
        index++;
        for(let i = 1; i <= tournamentNumber; i++) {
            let desiTeamPoints = Number(input[index]);
            index++;

            let otherTeamPoints = Number(input[index]);
            index++;

            if(desiTeamPoints > otherTeamPoints) {
                let diff = desiTeamPoints - otherTeamPoints;
                console.log(`Game ${i} of tournament ${tournamentName}: win with ${diff} points.`);
                wins++;
            }else if(desiTeamPoints < otherTeamPoints) {
                let diff2 = otherTeamPoints - desiTeamPoints;
                console.log(`Game ${i} of tournament ${tournamentName}: lost with ${diff2} points.`);
            }

            totalGames++;
        }

        tournamentName = input[index];
        index++;
    }

    let totalWins = (wins / totalGames) * 100;
    console.log(`${totalWins.toFixed(2)}% matches win`);

    let totalLost = ((totalGames - wins) / totalGames) * 100;
    console.log(`${totalLost.toFixed(2)}% matches lost`);
}

basketballTournament(["Ballers",
"3",
"87",
"63",
"56",
"65",
"75",
"64",
"Sharks",
"4",
"64",
"76",
"65",
"86",
"68",
"99",
"45",
"78",
"End of tournaments"]);

// Деси и отборът ѝ по баскетбол участват в турнири всеки месец, като всеки турнир се състои от определен брой мачове. Всеки мач има краен резултат, на базата на който се определя победителят. Отборът, вкарал повече точки, се смята за победител. Помогнете на Деси да направи статистика за турнирите, в които участва с отбора си. Като вход ще получавате имена на турнири до получаване на команда "End of tournaments". За всеки турнир ще получавате цяло число, което ще показва броя на мачовете, които се играят за турнир. За всеки мач ще получавате: на първия ред точките, които е вкарал отборът на Деси, а на втория ред - точките, които е вкарал противниковият отбор. След получаване на точките за всеки мач отпечатайте:
// 	Ако отборът на Деси е спечелил (т.е. точките, които е вкарал нейният отбор, са повече от точките на противниковия отбор): "Game {кой е номерът на мача, който са изиграли за текущия турнир} of tournament {име на турнира}: win with {разликата между точките на отбора на Деси и противниковия отбор} points."
// 	Ако отборът на Деси е загубил (т.е. точките, които е вкарал нейният отбор, са по-малко от точките, които е вкарал противниковият отбор): "Game {кой е номерът на мача, който са изиграли за текущия турнир} of tournament {име на турнира}: lost with {разликата между точките на противниковия отбор и отбора на Деси} points."
// Няма да има случаи на равенство.
// Вход
// От конзолата се четат поредица от турнири до получаване на командата "End of tournaments":
// •	Име на турнира – текст
// •	За всеки турнир n на брой мача – цяло число в интервала [1…15]
// •	За всеки мач се четат по два реда:
// o	Точки, вкарани от отбора на Деси – цяло число в интервала от [0…150]
// o	Точки, вкарани от противниковия отбор – цяло число в интервала от [0…150]
// Изход
// На конзолата да се отпечатат следните редове:
// •	След всеки мач да се отпечатва дали отборът на Деси е спечелил или загубил и съответно с каква разлика. 
// •	При получаване на команда "End of tournaments" да се отпечатат два реда:
// o	{процент спечелени мачове от всички турнири}% matches win
// o	{процент загубени мачове от всички турнири}% matches lost
// Всички проценти трябва да са форматирани до втората цифра след десетичния знак.


