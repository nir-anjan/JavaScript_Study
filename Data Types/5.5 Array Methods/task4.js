let array = [5, 2, 1, -10, 8];

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (array[i] > array[j]) {
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
}

alert(array); // 8, 5, 2, 1, -10
