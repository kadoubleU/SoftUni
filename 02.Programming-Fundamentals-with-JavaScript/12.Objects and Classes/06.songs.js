function songs(arr) {
  let rotations = arr[0];
  let songType = arr[arr.length - 1];
  let rowArr;
  let row;

  for (let i = 1; i <= rotations; i++) {
    row = arr[i];
    rowArr = row.split("_");

    if (rowArr[0] === songType) {
      console.log(rowArr[1]);
    } else if (songType === "all") {
      console.log(rowArr[1]);
    }
  }
}

songs([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);

console.log("----------------");
songs([
  4,
  "favourite_DownTown_3:14",
  "listenLater_Andalouse_3:24",
  "favourite_In To The Night_3:58",
  "favourite_Live It Up_3:48",
  "listenLater",
]);
console.log("----------------");

songs([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);
