const eqArrays = function (arr1, arr2) {
  return (arr1.length === arr2.length) && arr1.every((element, index) => element === arr2[index]);
};

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("⭐️The two arrays are equal to each other!⭐️");
  } else {
    console.log("👎The two arrays are not equal👎");
  }
};



const without = function (arr, arrWithout) {
  let finalArray = arr;
  for (let removalItem of arrWithout) {
    finalArray = finalArray.filter(word => word !== removalItem)
  }
  return finalArray;
}

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
console.log(without([1, 2, 3, 3, 4, 4, 5, 2, 100, 200,"Test", "best"], [1, 2, 4, 5, "Test"]));


const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

//1 loop through 