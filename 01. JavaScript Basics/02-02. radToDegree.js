function radToDegree(input) {
    let rad = Number(input[0]);

    let degree = (rad * 180) / Math.PI;

    console.log(degree);
}

radToDegree(["6.2832"]);

// Конвертор: от радиани в градуси
// Напишете програма, която чете ъгъл в радиани (десетично число) и го преобразува в градуси. Използвайте формулата: градус = радиан * 180 / π. Числото π в Java програми е достъпно чрез Math.PI.
// Примерен вход и изход
//     вход	        изход		            вход	        изход
// (["3.1416"])	180.0004209182994		(["6.2832"])	360.0008418365988
