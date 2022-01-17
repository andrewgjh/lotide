const middle = require('../middle');
const assert = require('chai').assert;


describe("#middle", function () {
  it("Returns empty array when passes in one element", function () {
    let input = [1];
    let expected = [];
    assert.deepEqual(middle(input), expected);
  });
  it("Returns empty array when passes in two element", function () {
    let input = [1, 2];
    let expected = [];
    assert.deepEqual(middle(input), expected);
  });
  it("Returns [2] when passes in [1,2,3]", function () {
    let input = [1, 2, 3];
    let expected = [2];
    assert.deepEqual(middle(input), expected);
  });
  it("Returns [2,3] when passes in [1,2,3,4]", function () {
    let input = [1, 2, 3, 4];
    let expected = [2, 3];
    assert.deepEqual(middle(input), expected);
  });
  it("Returns [3] when passes in [1,2,3,4,5]", function () {
    let input = [1, 2, 3, 4, 5];
    let expected = [3];
    assert.deepEqual(middle(input), expected);
  });
  it("Returns [3,4] when passes in [1,2,3,4,5,6]", function () {
    let input = [1, 2, 3, 4, 5, 6];
    let expected = [3, 4];
    assert.deepEqual(middle(input), expected);
  });
})
