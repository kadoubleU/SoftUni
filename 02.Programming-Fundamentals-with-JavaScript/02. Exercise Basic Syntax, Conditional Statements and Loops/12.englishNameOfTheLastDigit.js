function enNameLastDigit(num) {

    let numToString = num + "";

    let lastNum = 0;

    for(let i = 0; i < numToString.length; i++) {
        lastNum = numToString[i];
    }
    let name;

    switch(Number(lastNum)) {
        case 1: name = "one";
        break;
        case 2: name = "two";
        break;
        case 3: name = "three";
        break;
        case 4: name = "four";
        break;
        case 5: name = "five";
        break;
        case 6: name = "six";
        break;
        case 7: name = 'seven';
        break;
        case 8: name = "eight";
        break;
        case 9: name = "nine";
        break;
        case 0: name = "zero";
        break;
    }

    console.log(name);
}

enNameLastDigit(512);
console.log("------");
enNameLastDigit(1);
console.log("------");
enNameLastDigit(1643);