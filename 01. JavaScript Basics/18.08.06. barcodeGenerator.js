function barcodeGenerator(input) {
    let startNumber = Number(input[0]) + "";
    let endNumber = Number(input[1]) + "";

    let startCharNum1 = Number(startNumber.charAt(0));
    let endCharNum1 = Number(endNumber.charAt(0));

    let startCharNum2 = Number(startNumber.charAt(1));
    let endCharNum2 = Number(endNumber.charAt(1));

    let startCharNum3 = Number(startNumber.charAt(2));
    let endCharNum3 = Number(endNumber.charAt(2));

    let startCharNum4 = Number(startNumber.charAt(3));
    let endCharNum4 = Number(endNumber.charAt(3));

    let num1 = 0;
    let num2 = 0;
    let num3 = 0;
    let num4 = 0;

    let newNumber = 0;

   result = "";

    for(let i = startCharNum1; i <= endCharNum1; i++) {
        if(i % 2 === 1) {
            num1 = i;

            for(let j = startCharNum2; j <= endCharNum2; j++) {
                if(j % 2 === 1) {
                    num2 = j;
    
                    for(let k = startCharNum3; k <= endCharNum3; k++) {
                        if(k % 2 === 1) {
                            num3 = k;
        
                            for(let l = startCharNum4; l <= endCharNum4; l++) {
                                if(l % 2 === 1) {
                                    num4 = l;

                                    newNumber = "" + num1 + num2 + num3 + num4;
                                    result += newNumber + " ";                       
                                }
                            }
                        }   
                    }
                }
            }
        }
    }  
    if(newNumber >= Number(startNumber) && newNumber <= Number(endNumber)) {
        console.log(result);
    }
}


barcodeGenerator(["1365",
"5877"]);

// Техниката в магазин за коледни украси се разваля. Артикулите, които съдържат четни числа в своя баркод не могат да бъдат маркирани от касиерите. Вашата задача е, да напишете програма, която генерира всички баркодове, които НЕ съдържат четни цифри в себе си.
// Вход:
// •	Две четирицифрени числа, които показват обхвата на баркодовете, които трябва да промените.
// •	Първи ред – четирицифрено число – началото на обхвата. Цяло число в интервала [1000…9999]
// •	Втори ред – четирицифрено число – края на обхвата. Цяло число в интервала [1000…9999]
// Изход:
// На конзолата трябва да се отпечатат всички "баркодове", които НЕ съдържат четна цифра в себе си, разделени с интервал.
