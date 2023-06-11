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