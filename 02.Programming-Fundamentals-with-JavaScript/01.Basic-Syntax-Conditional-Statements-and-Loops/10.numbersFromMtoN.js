function numFromMtoN(numOne, numTwo) {
    let m = Number(numOne);
    let n = Number(numTwo);

    for(let i = m; i >= n; i--) {
        console.log(i);
    }
}

numFromMtoN(6,2);
numFromMtoN(4,1);



// Write a function that receives a number M and a number N (M will always be bigger than N). Print all numbers from M to N