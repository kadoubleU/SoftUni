function sumOfOddNumbers(num) {
    let number = Number(num);

    let oddNum = 1;
    let sum = 0;
    for(let i = 1; i <= number; i++) {
        console.log(oddNum);
        sum += oddNum;
        oddNum += 2;
    }
    console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(5);
sumOfOddNumbers("3");


// Write a program that prints the next n odd numbers (starting from 1) and on the last row prints the sum of them.
// Input
// You will receive a number – n. This number shows how many odd numbers you should print.
// Output
// Print the next n odd numbers, starting from 1, separated by newlines.
// On the last line, print the sum of these numbers in the following format: `Sum: {total sum}`
