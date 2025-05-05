function* pseudoRandom(seed) {
  let current = seed;

  while (true) {
    current = (current * 16807) % 2147483647;
    // current = current + 10;
    yield current;
  }
}

let gen = pseudoRandom(10);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
