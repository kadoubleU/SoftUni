function primeNumChecker(num) {
    let isTrue;
    
    if((num % 2 === 0) || num % 3 === 0) {
        isTrue = false;
    }else {
        isTrue = true;
    }

    console.log(isTrue);
}

primeNumChecker(7);
console.log("------------");
primeNumChecker(8);
console.log("------------");
primeNumChecker(81);