function factorialDivision(firstNum, secondNum) {
    let firstNumResult = firstNum;;
    let secondNumResult = secondNum;

    let finalResult = 0;

    for(let i = firstNum - 1; i > 1; i--) {
        firstNumResult *= i;
    }

    for(let j = secondNum - 1; j > 1; j--) {
        secondNumResult *= j;
    }

    finalResult = (firstNumResult / secondNumResult).toFixed(2);

    if(firstNum >= 1 && secondNum >= 1) {
        console.log(finalResult);
    }else if(firstNum === 0 || secondNum) {
        console.log("1.00");
    }
        
    
    
}

factorialDivision(5, 2);
factorialDivision(6, 2);


//SECOND VARIANT

function factorialDivision(num1, num2) {

    let num1Factorial = 1;
    let num2Factorial = 1;

  for(let i = 1; i <= num1; i++) {
    num1Factorial *= i;
  }

  for(let i = 1; i <= num2; i++) {
    num2Factorial *= i;
  }

  let result = num1Factorial / num2Factorial;

  return result.toFixed(2);
}

console.log(factorialDivision(5, 2));
