function mathPower(num, power) {
    result = 1;

    for(let i = 0; i < Number(power); i++) {
       result *= num;
    }

    return result;
}

console.log(mathPower(2,8));
console.log(mathPower(3,4));