function listOfProducts(arr) {
    arr.sort();
    let index = 1;
    for(let i = 0; i < arr.length; i++) {
       
        let product = arr[i];

        let listItem = `${index}.${product}`;

        console.log(listItem);

        index++;
    }
 
}

listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);
console.log("--------");
listOfProducts(["Watermelon", "Banana", "Apples"]);