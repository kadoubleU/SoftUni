function lowerToUpper(char) {

    let charAsciiCode = char.charCodeAt(0);

    if(charAsciiCode >= 65 && charAsciiCode <= 90) {
        console.log("upper-case");
    }else {
        console.log("lower-case");
    }
}

lowerToUpper('L');
console.log("---------");
lowerToUpper('f');

