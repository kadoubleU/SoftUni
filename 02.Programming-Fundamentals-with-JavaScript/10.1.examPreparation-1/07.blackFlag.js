function blackFlag(data) {
  let plunderDays = Number(data[0]);
  let dayPlunder = Number(data[1]);
  let expectedPlunder = Number(data[2]);
  let totalPlunder = 0;

  for (let day = 1; day <= plunderDays; day++) {
    totalPlunder += dayPlunder;
    if (day % 3 === 0) {
      totalPlunder += (dayPlunder * 0.5);
    }
    
    if (day % 5 === 0) {
      totalPlunder -= (totalPlunder * 0.3);
    }
  }

  if (totalPlunder >= expectedPlunder) {
    return `Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`;
  } else {
    let leftPercent = (totalPlunder / expectedPlunder) * 100;
    
    return `Collected only ${leftPercent.toFixed(2)}% of the plunder.`;
  }
}

console.log(blackFlag(["5", "40", "100"]));
console.log(blackFlag(["10", "20", "380"]));
