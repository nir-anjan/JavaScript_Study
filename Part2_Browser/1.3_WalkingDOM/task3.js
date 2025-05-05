let table = document.body.firstElementChild;

for (let index = 0; index < 5; index++) {
  let td = table.rows[index].cells[index];
  td.style.backgroundColor = "red";
}
