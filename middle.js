const eqArrays = function(arr1, arr2) {
  return (arr1.length === arr2.length) && arr1.every((element, index) => element === arr2[index]);
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("⭐️The two arrays are equal to each other!⭐️");
  } else {
    console.log("👎The two arrays are not equal👎");
  }
};


const middle = function(array) {
  let outPutArray = [];
  let midIndex = Math.floor(array.length / 2);
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      outPutArray.push(array[midIndex - 1]);
      outPutArray.push(array[midIndex]);
    } else {
      outPutArray.push(array[midIndex]);
    }
  }
  return outPutArray;
};

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);