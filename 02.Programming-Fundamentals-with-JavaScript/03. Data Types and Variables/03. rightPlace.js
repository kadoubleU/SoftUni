function rightPlace(string1, char, string2) {
    let replacedWord = string1.replace("_", char);

    if(replacedWord === string2) {
        console.log("Matched");
    }else {
        console.log("Not Matched");
    }
}

rightPlace('Str_ng', 'I',
'Strong');
console.log("--------");
rightPlace('Str_ng', 'i',
'String' );