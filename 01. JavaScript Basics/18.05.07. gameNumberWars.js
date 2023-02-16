function gameNumberWars(input) {
    let index = 0;

    let firstGamerName = input[index];
    index++;
    let secondGamerName = input[index];
    index++;

    let firstPlayerCard = 0;
    let secondPlayerCard = 0;

    let winnerName = "";

    let firstPlayerPoints = 0;
    let secondPlayerPoints = 0;

    let warsPoints = 0;

    let controlStatement = "";

    while(input[index] !== "End of game") {
        firstPlayerCard = Number(input[index]);
        index++;
        secondPlayerCard = Number(input[index]);
        index++;

        if(firstPlayerCard > secondPlayerCard) {
            firstPlayerPoints += (firstPlayerCard - secondPlayerCard);
            winnerName = firstGamerName;

        }else if(firstPlayerCard < secondPlayerCard) {
            secondPlayerPoints += (secondPlayerCard - firstPlayerCard);
            winnerName = secondGamerName;

        }else {
            firstPlayerCard = Number(input[index]);
            index++;
            secondPlayerCard = Number(input[index]);
            index++;

            if(firstPlayerCard > secondPlayerCard) {
                warsPoints =  firstPlayerPoints;
                winnerName = firstGamerName;

            }else if(firstPlayerCard < secondPlayerCard) {
                warsPoints = secondPlayerPoints;
                winnerName = secondGamerName;
            }

            console.log("Number wars!");
            console.log(`${winnerName} is winner with ${warsPoints} points`);

            break;
        }

        controlStatement = input[index];
    }

    if(controlStatement === "End of game") {
        console.log(`${firstGamerName} has ${firstPlayerPoints} points`);
        console.log(`${secondGamerName} has ${secondPlayerPoints} points`);
    }

}

gameNumberWars(["Aleks",
"Georgi",
"4",
"5",
"3",
"2",
"4",
"3",
"4",
"4",
"5",
"2"])
;

// "Numbers" е нова игра, която се играе с 36 карти (двойки, тройки, четворки, петици, шестици, седмици, осмици, деветки и десетки от всички 4 бои). Правилата на играта са следните:
// 	Играе се от двама играчи, които започват с равен брой карти
// 	На всяко раздаване всеки един от тях дава по 1 карта:
// o	Ако картата на първия играч е с по-голяма стойност от картата на втория играч, първият получава точки, които са равни на разликата между картата на първия и картата на втория (например: първият дава тройка купа, а вторият двойка каро -> първият печели, защото 3 > 2 и точките, които печели, са 3 – 2 = 1).
// o	Ако картата на втория играч е с по-голяма стойност от картата на първия играч, вторият получава точки, които са равни на разликата между картата на втория и картата на първия (например: вторият дава осмица пика, а първият шестица спатия -> вторият печели, защото 8 > 6 и точките, които печели, са 8 – 6 = 2).
// o	Ако картите, които дават двамата, са с еднаква стойност, тогава се получава "Number wars" и всеки един от играчите трябва да даде по още една карта. Играчът, чиято карта е с по-голяма стойност, печели и играта приключва(В този случай, няма да има еднакви карти).
// 	Освен при "Number wars", играта може да приключи и при команда "End of game". Тогава никой не печели и играта приключва.
// Вход
// Първоначално се четат два реда:
// •	Име на първия играч - текст
// •	Име на втория играч - текст
// След това, до получаване на команда "End of game", се четат многократно по два реда:
// 1.	Карта, която дава първият играч- цяло число в интервала [2…9]
// 2.	Карта, която дава вторият играч -  цяло число в интервала [2…9]
// При еднакви карти на двамата играчи се прочитат нови два реда (карта, която дава първият и карта, която дава вторият.) 
// Изход
// При случая, в който има "Number wars ", да се отпечата:
// •	"Number wars!"
// •	"{име на победителя} is winner with {брой натрупани точки} points"
// При команда "End of game" да се отпечатат два реда:
// •	"{име на първия играч} has {брой натрупани точки за първия играч} points"
// •	"{име на втория играч} has {брой натрупани точки за втория играч} points"
