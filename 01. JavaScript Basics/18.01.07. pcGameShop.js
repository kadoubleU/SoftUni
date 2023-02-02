function pcGameShop(input) {
    let numberOfGames = input[0];

    let hearthstone = 0;
    let fornite = 0;
    let overwatch = 0;
    let others = 0;

    for(let i = 1; i <= numberOfGames; i++) {
        if(input[i] === "Hearthstone") {
            hearthstone++;
        }else if(input[i] === "Fornite") {
            fornite++;
        }else if(input[i] === "Overwatch") {
            overwatch++;
        }else {
            others++;
        }
    }

    console.log(`Hearthstone - ${((hearthstone / numberOfGames) * 100).toFixed(2)}%`);
    console.log(`Fornite - ${((fornite / numberOfGames) * 100).toFixed(2)}%`);
    console.log(`Overwatch - ${((overwatch / numberOfGames) * 100).toFixed(2)}%`);
    console.log(`Others - ${((others / numberOfGames) * 100).toFixed(2)}%`);
}

pcGameShop(["4",
"Hearthstone",
"Fornite",
"Overwatch",
"Counter-Strike"]);

// Магазин за компютърни игри ви наема за да направите статистика на процента продажби на игрите от последния месец, като изчислите по колко процента от общите продажби са за някоя от игрите.
// Процентите трябва да бъдат разделени на четири части, три заглавия на игри и всички останали :
// •	Hearthstone
// •	Fornite
// •	Overwatch
// •	Others
// Вход
// От конзолата се четат:
// •	Брой продадени игри- n - цяло положително число в интервала [1… 100]
// За следващите n реда се чете по един ред:
// o	Име на игра - текст
// Изход
// На конзолата да се изпишат четири реда:
// 	"Hearthstone - {процент продажби на Hearthstone}%"
// 	"Fornite - {процент продажби на Fornite}%"
// 	"Overwatch - {процент продажби на Overwatch}%"
// 	"Others - {процент продажби на всички останали игри}%"
// Резултатът да бъде закръглен до втората цифра след десетичния знак.
