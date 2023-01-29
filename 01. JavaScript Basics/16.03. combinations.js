function combinations(input) {
    let n = Number(input[0]);

    let result = 0;
    let count = 0;

    for(let x1 = 0; x1 <= n; x1++) {
        for(let x2 = 0; x2 <= n; x2++) {
            for(let x3 = 0; x3 <= n; x3++) {
                result = x1 + x2 + x3;

                if(result === n) {
                    count++;
                }
            }
        }
    }

    console.log(count);

}

combinations(["5"]);

// Напишете функция, която изчислява колко решения в естествените числа (включително и нулата) има уравнението:
// x1 + x2 + x3 = n
// Числото n е цяло число и се въвежда от конзолата. 
