function fruitMarket(input) {
    let strawberriesPrice = Number(input[0]);
    let bananasQuantity = Number(input[1]);
    let orangesQuantity = Number(input[2]);
    let raspberriesQuantity = Number(input[3]);
    let strawberriesQuantity = Number(input[4]);
 
    let raspberriesPrice = strawberriesPrice / 2;
    let orangesPrice = raspberriesPrice - (raspberriesPrice * (40/100));
    let bananaPrice = raspberriesPrice - (raspberriesPrice * (80 / 100));
 
    let totalPrice = (strawberriesPrice * strawberriesQuantity) + (bananaPrice * bananasQuantity) + (orangesPrice * orangesQuantity) + (raspberriesPrice * raspberriesQuantity);
 
    console.log(totalPrice.toFixed(2));
 }

fruitMarket([63.5
    ,3.57
   , 6.35
   , 8.15
   , 2.5]);

// Мария решава да мине на диета и отива до близкия пазар, за да купи ягоди, банани, портокали и малини. На конзолата се въвежда цената на ягодите в лв./кг. и количеството на бананите, портокалите, малините и ягодите, които трябва да закупи. Да се напише програма, която пресмята колко пари са ѝ необходими за да плати сметката, като знаете, че:
// •	цената на малините е на половина по-ниска от тази на ягодите;
// •	цената на портокалите е с 40% по-ниска от цената на малините;
// •	цената на бананите е с 80% по-ниска от цената на малините.
// Вход
// От конзолата се четат 5 реда:
// 1.	Цена на ягодите в лева – реално число в интервала [0.00 … 10000.00]
// 2.	Количество на бананите в килограми – реално число в интервала [0.00 … 1 0000.00]
// 3.	Количество на портокалите в килограми – реално число в интервала [0.00 … 10000.00]
// 4.	Количество на малините в килограми – реално число в интервала [0.00 … 10000.00]
// 5.	Количество на ягодите в килограми – реално число в интервала [0.00 … 10000.00]
// Изход
// Да се отпечата на конзолата едно число:
// •	парите, които са необходими на Мария.
// Резултатът да се форматира до вторта цифра след десетичната запетая.
