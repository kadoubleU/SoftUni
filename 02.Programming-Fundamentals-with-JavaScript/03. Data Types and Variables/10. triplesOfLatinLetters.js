function tripleOfLatinLetters(n) {
    let toNum = Number(n);

    for(let i = 0; i < toNum; i++) {
        let firstLetter = String.fromCharCode(i + 97);
        for(let j = 0; j < toNum; j++) {
            let secondLetter = String.fromCharCode(j + 97);
            for(let k = 0; k < toNum; k++) {
                let thirdLetter = String.fromCharCode(k + 97);
                console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
            }    
        }
    }
}

tripleOfLatinLetters("3");
console.log("--------------");
tripleOfLatinLetters(2);