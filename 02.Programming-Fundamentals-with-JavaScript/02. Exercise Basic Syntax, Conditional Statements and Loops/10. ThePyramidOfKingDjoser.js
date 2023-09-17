function joserPyramid(base, increment) {

    let stones = 0;

    let newBase = base - 2;

    let totalStones = 0;
    let stonesRequired = 0;
    let marbles = 0;
    let marblesRequired = 0;
    let count = 0;
    let totalMarbles = 0;

    let lapis = 0;
    let lapisRequired = 0;

    let steps = 1;

    let gold = 0;

    let totalLapis = 0;

    for(let i = newBase; i >= 1; i -= 2) {
        count++;
        stones = i * i;
        stonesRequired = stones * increment;
        totalStones += stonesRequired;
        
        if(count % 5 !== 0) {
            

            for(let j = base; j > i; j -= 2 ) {
                marbles = (j*j) - stones;
                marblesRequired = marbles * increment;
                totalMarbles += marblesRequired;
                base -= 2;
                
                
            }

            steps++;

        }else if(count % 5 === 0) {
            for(let k = base; k > i; k -= 4) {
                lapis = (4*k) - 4;
                lapisRequired = lapis * increment;
                totalLapis += lapisRequired;
                base -= 2;
            }
            steps++;
        }    
        
    }
    if(base % 2 === 0) {
        gold = parseFloat(4 * increment);
    }else {
        gold = parseFloat(1 * increment);
    }
    
    let height = parseFloat(steps * increment);

    console.log(`Stone required: ${Math.ceil(totalStones)}`);
    console.log(`Marble required: ${Math.ceil(totalMarbles)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(totalLapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
}

joserPyramid(23, 0.5);
