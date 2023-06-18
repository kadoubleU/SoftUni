function lastKNumbersSequance(n, k) {
    let arr = [1];
    
    let sum = 0;
    
    for(let i = 1; i < n; i++) {
        let kArr = arr.slice(-k);
        for(let j = 0; j < kArr.length ; j++) {
           
            sum += kArr[j];

        }

        arr.push(sum);
        
        sum = 0;
    }

    console.log(arr.join(" "));
}

lastKNumbersSequance(6, 3);
lastKNumbersSequance(8, 2);