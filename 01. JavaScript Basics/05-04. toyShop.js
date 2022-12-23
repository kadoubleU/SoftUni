function toyShop(input) {
    let excursionPrice = Number(input[0]);
    let puzzlesNumbers = Number(input[1]);
    let dollsNumbers = Number(input[2]);
    let bearsNumbers = Number(input[3]);
    let minionsNumber = Number(input[4]);
    let trucksNumber = Number(input[5]);

    let totalToysNumber = puzzlesNumbers + dollsNumbers + bearsNumbers + minionsNumber + trucksNumber;

    let totalPrice = (puzzlesNumbers * 2.60) + (dollsNumbers * 3) + (bearsNumbers * 4.10) + (minionsNumber * 8.20) + (trucksNumber * 2);

    let storeRent = totalPrice * (10/100);
    let netProfit = totalPrice - storeRent;
    let finalPrice;

    if (totalToysNumber >= 50) {
        let discount = netProfit * (25/100);
        finalPrice = netProfit - discount;

        if (finalPrice >= excursionPrice) {
            let leftMoney = finalPrice - excursionPrice;
            console.log(`Yes! ${leftMoney.toFixed(2)} lv left.`);
        } else {
            let moneyNeeded = excursionPrice - finalPrice;
            console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
        }

    } else {

        if (netProfit >= excursionPrice) {
            let leftMoney = netProfit - excursionPrice;
            console.log(`Yes! ${leftMoney.toFixed(2)} lv left.`);
        } else {
            let moneyNeeded = excursionPrice - netProfit;
            console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
        }
    }

}

toyShop(["40.8","20","25","30","50","10"]);



// Магазин за детски играчки
// Петя има магазин за детски играчки. Тя получава голяма поръчка, която трябва да изпълни. С парите, които ще спечели иска да отиде на екскурзия. 
// Цени на играчките:
// •	Пъзел - 2.60 лв.
// •	Говореща кукла - 3 лв.
// •	Плюшено мече - 4.10 лв.
// •	Миньон - 8.20 лв.
// •	Камионче - 2 лв.
// Ако поръчаните играчки са 50 или повече магазинът прави отстъпка 25% от общата цена. От спечелените пари Петя трябва да даде 10% за наема на магазина. Да се пресметне дали парите ще ѝ стигнат да отиде на екскурзия.
// Вход
// От конзолата се четат 6 реда:
// 1.	Цена на екскурзията - реално число в интервала [1.00 … 10000.00]
// 2.	Брой пъзели - цяло число в интервала [0… 1000]
// 3.	Брой говорещи кукли - цяло число в интервала [0 … 1000]
// 4.	Брой плюшени мечета - цяло число в интервала [0 … 1000]
// 5.	Брой миньони - цяло число в интервала [0 … 1000]
// 6.	Брой камиончета - цяло число в интервала [0 … 1000]
// Изход
// На конзолата се отпечатва:
// •	Ако парите са достатъчни се отпечатва:
// o	"Yes! {оставащите пари} lv left."
// •	Ако парите НЕ са достатъчни се отпечатва:
// o	"Not enough money! {недостигащите пари} lv needed."

// Резултатът трябва да се форматира до втория знак след десетичната запетая.
