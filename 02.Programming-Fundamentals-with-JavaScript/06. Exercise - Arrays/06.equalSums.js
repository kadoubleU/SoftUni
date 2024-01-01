function equalSums(array) {
    let leftSum = 0;
    let rightSum = 0;
    let isTrue = false;

    for(let i = 0; i < array.length; i++) {
        for(let j = i; j >= 0; j--) {
            let leftNums = Number(array[j]);

            leftSum += leftNums;
        }

        for(let k = i; k < array.length; k++) {
            let rightNums = Number(array[k]);

            rightSum += rightNums;
        }

        if(leftSum === rightSum) {
            console.log(i);
            isTrue = false;
            break;
            
        }else {
            leftSum = 0;
            rightSum = 0;
            isTrue = true;
        }
    }

    if(isTrue) {
        console.log("no");
    }
}


equalSums([10, 5, 5, 99,
    3, 4, 2, 5, 1,
    1, 4]
    );