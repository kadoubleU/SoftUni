function repeatString(str, count) {
    let result = "";

    for(let i = 0; i < count; i++) {
        result += str;
    }

    return result;
}

console.log(repeatString("abc", 3));
console.log(repeatString("String", 2));

//SECOND VARIANT

function repeatString(text, repeatsNumber) {
    let newString = "";
  
    for (let i = 0; i < repeatsNumber; i++) {
      newString += text;
    }
  
    return newString;
  }
  
  console.log(repeatString("abc", 3));
  console.log(repeatString("String", 2));
  