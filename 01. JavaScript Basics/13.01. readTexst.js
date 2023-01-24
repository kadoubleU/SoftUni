function readText(input) {
    let index = 0;

    while(input[index] !== "Stop") {
        console.log(input[index]);
        index++;
    }
}

readText(["Sofia",
"Berlin",
"Moscow",
"Athens",
"Madrid",
"London",
"Paris",
"Stop",
"AfterStop"])

;

//Напишете функция, която чете елементите на масив, докато не получи командата "Stop".