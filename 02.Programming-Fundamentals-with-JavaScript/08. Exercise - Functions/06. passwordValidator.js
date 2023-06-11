function passwordValidator(password) {
    let charLength = false;
    let lettersAndDigitsOnly = false;
    let leastTwoDigits = false;

    let count = 1;

    //First Check
    if(password.length >= 6 && password.length <= 10) {
        charLength = true;
    }

    for(let i = 0; i < password.length; i++) {
        let char = password[i];

        let charToAscii = char.charCodeAt();

        //Second Check
        if((charToAscii >= 48 && charToAscii <= 57)
        || (charToAscii >= 65 && charToAscii <= 90)
        || (charToAscii >= 97 && charToAscii <= 122)) {
            lettersAndDigitsOnly = true;
        }else {
            lettersAndDigitsOnly = false;
            break;
        }

        //Third Check
        if(charToAscii >= 48 && charToAscii <= 57) {
            count++;
        }
    }

    //Third Check
    if(count >= 2) {
        leastTwoDigits = true;
    }else {
        leastTwoDigits = false;
    }

    //Final Check
    if((charLength === true) && (lettersAndDigitsOnly === true) && (leastTwoDigits === true)) {
        console.log("Password is valid");
    }else if((charLength === true) && (lettersAndDigitsOnly === true) && (leastTwoDigits === false)) {
        console.log("Password must have at least 2 digits");
    }else if((charLength === true) && (lettersAndDigitsOnly === false) && (leastTwoDigits === true)) {
        console.log('Password must consist only of letters and digits');
    }else if((charLength === false) && (lettersAndDigitsOnly === true) && (leastTwoDigits === true)){
        console.log('Password must be between 6 and 10 characters');
    }else if((charLength === true) && (lettersAndDigitsOnly === false) && (leastTwoDigits === false)) {
        console.log('Password must consist only of letters and digits');
        console.log("Password must have at least 2 digits");
    }else if((charLength === false) && (lettersAndDigitsOnly === true) && (leastTwoDigits === false)){
        console.log('Password must be between 6 and 10 characters');
        console.log("Password must have at least 2 digits");
    }else if((charLength === false) && (lettersAndDigitsOnly === false) && (leastTwoDigits === true)) {
        console.log('Password must be between 6 and 10 characters');
        console.log('Password must consist only of letters and digits');
    }else if((charLength === false) && (lettersAndDigitsOnly === false) && (leastTwoDigits === false)) {
        console.log('Password must be between 6 and 10 characters');
        console.log('Password must consist only of letters and digits');
        console.log("Password must have at least 2 digits");
    }
} 




passwordValidator('logIn');
console.log("----------");
passwordValidator('MyPass123');
console.log("----------");
passwordValidator('Pa$s$s');