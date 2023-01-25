function minNumber(input) {
    let index = 0;

    let number = Number.MAX_SAFE_INTEGER;

    while(input[index] !== "Stop") {
       
        if(input[index] <= number){
            number = Number(input[index]);
        }
        index++;
    }
    console.log(number);
}

minNumber(["100", "99", "80", "70", "Stop"]);

// Напишете функция, която до получаване на командата "Stop", чете цели числа, и намира най-малкото измежду тях. Въвежда се по едно число на ред. 
