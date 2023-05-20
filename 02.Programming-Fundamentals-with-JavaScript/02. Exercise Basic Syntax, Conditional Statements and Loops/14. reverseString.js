function reverseString(word) {
    let i = word.length - 1;

    let reverse = "";

    for(i; i >= 0; i--) {
        reverse += word[i];
    }

    console.log(reverse);
}

reverseString("Hello");
reverseString("SoftUni");
reverseString("1234");