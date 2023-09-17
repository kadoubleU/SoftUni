function sortNumber(a, b, c) {
    
    let maxNum = 0;
    let minNum = 0;

    maxNum = Math.max(a,b,c);
        minNum = Math.min(a,b,c);
    
    if(a < maxNum && a > minNum) {
        console.log(maxNum);
        console.log(a);
        console.log(minNum);
    }else if(b < maxNum && b > minNum) {
        console.log(maxNum);
        console.log(b);
        console.log(minNum); 
    }else if(c < maxNum && c > minNum) {
        console.log(maxNum);
        console.log(c);
        console.log(minNum); 
    }else if (a === b && a < c) {
        console.log(c);
        console.log(b);
        console.log(a);
    }else if(a === c && a < b) {
        console.log(b);
        console.log(a);
        console.log(c);
    }else if(a === b && a > c) {
        console.log(a);
        console.log(b);
        console.log(c);
    }else if(a === c && a > b) {
        console.log(a);
        console.log(c);
        console.log(b);
    }else if(b === a && b < c) {
        console.log(c);
        console.log(b);
        console.log(a);
    }else if(b === a && b > c) {
        console.log(b);
        console.log(a);
        console.log(c);
    }else if(b === c && b < a) {
        console.log(a);
        console.log(b);
        console.log(c);
    }else if(b === c && b > a) {
        console.log(b);
        console.log(c);
        console.log(a);
    }else if(c === a && c < b) {
        console.log(b);
        console.log(a);
        console.log(c);
    }else if(c === a && c > b) {
        console.log(c);
        console.log(a);
        console.log(b);
    }else if(c === b && c < a) {
        console.log(a);
        console.log(b);
        console.log(c);
    }else if(c === b && c > a) {
        console.log(c);
        console.log(b);
        console.log(a);
    }
}

//SECOND VARIANT

function sortNumbers(numOne, numTwo, numThree) {
    let array = [];
    array.push(numOne, numTwo, numThree);

    array.sort();
    array.reverse();

    for(let i = 0; i < array.length; i++) {
        let num = Number(array[i]);

        console.log(num);
    }

}

sortNumber(2,1,3);
console.log("--------------");
sortNumber(-2, 1, 3);
console.log("--------------");
sortNumber(0, 0, 2);
