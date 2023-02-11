function series(input) {
    index = 0;
    let budget = Number(input[index]);

    let serialName = "";

    let price = 0;

    let sum = 0;

    for(index = 2; index < input.length; index++) {
        serialName = input[index];
        index++;
        price = Number(input[index]);

        if(serialName === "Thrones") {
            price = price - (price * (50/100));

        }else if(serialName === "Lucifer") {
            price = price - (price * (40/100));

        }else if(serialName === "Protector") {
            price = price - (price * (30/100));

        }else if(serialName === "TotalDrama") {
            price = price - (price * (20/100));

        }else if(serialName === "Area") {
            price = price - (price * (10/100));
        }

        sum += price;

    }

    if(budget >= sum) {
        let leftedMoney = budget - sum;
        console.log(`You bought all the series and left with ${leftedMoney.toFixed(2)} lv.`);
    }else {
        let neededMoney = sum - budget;
        console.log(`You need ${neededMoney.toFixed(2)} lv. more to buy the series!`);
    }

}

series(["25",
"6",
"Teen Wolf",
"8",
"Protector",
"5",
"TotalDrama",
"5",
"Area",
"4",
"Thrones",
"5",
"Lucifer",
"9"]);

// От телевизионна компания ви наемат да създадете програма, която да изчислява дали за клиентите ще е възможно да си закупят желаните сериали. Разполагате с бюджет и брой сериали, които потребителят ще желае да закупи. Всеки сериал съответно има заглавие и цена.
// Някои от сериалите имат намаление:
// •	Thrones – 50%
// •	Lucifer – 40%	
// •	Protector – 30%
// •	TotalDrama – 20%
// •	Area – 10%
// Вход
// От конзолата се четат:
// •	Бюджет  - реално  число в интервала [10.0… 100.0]
// •	Брой сериали - n - цяло положително число в интервала [1… 10]
// За всеки сериал се четат по два реда:
// o	Име на сериал - текст
// o	Цена за сериал -  реално  число в интервала [1.0… 15.0]
// Изход
// На конзолата да се изпише един ред:
// •	Ако бюджета ви е по-голям или равен на цената на сериалите:
// 	"You bought all the series and left with {останали пари} lv."
// •	Ако бюджета ви е по-малък от цената на сериалите:
// 	"You need {нужни пари} lv. more to buy the series!"
// Резултатът да бъде закръглен до втората цифра след десетичния знак.
