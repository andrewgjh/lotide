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

assertArraysEqual([2,4,6,8,10],[2,4,6,8,10]); //true
assertArraysEqual([1,2,3,4,5,6],['1','2','3','4','5','6']); //false