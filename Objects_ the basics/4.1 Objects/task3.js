let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
sum = 0;
for (const key in salaries) {
  sum = sum + salaries[key];
}

alert(sum);
