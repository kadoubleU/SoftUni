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

//SECOND VARIANT

function englishName(num) {

    let numberToString = num.toString();

    let array = numberToString.split("");
   
    let lastDigit = Number(array[array.length - 1]);

    if(lastDigit === 1) {
        console.log("one");
    }else if(lastDigit === 2) {
        console.log("two");
    }else if(lastDigit === 3) {
        console.log("three")
    }else if(lastDigit === 4) {
        console.log("four")
    }else if(lastDigit === 5) {
        console.log("five")
    }else if(lastDigit === 6) {
        console.log("six");
    }else if(lastDigit === 7) {
        console.log("seven");
    }else if(lastDigit === 8) {
        console.log("eight");
    }else if(lastDigit === 9) {
        console.log("nine");
    }else if(lastDigit === 0) {
        console.log("zero");
    }
}

enNameLastDigit(512);
console.log("------");
enNameLastDigit(1);
console.log("------");
enNameLastDigit(1643);
