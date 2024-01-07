function characterInRange(firstChar, lastChar) {
    let firstCharAsciiCode = firstChar.charCodeAt();
    let lastCharAsciiCode = lastChar.charCodeAt();

    let minAscii = Math.min(firstCharAsciiCode, lastCharAsciiCode);
    let maxAscii = Math.max(firstCharAsciiCode, lastCharAsciiCode);
    
    let result = "";

    for(let asciiNumber = minAscii + 1; asciiNumber < maxAscii; asciiNumber++) {
       
        let asciiToChar = String.fromCharCode(asciiNumber);
        
        result += `${asciiToChar} `;
    }

    return result;
}

console.log(characterInRange("a", "d"));
console.log(characterInRange("#", ":"));
console.log(characterInRange("C", "#"));


//SECOND VARIANT

function charactersInRange(firstChar, secondChar) {
    let smallestChar = Math.min(firstChar.charCodeAt(), secondChar.charCodeAt());
    let biggestChar = Math.max(firstChar.charCodeAt(), secondChar.charCodeAt());
    let stringFromChars = "";
  
    for (
      let decimalCode = smallestChar + 1;
      decimalCode < biggestChar;
      decimalCode++
    ) {
      let char = String.fromCharCode(decimalCode);
      stringFromChars += char + " ";
    }
  
    return stringFromChars;
  }
  
  console.log(charactersInRange("a", "d"));
  console.log(charactersInRange("#", ":"));
  console.log(charactersInRange("C", "#"));
  