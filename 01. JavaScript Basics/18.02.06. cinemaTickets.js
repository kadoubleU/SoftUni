function cinemaTickets(input) {
    index = 0;

    let totalTickets = 0;

    let studentTickets = 0;
    let standardTickets = 0;
    let kidTickets = 0;

    let freeSpaces = 0;

    while(input[index] !== "Finish" && index < input.length) {

        let movieName = input[index];
        index++;

        freeSpaces = Number(input[index]);
        index++;

            let leftSpaces = freeSpaces;
            let used = 0;

        while(input[index] !== "End") {
            let ticketType = input[index];
            
            if(ticketType === "student") {
                studentTickets++;
                leftSpaces -= 1;

                totalTickets++;
                used++

            }else if(ticketType === "standard") {
                standardTickets++;
                leftSpaces -= 1;
                totalTickets++;

                used++;

            }else if(ticketType === "kid") {
                kidTickets++;
                leftSpaces -= 1;
                totalTickets++;

                used++;
            }

            
            if(leftSpaces <= 0) {
                break;
            }

            index++;

            
            
        }

        let usedSpace = (used / freeSpaces) * 100;

        console.log(`${movieName} - ${usedSpace.toFixed(2)}% full.`);

        if(input[index] === "Finish") {
            break;
        }

        index++;

        used = 0;

    }
    
    console.log(`Total tickets: ${totalTickets}`);

    let studentTicketsPercent = (studentTickets / totalTickets) * 100;
    console.log(`${studentTicketsPercent.toFixed(2)}% student tickets.`);

    let standardTicketsPercent = (standardTickets / totalTickets) * 100;
    console.log(`${standardTicketsPercent.toFixed(2)}% standard tickets.`);

    let kidsTicketsPercent = (kidTickets / totalTickets) * 100;
    console.log(`${kidsTicketsPercent.toFixed(2)}% kids tickets.`);
    
}

cinemaTickets(["The Matrix",
"20",
"student",
"standard",
"kid",
"kid",
"student",
"student",
"standard",
"student",
"End",
"The Green Mile",
"17",
"student",
"standard",
"standard",
"student",
"standard",
"student",
"End",
"Amadeus",
"3",
"standard",
"standard",
"standard",
"Finish"])
;

// Вашата задача е да напишете програма, която да изчислява процента на билетите за всеки тип от продадените билети: студентски(student), стандартен(standard) и детски(kid), за всички прожекции. Трябва да изчислите и колко процента от залата е запълнена за всяка една прожекция.
// Вход
// Входът е поредица от цели числа и текст:
// •	На първия ред до получаване на командата "Finish" - име на филма – текст
// •	На втори ред – свободните места в салона за всяка прожекция – цяло число [1 … 100]
// •	За всеки филм, се чете по един ред до изчерпване на свободните места в залата или до получаване на командата "End":
// o	Типа на закупения билет - текст ("student", "standard", "kid")
// Изход
// На конзолата трябва да се печатат следните редове:
// •	След всеки филм да се отпечата, колко процента от кино залата е пълна
// "{името на филма} - {процент запълненост на залата}% full."
// •	При получаване на командата "Finish" да се отпечатат четири реда:
// o	"Total tickets: {общият брой закупени билети за всички филми}"
// o	"{процент на студентските билети}% student tickets."
// o	"{процент на стандартните билети}% standard tickets."
// o	"{процент на детските билети}% kids tickets."
