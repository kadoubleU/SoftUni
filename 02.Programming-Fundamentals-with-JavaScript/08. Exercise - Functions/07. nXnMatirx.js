function nXnMatirx(num) {

    let row = "";

    for(let i = 0; i < num; i++) {
        row += num + " ";
    }

    for(let j = 0; j < num; j++) {
        console.log(row);
    }
}

nXnMatirx(3);
nXnMatirx(7);
nXnMatirx(2);

//SECOND VARIANT

function matrix(number) {
    function returnRows(num) {
        let rows = "";
        for(let row = 1; row <= num; row++) {
            rows += `${num} `;
        }
        return rows;
    }

    
    for(let column = 1; column <= number; column++) {
       console.log(returnRows(number));
    }
}


matrix(7);