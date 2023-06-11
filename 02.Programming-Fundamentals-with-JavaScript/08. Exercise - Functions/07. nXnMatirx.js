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