function spy(func) {
  function wrapper(...args) {
    // Store arguments in wrapper.calls
    wrapper.calls.push(args);
    // Forward the call to the original function
    return func.apply(this, args);
  }

  wrapper.calls = []; // Initialize calls array

  return wrapper;
}

function work(a, b) {
  return a + b; // Returns sum instead of alerting
}

// Wrapping work with spy
work = spy(work);

console.log(work(1, 2)); // Output: 3
console.log(work(4, 5)); // Output: 9

// Loop through stored calls
for (let args of work.calls) {
  console.log("call: " + args.join());
}
