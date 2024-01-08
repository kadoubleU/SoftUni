function listOfProducts(arr) {
  arr.sort();
  let index = 1;
  for (let i = 0; i < arr.length; i++) {
    let product = arr[i];

    let listItem = `${index}.${product}`;

    console.log(listItem);

    index++;
  }
}

listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);
console.log("--------");
listOfProducts(["Watermelon", "Banana", "Apples"]);

//SECOND VARIANT

function listOfProducts(data) {
  data = data.sort();
  data = data.map((x) => `${data.indexOf(x) + 1}.${x}`);

  return data.join("\n");
}

console.log(listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]));
console.log("----");
console.log(listOfProducts(["Watermelon", "Banana", "Apples"]));
