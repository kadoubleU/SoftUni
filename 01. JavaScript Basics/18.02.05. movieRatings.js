function movieRatings(input) {
    index = 0;
    let moviesNumber = Number(input[index]);
    index++;


    let maxRating = Number.MIN_SAFE_INTEGER;
    let minRating = Number.MAX_SAFE_INTEGER;
    let averageRating = 0;

    let maxMovieName = "";
    let minMovieName = "";

    let movieRating = 0;

    while (index < input.length) {

        let movieName = input[index];
        index++;
        movieRating = Number(input[index]);
        averageRating += movieRating;

        if (movieRating > maxRating) {
            maxMovieName = movieName;
            maxRating = movieRating;

        } else if (movieRating < minRating) {
            minMovieName = movieName;
            minRating = movieRating;

        }

        index++;
    }

    let totalAverageRating = averageRating / moviesNumber;

    console.log(`${maxMovieName} is with highest rating: ${maxRating.toFixed(1)}`);
    console.log(`${minMovieName} is with lowest rating: ${minRating.toFixed(1)}`);
    console.log(`Average rating: ${totalAverageRating.toFixed(1)}`);
}

movieRatings(["5",
"A Star is Born",
"7.8",
"Creed 2",
"7.3",
"Mary Poppins",
"7.2",
"Vice",
"7.2",
"Captain Marvel",
"7.1"])
;


// Деси много обича да гледа филми, но често й е трудно да си избере подходящ за гледане. Набелязва си определен брой филми и иска да си избере кой филм да гледа спрямо рейтинга на филмите.
// Напишете програма, която показва кой филм е с най-висок рейтинг, кой е с най-нисък и колко е средният рейтинг от всички филми, които си е набелязала да гледа.
// Вход
// От конзолата първо се чете един ред:
// •	Брой филми, които си е набелязала Деси – цяло число в интервала [1…20]
// За всеки филм се прочитат два отделни реда:
// •	Име на филма – текст
// •	Рейтинг на филма - реално число в интервала [1.00…10.00]
// Изход
// Отпечатват се три реда в следния формат:
// •	"{име на филма с най-висок рейтинг} is with highest rating: {рейтинг на филма}"
// •	"{име на филма с най-нисък рейтинг} is with lowest rating: {рейтинг на филма}"
// •	"Average rating: {средният рейтинг на всички филми}"
// Максималният, минималният и средният рейтинг да се форматира до първата цифра след десетичния знак.
