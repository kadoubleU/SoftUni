function searchForANumber(numberCollection, operationsArray) {
  let newCollection = numberCollection.splice(0, Number(operationsArray[0]));
  newCollection.splice(0, Number(operationsArray[1]));
  let number = Number(operationsArray[2]);
  let count = 0;

  for (let i = 0; i < newCollection.length; i++) {
    let num = Number(newCollection[i]);
    if (num === number) {
      count++;
    }
  }
  return `Number ${Number(operationsArray[2])} occurs ${count} times.`;
}

console.log(searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]));
console.log(searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]));
