function buildAWall(data) {
    data = data.map(Number);
    let days = 0;
    let pesos = 0;
    let newArr = [];

    while (data.some(height => height < 30)) {
        let dailyConcrete = 0;

        for (let i = 0; i < data.length; i++) {
            if (data[i] < 30) {
                data[i]++;
                dailyConcrete += 195;
            }
        }

        newArr.push(dailyConcrete);
        pesos += dailyConcrete * 1900;
        days++;
    }

    console.log(newArr.join(', '));
    console.log(`${pesos} pesos`);
}

buildAWall([21, 25, 28]);