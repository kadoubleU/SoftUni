function renovation(input) {
    index = 0;

    let wallHeight = input[index];
    index++;

    let wallWidth = input[index];
    index++;

    let unpaintedAreaPercent = Number(input[index]);
    index++;

    let command = input[index];

    let litersPaint;

    let area = 0;

    let leftedForPaint = 0;

    let result = 0;

    let isBreak = false;

    let leftArea = 0;

    while(command !== "Tired!") {
        
        litersPaint = Number(input[index]);

        area = Number(wallHeight) * Number(wallWidth) * 4;

        area = area - (area * (unpaintedAreaPercent / 100));

        result = area;
        
        for(let i = 3; i < input.length; i++) {
            result -= Number(input[i]);
            if( input[i+1] === "Tired!") {
                isBreak = true;
                console.log(`${result} quadratic m left.`);
                break;
            }if(result < 0) {
                isBreak = true;
                
                console.log(`All walls are painted and you have ${Math.abs(result)} l paint left!`);
                break;
            }else if(result === 0) {
                isBreak = true;
                console.log('All walls are painted! Great job, Pesho!');
                break;
            }
        }
        
        index++;
        command = input[index];
        leftedForPaint = 0;

        if(isBreak === true) {
            break;
        }

    }
    
}

renovation(["3",
"5",
"10",
"2",
"3",
"4",
"Tired!"])


;

// Пешо решава, че иска да направи ремонт вкъщи. Неговата задача е да боядиса стените в хола, като знаете височината и ширината на една стена. Холът на Пешо има 4 стени с еднакви размери, определен процент от които се заемат от прозорци и врати, които няма да бъдат боядисвани. Той не е сигурен дали ще успее наведнъж, затова моли Вас да му помогнете да изчисли дали ще му остава още работа за следващия ден и, ако да, колко кв. м. има да довърши, а в случай, че успее да боядиса хола, колко боя му е останала (трябва да се има предвид, че с един литър боя се боядисва един квадратен метър от стената). 
// Вход
// От конзолата се четат следните редове:
// 1.	Височина на стената - цяло число [0… 100]
// 2.	Ширина на стената - цяло число [0… 100]
// 3.	Процент от общата площ на стените, който няма да бъде боядисан - цяло число [5… 95]
// На следващите редове до получаване на командата "Tired!" или докато не бъдат боядисани всички стени, се чете по едно число:
// •	Литри боя – цяло число [0…100]:
// Забележка: Площта за боядисване да бъде закръглена нагоре до най-близкото цяло число.
// Изход
// Да се отпечата на конзолата един от следните редове:
// •	При получаване на командата "Tired!":
// "{квадратни метри} quadratic m left." 
// {квадратни метри} е повърхнината, която му остава да боядисана.
// •	Aко е останала боя в излишък:
// "All walls are painted and you have {литри боя} l
//  paint left!" 
// •	Aко след боядисването на всички стени, не е останала боя:
// "All walls are painted! Great job, Pesho!" 
