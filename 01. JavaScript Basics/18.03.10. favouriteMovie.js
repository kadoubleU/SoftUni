function favouriteMovie(input) {
    let index = 0;

    let movieTitle = "";
    let bestMovie = "";
    let moviesNumber = 0;

    let sum = 0;

    let endSum = 0;

    while(input[index] !== "STOP" && moviesNumber !== 7) {
        movieTitle = input[index];
        moviesNumber++;
        let i = 0;

        let movieLength = movieTitle.length;

        let char = 0;

        let smallLetter = 0;
        let bigLetter = 0;

        while(i < movieTitle.length) {
            char = movieTitle.charCodeAt(i);
            
            sum += char;

            if(char >= 65 && char <= 90) {
                bigLetter++;
            }else if(char >= 97 && char <= 122) {
                smallLetter++;
            }

            i++;
        }

        let small = 0;
        while(small < smallLetter) {
            sum -= (2 * movieLength);

            small++;
        }

        let big = 0;

        while(big < bigLetter) {
            sum -= movieLength;

            big++;
        }

        
        if(sum > endSum) {
            bestMovie = movieTitle;
            endSum = sum;
        }

        sum = 0;

        index++;

    }

    if(moviesNumber === 7) {
        console.log(`The limit is reached.`);
        console.log(`The best movie for you is ${bestMovie} with ${endSum} ASCII sum.`);
    }else {
        console.log(`The best movie for you is ${bestMovie} with ${endSum} ASCII sum.`);
    }
}

favouriteMovie(["Wrong turn",
"The maze",
"Area 51",
"Night Club",
"Ice age",
"Harry Potter",
"Wizards"]);

// Петък вечер е и се чудите кой филм да си пуснете да гледате. Решавате да напишете програма, която да избере това вместо вас. До команда "STOP" получавате заглавия на любими ваши филми. Най-добрият филм за вас ще бъде този, който има най-много точки. Точките се изчисляват като сбор от ASCII стойностите на символите в заглавието на филма. (няма да има случай, в който имаме два филма с равен брой точки)
// При изчислението на точките трябва да се има предвид следното:
// •	За всяка малка буква в заглавието, от сумата трябва да се извади два пъти дължината на заглавието на филма.
// •	За всяка главна буква в заглавието, от сумата трябва да се извади дължината на заглавието на филма.
// Може да имате максимум 7 заглавия на филми.
// Вход
// От конзолата се четат редове до команда "STOP" или до достигането на лимита от 7 филма:
// •	Заглавие на филм  – текст;
// Изход
// На конзолата да се отпечата:
// •	Ако сте достигнали лимита от 7 филма трябва да отпечатате:
// "The limit is reached."
// Да се отпечата най-добрият филм за вас:
// "The best movie for you is {заглавие на филм} with {сума на символите} ASCII sum."
