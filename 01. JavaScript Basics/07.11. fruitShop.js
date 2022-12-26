function fruitShop(input) {
    let fruitType = input[0];
    let dayOfWeek = input[1];
    let quantity = Number(input[2]);

    let totalPrice;

    switch (dayOfWeek) {
        case "Monday": ;
        case "Tuesday": ;
        case "Wednesday": ;
        case "Thursday": ;
        case "Friday":
            if(fruitType === "banana") {
                totalPrice = quantity * 2.50;
                console.log(totalPrice.toFixed(2));
            }else if(fruitType === "apple") {
                totalPrice = quantity * 1.20;
                console.log(totalPrice.toFixed(2));
            }
            else if(fruitType === "orange") {
                totalPrice = quantity * 0.85;
                console.log(totalPrice.toFixed(2));
            }
            else if(fruitType === "grapefruit") {
                totalPrice = quantity * 1.45;
                console.log(totalPrice.toFixed(2));
            }
            else if(fruitType === "kiwi") {
                totalPrice = quantity * 2.70;
                console.log(totalPrice.toFixed(2));
            }
            else if(fruitType === "pineapple") {
                totalPrice = quantity * 5.50;
                console.log(totalPrice.toFixed(2));   
            }
            else if(fruitType === "grapes") {
                totalPrice = quantity * 3.85;
                console.log(totalPrice.toFixed(2));
            } else {
                console.log("error");
            }            
        break;
        case "Saturday": ;
        case "Sunday":
        if(fruitType === "banana") {
            totalPrice = quantity * 2.70;
            console.log(totalPrice.toFixed(2));
        }else if(fruitType === "apple") {
            totalPrice = quantity * 1.25;
            console.log(totalPrice.toFixed(2));
        }
        else if(fruitType === "orange") {
            totalPrice = quantity * 0.90;
            console.log(totalPrice.toFixed(2));
        }
        else if(fruitType === "grapefruit") {
            totalPrice = quantity * 1.60;
            console.log(totalPrice.toFixed(2));
        }
        else if(fruitType === "kiwi") {
            totalPrice = quantity * 3.00;
            console.log(totalPrice.toFixed(2));
        }
        else if(fruitType === "pineapple") {
            totalPrice = quantity * 5.60;
            console.log(totalPrice.toFixed(2));   
        }
        else if(fruitType === "grapes") {
            totalPrice = quantity * 4.20;
            console.log(totalPrice.toFixed(2));
        } else {
            console.log("error");
        }
        break;
        default:
            console.log("error");
        break;
    }
}

fruitShop(["apple","Workday","2"]);

// Магазин за плодове през работните дни работи на следните цени:
// плод	banana	apple	orange	grapefruit	kiwi	pineapple	grapes
// цена	2.50	1.20	0.85	1.45	2.70	5.50	3.85
// Събота и неделя магазинът работи на по-високи цени:
// плод	banana	apple	orange	grapefruit	kiwi	pineapple	grapes
// цена	2.70	1.25	0.90	1.60	3.00	5.60	4.20
// Напишете функция, която получава аргументи:плод (banana / apple / orange / grapefruit / kiwi / pineapple / grapes), ден от седмицата (Monday / Tuesday / Wednesday / Thursday / Friday / Saturday / Sunday) и количество (число) и пресмята цената според цените от таблиците по-горе. Резултатът да се отпечата закръглен с 2 цифри след десетичната точка. При невалиден ден от седмицата или невалидно име на плод да се отпечата "error". 
