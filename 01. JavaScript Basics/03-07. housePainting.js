function housePainting(input) {
    let xHouseHeight = Number(input[0]);
    let yHouseLength = Number(input[1]);
    let hRoofHeight = Number(input[2]);

    //The House
    let frontBackSideArea = xHouseHeight * xHouseHeight;
    let doorArea = 1.2 * 2;
    let frontSideArea = (2 * frontBackSideArea) - doorArea;

    let leftRightSideArea = xHouseHeight * yHouseLength; 
    let windowArea = 1.5 * 1.5; 
    let leftRightSidesArea = (2 * leftRightSideArea) - (windowArea*2); 

    let houseArea = frontSideArea + leftRightSidesArea;

    let greenPaintLiters = houseArea / 3.4;

    //The Roof

    let roofRectangle = xHouseHeight * yHouseLength;
    let roofTriangle = 2 * ((xHouseHeight * hRoofHeight) / 2);
    let roofArea = (2 * roofRectangle) + roofTriangle;

    let redPaintLiters = roofArea / 4.3;

    //Result

    console.log(greenPaintLiters.toFixed(2));
    console.log(redPaintLiters.toFixed(2));
}

housePainting(["10.25","15.45","8.88"]);

// Напишете програма, която да пресмята колко литра боя е нужна за боядисването на къщa. Като за стените се използва зелена боя, а за покрива – червена. Разхода на зелената боя е 1 литър за 3.4 м2, а на червената – 1 литър за 4.3 м2.
// Стените имат следните размери:
// •	Предната и задната стена са квадрати със страна „x“
// o	на предната стена има правоъгълна врата с широчина 1.2м и височина 2м
// •	Страничните стени са правоъгълници със страни „x“ и „y“
// o	и на двете странични стени има по един квадратен прозорец със страна 1.5м
// Покривът има следните размери:
// •	Два правоъгълника със страни „x“ и „y“
// •	Два равностранни триъгълника със страна „x“ и височина „h“
// Трябва да пресметнете площта на всички страни и площта на покрива, за да
// намерите колко литра от всяка боя ще са нужни.
// Вход
// От конзолата се четат 3 реда:
// 1.	x – височината на къщата – реално число в интервала [2...100]
// 2.	y – дължината на страничната стена – реално число в интервала [2...100]
// 3.	h – височината на триъгълната стена на прокрива – реално число в интервала [2...100]
// Изход
// Да се отпечатат на конзолата две числа всяко на нов ред:
// •	Литрите зелена боя
// •	Литритe червена боя
// Форматирани до вторият знак след десетичната запетая.
