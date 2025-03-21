let calculator = {
  a: 0,
  b: 0,
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
  read() {
    calculator.a = +prompt("a");
    calculator.b = +prompt("b");
  },
};

calculator.calculator.read();
alert(calculator.sum());
alert(calculator.mul());
