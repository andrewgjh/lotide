const eqArrays = require ("./eqArrays");


const eqObjects = function (object1, object2) {
  const keyArray1 = Object.keys(object1).sort();
  const keyArray2 = Object.keys(object2).sort();
  const sameKey = eqArrays(keyArray1, keyArray2);
  if (!sameKey) {
    return false;
  }
  for (let key of keyArray1) {
    const value1 = object1[key];
    const value2 = object2[key]
    if (value1 === value2 || eqArrays(value1, value2) || eqObjects(value1, value2)) {
      continue;
    }
    return false;
  }
  return true;
};

module.exports = eqObjects;