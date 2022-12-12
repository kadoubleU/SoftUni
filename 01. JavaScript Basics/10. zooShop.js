function petShop(input) {
    let dogFoodNum = Number(input[0]);
    let catFoodNum = Number(input[1]);

    let totalPrice = (dogFoodNum * 2.50) + (catFoodNum * 4);

    console.log(`${totalPrice} lv.`);
}

petShop(["13", "9"]);








