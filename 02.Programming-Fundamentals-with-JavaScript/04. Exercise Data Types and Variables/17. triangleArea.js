function triangleArea(a, b, c) {
    let s = (1/2) * (a + b + c);

    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    console.log(area);
}

triangleArea(2, 3.5, 4);
triangleArea(3, 5.5, 4);
