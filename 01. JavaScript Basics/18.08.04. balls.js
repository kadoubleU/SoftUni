function balls(input) {
    let ballsNumber = Number(input[0]);
    
    let ballColor = "";
    let points = 0;

    let redBalls = 0;
    let orangeBalls = 0;
    let yellowBalls = 0;
    let whiteBalls = 0;
    let blackBalls = 0;
    let otherColorsBalls = 0;

    for(let i = 1; i <= ballsNumber; i++) {
        ballColor = input[i];

        if(ballColor === "red") {
            points += 5;
            redBalls++;

        }else if(ballColor === "orange") {
            points += 10;
            orangeBalls++;

        }else if(ballColor === "yellow") {
            points += 15;
            yellowBalls++;

        }else if(ballColor === "white") {
            points += 20;
            whiteBalls++;

        }else if(ballColor === "black") {
            points /= 2;
            blackBalls++
        }else {
            otherColorsBalls++;
        }
    }

    console.log(`Total points: ${Math.floor(points)}`);
    console.log(`Red balls: ${redBalls}`);
    console.log(`Orange balls: ${orangeBalls}`);
    console.log(`Yellow balls: ${yellowBalls}`);
    console.log(`White balls: ${whiteBalls}`);
    console.log(`Other colors picked: ${otherColorsBalls}`);
    console.log(`Divides from black balls: ${Math.floor(blackBalls)}`);
}

balls(["5",
"red",
"red",
"ddd",
"ddd",
"ddd"]);

// В кутия имаме неопределен брой топки с различни цветове, които ни носят различен брой точки. Задачата ни е да извадим Х бр. топки, които ще бъдат въведени от конзолата, като се има в предвид, че всеки различен цвят влияе на точките ни по следния начин:
// •	Ако топката е “red” точките ни се повишават с 5.
// •	Ако топката е “orange” точките ни се повишават с 10.
// •	Ако топката е “yellow” точките ни се повишават с 15.
// •	Ако топката е “white” точките ни се повишават с 20.
// •	Ако топката е “black” точките ни се делят на 2, като закръгляме към по-малкото цяло число.
// Ако топката е с какъвто и да е цвят, различен от по-горните, точките не се манипулират и програмата продължава да работи.
// Вход:
// 1.	От конзолата се чете 1 цяло число N, което е броят на топките в диапазон (0-1000).
// 2.	След това се четат N на брой цветове.
// Изход:
// Отпечатват се следните редове:
// "Total points: {всичките събрани точки}"
// "Red balls: {броят червени топки}"
// "Orange balls: {броят оранжеви топки}"
// "Yellow balls: {броят жълти топки}"
// "White balls: {броят бели топки}"
// "Other colors picked: {броят на избраните топки извън зададените цветове}"
// "Divides from black balls: {броят на пътите, в които точките са били разделяни на 2}"
