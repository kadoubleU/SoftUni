function travelling(input) {
    index = 0;

    let wantedDestination = input[index];
    index++;

    let minimalBudget = Number(input[index]);
    index++;

    let sum = 0;
    let totalSum = 0;

        for(let j = index; j < input.length; j++) {
            sum = input[j];

            if(sum === "End"){
               
                break;
            }

            totalSum = totalSum + Number(sum);

            if(totalSum >= minimalBudget) {
                console.log(`Going to ${wantedDestination}!`);
                j++;

                sum = 0;
                totalSum = 0;

                wantedDestination = input[j];
                j++;

                minimalBudget = Number(input[j]);   
            }

        }
}

travelling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])
;

// Ани обича да пътува и иска тази година да посети няколко различни дестинации. Като си избере дестинация, ще прецени колко пари ще й трябват, за да отиде до там и ще започне да спестява. Когато е спестила достатъчно, ще може да пътува.
// Функцията получава масив, като всеки път ще се четат първо дестинацията и минималния бюджет, който ще е нужен за пътуването. 
// След това ще се четат няколко суми, които Ани спестява като работи и когато успее да събере достатъчно за пътуването, ще заминава, като на конзолата трябва да се изпише:
//  "Going to {дестинацията}!" 
// Когато е посетила всички дестинации, които иска, вместо дестинация ще въведе "End" и програмата ще приключи.
