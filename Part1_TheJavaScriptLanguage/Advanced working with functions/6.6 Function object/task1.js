function makeCounter() {
  let count = 0;

  return {
    set(value) {
      count = value;
    },
    counter() {
      return ++count;
    },
    decrease() {
      return --count;
    },
  };
}

let counter = makeCounter();

console.log(counter.counter()); // 1
console.log(counter.counter()); // 2
counter.set(10);
console.log(counter.counter()); // 11
console.log(counter.decrease()); // 10
