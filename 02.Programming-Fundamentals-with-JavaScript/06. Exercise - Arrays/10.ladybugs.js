function simulateLadybugs(input) {
    let [fieldSize, ladybugsIndexes, ...commands] = input;
    ladybugsIndexes = ladybugsIndexes.split(' ').map(Number);
    const field = new Array(Number(fieldSize)).fill(0);
  
    for (let i = 0; i < ladybugsIndexes.length; i++) {
      const index = ladybugsIndexes[i];
      if (index >= 0 && index < field.length) {
        field[index] = 1;
      }
    }
  
    for (let i = 0; i < commands.length; i++) {
      const [index, direction, flyLength] = commands[i].split(' ');
      const bugIndex = parseInt(index);
      const length = parseInt(flyLength);
  
      if (
        bugIndex >= 0 &&
        bugIndex < field.length &&
        field[bugIndex] === 1 &&
        (direction === 'right' || direction === 'left')
      ) {
        field[bugIndex] = 0;
  
        let newIndex = bugIndex + (direction === 'right' ? length : -length);
  
        while (newIndex >= 0 && newIndex < field.length) {
          if (field[newIndex] === 0) {
            field[newIndex] = 1;
            break;
          } else {
            newIndex += direction === 'right' ? length : -length;
          }
        }
      }
    }
  
    console.log(field.join(' '));
  }
  
  simulateLadybugs([ 5, '3',
  '3 left 2',
  '1 left -2']
  );
  