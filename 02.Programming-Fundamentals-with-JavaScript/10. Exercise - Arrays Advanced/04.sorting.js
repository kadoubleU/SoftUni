function sorting(arr) {
    let arrLength = arr.length;
    let biggestNum = (arr.slice(0)).sort((a,b) => b - a); 
    let smallestNum = (arr.slice(0)).sort((a,b) => a - b);
 

    let result = [];

    for(let i = 0; i < arrLength / 2; i++) {
        let biggerNum = biggestNum[i];
        let smallerNum = smallestNum[i];

        result.push(biggerNum);
        result.push(smallerNum);
    }

    console.log(result.join(" "));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);