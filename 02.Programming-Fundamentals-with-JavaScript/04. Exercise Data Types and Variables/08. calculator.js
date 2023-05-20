function calculator(num1, operator, num2) {
    
    switch(operator) {
        case "+": console.log((Number(num1) + Number(num2)).toFixed(2)); break;
        case "-": console.log((Number(num1) - Number(num2)).toFixed(2)); break;
        case "*": console.log((Number(num1) * Number(num2)).toFixed(2)); break;
        case "/": console.log((Number(num1) / Number(num2)).toFixed(2)); break;
    }
}

calculator(5, "+", 10);
console.log("---------");
calculator(25.5, "-", 3);