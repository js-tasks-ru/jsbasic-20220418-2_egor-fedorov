function factorial(n) {
  let result = 1;
  let i = 1;
  if (n === 0) {
    return 1;
  }
  while (i <= n) {
    result = result * i;
    i++;
  }
  return result;
}
