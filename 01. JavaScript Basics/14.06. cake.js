function cake(input) {
    index = 0;
    let lengthCake = Number(input[index]);
    index++;

    let widthCake = Number(input[index]);
    index++;

    let cakesSize = lengthCake * widthCake;

    cakesNumber = 0;
    
    while(index < input.length || input[index] === "STOP") {
        cakesNumber = input[index];

        if(cakesNumber !== "STOP"){
            cakesSize = cakesSize - Number(cakesNumber);
            
        }else if(cakesNumber === "STOP" || cakesSize <= 0){
            break;
        }

        index++;
    }

    if(cakesSize <= 0) {
        console.log(`No more cake left! You need ${Math.abs(cakesSize)} pieces more.`);
    }else {
        console.log(`${cakesSize} pieces are left.`);
    }
}

cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"])

;

// Поканени сте на 30-ти рожден ден, на който рожденикът черпи с огромна торта. Той обаче не знае колко парчета могат да си вземат гостите от нея. Вашата задача е да напишете функция, която изчислява броя на парчетата, които гостите са взели, преди тя да свърши. Ще получите размерите на тортата (широчина и дължина – цели числа в интервала [1...1000]) и след това на всеки ред, до получаване на командата "STOP" или докато не свърши тортата, броят на парчетата, които гостите вземат от нея. 
// Бележка: Едно парче торта е с размер 1х1 см.
// Да се отпечата на конзолата един от следните редове:
// •	"{брой парчета} pieces are left." - ако стигнете до STOP и не са свършили парчетата торта
// •	"No more cake left! You need {брой недостигащи парчета} pieces more."
