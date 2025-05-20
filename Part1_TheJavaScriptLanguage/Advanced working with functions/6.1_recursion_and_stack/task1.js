function sumTo(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

function sumWithFormula(num) {
  return (num * (num + 1)) / 2;
}

function r_sum(num) {
  if (num == 1) {
    return 1;
  }
  return num + r_sum(num - 1);
}
alert(`sum with recursion: ${r_sum(100)}`); // 5050
alert(`sum with loop: ${sumTo(100)}`); // 5050
alert(`sum with formula: ${sumWithFormula(100)}`); // 5050
