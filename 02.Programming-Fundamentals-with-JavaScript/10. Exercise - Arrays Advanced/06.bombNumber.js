function bombNumber(sequence, bombInfo) {
    let [specialBomb, power] = bombInfo;

    while (sequence.includes(specialBomb)) {
        let bombIndex = sequence.indexOf(specialBomb);

        let startIndex = Math.max(0, bombIndex - power);
        let endIndex = Math.min(sequence.length - 1, bombIndex + power);

        sequence.splice(startIndex, endIndex - startIndex + 1);
    }

    let sum = sequence.reduce((acc, num) => acc + num, 0);
    
    return sum;
}

console.log(bombNumber([1, 7, 7, 1, 2, 3], [7, 1]));
console.log(bombNumber([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]));
