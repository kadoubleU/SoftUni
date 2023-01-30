function equalSums(input) {
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);

    let printLine = "";
for(let i = firstNum; i<= secondNum; i++) {
    let currentNum = "" + i;
    let oddSum = 0;
    let evenSum = 0;

    for(let j = 0; j <= currentNum.length; j++) {
        let currentDigit = Number(currentNum.charAt(j));
        if(j % 2 === 0) {
            evenSum += currentDigit;
        }else {
            oddSum += currentDigit;
        }
    }

    if (oddSum === evenSum) {
        printLine += `${i} `;
    }

}

console.log(printLine);

}

equalSums(["299900",
"300000"])

;

// Напишете функция, която получава две шестцифрени цели числа в диапазона от 100000 до 300000. Винаги първото въведено число ще бъде по малко от второто. На конзолата да се отпечатат на 1 ред разделени с интервал всички числа, които се намират между двете, прочетени от конзолата числа и отговарят на следното условие:
// •	сумата от цифрите на четни и нечетни позиции да са равни. Ако няма числа, отговарящи на условието на конзолата не се извежда резултат. 
