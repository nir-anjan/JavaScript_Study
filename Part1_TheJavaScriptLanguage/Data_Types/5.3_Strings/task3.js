function truncate(str, maxlength) {
  let truncatedString = str.substr(0, maxlength + 1);
  return truncatedString;
}

let inputStr = prompt(
  "Enter the text:",
  "this i my own code without using any gpts"
);
let inputLength = +prompt("Enter the max length:");

alert(truncate(inputStr, inputLength));
