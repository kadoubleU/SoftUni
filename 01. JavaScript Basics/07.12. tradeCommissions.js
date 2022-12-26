function tradeCommissions(input) {
    let townName = input[0];
    let salesVolume = Number(input[1]);
    
    let commission;

    switch (townName) {
        case "Sofia":
            if(salesVolume >= 0 && salesVolume <= 500) {
                commission = salesVolume * (5/100);
                console.log(commission.toFixed(2));
            }else if(salesVolume >= 500 && salesVolume <= 1000){
                commission = salesVolume * (7/100); 
                console.log(commission.toFixed(2));               
            }else if(salesVolume >= 1000 && salesVolume <= 10000) {
                commission = salesVolume * (8/100);
                console.log(commission.toFixed(2));
            } else if(salesVolume > 10000) {
                commission = salesVolume * (12/100);
                console.log(commission.toFixed(2));
            }
            else {
                console.log("error");
            }            
        break;
        case "Varna":
            if(salesVolume >= 0 && salesVolume <= 500) {
                commission = salesVolume * (4.5/100);
                console.log(commission.toFixed(2));
            }else if(salesVolume >= 500 && salesVolume <= 1000){
                commission = salesVolume * (7.5/100);
                console.log(commission.toFixed(2));                
            }else if(salesVolume >= 1000 && salesVolume <= 10000) {
                commission = salesVolume * (10/100);
                console.log(commission.toFixed(2));
            } else if(salesVolume > 10000) {
                commission = salesVolume * (13/100);
                console.log(commission.toFixed(2));
            } else {
                console.log("error");
            }        
        break;
        case "Plovdiv":
            if(salesVolume >= 0 && salesVolume <= 500) {
                commission = salesVolume * (5.5/100);
                console.log(commission.toFixed(2));
            }else if(salesVolume >= 500 && salesVolume <= 1000){
                commission = salesVolume * (8/100);
                console.log(commission.toFixed(2));                
            }else if(salesVolume >= 1000 && salesVolume <= 10000) {
                commission = salesVolume * (12/100);
                console.log(commission.toFixed(2));
            } else if(salesVolume > 10000) {
                commission = salesVolume * (14.5/100);
                console.log(commission.toFixed(2));
            }else{
                console.log("error");
            }           
        break;   
        default:
            console.log("error");
        break;
    }
}

tradeCommissions(["Plovdiv", "-20"]);

// Фирма дава следните комисионни на търговците си според града, в който работят и обема на продажбите:
// Град	0 ≤ s ≤ 500	500 < s ≤ 1 000	1 000 < s ≤ 10 000	s > 10 000
// Sofia	5%	7%	8%	12%
// Varna	4.5%	7.5%	10%	13%
// Plovdiv	5.5%	8%	12%	14.5%
// Напишете функция, която  получава име на град (стринг) и обем на продажби (число) и изчислява и извежда размера на търговската комисионна според горната таблица. Резултатът да се изведе форматиран до 2 цифри след десетичната точка. При невалиден град или обем на продажбите (отрицателно число) да се отпечата "error". 
