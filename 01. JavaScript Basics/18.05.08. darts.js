function darts(input) {
    let index = 0;
    let gamerName = input[index];
    index++;

    let sector = "";
    let points = 0;

    let totalPoints = 0;
    let leftedPoints = 301;

    let unsuccessfullShots = 0;
    let successfullShots = 0;

    while(input[index] !== "Retire" && leftedPoints > 0) {
        sector = input[index];
        index++;
        points = Number(input[index]);

        if(sector === "Single") {
            totalPoints =  points;

        }else if(sector === "Double") {
            totalPoints = points * 2;

        }else if(sector === "Triple") {
            totalPoints = points * 3;
        }

        if(totalPoints > leftedPoints) {
            unsuccessfullShots++;
        }else {
            leftedPoints -= totalPoints;
            successfullShots++;
        }

        totalPoints = 0;
        index++;

        if(input[index] === "Retire") {
            console.log(`${gamerName} retired after ${unsuccessfullShots} unsuccessful shots.`);
        }
    }

    if(input[index] !== "Retire") {
        console.log(`${gamerName} won the leg with ${successfullShots} shots.`);
    }
}

darts(["Rob Cross",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Triple",
"20",
"Double",
"20",
"Triple",
"20",
"Double",
"5",
"Triple",
"10",
"Double",
"6",
"Retire"]);

// Вашата задача е да напишете програма, която да изчислява, дали даден играч е успял да спечели лег. (Лег се нарича единична игра на дартс)
// Първоначално играчът започва с 301 точки. Играчът хвърля стрелата върху таблото, като за всяко улучено поле, той получава определен брой точки. Всяко поле има по три сектора: единичен (Single) сектор от който се взимат броят точки от полето. Двоен (Double), от него се взимат удвоените точки от полето и троен (Triple) сектор, точките от който са умножени по 3.
// Получените точки от всеки изстрел се изваждат от началните точки, до достигане на 0.
// Забележка: При изстрел, даващ повече точки от наличните, той се зачита за неуспешен и играчът трябва да хвърля отново, докато не уцели точки равни на оставащите или по-малки, такъв удар се счита за успешен.
// Пример: При налични точки 100, удар даващ повече от 100 точки, неуспешен
// При налични точки 100, удар даващ по-малко или равни на 100 точки, успешен
// Вход 
// Първоначално се чете един ред:
// •	Името на играча - текст
// След това до получаване на команда "Retire" се четат многократно по два реда:
// 1.	Поле – текст ("Single", "Double" или "Triple")
// 2.	Точки – цяло число в интервала [0… 100]
// Изход
// Играта приключва при въвеждане на команда "Retire" или при изравняване на началните 301 точки към 0. На конзолата трябва да се напечата един ред:
// •	Ако играчът е спечелил лега:
// o	"{името на играча} won the leg with {успешните изстрели} shots."
// •	Ако играчът се е отказал от играта:
// o	"{името на играча} retired after {неуспешни изстрели} unsuccessful shots."
