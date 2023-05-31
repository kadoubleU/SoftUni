function reverceInPlace(arr) {
    let getTheChar = "";
    for(let i = arr.length - 1; i >= 0; i--) {
        getTheChar += arr[i] + " ";
    }

    arr = [];

    arr = [getTheChar];
    
    arr = arr.join(" ");

    console.log(arr);
}

reverceInPlace(['a', 'b', 'c', 'd', 'e']);
reverceInPlace(['abc', 'def', 'hig',
'klm', 'nop']);
reverceInPlace(['33', '123', '0', 'dd']);