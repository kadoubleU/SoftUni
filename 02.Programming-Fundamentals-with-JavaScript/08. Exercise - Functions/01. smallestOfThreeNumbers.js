function smallestOfThreeNumbers(firstNum, secondNum, thirdNum) {
    let smallestNumber = Math.min(firstNum, secondNum, thirdNum);

    return smallestNumber;
}

console.log(smallestOfThreeNumbers(2, 5, 3));
console.log(smallestOfThreeNumbers(600, 342, 123));
console.log(smallestOfThreeNumbers(25, 21, 4));
console.log(smallestOfThreeNumbers(2, 2, 2));
