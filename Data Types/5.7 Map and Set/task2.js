function aclean(arr) {
  let map = new Map();

  arr.forEach((word) => {
    let sorted = word.toLowerCase().split("").sort().join(""); // Correct sorting
    map.set(sorted, word); // Store only one representative per sorted key
  });

  return Array.from(map.values()); // Convert Map values to an array
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert(aclean(arr)); // "nap,teachers,ear" or similar
