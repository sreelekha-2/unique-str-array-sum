//array sum
const arr = [1, 2, 4, 34, 22];
const largest = arr.reduce((max, curr) => {
  if (max < curr) {
    return curr;
  } else {
    return max;
  }
}, arr[i]);

console.log(largest);
const sum = arr.reduce((acc, curr) => {
  if (curr !== largest) {
    return acc + curr;
  }
  return acc;
}, 0);
console.log(sum);
console.log(sum === largest);
