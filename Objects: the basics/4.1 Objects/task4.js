let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

console.log("this before", menu);

for (const key in menu) {
  if (typeof menu[key] == "number") {
    menu[key] *= 2;
  }
}

console.log("this after", menu);
