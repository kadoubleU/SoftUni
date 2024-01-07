function addAndSubtract(numOne, numTwo, numThree) {
    let sum = function(numOne, numTwo) {
        return numOne + numTwo;
        
    }

    let subtract = sum(numOne, numTwo) - numThree;

    return subtract;
}

console.log(addAndSubtract(23, 6, 10));
console.log(addAndSubtract(1, 17, 30));
console.log(addAndSubtract(42, 58, 100));


//SECOND VARIANT

function addAndSubtract(firstNumber, secondNumber, thirdNumber) {
  let sum = function (firstNum, secondNum) {
    let sumResult = firstNum + secondNum;

    return sumResult;
  };

  let theSum = sum(firstNumber, secondNumber);

  let subtractResult = theSum - thirdNumber;

  return subtractResult;
}

console.log(addAndSubtract(23, 6, 10));
console.log(addAndSubtract(1, 17, 30));
console.log(addAndSubtract(42, 58, 100));
