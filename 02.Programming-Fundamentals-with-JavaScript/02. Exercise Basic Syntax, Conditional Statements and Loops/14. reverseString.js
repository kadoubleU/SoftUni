function reverseString(word) {
    let i = word.length - 1;

    let reverse = "";

    for(i; i >= 0; i--) {
        reverse += word[i];
    }

    console.log(reverse);
}

//Second Method

function reverseString(word) {

    let array = word.split("");
    array = array.reverse();
    array = array.join("");


    console.log(array)
}

reverseString("Hello");
reverseString("SoftUni");
reverseString("1234");
