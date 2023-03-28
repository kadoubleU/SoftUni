function numFromNtoOne(num) {
    let number = Number(num);

    for(let i = number; i >= 1; i--) {
        console.log(i);
    }
}

numFromNtoOne(5);
numFromNtoOne(3);

// Write a function that receives a number N and prints all the numbers from N to 1. Try using the while loop.