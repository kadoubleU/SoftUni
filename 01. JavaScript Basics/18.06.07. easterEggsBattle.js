function easterEggsBattle(input) {
    let index = 0;

    let firstPlayerEggsNumber = Number(input[index]);
    index++;

    let secondPlayerEggsNumber = Number(input[index]);
    index++;

    let winner = "";

    while(input[index] !== "End" && firstPlayerEggsNumber > 0 && secondPlayerEggsNumber > 0) {
        winner = input[index];

        if(winner === "one") {
            secondPlayerEggsNumber--;
        }else if(winner === "two") {
            firstPlayerEggsNumber--;
        }

        index++;

    }

    if(firstPlayerEggsNumber <= 0) {
        console.log(`Player one is out of eggs. Player two has ${secondPlayerEggsNumber} eggs left.`);
    }else if(secondPlayerEggsNumber <= 0) {
        console.log(`Player two is out of eggs. Player one has ${firstPlayerEggsNumber} eggs left.`);
    }else if(input[index] === "End") {
        console.log(`Player one has ${firstPlayerEggsNumber} eggs left.`);
        console.log(`Player two has ${secondPlayerEggsNumber} eggs left.`);
    }
}

easterEggsBattle(["6"
  ,  "3"
  ,  "one"
  ,  "two"
,"two"
  ,  "one"
  ,  "one"    
    ]);

// На Великден семейството на Деси се събира и тя решава да организира "битка" между великденски яйца. 
// Правилата на "битката" са следните:
// •	Участват двама играчи
// •	Всеки от тях започва с определен брой яйца
// •	При получаване на команда "one" -> първият играч печели => яйцата на втория намаляват с едно 
// •	При получаване на команда "two" -> вторият играч печели => яйцата на първия намаляват с едно
// •	Играта приключва, ако някой от играчите остане без яйца или до получаване на команда "End"
// Вход
// Първоначално се четат два реда:
// 1.	Брой яйца, които има първият играч - цяло число в интервала [1 … 99]
// 2.	Брой яйца, които има вторият играч - цяло число в интервала [1 … 99]
// След това до получаване на команда "End" се четe многократно един ред:
// 3.	Победител - текст - "one" или "two"
// Изход
// Ако първият играч остане без яйца:
// •	"Player one is out of eggs. Player two has {брой останали яйца на втория играч} eggs left."
// Ако вторият играч остане без яйца:
// •	"Player two is out of eggs. Player one has {брой останали яйца на първия играч} eggs left."
// При команда "End" да се отпечатат два реда:
// •	"Player one has {брой останали яйца на първия играч} eggs left."
// •	"Player two has {брой останали яйца на втория играч} eggs left."
