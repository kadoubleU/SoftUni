function vowelsSum(input) {
    let word = input[0];

    sum = 0;

    for(let i = 0; i < word.length; i++) {
        switch (word[i]) {
            case "a":
               sum = sum + 1; 
            break;
            case "e":
                sum = sum + 2; 
             break;
             case "i":
                sum = sum + 3; 
             break;
             case "o":
                sum = sum + 4; 
             break;
             case "u":
                sum = sum + 5; 
             break;
        }
       
    }
    console.log(sum);
}

vowelsSum(["beer"]);

// Да се напише функция, която получава, изчислява и отпечатва сумата от стойностите на гласните букви според таблицата по-долу:
// буква	    a	e	i	o	u
// стойност 	1	2	3	4	5
