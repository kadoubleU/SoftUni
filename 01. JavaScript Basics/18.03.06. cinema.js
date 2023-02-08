function cinema(input) {
    index = 0
    let hallCapacity = Number(input[index]);
    index++;

    let totalSum = 0;

    while(input[index] !== "Movie time!") {
        let places = input[index];

        hallCapacity -= places;

        let sum = places * 5;

        if(hallCapacity < 0) {
            console.log(`The cinema is full.`);
            break;
        }

        if(places % 3 === 0) {
           sum = sum - 5;
        }

        totalSum += sum;

        sum = 0;

        index++;

        if(input[index] === "Movie time!") {
            console.log(`There are ${hallCapacity} seats left in the cinema.`);
        }
    }

    console.log(`Cinema income - ${totalSum} lv.`);

}

cinema(["100",
"10",
"10",
"10",
"10",
"10",
"10",
"10",
"10",
"10",
"10",
"Movie time!"])

;

// От кино ви наемат да напишете програма, чрез която да разберете дали на една прожекцията ще се запълни залата и колко пари ще се изкарат от нея. Получавате места в залата и на всеки следващ ред до команда "Movie time!", колко хора влизат в залата. Цената на един билет е 5 лв. Ако текущия брой хора влезли в залата се дели на 3 без остатък, се прави отстъпка 5лв от общата им сметка. 
// Ако в залата се опитат да влязат повече хора от колкото места са останали, то се счита че местата са изчерпани и програмата трябва да приключи четенето на вход.
// Вход
// От конзолата се четат:
// •	На първия ред - капацитет на залата - цяло число в интервала [50... 150]
// На всеки следващ ред до команда "Movie time!":
// o	Брой хора влизащи в киното - цяло число в интервала [1… 15]
// Изход
// На конзолата първо да се отпечата един ред:
// •	При получена команда "Movie time!":
//  "There are {останали места} seats left in the cinema."
// •	При изчерпване на местата в залата:
// 	"The cinema is full."
// След това да се отпечата:
// 	"Cinema income - {приходи от залата} lv."
