function computerStore(data) {
  let clientType = data.pop();
  data = data.map(Number);
  let partsPrice = 0;

  for (let index = 0; index < data.length; index++) {
    let partPrice = data[index];

    if (partPrice <= 0) {
      console.log("Invalid price!");
    } else {
      partsPrice += partPrice;
    }
  }

  let taxes = partsPrice * 0.2;

  let totalPrice = taxes + partsPrice;

  if (clientType === "special") {
    totalPrice = totalPrice - totalPrice * (10 / 100);
  }

  if (totalPrice <= 0) {
    return `Invalid order!`;
  } else {
    return `Congratulations you've just bought a new computer!\nPrice without taxes: ${partsPrice.toFixed(
      2
    )}$\nTaxes: ${taxes.toFixed(
      2
    )}$\n-----------\nTotal price: ${totalPrice.toFixed(2)}$`;
  }
}

console.log(
  computerStore(["1050", "200", "450", "2", "18.50", "16.86", "special"])
);
console.log("____________-------------_________");
console.log(
  computerStore([
    "1023",
    "15",
    "-20",
    "-5.50",
    "450",
    "20",
    "17.66",
    "19.30",
    "regular",
  ])
);

console.log("____________-------------_________");
console.log(computerStore(["regular"]));
