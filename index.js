// let str = 'abcdea';
// let c = 0;

// //1.with every method
// function uniqueStr(str) {
//   const result = str
//     .split('')
//     .every((ele, index) => str.indexOf(ele) === index);
//   return result;
// }

// console.log(uniqueStr(str));

// //with for loop
// function unique(str) {
//   for (i = 0; i < str.length; i++) {
//     if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(unique(str));

//2.array sum
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
