function greaterNumber(input) {
    let numOne = Number(input[0]);
    let numTwo = Number(input[1]);

    if(numOne > numTwo) {
        console.log(numOne);
    } else {
        console.log(numTwo);
    }
}

greaterNumber(["60", "8"]);

//Да се напише функция, която получава две цели числа и отпечатва по-голямото от двете. 