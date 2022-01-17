const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");


const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    return (`🥳🥳🥳 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    return (`🔥🔥🔥 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports= assertObjectsEqual;