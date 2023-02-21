function uniquePinCodes(input) {
    let firstNumUpperLimit = Number(input[0]);
    let secNumUpperLimit = Number(input[1]);
    let thirdNumUpperLimit = Number(input[2]);

    let firsNum = 0;
    let secNum = 0;
    let thirdNum = 0;

    result = "";

    for(let i = 1; i <= firstNumUpperLimit; i++) {
        if(i % 2 === 0) {
            firsNum = i;

            for(let j = 2; j <= secNumUpperLimit; j++) {
            
                if(j === 2 || j === 3 || j === 5 || j === 7) {
                    secNum = j;
                
                
                for(let k = 1; k <= thirdNumUpperLimit; k++) {
                    if(k % 2 === 0) {
                        thirdNum = k;

                        result = "" + firsNum + " " + secNum + " " + thirdNum;
                        
                        console.log(result);

                    }
                }
            }
                
            }
            
        }
        
    }
}

uniquePinCodes([8
   , 2
    ,8
    ]);

// Да се напише програма, която генерира трицифрени PIN кодове, като цифрите на всеки PIN код са в определен интервал. За да бъде валиден един PIN код той трябва да отговаря на следните условия:
// •	Първата и третата цифра трябва да бъдат четни.
// •	Втората цифра трябва да бъде просто число в диапазона [2...7].
// Вход
// От конзолата се четат 3 реда:
// •	Горната граница на първото число - цяло число в диапазона [1...9]
// •	Горната граница на второто число - цяло число в диапазона [1...9]
// •	Горната граница на третото число - цяло число в диапазона [1...9]
// Изход
// Да се отпечатат на конзолата всички валидни трицифрени PIN кодове, чиито цифри отговарят на съответните интервали.
