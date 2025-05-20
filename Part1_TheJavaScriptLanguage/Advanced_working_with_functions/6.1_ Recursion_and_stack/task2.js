function fact(num) {
  if (num == 1) {
    return 1;
  }
  return num * fact(num - 1);
}

alert(fact(5)); // 120
