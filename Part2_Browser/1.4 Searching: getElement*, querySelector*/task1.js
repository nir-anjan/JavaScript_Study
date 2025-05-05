/*
Here’s the document with the table and form.

How to find?…

1 The table with id="age-table".
2 All label elements inside that table (there should be 3 of them).
3 The first td in that table (with the word “Age”).
4 The form with name="search".
5 The first input in that form.
6 The last input in that form.

*/

let table = document.getElementById("age-table"); //1

console.log(table);
console.log(table.getElementsByTagName("label")); // 2

console.log(table.rows[0].cells[0]); //3

let form = document.getElementsByName("search")[0]; //4
console.log(form);

form.getElementsByTagName("input")[0]; //5

let inputs = form.querySelectorAll("input"); //6
