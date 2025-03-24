function extractCurrencyValue(str) {
  return parseFloat(str.substr(1));
}

let str = prompt("Enter cost", "$678");

alert(extractCurrencyValue(str));
