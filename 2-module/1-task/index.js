function sumSalary(salaries) {
  let sum = 0;
  for (let salary in salaries) {
    if (typeof(salaries[salary]) === 'number' && !isNaN(salaries[salary]) && salaries[salary] !== Infinity && salaries[salary] !== -Infinity) {
      sum = sum + salaries[salary];
    }

  }
  return sum;
}
