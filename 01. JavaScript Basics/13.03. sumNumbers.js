function sumNumbers(input) {
    let n = Number(input[0]);
    let index = 1;

    let sum = 0;
    while(index < input.length) {
        sum = sum + Number(input[index]);
        index++;
    }

    if(sum >= n) {
        console.log(sum);
    }
        
}

sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])
;

//Напишете функция, която чете цяло число от масив и на всеки следващ ред цели числа, докато тяхната сума стане по-голяма или равна на първоначалното число. След приключване да се отпечата сумата на въведените числа.
