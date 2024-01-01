function maxSequence(arr) {
    let maxLength = 1;
    let currentLength = 1;
    let maxElement = arr[0];
    let currentElement = arr[0];
    let newArray = [];
    
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] === arr[i - 1]) {
        currentLength++;
        currentElement = arr[i];
      } else {
        currentLength = 1;
        currentElement = arr[i];
      }
  
      if (currentLength > maxLength) {
        maxLength = currentLength;
        maxElement = currentElement;
      }
    }
  
    for (let i = 0; i < maxLength; i++) {
        
        newArray.push(maxElement);
    }

    console.log(newArray.join(" "));
  }
  
  // Test cases
  maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
  maxSequence([1, 1, 1, 2, 3, 1, 3, 3]);
  maxSequence([4, 4, 4, 4]);
  maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);
  