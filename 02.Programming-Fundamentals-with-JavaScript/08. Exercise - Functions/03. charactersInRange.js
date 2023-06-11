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