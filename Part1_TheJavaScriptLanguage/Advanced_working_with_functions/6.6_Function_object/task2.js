// sum(1)(2) == 3; // 1 + 2
// sum(1)(2)(3) == 6; // 1 + 2 + 3
// sum(5)(-1)(2) == 6
// sum(6)(-1)(-2)(-3) == 0
// sum(0)(1)(2)(3)(4)(5) == 15

function sum(x) {
  let result = x;

  function inner(y) {
    result += y;
    return inner;
  }

  inner.toString = function () {
    return result;
  };

  return inner;
}

alert(sum(0)(1)(2)(3)(4)(5));
