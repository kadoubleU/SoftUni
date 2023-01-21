function gameOfIntervals(input) {
    let moveNumber = Number(input[0]);

    let points = 0;
    let result = 0;

    let percent1 = 0;
    let percent2 = 0;
    let percent3 = 0;
    let percent4 = 0;
    let percent5 = 0;
    let invalidNumbers = 0;

    let a;
    let b;
    let c;
    let d;
    let e;

    for (let i = 1; i <= moveNumber; i++) {
        points = Number(input[i]);

        if(points < 0 || points > 50) {
            result = result / 2;
            invalidNumbers++;

        }else if(points >= 0 && points <= 9) {
            result = result + (points * (20/100));   
            percent1++;

        }else if(points >= 10 && points <= 19) {
            result = result + (points * (30/100));       
            percent2++;

        }else if(points >= 20 && points <= 29) {
            result = result + (points * (40/100));   
            percent3++;

        }else if(points >= 30 && points <= 39) {          
            result = result + 50;
            percent4++;
           
        }else if(points >= 40 && points<= 50) {
            result = result + 100;
            percent5++;
        }else 

        percent1 = percent / moveNumber * 10;   
        
    }


    a = percent1 / moveNumber * 100;
    b = percent2 / moveNumber * 100;
    c = percent3 / moveNumber * 100;
    d = percent4 / moveNumber * 100;
    e = percent5 / moveNumber * 100;
    j = invalidNumbers / moveNumber * 100;

    console.log(result.toFixed(2));
    console.log(`From 0 to 9: ${a.toFixed(2)}%`);
    console.log(`From 10 to 19: ${b.toFixed(2)}%`);
    console.log(`From 20 to 29: ${c.toFixed(2)}%`);
    console.log(`From 30 to 39: ${d.toFixed(2)}%`);
    console.log(`From 40 to 50: ${e.toFixed(2)}%`);
    console.log(`Invalid numbers: ${j.toFixed(2)}%`);
}

gameOfIntervals([10, 43, 57, -12, 23, 12, 0, 50, 40, 30, 20]);

//     Напишете програма, която да пресмята резултата от игра. Първо получавате число, което показва колко хода ще продължи играта. После за всеки ход на играта ще получавате по едно ново число. Според интервала в който попада числото се прибавят точки. Ако числото е отрицателно или по-голямо 50, тогава то е невалидно. В началото на играта резултата е 0 и на всеки ход се прибавят точки по следният начин:
 
// •	От 0 до 9  20 % от числото
// •	От 10 до 19  30 % от числото
// •	От 20 до 29  40 % от числото
// •	От 30 до 39  50 точки
// •	От 40 до 50  100 точки
// •	Невалидно число  резултата се дели на 2
 
// Освен резултата програмата трябва да изкарва статистика за проценти числа в дадените интервали.
// Вход
// Входът се чете от конзолата:
// •	Първи ред - колко хода ще има по време на играта – цяло число в интервала [1...100]
// •	За всеки ход – числата, които се проверяват в кой интервал са – цели числа в интервала [-100...100]
// Изход
// Да се отпечата на конзолата 7 реда:
// •	1ви ред: "{Краен резултат}"
// •	2ри ред: "From 0 to 9: {процент в интервала}%"
// •	3ти ред: "From 10 to 19: {процент в интервала}%"
// •	4ти ред: "From 20 to 29: {процент в интервала}%"
// •	5ти ред: "From 30 to 39: {процент в интервала}%"
// •	6ти ред: "From 40 to 50: {процент в интервала}%"
// •	7ми ред: "Invalid numbers: {процент в интервала}%"
// Всички числа трябва да са форматирана до вторият знак след запетаята.

