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



//SECOND VARIANT

function passwordValidator(password) {
    let splitPass = password.split("");
  
    // -------FUNCTION 1 - CHECK CHAR NUMBERS--------------------------------------
  
    let firstCheckResult = function (text) {
      let charsNumber = 0;
  
      for (let i = 0; i < text.length; i++) {
        charsNumber++;
      }
  
      return charsNumber;
    };
  
    let charNumbersChecker = firstCheckResult(splitPass); // "Password must be between 6 and 10 characters"
    // ----------------------------------------------------------------
  
    // -------FUNCTION 2 - CHECK PASSWORD ONLY FROM LETTERS AND DIGITS-------------
  
    let secondCheckResult = function (arrayText) {
      let isDigitOrLetter = true;
      let smallLetters = true;
      let bigLetters = true;
      let digits = true;
  
      for (let i = 0; i < arrayText.length; i++) {
        let getChar = arrayText[i];
        let charToAscii = getChar.charCodeAt();
  
        smallLetters = charToAscii > 96 && charToAscii < 123;
        bigLetters = charToAscii > 64 && charToAscii < 91;
        digits = charToAscii > 47 && charToAscii < 58;
  
        if (smallLetters || bigLetters || digits) {
          isDigitOrLetter = true;
        } else {
          isDigitOrLetter = false;
          return isDigitOrLetter;
        }
      }
      return isDigitOrLetter;
    };
  
    let isLettersAndDigits = secondCheckResult(splitPass); // "Password must consist only of letters and digits"
  
    // ----------------------------------------------------------------
  
  // -------FUNCTION 3 - CHECK AT LEAST 2 DIGITS-------------
  
    let thirdCheckResult = function (arrayInput) {
      let digitsNumbers = 0;
      let isMoreThan2Digits = false;
      for(let i = 0; i < arrayInput.length; i++) {
          let char = arrayInput[i];
  
          let getDecCode = char.charCodeAt();
          
          if(getDecCode > 47 && getDecCode < 58) {
              digitsNumbers++;
          }
      }
  
      if(digitsNumbers >= 2) {
          isMoreThan2Digits = true;
          return isMoreThan2Digits;
      }else {
          isMoreThan2Digits = false;
          return isMoreThan2Digits;
      }
    }
  
    let isMoreThanTwoDigits = thirdCheckResult(splitPass); // "Password must have at least 2 digits"
  
  // ----------------------------------------------------------------
  
    let isTrue = charNumbersChecker >= 6 && charNumbersChecker <= 10;
  
    if(isTrue && isLettersAndDigits && isMoreThanTwoDigits) {
      console.log("Password is valid");
    }
    
    if(isTrue === false) {
      console.log("Password must be between 6 and 10 characters");
    }
  
    if(isLettersAndDigits === false) {
      console.log("Password must consist only of letters and digits");
    }
  
    if(isMoreThanTwoDigits === false) {
      console.log("Password must have at least 2 digits");
    }
  }
  
  passwordValidator("logIn");
  passwordValidator('MyPass123');
  passwordValidator("Pa$s$s");
  