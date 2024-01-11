function sortBy2Criteria(data) {
    let copiedArray = data.slice(0);
  
    let sortByLength = copiedArray.sort(function (a, b) {
      if (a.length === b.length) {
        return String(a).localeCompare(b);
      }
  
      return a.length - b.length;
    });
  
    return sortByLength.join("\n");
  }
  
  console.log(sortBy2Criteria(["test", "Deny", "omen", "Default"]));
  console.log("---------");
  console.log(sortBy2Criteria(["alpha", "beta", "gamma"]));
  console.log("---------");
  console.log(
    sortBy2Criteria(["Isacc", "Theodor", "Jack", "Harrison", "George"])
  );
  