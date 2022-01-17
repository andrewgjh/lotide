const tail= require('../tail'); 
const assert = require('chai').assert;


describe("#tailFunction", function(){
  it("returns ['Lighthouse', 'Labs'] when passed in ['Yo Yo', 'Lighthouse', 'Labs']", function(){
    input = ["Yo Yo", "Lighthouse", "Labs"];
    expected = ["Lighthouse", "Labs"];
    assert.deepEqual(tail(input), expected);
  });
  it("returns '[2,3,4,5]' when passed in [1,2,3,4,5]", function(){
    input = [1,2,3,4,5];
    expected = [2,3,4,5];
    assert.deepEqual(tail(input), expected);
  });
  it("returns empty array when passed in 1 element]", function(){
    input = ["Don't Delete Me!"];
    expected = [];
    assert.deepEqual(tail(input), expected);
  });

})