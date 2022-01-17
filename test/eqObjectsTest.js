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