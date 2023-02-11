function movieStars(input) {
    index = 0;
    let actorsBudget = Number(input[index]);
    index++;

    let budget = actorsBudget;

    let actorName = "";
    let salary = 0;
    let totalMoney = 0;

    while(input[index] !== "ACTION" && budget >= 0) {
        actorName = input[index];
        index++;

        if(actorName.length <= 15) {
            salary = Number(input[index]);
            budget -= salary;

            totalMoney += salary;
            index++;
        } else {
            salary = (budget * (20 / 100));
            budget -= salary;

            totalMoney += salary;
        }
    }

    if(budget >= 0) {
        console.log(`We are left with ${budget.toFixed(2)} leva.`);
    }else {
        let neededMoney = totalMoney - actorsBudget;
        console.log(`We need ${neededMoney.toFixed(2)} leva for our actors.`);
    }

}

movieStars(["170000",
"Ben Affleck",
"40000.50",
"Zahari Baharov",
"80000",
"Tom Hanks",
"2000.99",
"ACTION"]);

// Счетоводителят на киноцентър "Тинтява 15" ви наема да напишете програма, която пресмята хонорарите за актьорите. Всяка продукция има бюджет за актьори. До команда "ACTION" ще получавате име на актьор и възнаграждението му. Ако името на актьора е по-дълго от 15 символа възнаграждението му ще е 20 % от останалия бюджет до момента. Ако бюджета в даден момент свърши, програмата трябва да прекъсне.
// Вход
// От конзолата първо се чете един ред:
// •	Бюджет за актьори - реално число в интервала [1000.0... 2 100 000.0]
// След това се четат многократно по един или два реда до команда "ACTION" или до изчерпване на бюджета:
// •	Име на актьор - текст
// Ако името на актьора съдържа по-малко или равно на 15 брой символи: 
// o	Възнаграждение - реално число в интервала [250.0… 1 000 000.0]
// Изход
// На конзолата да се отпечата един ред:
// •	Ако бюджета е достатъчен :
//              "We are left with {останал бюджет} leva."
// •	Ако бюджета не е достатъчен:
// 	"We need {необходим бюджет} leva for our actors."
// Резултата да се форматира до втората цифра след десетичния знак!


