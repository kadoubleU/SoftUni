function numberFromNTo1(input) {
    let n = Number(input[0]);


    for(n; n >= 1; n--) {
        console.log(n);
    }
}

numberFromNTo1(["5"]);

// Напишете функция, която получава положително число n, въведено от потребителя и печата числата от n до 1 в обратен ред. Въведеното число n, винаги ще бъде по-голямо от 1.