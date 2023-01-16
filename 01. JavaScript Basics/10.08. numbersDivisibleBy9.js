function numbersDivisibleBy9(input) {
    let numOne = Number(input[0]);
    let numTwo = Number(input[1]);

    let sum = 0;

    for(let i = numOne; i <= numTwo; i++) {
        if(i % 9 === 0) {
            sum = sum + i; 
        }
    }

    console.log(`The sum: ${sum}`);

    for(let i = numOne; i <= numTwo; i++) {
        if(i % 9 === 0) {
            sum = sum + i;
            console.log(i);
        }
    }
   
}

numbersDivisibleBy9(["100", "200"]);

//Напишете функция, която получава две числа и принтира  на конзолата, всички числа в диапазона, които се делят на 9 без остатък, както и тяхната сума.  На първия ред отпечатайте сумата на числата, а на следващите редове отговарящите на условието числа.