function Calculator() {
  this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };

  this.calculate = function (str) {
    let parts = str.split(" ");
    let a = +parts[0],
      op = parts[1],
      b = +parts[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

let calc = new Calculator();
alert(calc.calculate("3 + 7"));

calc.addMethod("*", (a, b) => a * b);
calc.addMethod("/", (a, b) => a / b);
calc.addMethod("**", (a, b) => a ** b);

alert(calc.calculate("2 ** 3"));
alert(calc.calculate("6 / 2"));
alert(calc.calculate("5 * 5"));
