function footballKit(input) {
    let tshirtPrice = Number(input[0]);
    let targetSum = Number(input[1]);

    let shortsPrice = tshirtPrice * (75/100);
    let socks = shortsPrice * (20 / 100);
    let buttons = (tshirtPrice + shortsPrice) * 2;

    let sum = tshirtPrice + shortsPrice + socks + buttons;

    discount = sum * (15 / 100);

    sum = sum - discount;

    if(sum >= targetSum) {
        console.log("Yes, he will earn the world-cup replica ball!");
        console.log(`His sum is ${sum.toFixed(2)} lv.`);
    }else {
        console.log("No, he will not earn the world-cup replica ball.");

        let neededMoney = targetSum - sum;
        console.log(`He needs ${neededMoney.toFixed(2)} lv. more.`);
    }

}

footballKit(["59.99",
"500"]);
