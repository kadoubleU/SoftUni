function bitcoinMaining(input) {
    
    let shiftGold = 0;
    let goldToBitcoin = 0;

    let bitcoins = 0;
    let bitcoinsNum = 0;

    let dayCount = 0;

    let firstDay = 0;

    let leftMoney = 0;

    let totalSum = 0;

    let bitcoinAmount = 0;

    for(let i = 0; i < input.length; i++) {
        shiftGold = Number(input[i]);
        dayCount++;

        if (dayCount % 3 === 0) {
            shiftGold = shiftGold * 0.70;
        }

        goldToBitcoin = shiftGold * 67.51;
        bitcoins += goldToBitcoin;

        if(bitcoins >= 11949.16) {
            bitcoinsNum = bitcoins / 11949.16;
        }
    }

    leftMoney = bitcoins % 11949.16;

    for(let j = 0; j <= input.length; j++) {
        let goldGrams = Number(input[j]);

        bitcoinAmount = goldGrams * 67.51;

        if(bitcoinAmount >= 11949.16) {
            firstDay = j + 1;
            break;
        }
    }

    let tripleCount = 0;

    console.log(`Bought bitcoins: ${Math.floor(bitcoinsNum)}`);

    
    if(bitcoinsNum > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }



    console.log(`Left money: ${leftMoney.toFixed(2)} lv.`)
}

bitcoinMaining([100, 200, 300]);
console.log("----------------");
bitcoinMaining([50, 100]);
console.log("----------------");
bitcoinMaining([3124.15, 504.212, 2511.124]);
