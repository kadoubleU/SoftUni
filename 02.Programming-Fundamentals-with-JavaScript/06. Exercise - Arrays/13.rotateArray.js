function rotateArray(arr) {
    let rotations = arr[arr.length - 1];

    let newArray = [];

    let lastElement = "";

    for(let i = 0; i < arr.length - 1; i++) {
        let arrayValue = arr[i];

        newArray.push(arrayValue);  
        
    }

    for(let j = 0; j < rotations; j++) {
        lastElement = newArray[arr.length - 2];
        newArray.unshift(lastElement);
        newArray.pop();
    }

    newArray = newArray.join(" ");
   
    console.log(newArray);
    
}

rotateArray(["1", "2", "3", "4", "2"]);
rotateArray(["Banana", "Orange", "Coconut", "Apple", "15"]);


//SECOND VARIANT

function rotateArray(data) {
    let rotations = data.pop();
  
    for (let i = 0; i < rotations; i++) {
      let element = data.pop();
      data.unshift(element);
    }
  
    console.log(data.join(" "));
  }
  
  rotateArray(["1", "2", "3", "4", "2"]);
  rotateArray(['Banana', 'Orange', 'Coconut',
  'Apple', '15']);
  