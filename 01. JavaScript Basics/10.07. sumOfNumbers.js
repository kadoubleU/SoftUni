function sumOfNumbers(input) {
    let n = input[0];

    let toNum;
    let sum = 0;

    for(let i = 0; i < n.length; i++) {
        toNum = Number(n.charAt(i));

        sum = sum + toNum;
    }

    console.log(`The sum of the digits is:${sum}`);
}

sumOfNumbers(["564891"]);

// Напишете функция, която получава цяло число n, сумира всички негови цифри и отпечатва сумата. 
// Вход
// Функцията получава число n.
// Изход
// Да се отпечата на конзолата един ред:
// "The sum of the digits is:{sum}" – където sum е сумата на отделните цифри.
