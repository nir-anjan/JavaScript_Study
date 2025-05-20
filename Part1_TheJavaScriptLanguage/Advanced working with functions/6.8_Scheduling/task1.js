// function printNumbers(from, to) {
//   let count = from;

//   let timerId = setInterval(() => {
//     console.log(count);
//     if (count === to) {
//       clearInterval(timerId);
//     }
//     count++;
//   }, 1000);
// }

// printNumbers(1, 10);

// nested

function printNumbers(from, to) {
  let current = from;

  setTimeout(function go() {
    alert(current);
    if (current < to) {
      setTimeout(go, 1000);
    }
    current++;
  }, 1000);
}

printNumbers(5, 10);
