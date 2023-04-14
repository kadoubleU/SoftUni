function triangleOfNumbers(num) {
    let n = Number(num);

    let concatI = "";

    for(let i = 1; i <= num; i++) {
        if (i > 1) {
            concatI += "\n"
        }

        concatI += `${i} `;

       for(j = 1; j < i; j++) {

        concatI += `${i} `;
        
       }
    
    }

    console.log(concatI);
}

triangleOfNumbers(5);

// 7.	Triangle of Numbers
// Write a function, which receives a single number – n, and prints a triangle from 1 to n as in the examples.
// Constraints
// ·	n will be in the interval [1...20].
