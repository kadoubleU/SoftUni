function footballResults(input) {
    
    let result = "";
    let firstResult = "";
    let secondResult = "";

    let teamWon = 0;
    let teamLost = 0;
    let teamDrawn = 0;

    for(let i = 0; i <= 2; i++) {
        result = input[i];
        firstResult = Number(result.charAt(0));
        secondResult = Number(result.charAt(2));
        
        if(firstResult > secondResult) {
            teamWon++;
        }else if(firstResult < secondResult) {
            teamLost++;
        }else if(firstResult === secondResult) {
            teamDrawn++;
        }
    }

    console.log(`Team won ${teamWon} games.`);
    console.log(`Team lost ${teamLost} games.`);
    console.log(`Drawn games: ${teamDrawn}`);
    
}

footballResults(["0:2",
"0:1",
"3:3"]);

// Футболен отбор участва в благотворителен турнир. На този турнир отборът играе три мача като домакин. Да се напише програма, която изчислява колко победи, равенства и загуби има отборът по време на турнира, спрямо резултатите от мачовете.
// *Забележка: Отборът винаги е домакин, следователно първата цифра от резултата съответства на головете вкарани от него.
// Вход
// От конзолата се четат 3 реда:
// 1.	Резултат от първия мач – текст 
// 2.	Резултат от втория мач – текст 
// 3.	Резултат от третия мач – текст 
// Резултатите ще са в следния формат: "2:0", "0:1", "1:1" и т.н.
// /броят голове винаги ще бъде едноцифрено число/
// Изход
// На конзолата да се отпечатат три реда:
// •	"Team won {брой спечелени мачове} games."
// •	"Team lost {брой загубени мачове} games."
// •	" Drawn games: {брой равни мачове}"
