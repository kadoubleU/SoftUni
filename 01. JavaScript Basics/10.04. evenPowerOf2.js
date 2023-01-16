function evenPowerOf2(input) {
    let n = Number(input[0]);
    let num;

    for(let i = 0; i <= n; i++) {

        if(i % 2 === 0) {            
            num = Math.pow(2, i);
            console.log(num);
        }     
    }
}

evenPowerOf2(["7"]);

// Да се напише функция, която получава число n и печата четните степени на 2 ≤ 2n: 20, 22, 24, 26, …, 2n.