function shoppingList(data) {
    let listForShopping = data.shift().split("!");
 
    let isBreak = false;

    for(let index = 0; index < data.length; index++) {
        let input = data[index].split(" ");
        let command = input.shift();
        productsNumber = input.length;

        while(command !== "Go Shopping!") {
            let product = input.shift();
            let isTrue = false;
            isTrue = listForShopping.includes(product);

            switch (command) {
                
                case "Urgent": {    
                    if(!isTrue) {
                        listForShopping.unshift(product);
                    }
                }
                break;
                case "Unnecessary": {
                    if(isTrue) {
                        let indexOfProduct = listForShopping.indexOf(product);
                        listForShopping.splice(indexOfProduct, 1);
                    }
                }
                break;
                case "Correct": {
                    if(isTrue) {
                        let indexOfProduct = listForShopping.indexOf(product);
                        let newProductName = input.shift();
                        listForShopping.splice(indexOfProduct, 1, newProductName);
                    }
                }
                break;
                case "Rearrange": {
                    if(isTrue) {
                        let indexOfProduct = listForShopping.indexOf(product);
                        let currentProduct = listForShopping.splice(indexOfProduct, 1);
                        listForShopping.push(currentProduct);
                    }
                }
                break;
                
            }
            break;
            
        }

        
    }
    return listForShopping.join(", ");
}

// console.log(
//     shoppingList([
//       "Tomatoes!Potatoes!Bread",
//       "Unnecessary Milk",
//       "Urgent Tomatoes",
//       "Go Shopping!",
//     ])
//   );
  
  console.log(
    shoppingList([
      "Milk!Pepper!Salt!Water!Banana",
      "Urgent Salt",
      "Unnecessary Grapes",
      "Correct Pepper Onion",
      "Rearrange Grapes",
      "Correct Tomatoes Potatoes",
      "Go Shopping!",
    ]));
