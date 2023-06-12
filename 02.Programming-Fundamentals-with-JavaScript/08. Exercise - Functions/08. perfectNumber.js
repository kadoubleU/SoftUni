function perfectNumber(getNum) {
    let num = Number(getNum);

    let result = 0;
    if(num > 2) {
        for(let i = 0; i < num; i++) {
            if(num % i === 0 && num !== i) {
                let divideResult = num / i;

                result += i;
            }
        }

        if(result === num) {
            console.log("We have a perfect number!");
        }else {
            console.log("It's not so perfect.");
        }
    }else {
        console.log("It's not so perfect.");
    }
}

perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);