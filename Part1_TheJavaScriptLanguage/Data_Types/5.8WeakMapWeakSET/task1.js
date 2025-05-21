let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

let readMessages = new WeakSet();
readMessages.add(messages[0]);
readMessages.add(messages[2]);

alert("Read message 0: " + readMessages.has(messages[0]));
