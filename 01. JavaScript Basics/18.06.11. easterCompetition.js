function easterCompetition(input) {
    let index = 0;
    let easterBread = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let points = 0;
    let localPoints = 0;
    let counter = 0;
    let bestChef = "";
    let bestScore = 0;

    for(let i = 0; i < easterBread; i++) {
        counter++;
        points = 0;

        let chef = command;
        command = input[index];
        index++;

        while(command !== "Stop") {
            
            localPoints = Number(command);
            points += localPoints;

            command = input[index];
            index++;
        }

        console.log(`${chef} has ${points} points.`);
            if (points > bestScore) {
                bestScore = points;
                bestChef = chef;
                console.log(`${chef} is the new number 1!`);
                
            }
        
        command = input[index];
        index++;
            
    }
    
    console.log(`${bestChef} won competition with ${bestScore} points!`);
}

easterCompetition(["2",
"Chef Angelov",
"9",
"9",
"9",
"Stop",
"Chef Rowe",
"10",
"10",
"10",
"10",
"Stop"]);

// С наближаването на Великден, пекарна организира конкурс за направата на най-хубав козунак. Напишете програма, която да намира сладкаря с най-висок резултат. В началото на конкурса се въвежда броя на козунаците, които ще бъдат дегустирани от посетителите на пекарната, като за всеки козунак различен брой посетители, ще дадат оценка от 1 до 10.
// Вход
// Първоначално от конзолата се прочита броя на козунаците – цяло число в интервала [1… 100]
// След това за всеки козунак се прочита:
// •	Името на пекаря, който е направил козунака – текст
// •	До получаване на командата "Stop" се прочита 
// o	оценка за козунак от един човек  – цяло число в интервала [1... 10]
// Изход
// След получаване на командата "Stop" се печата един ред:
// •	"{името на пекаря} has {общият брой получени точки} points."
// Ако след командата "Stop", пекарят е с най-много точки до момента, да се отпечата допълнителен ред:
// •	"{името на пекаря} is the new number 1!"
// След дегустация на всички козунаци, да се отпечата един ред:
// •	"{името на пекаря с най-много точки} won competition with {точките на пекаря} points!"
