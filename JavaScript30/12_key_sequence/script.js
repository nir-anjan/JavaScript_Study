let pressed = [];
let word = "hey";

window.addEventListener("keypress", store);

function store(e) {
  pressed.push(e.key);
  pressed.splice(-word.length - 1, pressed.length - word.length);

  console.log(pressed);
  if (pressed.join("") === word) {
    console.log("heheh");
    cornify_add();
  }
}
