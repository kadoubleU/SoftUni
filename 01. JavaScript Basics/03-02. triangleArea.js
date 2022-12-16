function triangleArea(input) {
    let triangleSide = Number(input[0]);
    let triangleHeigth = Number(input[1]);

    let area = (triangleSide * triangleHeigth) / 2;

    console.log(area.toFixed(2));
}

triangleArea(["1.23456", "4.56789"]);

// Напишете програма, която чете от конзолата страна и височина на триъгълник и пресмята неговото лице. Използвайте формулата за лице на триъгълник: area = a * h / 2. Форматирате изхода до втория знак след десетичната запетая.