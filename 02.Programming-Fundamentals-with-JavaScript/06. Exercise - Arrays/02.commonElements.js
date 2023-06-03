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