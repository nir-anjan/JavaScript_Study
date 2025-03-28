function filterRange(arr, a, b) {
  return arr.filter((item) => a <= item && item <= b);
}

alert(filterRange([5, 3, 8, 1], 1, 4));
