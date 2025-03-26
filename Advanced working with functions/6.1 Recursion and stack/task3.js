function fibo(num) {
  if (num <= 1) {
    return num;
  }
  return fibo(num - 1) + fibo(num - 2);
}

alert(fibo(7)); // 13
