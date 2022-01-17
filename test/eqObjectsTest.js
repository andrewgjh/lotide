const chai = require("chai");
const assert = chai.assert;
const eqObjects = require("../eqObjects");

describe("Testing to make sure eqObjects Works", function () {
  it("Return true when two empty objects are passed in", function () {
    let obj1 = {};
    let obj2 = {};
    assert.isTrue(eqObjects(obj1, obj2));
  });
  it("Return true when objects have same set of key value pairs", function () {
    let obj1 = {
      a: 1,
      b: 2,
      c: 3
    };
    let obj2 = {
      a: 1,
      b: 2,
      c: 3
    };
    assert.isTrue(eqObjects(obj1, obj2));
  });
  it("Return true when value contains another empty object", function () {
    let obj1 = {};
    let obj2 = {};
    assert.isTrue(eqObjects(obj1, obj2));
  });
  it("Return true when value contains object values", function () {
    let obj1 = {
      a: 1,
      b: 2,
      c: {
        a: 1,
        b: 2,
        c: {
          a: 3
        }
      }
    };
    let obj2 = {
      a: 1,
      b: 2,
      c: {
        a: 1,
        b: 2,
        c: {
          a: 3
        }
      }
    };
    assert.isTrue(eqObjects(obj1, obj2));
  });

})



// const ab = {
//   a: "1",
//   b: "2"
// };
// const ba = {
//   b: "2",
//   a: "1"
// };
// console.log(eqObjects(ab, ba)); // => true

// const abc = {
//   a: "1",
//   b: "2",
//   c: "3"
// };
// console.log(eqObjects(ab, abc)); // => false


// const cd = {
//   c: "1",
//   d: ["2", 3]
// };
// const dc = {
//   d: ["2", 3],
//   c: "1"
// };
// console.log(eqObjects(cd, dc)); // => true

// const cd2 = {
//   c: "1",
//   d: ["2", 3, 4]
// };
// console.log(eqObjects(cd, cd2)); // => false



// console.log(eqObjects({
//   a: {
//     z: 1
//   },
//   b: 2
// }, {
//   a: {
//     z: 1
//   },
//   b: 2
// })); // => true

// console.log(eqObjects({
//   a: {
//     y: 0,
//     z: 1
//   },
//   b: 2
// }, {
//   a: {
//     z: 1
//   },
//   b: 2
// })); // => false
// console.log(eqObjects({
//   a: {
//     y: 0,
//     z: 1
//   },
//   b: 2
// }, {
//   a: 1,
//   b: 2
// })); // => false
