function commonElements(arr1, arr2) {

    let arr1Length = arr1.length;

    for(let i = 0; i < arr1Length; i++) {
        let arr1Word = arr1[i];
        
        let arr2Length = arr2.length;

        for(let j = 0; j < arr2Length; j++) {
            let arr2Word = arr2[j];
        
            if(arr1Word === arr2Word) {
                console.log(arr2Word);
            }
        }
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']);

commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']);


//SECOND VARIANT

function commonElements(firstArray, secondArray) {
    let shortArray = Math.min(firstArray.length, secondArray.length);

    for(let i = 0; i <= shortArray; i++) {
        let firstArrKeyword = firstArray[i];
        let secondArrKeyword;

        for(let j = 0; j < shortArray; j++) {
            secondArrKeyword = secondArray[j];

            if(firstArrKeyword === secondArrKeyword) {
                console.log(firstArrKeyword);
            }
        }
    }
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']);