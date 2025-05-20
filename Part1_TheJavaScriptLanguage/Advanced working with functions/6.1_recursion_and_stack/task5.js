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

function printReverseListRecur(list) {
  if (list.next) {
    printReverseListRecur(list.next);
  }

  console.log(list.value);
}

printReverseListRecur(list);

console.log("---");

function printReverseListLoop(list) {
  let arr = [];
  let tmp = list;

  while (tmp) {
    arr.push(tmp.value);
    tmp = tmp.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

printReverseListLoop(list);
