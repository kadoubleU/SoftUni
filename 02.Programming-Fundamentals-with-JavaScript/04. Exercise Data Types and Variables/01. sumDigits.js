function sumDigits(num) {
    let sumToString = num.toString();

    let sum = 0;

    for(let i = 0; i < sumToString.length; i++) {
        let getNum = Number(sumToString[i]);

        sum += getNum;
    }

    console.log(sum);
}

sumDigits(245678);
console.log("----------");
sumDigits(97561);
console.log("----------");
sumDigits(543);