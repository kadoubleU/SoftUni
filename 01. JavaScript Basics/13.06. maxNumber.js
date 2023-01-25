function maxNumber(input) {
    let index = 0;

    let number = Number.MIN_SAFE_INTEGER;

    while(input[index] !== "Stop") {
        
        if(input[index] > number) {
            number = Number(input[index]);
        }
        index++;
        
    }
    console.log(number);
    
}

maxNumber(["-1", "-2", "Stop"]);

// Напишете функция, която до получаване на командата "Stop", чете цели числа и намира най-голямото измежду тях. Въвежда се по едно число на ред. 