function bestPlayer(input) {
    let index = 0;
    let playerName = "";
    let playerResult = 0;

    let winnerName = "";
    let maxResult = 0;

    let isHatTrick = false;

    while(input[index] !== "END") {
        playerName = input[index];
        index++;

        playerResult = Number(input[index]);
        index++;

        if(playerResult > maxResult) {
            maxResult = playerResult;
            winnerName = playerName;
        }

        if(maxResult >= 3) {
            isHatTrick = true;
        }

        if(playerResult >= 10) {
            break;
        }
    }

    console.log(`${winnerName} is the best player!`);

    if(isHatTrick === true) {
        console.log(`He has scored ${maxResult} goals and made a hat-trick !!!`);
    }else {
        console.log(`He has scored ${maxResult} goals.`);
    }

}

bestPlayer(["Neymar", "2",
"Ronaldo",
"1",
"Messi",
"3",
"END"]);

// Пепи иска да напишете програма, чрез която да разбере кой е най-добрият играч от световното първенство. Информацията, която получавате ще бъде играч и колко гола е отбелязал. От вас се иска да отпечатате кой е играчът с най-много голове и дали е направил хет-трик. Хет-трик е, когато футболистът е вкарал 3 или повече гола. Ако футболистът е вкарал 10 или повече гола, програмата трябва да спре.
// Вход:
// От конзолата се четат по два реда до въвеждане на команда "END":
// •	Име на играч – текст
// •	Брой вкарани голове  – цяло положително число в интервала [1 … 10000]
// Изход:
// На конзолата да се отпечатат 2 реда :
// •	На първия ред:
//             "{име на играч} is the best player!"
// •	На втория ред :
// o	 Ако най-добрият футболист е направил хеттрик:
//                    "He has scored {брой голове} goals and made a hat-trick !!!"
// o	Ако най-добрият футболист не е направил хеттрик:
//                    "He has scored {брой голове} goals."
