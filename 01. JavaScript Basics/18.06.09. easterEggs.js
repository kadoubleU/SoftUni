function easterEggs(input) {
    let numberEggs = Number(input[0])

    let eggColor = "";

    let red = 0;
    let orange = 0;
    let blue = 0;
    let green = 0;

    for(let i = 1; i <= numberEggs; i++) {
        eggColor = input[i];
        

        if(eggColor === "red") {
            red++;
        }else if(eggColor === "orange") {
            orange++;
        }else if(eggColor === "blue") {
            blue++;
        }else if(eggColor === "green") {
            green++;
        }
    }

    console.log(`Red eggs: ${red}`);
    console.log(`Orange eggs: ${orange}`);
    console.log(`Blue eggs: ${blue}`);
    console.log(`Green eggs: ${green}`);

    let color = "";
    let maxEggs = 0;

    if(red > orange && red > blue && red > green) {
        maxEggs = red;
        color = "red";
    }else if(orange > red && orange > blue && orange > green) {
        maxEggs = orange;
        color = "orange";
    }else if(blue > red && blue > orange && blue > green) {
        maxEggs = blue;
        color = "blue";
    }else if(green > red && green > orange && green > blue) {
        maxEggs = green;
        color = "green";
    }

    console.log(`Max eggs: ${maxEggs} -> ${color}`);

}


easterEggs(["4",
"blue",
"red",
"blue",
"orange"]) ;

// Предстои Великден и едно от най-вълнуващите неща е боядисването на яйца. Наличните цветове за боядисване са:
// •	червено (red)
// •	оранжев (orange)
// •	син (blue) 
// •	зелен (green) 
// Напишете програма, която изчислява какъв е броят на яйцата от всеки цвят и от кой цвят яйцата са най - много, като знаете общия им брой и цвета на всяко яйце.
// Вход
// От конзолата се чете 1 ред:
// •	 Броят на боядисаните яйца – цяло число в интервала [1 ... 100]
// За всяко яйце се чете:
// o	Цветът на яйцето – текст с възможности: "red", "orange", "blue", "green"
// Изход
// Да се отпечатат на конзолата 5 реда:
// •	"Red eggs: {брой на червените яйца}"
// •	"Orange eggs: {брой на оранжевите яйца}"
// •	"Blue eggs: {брой на сините яйца}"
// •	"Green eggs: {брой на зелените яйца}"
// •	"Max eggs: {максимален брой на яйцата от цвят} -> {цвят}"
