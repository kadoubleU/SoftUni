function nameGame(input) {
    index = 0;
    let name = input[index];

    let gamerName = "";

    let maxPoints = 0;

    while(input[index] !== "Stop") {

        name = input[index];
        index++;
        
        let nameLength = name.length;
        let i = 1;
        let points = 0;
        while(i <= nameLength) {

        let char = name.charCodeAt(i - 1);
        let number = input[i];
        index++;
        i++;

        if(char === Number(number)) {
            points += 10;
        }else {
            points += 2;
        }
    }

        if(points > maxPoints) {
            maxPoints = points;
            gamerName = name;
        } else if(points === maxPoints) {
            maxPoints = points;
            gamerName = name;
        }

    }

    console.log(`The winner is ${gamerName} with ${maxPoints} points!`);
}

nameGame(["Ivan",
"73",
"20",
"98",
"110",
"Ivo",
"80",
"65",
"87",
"Stop"]);


// Иван е измислил нова игра в която да се състезава със своите приятели. Вашата задача е да напишете програма за играта. Всеки играч написва името си, след това за всяка една буква от името си написва по едно цяло число, ако числото съвпада с ASCII стойността на съответната буква, играчът получава 10 точки, в противен случай, получава само 2 точки. Победител е играчът с най-много точки в края на играта. В случай, че двама играчи имат равен брой точки, печели този, който втори е достигнал резултата.
// Вход
// До получаване на командата "Stop" се чете по един ред:
// •	Име на играча с дължина n - текст
// За всеки играч се четат n на брой реда:
// •	число – цяло число в интервала[0…127] 
// Изход
// Да се отпечата един ред в следния формат:
// •	"The winner is {името на победителя} with {точките на победителя} points!"
