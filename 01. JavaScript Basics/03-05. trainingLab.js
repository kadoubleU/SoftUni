function trainingLab(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);

    let widthInCm = width * 100;
    let lengthInCm = length * 100;

    let endLength = lengthInCm - 100;

    let deskNumber = Math.floor(endLength / 70);
    let rowNumber = Math.floor(widthInCm / 120);

    let placesNumber = (rowNumber * deskNumber) - 3;

    console.log(placesNumber);
}

trainingLab(["8.4", "5.2"]);

// Учебна зала
// Учебна зала има правоъгълен размер w на h метра, без колони във вътрешността си. Залата е разделена на две части – лява и дясна, с коридор приблизително по средата. В лявата и в дясната част има редици с бюра. В задната част на залата има голяма входна врата. В предната част на залата има катедра с подиум за преподавателя. Едно работно място заема 70 на 120 cm (маса с размер 70 на 40 cm + място за стол и преминаване с размер 70 на 80 cm). Коридорът е широк поне 100 cm. Изчислено е, че заради входната врата (която е с отвор 160 cm) се губи точно 1 работно място, а заради катедрата (която е с размер 160 на 120 cm) се губят точно 2 работни места. Напишете програма, която въвежда размери на учебната зала и изчислява броя работни места в нея при описаното разположение (вж. фигурата).  
// Вход
// От конзолата се четат 2 числа, по едно на ред: w (дължина в метри) и h (широчина в метри).
// Ограничения: 3 ≤ h ≤ w ≤ 100.
// Изход
// Да се отпечата на конзолата едно цяло число: броят места в учебната зала.
