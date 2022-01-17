const assertEqual = require("./assertEqual");



const eqArrays = function (arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false;
  }
  let sameLength = arr1.length === arr2.length;
  if (!sameLength) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i] || eqArrays(arr1[i], arr2[i])) {
      continue;
    }
    return false;
  }
  return true;
};




console.log(eqArrays([
  [2, 3],
  [4]
], [
  [2, 3],
  [4]
])) // => true

console.log(eqArrays([
  [2, 3],
  [4]
], [
  [2, 3],
  [4, 5]
])) // => false
console.log(eqArrays([
  [2, 3],
  [4]
], [
  [2, 3], 4
])) // => false



console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);



module.exports = eqArrays;