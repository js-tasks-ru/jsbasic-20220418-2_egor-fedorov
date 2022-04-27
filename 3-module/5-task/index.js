function getMinMax(str) {
  let sort = [];
  let arr = str.split(' ');
  for (let element of arr) {
    let num = parseFloat(element);
    if (!isNaN(num)) {
      sort.push(num);
    }
  }
  let result = {};
  result.min = Math.min(...sort);
  result.max = Math.max(...sort);
  return result;
}
