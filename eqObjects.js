const eqArrays = require ("./eqArrays");
const assertEqual = require ("./assertEqual");


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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

const ab = {
  a: "1",
  b: "2"
};
const ba = {
  b: "2",
  a: "1"
};
console.log(eqObjects(ab, ba)); // => true

const abc = {
  a: "1",
  b: "2",
  c: "3"
};
console.log(eqObjects(ab, abc)); // => false


const cd = {
  c: "1",
  d: ["2", 3]
};
const dc = {
  d: ["2", 3],
  c: "1"
};
console.log(eqObjects(cd, dc)); // => true

const cd2 = {
  c: "1",
  d: ["2", 3, 4]
};
console.log(eqObjects(cd, cd2)); // => false



console.log(eqObjects({
  a: {
    z: 1
  },
  b: 2
}, {
  a: {
    z: 1
  },
  b: 2
})); // => true

console.log(eqObjects({
  a: {
    y: 0,
    z: 1
  },
  b: 2
}, {
  a: {
    z: 1
  },
  b: 2
})); // => false
console.log(eqObjects({
  a: {
    y: 0,
    z: 1
  },
  b: 2
}, {
  a: 1,
  b: 2
})); // => false



module.exports = eqObjects;