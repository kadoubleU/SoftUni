function pipeInPool(input) {
    let poolVolume = Number(input[0]);
    let p1 = Number(input[1]);
    let p2 = Number(input[2]);
    let hours = Number(input[3]);

    let p1Debit = p1 * hours;
    let p2Debit = p2 * hours;

    let pDebit = p1Debit + p2Debit;

    if(poolVolume >= pDebit) {
        let percent = (pDebit / poolVolume) * 100;
        let firstPipe = (p1Debit / pDebit) * 100;
        let secPipe = (p2Debit / pDebit) * 100;
        console.log(`The pool is ${percent.toFixed(2)}% full. Pipe 1: ${firstPipe.toFixed(2)}%. Pipe 2: ${secPipe.toFixed(2)}%.`);
    }else {
        let poolOverflow = pDebit - poolVolume;
        console.log(`For ${hours.toFixed(2)} hours the pool overflows with ${poolOverflow.toFixed(2)} liters.`);
    }
}

pipeInPool(["100", "100", "100", "2.5"]);

// Тръби в басейн
// Басейн с обем V има две тръби от които се пълни. Всяка тръба има определен дебит (литрите вода минаващи през една тръба за един час). Работникът пуска тръбите едновременно и излиза за N часа. Напишете програма, която изкарва състоянието на басейна, в момента, когато работникът се върне. 
// Вход
// От конзолата се четат четири реда:
// •	Първият ред съдържа числото V – Обем на басейна в литри – цяло число в интервала [1…10000].
// •	Вторият ред съдържа числото P1 – дебит на първата тръба за час – цяло число в интервала [1…5000].
// •	Третият ред съдържа числото P2 – дебит на втората тръба за час– цяло число в интервала [1…5000].
// •	Четвъртият ред съдържа числото H – часовете които работникът отсъства – реално число в интервала [1.0…24.00]
// Изход
// Да се отпечата на конзолата едно от двете възможни състояния:
// •	До колко се е запълнил басейна и коя тръба с колко процента е допринесла.
// o	"The pool is {запълненост на басейна в проценти}% full. Pipe 1: {процент вода от първата тръба}%. Pipe 2: {процент вода от втората тръба}%."
// Aко басейнът се е препълнил – с колко литра е прелял за даденото време.
// o	"For {часовете, които тръбите са пълнили вода} hours the pool overflows with {литрите вода в повече} liters."
