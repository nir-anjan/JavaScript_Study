function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    let input = +prompt("how much to add", "0");
    this.value += input;
  };
}

let accumulator = new Accumulator(10);

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value);
