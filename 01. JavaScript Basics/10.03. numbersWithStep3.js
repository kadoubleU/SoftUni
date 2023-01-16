function numbersWithStep3(input) {
    let n = Number(input[0]);

    for(let i = 1;  i <= n; i = i + 3) {
        console.log(i);
    }
}

numbersWithStep3(["15"]);

//Напишете функция, която получава число n и отпечатва числата от 1 до n през 3.