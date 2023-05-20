function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let brokenHelmet = Math.trunc(lostFights / 2);
    let brokenSwords = Math.trunc(lostFights / 3);
    let brokenShields = Math.trunc(lostFights / 6);
    let brokenArmor = Math.trunc(lostFights / 12);

    let totalExpenses = (brokenHelmet * helmetPrice) + (brokenSwords * swordPrice) + (brokenShields * shieldPrice) + (brokenArmor * armorPrice);

    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`)
    
}

gladiatorExpenses(7, 2, 3, 4, 5);
console.log("---------------");
gladiatorExpenses(23, 12.5, 21.5, 40, 200);