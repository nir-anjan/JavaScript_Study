let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};
function printListLoop(list) {
  while (list) {
    console.log(list.value);
    list = list.next;
  }
}

function printList(list) {
  console.log(list.value);
  if (list.next) {
    printList(list.next);
  }
}
printListLoop(list);

console.log("---");
printList(list);
