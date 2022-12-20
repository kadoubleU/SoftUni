function areaOfFigures(input) {
    let figureType = input[0];

    if(figureType === "square") {
        let num = Number(input[1]);
        let area = num * num;

        console.log(area.toFixed(3));
    } else if(figureType === "rectangle") {
        let width = Number(input[1]);
        let length = Number(input[2]);

        let area = width * length;

        console.log(area.toFixed(3));
    } else if(figureType === "circle") {
        let radius = Number(input[1]);

        let area = Math.PI * Math.pow(radius, 2);

        console.log(area.toFixed(3));
    }else {
        let length = Number(input[1]);
        let height = Number(input[2]);

        let area = 1/2 * (length * height);

        console.log(area.toFixed(3));
    }
}

areaOfFigures(["triangle","4.5","20"]);

// Да се напише функция,  която получава като вида и размерите на геометрична фигура и пресмята лицето й. Фигурите са четири вида: квадрат (square), правоъгълник (rectangle), кръг (circle) и триъгълник (triangle). На първия ред на входа се чете вида на фигурата (текст със следните възможности: square, rectangle, circle или triangle). 
// •	Ако фигурата е квадрат (square): на следващия ред се чете едно дробно число - дължина на страната му
// •	Ако фигурата е правоъгълник (rectangle): на следващите два реда четат две дробни числа - дължините на страните му
// •	Ако фигурата е кръг (circle): на следващия ред чете едно дробно число - радиусът на кръга
// •	Ако фигурата е триъгълник (triangle): на следващите два реда четат две дробни числа - дължината на страната му и дължината на височината към нея
// Резултатът да се закръгли до 3 цифри след десетичната запетая. 
