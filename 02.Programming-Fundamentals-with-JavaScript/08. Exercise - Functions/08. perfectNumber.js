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


//SEOCND VARIANT

function perfectNumber(number) {
    let sum = 0;

    for(let i = 1; i < number; i++) {
        if(number % i === 0) {
            sum += i;
        }
    }

    if(sum === number) {
        return "We have a perfect number!";
    }else {
        return "It's not so perfect.";
    }
}

console.log(perfectNumber(6));
console.log(perfectNumber(28));
console.log(perfectNumber(1236498));