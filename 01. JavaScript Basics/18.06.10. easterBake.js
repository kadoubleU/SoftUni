function easterBake(input) {
    let easterBreadNumber = input[0];
    let index = 1;

    let sugarQuantity = 0;
    let flourQuantity = 0;

    let totalUsedSugar = 0;
    let totalUsedFlour = 0;

    let maxSugar = 0;
    let maxFlour = 0;

    for (let i = 1; i <= easterBreadNumber; i++) {
        sugarQuantity = Number(input[index++]);
        flourQuantity = Number(input[index++]);

        totalUsedSugar += sugarQuantity;
        totalUsedFlour += flourQuantity;

        if(sugarQuantity > maxSugar) {
            maxSugar = sugarQuantity;
        }

        if(flourQuantity > maxFlour) {
            maxFlour = flourQuantity;
        }

    }

    let neededPackageSugar = Math.ceil(totalUsedSugar / 950.0);
    let neededPackageFlour = Math.ceil(totalUsedFlour / 750.0);

    console.log(`Sugar: ${neededPackageSugar}`);
    console.log(`Flour: ${neededPackageFlour}`);
    console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`);

}

easterBake(["3",
"400",
"350",
"250",
"300",
"450",
"380"]);

// Предстои Великден и Деси е решила да изпече домашни козунаци за колегите си. Главните продукти, които ще трябват на Деси са: брашно и захар. Един пакет захар е 950 грама, а един пакет брашно е 750 грама. Напишете програма, която изчислява колко пакета захар и брашно трябва да купи Деси, за да й стигнат за направата на козунаците, като знаете за всеки един козунак по колко грама захар и брашно са изразходени. Също намерете кое е най-голямото количество захар и брашно, които са използвани.
// Вход
// От конзолата се чете 1 ред:
// •	 Броят на козунаците – цяло число в интервала [1 ... 100]
// За всеки козунак се чете:
// o	Количество изразходвана захар (грамове) – цяло число в интервала [1 … 10000]
// o	Количество изразходвано брашно (грамове) – цяло число в интервала [1 … 10000]
// Изход
// Да се отпечатат на конзолата 3 реда:
// •	"Sugar: {брой нужни пакети захар}"
// •	"Flour: {брой нужни пакет брашно}"
// •	"Max used flour is {максимално количество грамове брашно, използвани за правенето на козунак} grams, max used sugar is {максимално количество грамове захар, използвани за правенето на козунак} grams."
// Пакетите захар и брашно да бъдат закръглени към най-близкото цяло число нагоре.
