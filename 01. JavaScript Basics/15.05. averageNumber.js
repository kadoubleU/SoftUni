function averageNumber(input) {
    let num = 1;
    let inputNumber = 0;
    let index = 1;

    let sum = 0;
    while(index < input.length) {
        
        inputNumber = Number(input[index]);
        
        sum = sum + inputNumber;
        num++;
        index++;
    }

    let averageNum = sum / (index - 1);
    console.log(averageNum.toFixed(2));
}

averageNumber([4
            ,95
            ,23
            ,76
            ,23]);



// Напишете програма, която прочита едно число n, след това прочита n на брой цели числа и принтира средно аритметичното на тяхната сума число, форматирано до втората цифра след десетични знак.