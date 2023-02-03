function theMostPowerfulWord(input) {
    index = 0;

    let word = "";
    let sum = 0;
    let maxPowerWordSum = 0;
    let maxPowerWord = "";

    while(input[index] !== "End of words") {
        word = input[index];
        let wordLength = word.length;

        let i = 0;
        
        let wordChar = word[0];

        let charSum = 0;

        while(i < wordLength) {
            
            let charAscii = word.charCodeAt(i);

            charSum += Number(charAscii);

            i++;
        }

        if(wordChar === "a" || wordChar === "A" || wordChar === "e" || wordChar === "E" || wordChar === "i" || wordChar === "I" || wordChar === "o" || wordChar === "O" || wordChar === "u" || wordChar === "U" || wordChar === "y" || wordChar === "Y") {
            sum = charSum * wordLength;
        } else {
            sum = Math.floor(charSum / wordLength);
        }

        if(sum > maxPowerWordSum) {
            maxPowerWordSum = sum;
            maxPowerWord = word;
        }

        sum = 0;

        index++;
        
    }

    console.log(`The most powerful word is ${maxPowerWord} - ${maxPowerWordSum}`);
}

theMostPowerfulWord(["The",
"Most",
"Powerful",
"Word",
"Is",
"Experience",
"End of words"])
;

// Задача: Най-силната дума
//  За Лора думите притежават голяма сила. Тя те моли да измислиш алгоритъм, с който да откриеш коя е "най-силната" дума. До получаване на команда "End of words" ще се четат от конзолата думи. За да се открие силата на всяка една, трябва да се намери сборът от ASCII стойностите на символите, от които се състои думата. Ако започва с гласна буква - 'a', 'e', 'i', 'o', 'u', 'y' (или техните еквивалентни главни букви), полученият сбор трябва да се умножи по дължината на думата, в противен случай, да се раздели на дължината и да се закръгли до най-близкото цяло число надолу.
// Вход
// До получаване на команда "End of words" се чете по един ред от конзолата:
// •	дума – текст 
// Изход
// След приключване на програмата се печата на един ред думата с "най-голяма сила":
// •	"The most powerful word is {думата с най-голяма сила} - {силата на думата}" 

