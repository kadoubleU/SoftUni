function footballLeague(input) {
    let stadiumCapacity = Number(input[0]);
    let fansNumber = Number(input[1]);

    let sector = 0;

    let sectorA = 0;
    let sectorB = 0;
    let sectorV = 0;
    let sectorG = 0;

    let percentA = 0;
    let percentB = 0;
    let percentV = 0;
    let percentG = 0;

    for(let i = 1; i <= input.length; i++) {
        sector = input[i];

        if(sector === "A") {
            sectorA++;

        } else if(sector === "B") {
            sectorB++;
        
        }else if(sector === "V") {
            sectorV++;

        }else if(sector === "G") {

            sectorG++;
        }
          
    }

    percentA = sectorA / fansNumber * 100;
    percentB = sectorB / fansNumber * 100;
    percentV = sectorV / fansNumber * 100;
    percentG = sectorG / fansNumber * 100;

    console.log(`${percentA.toFixed(2)}%`);
    console.log(`${percentB.toFixed(2)}%`);
    console.log(`${percentV.toFixed(2)}%`);
    console.log(`${percentG.toFixed(2)}%`);
    
    let middlePercent = fansNumber / stadiumCapacity * 100;

    console.log(`${middlePercent.toFixed(2)}%`);
}

footballLeague(["93"
   , "16"
   , "A"
   , "V"
   , "G"
   , "G"
   , "B"
   , "B"
   , "G"
   , "B"
   , "A"
   , "B"
   , "B"
   , "B"
   , "A"
   , "B"
   , "B"
   , "A"
    
    ]);

    // Екипът на СофтУни си организира футболен турнир. Първоначално прочитаме от конзолата капацитета на стадиона и броят на всички фенове. След това за всеки фен се чете секторът, в който се намира. Феновете на първия отбор са в сектор А и Б, а на втория – В и Г. Да се напише програма, която изчислява процентите на феновете във всеки сектор, спрямо общия брой фенове на стадиона, както и общият процент на феновете за двата отбора, спрямо капацитета на стадиона. Общият брой на феновете НЕ надвишава капацитета на стадиона.
    // Вход
    // От конзолата се четат поредица от числа, всяко на отделен ред:
    // 1.	Капацитетът на стадиона – цяло число в интервала [1 … 10000];
    // 2.	Броят на всички фенове – цяло число в интервала [1 … 10000].
    // За всеки един фен, на отделен ред се прочита:
    // 1.	Секторът, на който се намира – текст – "A", "B", "V" и "G".
    // Изход
    // Да се отпечатат на конзолата 5 реда, всеки от които съдържа процент между 0.00% и 100.00%, форматирани до втората цифра след десетичната запетая:
    // 1.	Процентът на феновете в сектор А
    // 2.	Процентът на феновете в сектор Б
    // 3.	Процентът на феновете в сектор В
    // 4.	Процентът на феновете в сектор Г
    // 5.	Процентът на всички фенове, спрямо капацитета на стадиона.
    