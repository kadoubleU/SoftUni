function gramophone(bandName, album, songName) {

    let songDuration = (album.length * bandName.length) * songName.length / 2;
    let fullRotationsNum = Math.ceil(songDuration / 2.5);

    console.log(`The plate was rotated ${fullRotationsNum} times.`);

}

gramophone("Black Sabbath", "Paranoid", "War Pigs");
console.log("------------");
gramophone("Rammstein", "Sehnsucht", "Engel");
console.log("------------");
