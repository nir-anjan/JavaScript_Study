let a = 1;
let c = 3;

let b = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
    reject(new Error("Something went wrong!")); // Reject with an error message
  }, 1000);
});

b.then(() => {
  console.log(2);
})
  .then(() => {
    console.log("asjdf");
  })
  .catch((e) => {
    console.error("Caught error:", e.message);
  });

console.log(a);
console.log(c);
