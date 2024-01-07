function oddAndEvenSum(singleNum) {

    let num = singleNum.toString();
    let evenSum = 0;
    let oddSum = 0;

    for(let i = 0; i < num.length; i++) {
        let convertedNum = Number(num[i]);

        if(convertedNum % 2 === 0) {
            evenSum += convertedNum;
        }else {
            oddSum += convertedNum;
        }
    }

    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}

console.log(oddAndEvenSum(1000435));
console.log(oddAndEvenSum(3495892137259234));



//SECOND VARIANT

function oddAndEvenSum(number) {
    let numberToString = String(number);
    let evenSum = 0;
    let oddSum = 0;

    for(let index = 0; index < numberToString.length; index++) {
        let charNum = Number(numberToString[index]);

        if(charNum % 2 === 0) {
            evenSum += charNum;
        }else {
            oddSum += charNum;
        }
    }

    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}

console.log(oddAndEvenSum(1000435));
console.log(oddAndEvenSum(3495892137259234));