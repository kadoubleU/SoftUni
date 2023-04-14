function vacantion(param1, param2, param3) {
    let peopleNum = Number(param1);
    let groupType = param2;
    let dayOfWeek = param3;

    let totalPrice = 0;
    let singlePrice = 0;

    switch (dayOfWeek) {
        case "Friday":
            if(groupType === "Students") {
                singlePrice = 8.45;
                totalPrice = peopleNum * singlePrice;
            }else if(groupType === "Business") {
                singlePrice = 10.90;
                totalPrice = peopleNum * singlePrice;
            }else if(groupType === "Regular") {
                singlePrice = 15;
                totalPrice = peopleNum * singlePrice;
            }
        break;
        case "Saturday":
            if(groupType === "Students") {
                singlePrice = 9.80;
                totalPrice = peopleNum * singlePrice;
            }else if(groupType === "Business") {
                singlePrice = 15.60;
                totalPrice = peopleNum * singlePrice;
            }else if(groupType === "Regular") {
                singlePrice = 20;
                totalPrice = peopleNum * singlePrice;
            }
        break;
        case "Sunday":
            if(groupType === "Students") {
                singlePrice = 10.46;
                totalPrice = peopleNum * singlePrice;
            }else if(groupType === "Business") {
                singlePrice = 16;
                totalPrice = peopleNum * singlePrice;
            }else if(groupType === "Regular") {
                singlePrice = 22.50;
                totalPrice = peopleNum * singlePrice;
            }
        break;
    }

    if(groupType === "Students" && peopleNum >= 30) {
        totalPrice = totalPrice - (totalPrice * (15/100));
    }else if(groupType === "Business" && peopleNum >= 100) {
        totalPrice = totalPrice - (10 * singlePrice);
    }else if(groupType === "Regular" && (peopleNum >= 10 && peopleNum <= 20)) {
        totalPrice = totalPrice - (totalPrice * (5 / 100));
    }

        console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacantion(40,
    "Regular",
    "Saturday"
    
    );

// You are given a group of people, the type of the group, and the day of the week they are going to stay. Based on that information calculate how much they have to pay and print that price on the console. Use the table below. In each cell is the price for a single person. 
// The output should look like that: `Total price: {price}`.The price should be formatted to the second decimal point.
// 	Friday	Saturday	Sunday
// Students	8.45	9.80	10.46
// Business	10.90	15.60	16
// Regular	15	20	22.50

// There are also discounts based on some conditions:
// ·	Students – if the group is bigger than or equal to 30 people you should reduce the total price by 15%
// ·	Business – if the group is bigger than or equal to 100 people 10 of them can stay for free
// ·	Regular – if the group is bigger than or equal to 10 and less than or equal to 20 reduce the total price by 5%
// Note: You should reduce the prices in that EXACT order.
