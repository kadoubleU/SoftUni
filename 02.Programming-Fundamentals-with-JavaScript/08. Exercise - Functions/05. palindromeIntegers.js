function palindromeIntegers(arr) {

    let reverseNum = "";

    for(let i = 0; i < arr.length; i++) {
        let num = Number(arr[i]);

        let toString = num.toString();

        for(let j = toString.length - 1; j >= 0; j--) {
            let fromLastNum = toString[j];

            reverseNum += fromLastNum;
        }

        reverseNum = Number(reverseNum);

        if(reverseNum === num) {
            console.log("true");
        }else {
            console.log("false");
        }

        reverseNum = "";
    }
}

palindromeIntegers([123,323,421,121]);
console.log("---------");
(palindromeIntegers([32,2,232,1010]));