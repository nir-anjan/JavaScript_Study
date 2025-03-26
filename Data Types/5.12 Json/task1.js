let user = {
  name: "John Smith",
  age: 35,
};

let str = JSON.parse(JSON.stringify(user));

alert(str);
