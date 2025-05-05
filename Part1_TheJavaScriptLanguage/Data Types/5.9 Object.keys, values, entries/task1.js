function sumSalaries(salaries) {
  let sal = Object.values(salaries);
  let sum = sal.reduce((acc, curr) => acc + curr, 0);
  return sum;
}

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

alert(sumSalaries(salaries)); // 650
