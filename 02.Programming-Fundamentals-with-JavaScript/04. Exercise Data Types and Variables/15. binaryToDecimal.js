function binaryToDecimal(binaryNum) {

    let stringNum = "" + binaryNum;

    let i = stringNum.length-1;

    let power = 0;

    let result = 0;

    let sum = 0;

    for(i; i >= 0; i--) {
        let getChar = stringNum[i];

        let charToNum = Number(getChar);

        result = charToNum * Math.pow(2, power);

        sum += result;

        power++;
    }

    console.log(sum);
}

binaryToDecimal("00001001");
binaryToDecimal("11110000");

