function multiplicationTable(input) {
    let number = Number(input[0]);

    let result;

    for(let i = 1; i <= 10; i++) {
        result = i * number;
        console.log(`${i} * ${number} = ${result}`);
    }
}

multiplicationTable(["5"]);

// Напишете функция, която получава аргумент число от 1 до 10 и принтира таблицата за умножение в конзолата. 