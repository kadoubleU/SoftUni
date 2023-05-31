function equalArrays(arr1, arr2) {
    let sum = 0;
    let index = 0;

    for(i = 0; i < arr1.length; i++) {
       let getFirstArrElement = Number(arr1[i]);
       let getSecArrElement = Number(arr2[i]);

       if(getFirstArrElement === getSecArrElement) {
            sum += getFirstArrElement;
       }else {
            sum = 0;
            index = i;
            break;
       }
    }

    if(sum > 0) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }else {
        console.log(`Arrays are not identical. Found difference at ${index} index`);
    }

}

equalArrays(["10", "20", "30"], ["10", "20", "30"]);
equalArrays(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
equalArrays(["1"], ["10"]);
