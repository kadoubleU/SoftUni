function simpleCalculator(numOne, numTwo, operator) {
    let multiply = (numOne,numTwo) => numOne * numTwo;
    let divide = (numOne,numTwo) => numOne / numTwo;
    let add = (numOne,numTwo) => numOne + numTwo;
    let subtract = (numOne,numTwo) => numOne - numTwo;

    switch(operator) {
        case "multiply": return multiply(numOne, numTwo);
        case "divide": return divide(numOne, numTwo);
        case "add": return add(numOne, numTwo);
        case "subtract": return subtract(numOne, numTwo);
    }
}

console.log(simpleCalculator(5, 5, "multiply"));
console.log(simpleCalculator(40, 8, "divide"));
console.log(simpleCalculator(12, 19, "add"));
console.log(simpleCalculator(50, 13, "subtract"));
