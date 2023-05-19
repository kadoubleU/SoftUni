function amazingNumbers(input) {
   let inputToString =  input + "";

   let sum = 0;

    for(let i = 0; i < inputToString.length; i++) {
        let num = Number(inputToString[i]);

        sum += num;
    }

    sum += "";

    let notAmazing = false;
    let count = 0;

    for(let j = 0; j < sum.length; j++) {
        let sumNum = Number(sum[j]);

        if(sumNum === 9) {
            console.log(`${input} Amazing? True`);
            break;
        }else if((count+1) === sum.length) {
            notAmazing = true;
        }

        count++;
    }

    if(notAmazing) {
        console.log(`${input} Amazing? False`);
    }
}

amazingNumbers(1233);
console.log("-----------");
amazingNumbers(999);