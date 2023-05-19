function specialNumbers(num) {

    let toString = "";
    let getTheNum = 0;
    let sum = 0;

    for(let i = 1; i <= num; i++) {
        toString = i+ "";

        for(let j = 0; j < toString.length; j++) {
            getTheNum = Number(toString[j]);

            sum += getTheNum;
        }

        if(sum === 5 || sum === 7 || sum === 11) {
            console.log(`${i} -> True`);
        }else {
            console.log(`${i} -> False`);
        }

        sum = 0;
    }

}

specialNumbers(15);
console.log("----------");
specialNumbers(20);