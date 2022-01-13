const eqArrays = function (arr1, arr2) {
  return (arr1.length === arr2.length) && arr1.every((element, index) => element === arr2[index])
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  return eqArrays(Object.keys(object1).flat().sort(), Object.keys(object2).flat().sort()) &&
    eqArrays(Object.values(object1).flat().sort(), Object.values(object2).flat().sort());
};


const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    return (`🥳🥳🥳 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    return (`🔥🔥🔥 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

console.log(assertObjectsEqual(ab,ba));